import express from "express";
import { createServer } from "node:http";
import mongoose from "mongoose";
import cors from "cors";

import usersRoutes from "./routes/usersroutes.js";
import { connectToSocket } from "./controllers/socketmanager.js";

const app = express();
const server = createServer(app);

const MONGO_URI = "mongodb+srv://sadityakumar194:pc123456@videocall.9fzhtxa.mongodb.net/?retryWrites=true&w=majority&appName=videocall";

// Middleware
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ extended: true, limit: "40kb" }));

// Routes
app.get("/home", (req, res) => {
  res.json({ message: "hello world" });
});

app.use("/api/users", usersRoutes);

// Connect DB and start server
const PORT = process.env.PORT || 8000;

const startServer = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    connectToSocket(server);

    server.listen(PORT, '0.0.0.0', () => {
      console.log(`Server running on http://0.0.0.0:${PORT}`);
    });
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
  }
};

startServer();
