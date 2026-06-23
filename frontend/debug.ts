// tsc debug.ts --target ES2020 --strict false --skipLibCheck --outFile debug.js

type BadgeState = "up" | "down" | "unknown";
type LogSource = "extension" | "relay";

interface LogEntry {
  ts: string;
  level: string;
  message: string;
  step?: string;
}

interface Session {
  iiq_ticket: string | null;
  asset_tag: string | null;
  tech_initials: string | null;
}

interface DebugState {
  relayUp: boolean;
  extensionConnected: boolean;
  session: Session;
  lastIntakeResult: unknown;
  extensionLog: LogEntry[];
  relayLog: LogEntry[];
}

interface BackendHealth {
  fastApiUp: boolean;
  status?: number;
}

function formatTime(ts: string): string {
  const d = new Date(ts);
  if (isNaN(d.getTime())) {
    return ts;
  }
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  const ss = String(d.getSeconds()).padStart(2, "0");
  return hh + ":" + mm + ":" + ss;
}

function setBadge(tileId: string, state: BadgeState): void {
  const tile = document.getElementById(tileId);
  if (!tile) {
    return;
  }
  const badge = tile.querySelector(".badge");
  if (!badge) {
    return;
  }
  badge.classList.remove("badge-up", "badge-down", "badge-unknown");
  badge.classList.add("badge-" + state);
  badge.textContent = state.toUpperCase();
}

function updateHealth(
  debugState: DebugState | null,
  backendHealth: BackendHealth,
  relayFetchOk: boolean
): void {
  setBadge("tile-relay", relayFetchOk ? "up" : "down");
  setBadge("tile-fastapi", backendHealth.fastApiUp ? "up" : "down");

  const extConnected = debugState !== null && debugState.extensionConnected;
  setBadge("tile-extension", extConnected ? "up" : "down");

  const tileI3 = document.getElementById("tile-i3");
  const note = tileI3 ? tileI3.querySelector(".tile-note") : null;

  if (!extConnected) {
    setBadge("tile-i3", "down");
    if (note instanceof HTMLElement) {
      note.textContent = "";
      note.hidden = true;
    }
  } else {
    setBadge("tile-i3", "unknown");
    if (note instanceof HTMLElement) {
      note.textContent = "Check extension log";
      note.hidden = false;
    }
  }
}

function updateSession(session: Session | null | undefined): void {
  const iiq = document.getElementById("session-iiq");
  const tag = document.getElementById("session-tag");
  const tech = document.getElementById("session-tech");

  if (iiq) {
    iiq.textContent = session && session.iiq_ticket ? session.iiq_ticket : "\u2014";
  }
  if (tag) {
    tag.textContent = session && session.asset_tag ? session.asset_tag : "\u2014";
  }
  if (tech) {
    tech.textContent = session && session.tech_initials ? session.tech_initials : "\u2014";
  }
}

function updateLastIntake(result: unknown): void {
  const el = document.getElementById("last-intake");
  if (!el) {
    return;
  }
  if (result === null || result === undefined) {
    el.textContent = "No intake processed yet.";
    return;
  }
  el.textContent = JSON.stringify(result, null, 2);
}

function appendLogRow(
  container: HTMLElement,
  entry: LogEntry,
  source: LogSource,
  scroll: boolean
): void {
  const placeholder = container.querySelector(".log-placeholder");
  if (placeholder) {
    placeholder.remove();
  }

  const row = document.createElement("div");
  row.className = "log-row";

  const timeSpan = document.createElement("span");
  timeSpan.className = "log-ts";
  timeSpan.textContent = formatTime(entry.ts);

  const levelSpan = document.createElement("span");
  levelSpan.className = "log-level log-level-" + entry.level;
  levelSpan.textContent = entry.level.toUpperCase();

  let messageText = entry.message;
  if (source === "extension" && entry.step) {
    messageText = "[" + entry.step + "] " + messageText;
  }

  const msgSpan = document.createElement("span");
  msgSpan.className = "log-message";
  msgSpan.textContent = messageText;

  row.appendChild(timeSpan);
  row.appendChild(levelSpan);
  row.appendChild(msgSpan);
  container.appendChild(row);

  if (scroll) {
    container.scrollTop = container.scrollHeight;
  }
}

