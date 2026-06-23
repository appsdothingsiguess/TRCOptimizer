"use strict";

// All selectors in this file are API-based. ims.lisd.net is Flutter CanvasKit —
// there are no real DOM elements for UI. We call the JSON API directly using the
// JWT token the app stores in localStorage. No page interaction is required.

const BASE_URL = "https://ims.lisd.net";

// ---------- Auth ----------

function getToken() {
  const raw = localStorage.getItem("flutter.loginToken");
  if (!raw) {
    throw new Error("Not logged in to i3 — log in to i3 and try again");
  }
  // Stored as a JSON-encoded string (has outer quotes) — must parse
  return JSON.parse(raw);
}

function isAuthenticated() {
  return localStorage.getItem("flutter.isAuthenticated") === "true";
}

function isTokenExpired(token) {
  // Decode the JWT payload (middle section, base64url encoded) and check exp.
  // Token lifetime is ~10 hours. No refresh endpoint exists — if expired the
  // tech must log back in to i3 manually to get a new token.
  try {
    const b64 = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
    const payload = JSON.parse(atob(b64));
    return (Date.now() / 1000) > payload.exp;
  } catch (e) {
    return true; // treat unreadable token as expired
  }
}

async function i3Fetch(path, options = {}) {
  const token = getToken();
  const resp = await fetch(`${BASE_URL}/${path}`, {
    ...options,
    credentials: "include", // sends JSESSIONID cookie — required by this server
    headers: {
      // Server expects bare JWT token, no "Bearer " prefix
      Authorization: token,
      Accept: "application/json",
      "Content-type": "application/json; charset=utf-8",
      ...(options.headers || {}),
    },
  });
  return resp;
}

// ---------- Date conversion ----------

// API date format: "2025-09-12 21:26:05.848"
// break_counter.py expects: "09-12-2025 21:26"
function convertDate(apiDate) {
  const spaceIdx = apiDate.indexOf(" ");
  const datePart = apiDate.slice(0, spaceIdx);   // "2025-09-12"
  const timePart = apiDate.slice(spaceIdx + 1);  // "21:26:05.848"
  const [yyyy, mm, dd] = datePart.split("-");
  const [HH, MM] = timePart.split(":");
  return `${mm}-${dd}-${yyyy} ${HH}:${MM}`;
}

// ---------- Device lookup ----------

async function lookupDevice(assetTag) {
  const resp = await i3Fetch(
    `inventory/transfer/getTagInformationByTagOrSerialId/${encodeURIComponent(assetTag)}/0`
  );

  if (!resp.ok) {
    throw new Error(`Device lookup HTTP ${resp.status} for tag "${assetTag}"`);
  }

  const data = await resp.json();

  if (!data.value) {
    throw new Error(`Tag "${assetTag}" not found in i3 — check the asset tag and try again`);
  }

  const historyRows = (data.listOfResponses || []).map((row) => ({
    // inPlaceType examples: "Room ( 48551 )", "Student ( 12035362 )", "Staff ( EP12345 )"
    // break_counter._norm() collapses interior spaces so "Staff ( EP..." matches "Staff (EP"
    date:        convertDate(row.date),
    assigned_to: row.inPlaceType  || "",
    break_name:  row.strike       || "",   // unreliable — not used for counting
    site_name:   row.siteName     || "",   // "Technology Repair Center" when at TRC
    status:      row.status       || "",   // "InRepair", "Available", "Disposed", etc.
  }));

  return {
    serial:       data.serialNo,
    product_name: data.productName,
    school_name:  data.siteName,
    history_rows: historyRows,
  };
}

// ---------- Message handler ----------

browser.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
  if (msg.action !== "run_intake") return false;

  (async () => {
    try {
      if (!isAuthenticated()) {
        sendResponse({ type: "error", step: "auth", message: "Not logged in to i3 — log in and try again" });
        return;
      }

      let token;
      try { token = getToken(); } catch (e) {
        sendResponse({ type: "error", step: "auth", message: e.message });
        return;
      }
      if (isTokenExpired(token)) {
        sendResponse({ type: "error", step: "auth", message: "i3 session expired — log in to i3 again to get a new token" });
        return;
      }

      browser.runtime.sendMessage({ type: "status", step: "lookup", message: "Looking up device in i3…" });

      const result = await lookupDevice(msg.assetTag);

      browser.runtime.sendMessage({
        type: "status",
        step: "lookup",
        message: `Found: ${result.serial} — ${result.product_name} (${result.school_name})`,
      });

      sendResponse({ type: "device_ready", ...result });
    } catch (e) {
      sendResponse({ type: "error", step: "lookup", message: e.message });
    }
  })();

  // Return true to keep the sendResponse channel open for the async callback
  return true;
});
