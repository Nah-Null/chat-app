// public/app.js
const ws = new WebSocket('ws://localhost:3000');
const messages = document.getElementById('messages');
const input = document.getElementById('input');

ws.onmessage = (event) => {
  const message = document.createElement('div');
  message.textContent = event.data;
  messages.appendChild(message);
};

function sendMessage() {
  const message = input.value;
  ws.send(message);
  input.value = '';
}
