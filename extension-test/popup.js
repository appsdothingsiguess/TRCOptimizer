"use strict";

const LOG_PREFIX = "[i3 Tester VERIFY]";
const statusEl = document.getElementById("status");
const runBtn = document.getElementById("runBtn");
const saveBtn = document.getElementById("saveBtn");
const saveAsBtn = document.getElementById("saveAsBtn");
const copyBtn = document.getElementById("copyBtn");
const dumpBtn = document.getElementById("dumpBtn");
const screenshotBtn = document.getElementById("screenshotBtn");
const semanticsBtn = document.getElementById("semanticsBtn");
const pageSelect = document.getElementById("pageSelect");

function logVerify(category, message, data) {
  const label = LOG_PREFIX + " [popup:" + category + "] " + message;
  if (data !== undefined) console.log(label, data);
  else console.log(label);
}

function logVerifyError(category, message, data) {
  const label = LOG_PREFIX + " [popup:" + category + "] " + message;
  if (data !== undefined) console.error(label, data);
  else console.error(label);
}

function setStatus(text) { statusEl.textContent = text; }

function enableReportButtons() {
  saveBtn.disabled = false;
  saveAsBtn.disabled = false;
  copyBtn.disabled = false;
}

function formatSummary(summary) {
  if (!summary) return "No tests run yet.";
  const s = summary.summary || {};
  const live = summary.counts || {};
  const dropdown = summary.dropdownInfo || {};
  const saved = summary.savedFile || {};
  const lines = [
    "Run: " + summary.timestamp,
    "URL: " + (summary.url || ""),
    "Pass: " + (s.pass||0) + "  Fail: " + (s.fail||0) + "  Warn: " + (s.warn||0),
    "Semantics: " + (live.semanticsNodes||0) + " nodes  Buttons: " + (live.buttons||0),
    "Proxy inputs: " + (live.textEditingInputs||0),
    "Tag/Serial dropdown: " + (dropdown.semanticsTagSerial > 0 ? "found in semantics" : "canvas-only — " + (dropdown.estimatedDropdownCoord ? "est. coord (" + dropdown.estimatedDropdownCoord.flutterX + "," + dropdown.estimatedDropdownCoord.flutterY + ")" : "coord unknown")),
    "",
    (summary.tests || []).map(function(t) {
      return (t.found ? (t.warn ? "!" : "+") : "x") + " #" + t.id + " " + t.name;
    }).join("\n"),
    "",
    "Size: " + (summary.reportTextLength || "?") + " chars",
    saved.ok ? "Saved: Downloads/" + saved.filename : "File save: check console",
    "Clipboard: " + (summary.copiedToClipboard ? "small copy OK" : "skipped (too large)")
  ];
  return lines.join("\n");
}

async function getActiveI3Tab() {
  const tabs = await browser.tabs.query({ active: true, currentWindow: true });
  const tab = tabs[0];
  if (!tab || !tab.id) throw new Error("no active tab");
  if (!tab.url || tab.url.indexOf("ims.lisd.net") === -1)
    throw new Error("active tab is not ims.lisd.net");
  return tab;
}

async function loadLastSummary() {
  const stored = await browser.storage.local.get("lastReportSummary");
  if (stored.lastReportSummary) {
    enableReportButtons();
    setStatus(formatSummary(stored.lastReportSummary));
  }
}

async function requestSave(saveAs) {
  const tab = await getActiveI3Tab();
  const response = await browser.tabs.sendMessage(tab.id, {
    action: "save_report",
    saveAs: !!saveAs,
    baseName: "i3-selector-report"
  });
  logVerify("message", "save_report response", response);
  if (!response || !response.ok) {
    throw new Error((response && response.error) || "save failed — run tests first");
  }
  return response;
}

