import express from "express";
import {
  saveNewUser,
  loginUser,
  deleteUser,
  updateUser,
} from "../controllers/user.js";

const router = express.Router();

router.post("/signup", saveNewUser);
router.post("/login", loginUser);
router.delete("/delete/:id", deleteUser);
router.patch("/update/:id", updateUser);

export default router;
