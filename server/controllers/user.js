import { User } from "../models/user.model.js";
import pkg from "bcryptjs";

const { hashSync, genSaltSync, compareSync } = pkg;

export async function saveNewUser(req, res) {
  const { email, password } = req.body;

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
      res.status(400).send("Error: " + err);
    });
}

export async function loginUser(req, res) {
  const { email, password } = req.body;
  const dbUser = await User.findOne({ email });
  if (!dbUser) {
    return res.status(404).json({ message: "User not found" });
  }

  if (!compareSync(password, dbUser.password)) {
    return res.status(401).json({ message: "Invalid Credentials" });
  }
  const { _id, name, email: em, year, branch, rollno } = dbUser;

  return res
    .status(200)
    .json({ user: { _id, name, em, year, branch, rollno } });
}

export async function deleteUser(req, res) {
  const { id } = req.params.id;
  try {
    await User.findByIdAndDelete(id);
    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    return res.status(402).json({ error: error });
  }
}

export async function updateUser(req, res) {
  const { id } = req.params.id;
  const { name, email, password, rollno, branch, year } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        name,
        email,
        password,
        rollno,
        branch,
        year,
      },
      { new: true }
    );

    return res.status(200).json({ user: updatedUser });
  } catch (error) {
    return res.status(402).json({ error: error });
  }
}
