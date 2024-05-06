import express from "express";
import { saveNewUser, getUser } from "../controllers/user.js";

const router = express.Router();

router.post("/signup", saveNewUser);
router.post("/login", getUser);

export default router;