function replaceLog(containerId: string, entries: LogEntry[], source: LogSource): void {
  const container = document.getElementById(containerId);
  if (!container) {
    return;
  }

  container.textContent = "";

  if (!entries || entries.length === 0) {
    const placeholder = document.createElement("p");
    placeholder.className = "log-placeholder";
    placeholder.textContent = "No log entries.";
    container.appendChild(placeholder);
    return;
  }

  for (const entry of entries) {
    appendLogRow(container, entry, source, false);
  }
  container.scrollTop = container.scrollHeight;
}

function appendLiveFeed(msg: { type: string; message?: string; product_name?: string; serial?: string; school_name?: string; break_count?: number }): void {
  const feed = document.getElementById("live-feed");
  if (!feed) {
    return;
  }

  const placeholder = feed.querySelector(".feed-placeholder");
  if (placeholder) {
    placeholder.remove();
  }

  const row = document.createElement("div");
  row.className = "feed-row feed-" + msg.type;

  const timeSpan = document.createElement("span");
  timeSpan.className = "feed-ts";
  timeSpan.textContent = formatTime(new Date().toISOString());

  let text = "";
  switch (msg.type) {
    case "status":
      text = msg.message || "";
      break;
    case "error":
      text = "Error: " + (msg.message || "");
      break;
    case "done":
      text =
        "Done \u2014 " +
        (msg.product_name || "") +
        " | Serial: " +
        (msg.serial || "") +
        " | Campus: " +
        (msg.school_name || "") +
        " | Breaks: " +
        (msg.break_count ?? "");
      break;
    default:
      text = msg.message || "";
  }

  const msgSpan = document.createElement("span");
  msgSpan.className = "feed-message";
  msgSpan.textContent = text;

  row.appendChild(timeSpan);
  row.appendChild(msgSpan);
  feed.appendChild(row);
  feed.scrollTop = feed.scrollHeight;
}

async function refresh(): Promise<void> {
  let debugState: DebugState | null = null;
  let relayFetchOk = false;
  let backendHealth: BackendHealth = { fastApiUp: false };

  const [stateResult, healthResult] = await Promise.all([
    fetch("/debug-state")
      .then(function (r) {
        if (!r.ok) {
          throw new Error("debug-state failed");
        }
        relayFetchOk = true;
        return r.json() as Promise<DebugState>;
      })
      .catch(function () {
        return null;
      }),
    fetch("/backend-health")
      .then(function (r) {
        if (!r.ok) {
          return { fastApiUp: false };
        }
        return r.json() as Promise<BackendHealth>;
      })
      .catch(function () {
        return { fastApiUp: false };
      }),
  ]);

  debugState = stateResult;
  backendHealth = healthResult;

  updateHealth(debugState, backendHealth, relayFetchOk);

  if (debugState) {
    updateSession(debugState.session);
    updateLastIntake(debugState.lastIntakeResult);
    replaceLog("ext-log", debugState.extensionLog, "extension");
    replaceLog("relay-log", debugState.relayLog, "relay");
  }
}

function connectWs(): void {
  const ws = new WebSocket("ws://" + location.host + "/frontend-ws");

  ws.onmessage = function (event: MessageEvent) {
    let msg: {
      type: string;
      source?: string;
      entry?: LogEntry;
      message?: string;
      product_name?: string;
      serial?: string;
      school_name?: string;
      break_count?: number;
    };
    try {
      msg = JSON.parse(event.data);
    } catch {
      return;
    }

    switch (msg.type) {
      case "status":
      case "error":
      case "done":
        appendLiveFeed(msg);
        break;
      case "log":
        if (msg.source === "extension" && msg.entry) {
          const extContainer = document.getElementById("ext-log");
          if (extContainer) {
            appendLogRow(extContainer, msg.entry, "extension", true);
          }
        } else if (msg.source === "relay" && msg.entry) {
          const relayContainer = document.getElementById("relay-log");
          if (relayContainer) {
            appendLogRow(relayContainer, msg.entry, "relay", true);
          }
        }
        break;
    }
  };

  ws.onclose = function () {
    setTimeout(connectWs, 3000);
  };
}

document.addEventListener("DOMContentLoaded", function () {
  refresh();
  setInterval(refresh, 5000);

  const refreshBtn = document.getElementById("refresh");
  if (refreshBtn) {
    refreshBtn.addEventListener("click", function () {
      refresh();
    });
  }

  connectWs();
});
