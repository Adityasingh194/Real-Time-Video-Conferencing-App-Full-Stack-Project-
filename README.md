# Zoom Clone — Video Conferencing Web App

This is a full-stack video conferencing application that I built as part of my web development curriculum. The project demonstrates real-time video communication using the MERN stack and WebRTC technologies.

## 📌 About This Project

I have always been fascinated by how video conferencing platforms like Zoom work behind the scenes. This project is my hands-on exploration of real-time communication on the web. It is a functional video conferencing app capable of handling multiple users, peer-to-peer video/audio streaming, and room management.

## ⚙️ Tech Stack

**Frontend:**  
- React.js for the user interface  
- CSS3 for styling and responsive layouts  
- WebRTC API for real-time media handling

**Backend:**  
- Node.js as the runtime environment  
- Express.js as the server framework  
- Socket.io for real-time signaling  
- PeerJS to simplify WebRTC peer connections

**Additional Tools:**  
- UUID for unique room ID generation  
- CORS for cross-origin requests

## ✨ Features

- Create and join video conference rooms  
- Real-time video and audio streaming between participants  
- Screen sharing capability  
- Integrated text chat during meetings  
- Mute/unmute controls for audio and video  
- Fully responsive design compatible with various devices

## 🚀 Getting Started

### ✅ Prerequisites

Before running the project, ensure that you have:  
- Node.js (v14 or higher)  
- npm or yarn installed  
- A modern web browser (Chrome, Firefox, or Safari)

### ⚡ Installation Steps

1. Clone the repository  
```bash
git clone https://github.com/apna-college/Zoom.git
cd Zoom
```

2. Install backend dependencies
```bash
cd backend
npm install
```

3. Install frontend dependencies
```bash
cd ../frontend
npm install
```

4. Run the backend server
```bash
cd backend
npm start
```

5. Run the frontend application (in a new terminal)
```bash
cd frontend
npm start
```

6. Open the browser and navigate to `http://localhost:3000`

## 🔗 How It Works

This application uses a combination of WebRTC and Socket.io for real-time communication. The workflow is as follows:

**Room Creation:** I can create or join video rooms using a unique room ID.

**Peer Connection:** PeerJS handles the complexity of establishing WebRTC peer-to-peer connections.

**Signaling:** Socket.io facilitates signaling and room management.

**Media Streaming:** Once connected, video and audio streams flow directly between users.

The React frontend provides an intuitive user interface for handling video calls, while the Express backend manages signaling and room state.

## 📁 Project Structure

```
Zoom/
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   └── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
│   ├── public/
│   └── package.json
└── README.md
```

## ⚠️ Known Issues

- Video quality may vary depending on network conditions
- Screen sharing may not work properly in older browsers
- The user interface could be improved further

## 📌 Future Improvements

I plan to add:
- Recording functionality for meetings
- Enhanced error handling
- User authentication
- Password-protected rooms
- A mobile version

## 🤝 Contributing

This is primarily a learning project, but if anyone finds bugs or wants to add features, feel free to fork the repository, create a feature branch, make changes, and submit a pull request.

## 📚 Learning Resources

If you are new to these technologies, I recommend:
- [React Documentation](https://reactjs.org/docs/)
- [WebRTC Documentation](https://webrtc.org/)
- [Socket.io Guide](https://socket.io/docs/)
- [PeerJS Documentation](https://peerjs.com/docs/)
- [Express.js Guide](https://expressjs.com/)

## 📜 License

This project is for educational purposes. Feel free to use the code for learning and building your own projects.

---

**Built by Aditya Kumar Singh**