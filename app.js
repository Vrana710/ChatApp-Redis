const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const { createClient } = require('redis'); // Import Redis client

// Initialize app
const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve the static HTML file
app.use(express.static(__dirname + '/public'));

// Redis clients (with new Redis v4 syntax)
const redisClient = createClient();
const pubClient = createClient();
const subClient = createClient();

// Connect Redis clients
(async () => {
  await redisClient.connect();
  await pubClient.connect();
  await subClient.connect();
})();

// Subscribe to Redis Pub/Sub once (to avoid multiple subscriptions)
subClient.subscribe('chat', (message, channel) => {
  const data = JSON.parse(message);
  io.emit('receiveMessage', data);
});

// Handle client connection
io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  // Store user presence in Redis (use hSet for setting hash field)
  redisClient.hSet('onlineUsers', socket.id, 'online');

  // Listen for messages sent by users
  socket.on('sendMessage', (data) => {
    pubClient.publish('chat', JSON.stringify(data)); // Publish the message via Redis Pub/Sub
  });

  // Handle user disconnect
  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
    redisClient.hDel('onlineUsers', socket.id); // Remove user from the online users list
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