runBtn.addEventListener("click", async function() {
  runBtn.disabled = true;
  setStatus("Running selector tests…");
  logVerify("action", "Run Tests clicked", { scope: pageSelect.value });
  try {
    const tab = await getActiveI3Tab();
    const response = await browser.tabs.sendMessage(tab.id, {
      action: "run_tests",
      page: pageSelect.value
    });
    if (!response || !response.ok) {
      setStatus("Error: " + (response && response.error ? response.error : "no response — reload i3 tab after loading extension."));
      return;
    }
    enableReportButtons();
    const r = response.report;
    setStatus(formatSummary({
      timestamp: r.timestamp, url: r.url,
      summary: r.summary,
      counts: r.liveElements && r.liveElements.counts,
      dropdownInfo: r.liveElements && r.liveElements.dropdownInfo,
      tests: r.tests,
      copiedToClipboard: r.copiedToClipboard,
      savedFile: r.savedFile,
      reportTextLength: r.reportTextLength
    }));
  } catch(err) {
    logVerifyError("message", "run_tests failed", err.message || String(err));
    setStatus("Error: " + err.message + "\n\nReload i3 tab if extension just loaded.");
  } finally {
    runBtn.disabled = false;
  }
});

saveBtn.addEventListener("click", async function() {
  saveBtn.disabled = true;
  try {
    const resp = await requestSave(false);
    setStatus("Saved to Downloads:\n" + resp.filename + "\n(" + resp.bytes + " bytes)");
  } catch(err) {
    setStatus("Save failed: " + err.message);
  } finally {
    saveBtn.disabled = false;
  }
});

saveAsBtn.addEventListener("click", async function() {
  saveAsBtn.disabled = true;
  try {
    const resp = await requestSave(true);
    setStatus("Saved:\n" + resp.filename + "\n(" + resp.bytes + " bytes)");
  } catch(err) {
    setStatus("Save As failed: " + err.message);
  } finally {
    saveAsBtn.disabled = false;
  }
});

copyBtn.addEventListener("click", async function() {
  copyBtn.disabled = true;
  try {
    const tab = await getActiveI3Tab();
    const response = await browser.tabs.sendMessage(tab.id, { action: "copy_report" });
    if (!response || !response.ok) {
      throw new Error((response && response.error) || "copy failed");
    }
    setStatus("Copied " + response.length + " chars via " + (response.method || "?") + ".\nOnly works for reports under ~80KB.");
  } catch(err) {
    setStatus("Copy failed: " + err.message + "\nUse Save File for large reports.");
  } finally {
    copyBtn.disabled = false;
  }
});

dumpBtn.addEventListener("click", async function() {
  dumpBtn.disabled = true;
  setStatus("Running full site dump…\n(interact with i3 while this runs to capture API calls)");
  logVerify("action", "Full Site Dump clicked");
  try {
    const tab = await getActiveI3Tab();
    const response = await browser.tabs.sendMessage(tab.id, { action: "full_dump" });
    if (!response || !response.ok) {
      setStatus("Dump error: " + (response && response.error ? response.error : "no response — reload i3 tab."));
      return;
    }
    enableReportButtons();
    const r = response.result;
    setStatus(
      "Full dump complete.\n" +
      "Size: " + r.length + " chars\n" +
      "API calls captured: " + r.apiCallCount + "\n" +
      (r.savedFile && r.savedFile.ok
        ? "Saved: Downloads/" + r.savedFile.filename
        : "File save failed — see console") + "\n\n" +
      "Open file in VS Code or Notepad++"
    );
  } catch(err) {
    logVerifyError("message", "full_dump failed", err.message || String(err));
    setStatus("Dump error: " + err.message);
  } finally {
    dumpBtn.disabled = false;
  }
});

screenshotBtn.addEventListener("click", async function() {
  screenshotBtn.disabled = true;
  setStatus("Taking screenshot…");
  try {
    const tab = await getActiveI3Tab();
    const dataUrl = await browser.tabs.captureVisibleTab(tab.windowId, { format: "png" });
    const fetchResp = await fetch(dataUrl);
    const blob = await fetchResp.blob();
    const blobUrl = URL.createObjectURL(blob);
    await browser.tabs.create({ url: blobUrl });
    setStatus("Screenshot opened in new tab.");
  } catch(err) {
    setStatus("Screenshot failed: " + err.message);
  } finally {
    screenshotBtn.disabled = false;
  }
});

semanticsBtn.addEventListener("click", async function() {
  semanticsBtn.disabled = true;
  statusEl.textContent = "Trying to enable Flutter semantics…\nWatch DevTools console for results.";
  try {
    const [tab] = await browser.tabs.query({ active: true, currentWindow: true });
    if (!tab) { statusEl.textContent = "No active tab found."; return; }
    await browser.tabs.sendMessage(tab.id, { action: "enable_semantics" });
    statusEl.textContent = "Enable semantics command sent.\nSee console → filter: i3 Tester VERIFY [semantics]\n\nIf it worked: run tests again — selectors should now find real DOM nodes.";
  } catch(e) {
    logVerifyError("semantics", "Error sending enable_semantics", e);
    statusEl.textContent = "Error: " + (e.message || String(e));
  } finally {
    semanticsBtn.disabled = false;
  }
});

