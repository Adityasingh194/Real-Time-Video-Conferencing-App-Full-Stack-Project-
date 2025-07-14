import httpStatus from "http-status";
import User from "../models/usermodel.js";
import bcrypt from "bcrypt";
import crypto from "crypto";
import Meeting from "../models/meetingmodel.js";
export const register = async (req, res) => {
  const { name, username, password } = req.body;
  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(httpStatus.CONFLICT).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ name, username, password: hashedPassword });
    await newUser.save();

    res.status(httpStatus.CREATED).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: `Something went wrong: ${err.message}` });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(httpStatus.UNAUTHORIZED).json({ message: "Invalid username" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(httpStatus.UNAUTHORIZED).json({ message: "Invalid password" });
    }

    const token = crypto.randomBytes(16).toString("hex");
    user.token = token;
    await user.save();

    res.status(httpStatus.OK).json({ message: "Login successful", token });
  } catch (err) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: `Something went wrong: ${err.message}` });
  }
};
export const getUserHistory = async (req, res) => {
  const { token } = req.query;

  try {
    const user = await User.findOne({ token });
    if (!user) {
      return res.status(httpStatus.UNAUTHORIZED).json({ message: "Invalid token" });
    }

    const meetings = await Meeting.find({ user_id: user._id }).sort({ date: -1 });
    res.status(httpStatus.OK).json(meetings);
  } catch (e) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: `Something went wrong: ${e.message}` });
  }
};

export const addToHistory = async (req, res) => {
  const { token, meeting_code } = req.body;

  try {
    const user = await User.findOne({ token });

    if (!user) {
      return res.status(httpStatus.UNAUTHORIZED).json({ message: "Invalid token" });
    }

    const newMeeting = new Meeting({
      user_id: user._id, // Correct: ObjectId from MongoDB
      meetingCode: meeting_code
    });

    await newMeeting.save();

    res.status(httpStatus.CREATED).json({ message: "Added code to history" });
  } catch (e) {
    console.error("Error in addToHistory:", e);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: `Something went wrong: ${e.message}` });
  }
};

