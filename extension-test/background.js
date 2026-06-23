"use strict";

const pendingDownloads = {};
const blobUrlsPendingRevoke = {};

function logBg(category, message, data) {
  const label = "[i3 Tester VERIFY] [background:" + category + "] " + message;
  if (data !== undefined) console.log(label, data);
  else console.log(label);
}

function logBgError(category, message, data) {
  const label = "[i3 Tester VERIFY] [background:" + category + "] " + message;
  if (data !== undefined) console.error(label, data);
  else console.error(label);
}

function sanitizeFilename(name) {
  // Firefox rejects absolute paths, .., and certain characters in downloads.download filename
  const cleaned = String(name || "i3-report.txt")
    .replace(/[\\/:*?"<>|]/g, "-")
    .replace(/\.\./g, "-")
    .replace(/^\.+/, "")
    .trim();
  return cleaned.slice(0, 180) || "i3-report.txt";
}

function isAllowedSender(sender) {
  if (!sender) {
    return false;
  }
  if (sender.tab && sender.tab.url) {
    return /^https?:\/\/([^/]+\.)?ims\.lisd\.net\//i.test(sender.tab.url);
  }
  if (sender.url && sender.url.indexOf("moz-extension://") === 0) {
    return true;
  }
  return false;
}

function rejectUnauthorized(sender) {
  logBgError("security", "Rejected download message from unauthorized sender", {
    tabUrl: sender && sender.tab && sender.tab.url,
    url: sender && sender.url
  });
  return { ok: false, error: "unauthorized sender" };
}

function scheduleBlobRevoke(blobUrl, downloadId) {
  blobUrlsPendingRevoke[downloadId] = blobUrl;
}

browser.downloads.onChanged.addListener(function(delta) {
  if (!delta || delta.id === undefined) {
    return;
  }
  const done = delta.state && (delta.state.current === "complete" || delta.state.current === "interrupted");
  if (!done) {
    return;
  }
  const blobUrl = blobUrlsPendingRevoke[delta.id];
  if (blobUrl) {
    try {
      URL.revokeObjectURL(blobUrl);
      logBg("download", "Revoked blob URL after download finished", {
        downloadId: delta.id,
        state: delta.state.current
      });
    } catch (e) {
      logBgError("download", "Failed to revoke blob URL", e.message || String(e));
    }
    delete blobUrlsPendingRevoke[delta.id];
  }
});

function triggerDownload(text, filename, saveAs) {
  const safeName = sanitizeFilename(filename);
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  logBg("download", "Creating blob URL in background (required by Firefox policy)", {
    filename: safeName,
    bytes: text.length,
    blobUrlPrefix: url.slice(0, 30) + "...",
    saveAs: !!saveAs
  });

  const options = {
    url: url,
    filename: safeName,
    saveAs: !!saveAs,
    conflictAction: "uniquify"
  };

  return browser.downloads.download(options).then(function(downloadId) {
    scheduleBlobRevoke(url, downloadId);
    logBg("download", "browser.downloads.download accepted", {
      downloadId: downloadId,
      filename: safeName,
      bytes: text.length
    });
    return {
      ok: true,
      downloadId: downloadId,
      filename: safeName,
      bytes: text.length,
      method: "browser.downloads"
    };
  }).catch(function(err) {
    try {
      URL.revokeObjectURL(url);
    } catch (revokeErr) {
      logBgError("download", "Failed to revoke blob URL after error", revokeErr.message || String(revokeErr));
    }
    const msg = err && err.message ? err.message : String(err);
    logBgError("download", "browser.downloads.download rejected", {
      error: msg,
      hint: "Firefox only accepts blob: URLs created in the extension background context. data: URLs are also blocked."
    });
    throw new Error(msg);
  });
}

browser.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (!message || !message.action) {
    return false;
  }

  if (!isAllowedSender(sender)) {
    sendResponse(rejectUnauthorized(sender));
    return true;
  }

  if (message.action === "download_report") {
    triggerDownload(message.text || "", message.filename || "i3-report.txt", message.saveAs)
      .then(function(result) { sendResponse(result); })
      .catch(function(err) { sendResponse({ ok: false, error: err.message || String(err) }); });
    return true;
  }

  if (message.action === "download_report_start") {
    pendingDownloads[message.id] = {
      filename: sanitizeFilename(message.filename || "i3-report.txt"),
      saveAs: !!message.saveAs,
      totalChunks: message.totalChunks,
      totalLength: message.totalLength,
      chunks: new Array(message.totalChunks),
      received: 0
    };
    logBg("download", "Chunked download started", {
      id: message.id,
      filename: message.filename,
      totalChunks: message.totalChunks,
      totalLength: message.totalLength
    });
    sendResponse({ ok: true });
    return true;
  }

  if (message.action === "download_report_chunk") {
    const pending = pendingDownloads[message.id];
    if (!pending) {
      sendResponse({ ok: false, error: "unknown download id: " + message.id });
      return true;
    }
    pending.chunks[message.index] = message.chunk || "";
    pending.received++;
    if (pending.received % 5 === 0 || pending.received === pending.totalChunks) {
      logBg("download", "Chunk received", {
        id: message.id,
        received: pending.received,
        total: pending.totalChunks
      });
    }
    sendResponse({ ok: true, received: pending.received });
    return true;
  }

  if (message.action === "download_report_finish") {
    const pending = pendingDownloads[message.id];
    if (!pending) {
      sendResponse({ ok: false, error: "unknown download id: " + message.id });
      return true;
    }
    const text = pending.chunks.join("");
    delete pendingDownloads[message.id];
    if (text.length !== pending.totalLength) {
      logBgError("download", "Chunk length mismatch", {
        expected: pending.totalLength,
        actual: text.length
      });
    }
    triggerDownload(text, pending.filename, pending.saveAs)
      .then(function(result) { sendResponse(result); })
      .catch(function(err) { sendResponse({ ok: false, error: err.message || String(err) }); });
    return true;
  }

  if (message.action === "ping_background") {
    sendResponse({
      ok: true,
      hasDownloadsPermission: true,
      manifestVersion: 2
    });
    return true;
  }

  return false;
});

browser.downloads.search({ limit: 1, orderBy: ["-startTime"] })
  .then(function() {
    logBg("init", "Background ready — downloads permission OK");
  })
  .catch(function(err) {
    logBgError("init", "downloads permission check failed — add downloads to manifest", err.message || String(err));
  });