logVerify("init", "Popup loaded v0.5.3 — semantics force-enable added");
loadLastSummary();

// ---- API Lookup Test ----

function escHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function normAssignedTo(s) {
  return s.replace(/\(\s+/g, "(").replace(/\s+\)/g, ")");
}

function parseBreakDate(mmddyyyy_hhmm) {
  var m = mmddyyyy_hhmm.match(/^(\d{2})-(\d{2})-(\d{4}) (\d{2}):(\d{2})$/);
  if (!m) return null;
  return new Date(m[3] + "-" + m[1] + "-" + m[2] + "T" + m[4] + ":" + m[5] + ":00");
}

function countBreaksPreview(historyRows) {
  var cutoffDate = null, cutoffIndex = -1, trcIndices = [];
  for (var i = 0; i < historyRows.length; i++) {
    if (normAssignedTo(historyRows[i].assigned_to).indexOf("Staff (EP") !== -1) {
      cutoffDate = parseBreakDate(historyRows[i].date);
      cutoffIndex = i;
      break;
    }
  }
  if (cutoffDate) {
    historyRows.forEach(function (row, i) {
      if (row.site_name !== "Technology Repair Center") return;
      if (row.status !== "InRepair") return;
      var d = parseBreakDate(row.date);
      if (d && d >= cutoffDate) trcIndices.push(i);
    });
  }
  return { count: trcIndices.length, cutoffIndex: cutoffIndex, trcIndices: trcIndices };
}

