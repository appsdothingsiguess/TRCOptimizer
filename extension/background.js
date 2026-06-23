"use strict";

const RELAY_WS   = "ws://localhost:4321/ws";
const RELAY_HTTP = "http://localhost:4321/extension-data";
const RELAY_LOG  = "http://localhost:4321/extension-log";
const RECONNECT_DELAY_MS = 3000;

let ws = null;

// ---------- WebSocket management ----------

function connect() {
  ws = new WebSocket(RELAY_WS);

  ws.onopen = () => {
    console.log("[TRC_Opt] Connected to relay");
    sendExtLog("info", "ws", "Extension WebSocket connected");
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
    sendExtLog("warn", "ws", "Extension WebSocket closed");
    ws = null;
    setTimeout(connect, RECONNECT_DELAY_MS);
  };

  ws.onerror = () => {
    ws.close();
  };
}

function sendExtLog(level, step, message) {
  fetch(RELAY_LOG, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ level, step, message }),
  }).catch(() => {});
}

function sendStatus(step, message) {
  if (ws && ws.readyState === WebSocket.OPEN) {
    ws.send(JSON.stringify({ type: "status", step, message }));
  }
}

function sendError(step, message) {
  sendExtLog("error", step, message);
  if (ws && ws.readyState === WebSocket.OPEN) {
    ws.send(JSON.stringify({ type: "error", step, message }));
  }
}

// ---------- Intake orchestration ----------

function isI3TabUrl(url) {
  return Boolean(url && url !== "about:blank" && url.includes("ims.lisd.net"));
}

function waitForTabLoad(tabId, timeoutMs = 15000) {
  return new Promise((resolve, reject) => {
    let timeoutId;

    function cleanup() {
      browser.tabs.onUpdated.removeListener(onUpdated);
      clearTimeout(timeoutId);
    }

    function tryResolve(tab) {
      if (tab.status === "complete" && isI3TabUrl(tab.url)) {
        cleanup();
        resolve(tab);
      }
    }

    function onUpdated(updatedTabId, changeInfo, tab) {
      if (updatedTabId !== tabId) return;
      if (changeInfo.status === "complete") {
        tryResolve(tab);
      }
    }

    browser.tabs.onUpdated.addListener(onUpdated, { tabId });

    // Race guard — tab may already be complete before listener attaches (Firefox Bug 1418655)
    browser.tabs.get(tabId).then(tryResolve).catch(() => {});

    timeoutId = setTimeout(() => {
      cleanup();
      reject(new Error("timeout"));
    }, timeoutMs);
  });
}

async function handleStartIntake(assetTag) {
  sendExtLog("info", "intake", "start_intake received for tag: " + assetTag);
  sendStatus("init", "Extension received intake request");

  const tabs = await browser.tabs.query({ url: "https://ims.lisd.net/*" });
  let tab;

  if (tabs.length > 0) {
    tab = tabs[0];
    sendExtLog("info", "tab", "Found existing i3 tab id: " + tab.id);
    sendStatus("init", "Found i3 tab — running lookup");
  } else {
    sendStatus("init", "Opening i3 tab — waiting for load");
    const newTab = await browser.tabs.create({ url: "https://ims.lisd.net" });
    sendExtLog("info", "tab", "Created new i3 tab, waiting for load");
    try {
      tab = await waitForTabLoad(newTab.id);
    } catch {
      sendExtLog("error", "tab", "i3 tab load timeout");
      sendError("init", "i3 tab timed out loading — try again");
      return;
    }
  }

  sendExtLog("info", "content", "Sent run_intake to content.js");
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
    sendExtLog("info", "content", "device_ready received, serial: " + result.serial);
    sendStatus("submit", "Device data received — submitting to relay");
    await submitToRelay(result);
    return;
  }

  sendError("init", "Unexpected response from content script: " + JSON.stringify(result));
}

async function submitToRelay(result) {
  sendExtLog("info", "relay", "POSTing to /extension-data");
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
      const message = data.error || "Backend returned failure";
      sendExtLog("error", "relay", "POST /extension-data failed: " + message);
      sendError("submit", message);
    }
    // On success the relay broadcasts done to the frontend — nothing more to do
  } catch (e) {
    sendExtLog("error", "relay", "POST /extension-data failed: " + e.message);
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
