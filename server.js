// server.js
const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// ให้ client ส่งข้อความถึงกัน
wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    // ส่งข้อความไปยัง client ทุกตัวที่เชื่อมต่อ
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });
});

app.use(express.static('public'));

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
