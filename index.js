const WebSocket = require("ws");

const PORT = process.env.PORT || 3000;
const wss = new WebSocket.Server({ port: PORT });

wss.on("connection", ws => {
  ws.send("Connected!");

  ws.on("message", msg => {
    ws.send("Echo: " + msg);
  });
});