function renderLookupResult(data) {
  var rows = data.history_rows || [];
  var preview = countBreaksPreview(rows);
  var trcSet = {};
  preview.trcIndices.forEach(function (i) { trcSet[i] = true; });

  // Summary card
  var cutoffNote = preview.cutoffIndex >= 0
    ? "(since row " + (preview.cutoffIndex + 1) + ")"
    : "(no Staff EP row found — returned 0)";
  var breakColor = preview.count > 0 ? "#B63D4B" : "#073772";

  var summaryHtml = [
    "<div style='display:flex;border-bottom:1px solid #D4D8E1;'>",
      "<div style='width:90px;padding:6px 8px;background:#F1F4F6;font-size:11px;font-weight:500;color:#595959;text-transform:uppercase;'>Serial</div>",
      "<div style='padding:6px 8px;font-family:\"Courier New\",Courier,monospace;font-size:12px;color:#102738;'>", escHtml(data.serial || "—"), "</div>",
    "</div>",
    "<div style='display:flex;border-bottom:1px solid #D4D8E1;'>",
      "<div style='width:90px;padding:6px 8px;background:#F1F4F6;font-size:11px;font-weight:500;color:#595959;text-transform:uppercase;'>Product</div>",
      "<div style='padding:6px 8px;font-size:12px;color:#102738;'>", escHtml(data.product_name || "—"), "</div>",
    "</div>",
    "<div style='display:flex;border-bottom:1px solid #D4D8E1;'>",
      "<div style='width:90px;padding:6px 8px;background:#F1F4F6;font-size:11px;font-weight:500;color:#595959;text-transform:uppercase;'>School</div>",
      "<div style='padding:6px 8px;font-size:12px;color:#102738;'>", escHtml(data.school_name || "—"), "</div>",
    "</div>",
    "<div style='display:flex;border-bottom:1px solid #D4D8E1;'>",
      "<div style='width:90px;padding:6px 8px;background:#F1F4F6;font-size:11px;font-weight:500;color:#595959;text-transform:uppercase;'>Breaks</div>",
      "<div style='padding:6px 8px;font-size:12px;'>",
        "<strong style='color:", breakColor, ";'>", preview.count, "</strong>",
        "<span style='color:#595959;font-size:11px;margin-left:6px;'>", escHtml(cutoffNote), "</span>",
      "</div>",
    "</div>",
    "<div style='display:flex;'>",
      "<div style='width:90px;padding:6px 8px;background:#F1F4F6;font-size:11px;font-weight:500;color:#595959;text-transform:uppercase;'>History</div>",
      "<div style='padding:6px 8px;font-size:12px;color:#102738;'>", rows.length, " rows total</div>",
    "</div>"
  ].join("");
  document.getElementById("lookupSummary").innerHTML = summaryHtml;

  // History table
  var tableHtml = [
    "<table style='width:100%;border-collapse:collapse;font-size:11px;border:1px solid #D4D8E1;'>",
    "<thead><tr style='background:#073772;color:#fff;'>",
      "<th style='padding:4px 6px;text-align:left;font-weight:normal;'>Date</th>",
      "<th style='padding:4px 6px;text-align:left;font-weight:normal;'>Assigned To</th>",
      "<th style='padding:4px 6px;text-align:left;font-weight:normal;'>Site</th>",
      "<th style='padding:4px 6px;text-align:left;font-weight:normal;'>Status</th>",
    "</tr></thead><tbody>"
  ];

  rows.forEach(function (row, i) {
    var isTrc = !!trcSet[i];
    var isCutoff = i === preview.cutoffIndex;
    var rowBg = isTrc ? "rgba(7,55,114,0.07)" : (i % 2 === 0 ? "#fff" : "#F1F4F6");
    var borderTop = isCutoff ? "border-top:2px dashed #f1b51c;" : "";
    var leftBorder = isTrc ? "border-left:3px solid #073772;" : "";
    var cellStyle = "padding:3px 6px;border-bottom:1px solid #D4D8E1;" + leftBorder;
    tableHtml.push(
      "<tr style='background:", rowBg, ";", borderTop, "'>",
        "<td style='", cellStyle, "'>", escHtml(row.date), "</td>",
        "<td style='", cellStyle, "'>", escHtml(row.assigned_to || "—"), "</td>",
        "<td style='", cellStyle, "'>", escHtml(row.site_name || "—"), "</td>",
        "<td style='", cellStyle, "'>", escHtml(row.status || "—"), "</td>",
      "</tr>"
    );
  });

  tableHtml.push("</tbody></table>");
  if (preview.trcIndices.length > 0) {
    tableHtml.push("<div style='font-size:10px;color:#595959;margin-top:3px;'>▐ Highlighted = TRC InRepair after staff assignment (counts as break)</div>");
  }
  if (preview.cutoffIndex >= 0) {
    tableHtml.push("<div style='font-size:10px;color:#595959;'>--- Gold dashed line = staff assignment cutoff</div>");
  }

  document.getElementById("lookupHistory").innerHTML = tableHtml.join("");
  document.getElementById("lookupResult").style.display = "block";
}

var lookupBtn = document.getElementById("lookupBtn");
var lookupTagInput = document.getElementById("lookupTag");

async function doLookup() {
  var assetTag = lookupTagInput.value.trim();
  if (!assetTag) {
    setStatus("Enter an asset tag in the API Lookup section.");
    return;
  }

  lookupBtn.disabled = true;
  lookupBtn.textContent = "…";
  document.getElementById("lookupResult").style.display = "none";
  setStatus("Looking up \"" + assetTag + "\" via i3 API…");

  try {
    var tab = await getActiveI3Tab();
    var response = await browser.tabs.sendMessage(tab.id, {
      action: "test_lookup",
      assetTag: assetTag
    });

    if (!response) {
      setStatus("No response from content script — reload the i3 tab and try again.");
      return;
    }
    if (!response.ok) {
      setStatus("Lookup failed: " + (response.error || "unknown error"));
      return;
    }

    logVerify("api-lookup", "Result received", {
      serial: response.serial,
      product_name: response.product_name,
      school_name: response.school_name,
      history_count: (response.history_rows || []).length
    });

    setStatus("OK — " + (response.serial || "?") + " · " + (response.product_name || "?") + "\nRaw response logged to DevTools console (filter: api-lookup).");
    renderLookupResult(response);
  } catch (err) {
    logVerifyError("api-lookup", "sendMessage failed", err.message || String(err));
    setStatus("Error: " + err.message + "\n\nMake sure the active tab is ims.lisd.net.");
  } finally {
    lookupBtn.disabled = false;
    lookupBtn.textContent = "Fetch";
  }
}

lookupBtn.addEventListener("click", doLookup);
lookupTagInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") doLookup();
});
