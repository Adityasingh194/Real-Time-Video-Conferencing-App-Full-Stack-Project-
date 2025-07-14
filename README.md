# Real-Time Video Conferencing App

A full-stack web application enabling real-time video conferencing using **WebRTC**, **React**, **Node.js**, and **Socket.IO**.

## 🌐 Live Demo

[https://real-time-video-conferencing-app-full-plp6.onrender.com](https://real-time-video-conferencing-app-full-plp6.onrender.com)

---

## Features

- User authentication (sign up & login)
- One-to-one video conferencing
- Socket-based real-time communication
- Built-in chat support
- Responsive Material UI layout
- Separate deployments for frontend and backend

---

## Tech Stack

### Frontend

- React 19 + Vite
- Material UI (MUI v7)
- React Router
- Axios
- Simple-Peer
- Socket.IO client

### Backend

- Node.js with Express
- MongoDB + Mongoose
- Socket.IO
- REST API for user management

---

## Project Structure

Real-Time-Video-Conferencing-App/
├── backend/
│   ├── src/
│   │   ├── app.js
│   │   ├── routes/
│   │   ├── controllers/
│   │   └── models/
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── contexts/
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
└── README.md

---

## Getting Started

### 1. Clone the Repository

git clone https://github.com/Adityasingh194/Real-Time-Video-Conferencing-App-Full-Stack-Project.git
cd Real-Time-Video-Conferencing-App-Full-Stack-Project

### 2. Setup Backend

cd backend
npm install

Replace the MongoDB connection string inside src/app.js:

const MONGO_URI = "your-mongodb-uri";

Then run the server:

npm run dev
# Server running at http://localhost:8000

### 3. Setup Frontend

cd ../frontend
npm install
npm run dev
# Frontend runs at http://localhost:5173

---

## Deployment on Render

### Backend (Web Service)

- Root Directory: backend
- Build Command: npm install
- Start Command: node src/app.js
- Environment Variable:  
  MONGO_URI: your MongoDB URI

### Frontend (Static Site)

- Root Directory: frontend
- Build Command: npm run build
- Publish Directory: dist

Ensure your vite.config.js has:

export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true,
  },
});

---

## License

This project is licensed under the MIT License.  
© 2025 Aditya Kumar Singh

---
