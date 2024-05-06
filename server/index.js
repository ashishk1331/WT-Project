import express from "express";
import { config } from "dotenv";
import connectDB from "./connection.js";
import userRouter from "./routes/index.js";

config();
connectDB();
const app = express();

app.use(express.json());

app.use("/api/users", userRouter);

app.listen(process.env.PORT, () => {
  console.log("Server is running on port 3000");
});
