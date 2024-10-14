const socket = io(); // Initialize the socket connection

// Ask for the username when the user joins
let username = prompt("Enter your name:");

// If the user cancels or enters an empty name, assign a default name
if (!username) {
  username = 'Anonymous';
}

const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('message-input');

// Receive and display messages
socket.on('receiveMessage', (data) => {
  const messageElement = document.createElement('p');
  // Create a Date object from the timestamp and format it
  const options = { hour: 'numeric', minute: 'numeric', hour12: true }; // Options for AM/PM format
  const time = new Date(data.timestamp).toLocaleTimeString(undefined, options); // Format the time
  messageElement.textContent = `${data.user} [${time}]: ${data.message}`; // Display sender's name, time, and message
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom when new messages arrive
});

// Send message when the user presses the "Enter" key
messageInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && messageInput.value.trim() !== '') {
    const message = {
      user: username, // Send the username with the message
      message: messageInput.value.trim(),
      timestamp: Date.now() // Capture the current timestamp
    };
    socket.emit('sendMessage', message); // Emit the message to the server
    messageInput.value = ''; // Clear the input field
  }
});
