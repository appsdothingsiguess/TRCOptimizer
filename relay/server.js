const express = require("express");
const http = require("http");
const path = require("path");
const util = require("util");
const { spawn } = require("child_process");
const { WebSocketServer, WebSocket } = require("ws");

const PORT = 4321;
const BACKEND_URL = "http://127.0.0.1:8000/process";

let session = { iiq_ticket: null, asset_tag: null, tech_initials: null };
let extensionWs = null;
const frontendClients = new Set();

let lastIntakeResult = null;
const extensionLog = [];
const relayLog = [];

function pushLog(arr, entry, max = 100) {
  arr.push(entry);
  while (arr.length > max) {
    arr.shift();
  }
}

function broadcastToFrontend(obj) {
  const message = JSON.stringify(obj);
  for (const client of frontendClients) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  }
}

function formatConsoleArgs(args) {
  return args
    .map((arg) => {
      if (typeof arg === "string") return arg;
      try {
        return util.inspect(arg, { depth: 2, breakLength: Infinity });
      } catch {
        return String(arg);
      }
    })
    .join(" ");
}

const _log = console.log.bind(console);
const _error = console.error.bind(console);

console.log = (...args) => {
  const entry = {
    ts: new Date().toISOString(),
    level: "info",
    message: formatConsoleArgs(args),
  };
  pushLog(relayLog, entry);
  broadcastToFrontend({ type: "log", source: "relay", entry });
  _log(...args);
};

console.error = (...args) => {
  const entry = {
    ts: new Date().toISOString(),
    level: "error",
    message: formatConsoleArgs(args),
  };
  pushLog(relayLog, entry);
  broadcastToFrontend({ type: "log", source: "relay", entry });
  _error(...args);
};

const app = express();
app.use(express.json({ limit: "10mb" }));
app.use(express.static(path.join(__dirname, "../frontend")));

app.get("/debug", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/debug.html"));
});

app.post("/start-intake", (req, res) => {
  const { iiq_ticket, asset_tag, tech_initials } = req.body || {};

  const trimmed = {
    iiq_ticket: typeof iiq_ticket === "string" ? iiq_ticket.trim() : "",
    asset_tag: typeof asset_tag === "string" ? asset_tag.trim() : "",
    tech_initials: typeof tech_initials === "string" ? tech_initials.trim() : "",
  };

  if (!trimmed.iiq_ticket || !trimmed.asset_tag || !trimmed.tech_initials) {
    return res.json({ status: "error", error: "Missing required fields" });
  }

  session = trimmed;

  if (extensionWs && extensionWs.readyState === WebSocket.OPEN) {
    extensionWs.send(
      JSON.stringify({
        type: "start_intake",
        payload: { asset_tag: session.asset_tag },
      })
    );
    return res.json({ status: "started" });
  }

  return res.json({ status: "error", error: "Extension not connected" });
});

app.post("/extension-data", async (req, res) => {
  const { serial, product_name, school_name, history_rows } = req.body || {};

  if (!session.iiq_ticket || !session.asset_tag || !session.tech_initials) {
    return res.json({ success: false, error: "No active intake session" });
  }

  if (!serial || !product_name || !school_name || !Array.isArray(history_rows)) {
    return res.json({ success: false, error: "Missing serial, product_name, school_name, or history_rows" });
  }

  const payload = {
    iiq_ticket: session.iiq_ticket,
    asset_tag: session.asset_tag,
    tech_initials: session.tech_initials,
    serial,
    product_name,
    school_name,
    history_rows,
  };

  try {
    const response = await fetch(BACKEND_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    lastIntakeResult = data;

    if (data.success) {
      broadcastToFrontend({
        type: "done",
        serial: data.serial,
        product_name: data.product_name,
        school_name: data.school_name,
        break_count: data.break_count,
      });
    } else {
      broadcastToFrontend({
        type: "error",
        message: data.error || "Processing failed",
      });
    }

    return res.json(data);
  } catch (err) {
    broadcastToFrontend({ type: "error", message: "Backend unreachable" });
    return res.json({ success: false, error: "Backend unreachable" });
  }
});

app.post("/extension-log", (req, res) => {
  const { level, step, message } = req.body || {};
  const validLevels = ["info", "warn", "error"];

  if (!validLevels.includes(level)) {
    return res.status(400).json({ ok: false, error: "Invalid level" });
  }
  if (typeof step !== "string" || typeof message !== "string") {
    return res.status(400).json({ ok: false, error: "step and message must be strings" });
  }

  const entry = { ts: new Date().toISOString(), level, step, message };
  pushLog(extensionLog, entry);
  broadcastToFrontend({ type: "log", source: "extension", entry });
  return res.json({ ok: true });
});

app.get("/debug-state", (req, res) => {
  res.json({
    relayUp: true,
    extensionConnected: extensionWs !== null && extensionWs.readyState === WebSocket.OPEN,
    session: { ...session },
    lastIntakeResult,
    extensionLog: [...extensionLog],
    relayLog: [...relayLog],
  });
});

app.get("/backend-health", async (req, res) => {
  try {
    const response = await fetch("http://127.0.0.1:8000/", {
      signal: AbortSignal.timeout(2000),
    });
    return res.json({ fastApiUp: true, status: response.status });
  } catch {
    return res.json({ fastApiUp: false });
  }
});

const server = http.createServer(app);

const wssExtension = new WebSocketServer({ noServer: true });
const wssFrontend = new WebSocketServer({ noServer: true });

wssExtension.on("connection", (ws) => {
  if (extensionWs && extensionWs !== ws) {
    extensionWs.close();
  }
  extensionWs = ws;

  ws.on("message", (raw) => {
    let parsed;
    try {
      parsed = JSON.parse(raw.toString());
    } catch {
      return;
    }

    if (parsed.type === "status") {
      broadcastToFrontend({ type: "status", message: parsed.message });
    } else if (parsed.type === "error") {
      broadcastToFrontend({ type: "error", message: parsed.message });
    }
  });

  const clearIfCurrent = () => {
    if (extensionWs === ws) {
      extensionWs = null;
    }
  };

  ws.on("close", clearIfCurrent);
  ws.on("error", clearIfCurrent);
});

wssFrontend.on("connection", (ws) => {
  frontendClients.add(ws);
  ws.on("close", () => frontendClients.delete(ws));
  ws.on("error", () => frontendClients.delete(ws));
});

server.on("upgrade", (request, socket, head) => {
  const pathname = new URL(request.url, "http://localhost").pathname;

  if (pathname === "/ws") {
    wssExtension.handleUpgrade(request, socket, head, (ws) => {
      wssExtension.emit("connection", ws, request);
    });
  } else if (pathname === "/frontend-ws") {
    wssFrontend.handleUpgrade(request, socket, head, (ws) => {
      wssFrontend.emit("connection", ws, request);
    });
  } else {
    socket.destroy();
  }
});

function startBackend() {
  const child = spawn(
    "python",
    ["-m", "uvicorn", "main:app", "--host", "127.0.0.1", "--port", "8000"],
    {
      cwd: path.join(__dirname, "../backend"),
      stdio: "inherit",
    }
  );

  child.on("exit", (code) => {
    console.log(`FastAPI exited with code ${code}, restarting in 2000ms`);
    setTimeout(startBackend, 2000);
  });

  child.on("error", (err) => {
    console.log(`FastAPI spawn error: ${err.message}, restarting in 2000ms`);
    setTimeout(startBackend, 2000);
  });
}

startBackend();

server.listen(PORT, () => {
  console.log(`TRC_Opt relay listening on port ${PORT}`);
});
