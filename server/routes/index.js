import express from "express";
import {
  saveNewUser,
  loginUser,
  deleteUser,
  updateUser,
  getAllUsers,
} from "../controllers/user.js";

const router = express.Router();

router.get("/getUsers", getAllUsers);
router.post("/signup", saveNewUser);
router.post("/login", loginUser);
router.delete("/delete/:id", deleteUser);
router.patch("/update/:id", updateUser);

export default router;
