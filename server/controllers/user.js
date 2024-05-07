import pkg from "bcryptjs";
import { User } from "../models/user.model.js";

const { hashSync, genSaltSync, compareSync } = pkg;

export async function getAllUsers(req, res) {
  try {
    const users = await User.find();
    if (!users) {
      return res.status(404).json({ message: "No user found" });
    }
    return res.status(200).json({ users: users });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

export async function saveNewUser(req, res) {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = hashSync(password, genSaltSync(12));
    const newUser = new User({
      email,
      password: hashedPassword,
    });

    await newUser
      .save()
      .then(() => {
        res.status(201).json({ user: newUser });
      })
      .catch((err) => {
        res.status(400).json({ error: err.message });
      });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

export async function loginUser(req, res) {
  try {
    var { email, password } = req.body;

    const dbUser = await User.findOne({ email: email });

    if (!dbUser) {
      return res.status(404).json({ message: "User not found" });
    }

    if (!compareSync(password, dbUser.password)) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }
    var { _id: id, name, email, year, branch, rollno } = dbUser;

    return res
      .status(200)
      .json({ user: { id, name, email, year, branch, rollno } });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

export async function deleteUser(req, res) {
  const { id } = req.params.id;
  try {
    await User.findByIdAndDelete(id);
    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
}

export async function updateUser(req, res) {
  try {
    const { id } = req.params;

    const valuesToBeUpdated = {};
    const KEYS = ["name", "email", "password", "rollno", "branch", "year"];

    KEYS.forEach((key) => {
      if (key in req.body) {
        valuesToBeUpdated[key] = req.body[key];
      }
    });

    if ("password" in req.body) {
      valuesToBeUpdated.password = hashSync(req.body.password, genSaltSync(12));
    }

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { ...valuesToBeUpdated },
      { new: true }
    );
    const { _id, email, name, branch, rollno } = updatedUser;

    return res.status(200).json({ user: { _id, email, name, branch, rollno } });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}
