import express from "express";
import { register, login, addToHistory, getUserHistory } from "../controllers/usercontroller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.post("/addtoactivity", addToHistory);
router.get("/getallactivity", getUserHistory);

export default router;
