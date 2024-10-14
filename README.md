# Redis Real-Time Chat Application

A real-time chat application built using Node.js, Socket.io, and Redis.
This application allows users to join chat rooms, exchange messages, and see online users in real time.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Real-Time Messaging**: Users can send and receive messages instantly using Socket.io.
- **Chat Rooms**: Join different chat rooms and communicate with users.
- **User Presence**: Track online users using Redis for session management.
- **Message History**: Temporary storage of messages using Redis Streams.
- **Responsive Design**: User-friendly interface that works on different devices.

## Tech Stack

- **Backend**: Node.js, Express, Socket.io
- **Redis**: Used for session management, message broadcasting, logging history, and tracking user presence.
- **Frontend**: HTML, CSS, JavaScript (with Socket.io for real-time communication)

## Installation

### Prerequisites

- Node.js (>=14.x)
- Redis (installed and running)

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Vrana710/ChatApp-Redis.git
   cd ChatApp-Redis
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the Redis server**:
   Make sure your Redis server is running. You can start it with the command:
   ```bash
   redis-server
   ```

4. **Run the application**:
   ```bash
   node app.js
   ```

5. **Open your browser**:
   Navigate to `http://localhost:3000` to access the chat application.

## Usage

- Upon launching the application, users will be prompted to enter their name.
- Once connected, users can send messages by typing in the input field and pressing Enter.
- Messages will appear in the chat box with the sender's name.
- You can open multiple browser tabs to simulate different users chatting.

## Demo

Watch the demo video of the ChatApp-Redis 

https://github.com/user-attachments/assets/aac4b861-644f-4f0c-bc7c-dd201f1a174e

Alternatively, you can view the video directly in the browser [here](https://github.com/user-attachments/assets/aac4b861-644f-4f0c-bc7c-dd201f1a174e).

Note: If you are not able to see the video, you may need to download it to view it properly.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-YourFeature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or suggestions, feel free to contact me at [ranavarsha710@gmail.com](mailto:ranavarsha710@gmail.com).

