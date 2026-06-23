"use strict";

const RELAY_WS   = "ws://localhost:4321/ws";
const RELAY_HTTP = "http://localhost:4321/extension-data";
const RECONNECT_DELAY_MS = 3000;

let ws = null;

// ---------- WebSocket management ----------

function connect() {
  ws = new WebSocket(RELAY_WS);

  ws.onopen = () => {
    console.log("[TRC_Opt] Connected to relay");
  };

  ws.onmessage = (event) => {
    let msg;
    try {
      msg = JSON.parse(event.data);
    } catch {
      return;
    }

    if (msg.type === "start_intake") {
      handleStartIntake(msg.payload.asset_tag);
    }
    // serial_ready is informational; content.js doesn't need it
  };

  ws.onclose = () => {
    console.log("[TRC_Opt] Relay disconnected — retrying in", RECONNECT_DELAY_MS, "ms");
    ws = null;
    setTimeout(connect, RECONNECT_DELAY_MS);
  };

  ws.onerror = () => {
    ws.close();
  };
}

function sendStatus(step, message) {
  if (ws && ws.readyState === WebSocket.OPEN) {
    ws.send(JSON.stringify({ type: "status", step, message }));
  }
}

function sendError(step, message) {
  if (ws && ws.readyState === WebSocket.OPEN) {
    ws.send(JSON.stringify({ type: "error", step, message }));
  }
}

// ---------- Intake orchestration ----------

async function handleStartIntake(assetTag) {
  sendStatus("init", "Extension received intake request");

  // Find the active ims.lisd.net tab
  const tabs = await browser.tabs.query({ url: "https://ims.lisd.net/*" });
  if (tabs.length === 0) {
    sendError("init", "No ims.lisd.net tab found — open i3 in Firefox and log in");
    return;
  }

  const tab = tabs[0];
  sendStatus("init", "Found i3 tab — running lookup");

  let result;
  try {
    result = await browser.tabs.sendMessage(tab.id, {
      action: "run_intake",
      assetTag,
    });
  } catch (e) {
    sendError("init", "Could not reach content script — reload the i3 tab and try again");
    return;
  }

  if (!result) {
    sendError("init", "Content script returned no response");
    return;
  }

  if (result.type === "error") {
    sendError(result.step || "lookup", result.message);
    return;
  }

  if (result.type === "device_ready") {
    sendStatus("submit", "Device data received — submitting to relay");
    await submitToRelay(result);
    return;
  }

  sendError("init", "Unexpected response from content script: " + JSON.stringify(result));
}

async function submitToRelay(result) {
  try {
    const resp = await fetch(RELAY_HTTP, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        serial:       result.serial,
        product_name: result.product_name,
        school_name:  result.school_name,
        history_rows: result.history_rows,
      }),
    });
    const data = await resp.json();
    if (!data.success) {
      sendError("submit", data.error || "Backend returned failure");
    }
    // On success the relay broadcasts done to the frontend — nothing more to do
  } catch (e) {
    sendError("submit", "Failed to reach relay HTTP endpoint: " + e.message);
  }
}

// ---------- Messages from content.js ----------

browser.runtime.onMessage.addListener((msg) => {
  if (msg.type === "status") {
    sendStatus(msg.step || "lookup", msg.message);
  } else if (msg.type === "error") {
    sendError(msg.step || "lookup", msg.message);
  }
  // device_ready comes back as the sendMessage response, not via onMessage
});

// ---------- Boot ----------

connect();
