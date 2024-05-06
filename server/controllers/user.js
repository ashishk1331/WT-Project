import { User } from "../models/user.model.js";

export async function saveNewUser(req, res) {
  const { username, password, name, email, year, branch, rollno } = req.body;
  const newUser = new User({
    username,
    password,
    name,
    email,
    year,
    branch,
    rollno,
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

export async function getUser(req, res) {
  const { email, password } = req.body;
  const dbUser = await User.findOne({ email });
  if (!dbUser) {
    return res.status(404).json({ message: "User not found" });
  }
  if (dbUser.password !== password) {
    return res.status(401).json({ message: "Unauthorized User" });
  }
  return res.status(200).json({ user: dbUser });
}
