const express = require("express");
const http = require("http");
const path = require("path");
const { spawn } = require("child_process");
const { WebSocketServer, WebSocket } = require("ws");

const PORT = 4321;
const BACKEND_URL = "http://127.0.0.1:8000/process";

let session = { iiq_ticket: null, asset_tag: null, tech_initials: null };
let extensionWs = null;
const frontendClients = new Set();

const app = express();
app.use(express.json({ limit: "10mb" }));
app.use(express.static(path.join(__dirname, "../frontend")));

function broadcastToFrontend(obj) {
  const message = JSON.stringify(obj);
  for (const client of frontendClients) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  }
}

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
  const { csv_data, history_rows } = req.body || {};

  if (!session.iiq_ticket || !session.asset_tag || !session.tech_initials) {
    return res.json({ success: false, error: "No active intake session" });
  }

  if (csv_data === undefined || csv_data === null || history_rows === undefined) {
    return res.json({ success: false, error: "Missing csv_data or history_rows" });
  }

  const payload = {
    iiq_ticket: session.iiq_ticket,
    asset_tag: session.asset_tag,
    tech_initials: session.tech_initials,
    csv_data,
    history_rows,
  };

  try {
    const response = await fetch(BACKEND_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

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
