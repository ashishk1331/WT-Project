import { connect } from "mongoose";

export default async function connectDB() {
  try {
    await connect(process.env.MONGODB_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.log("MongoDB connection failed");
    console.log(error);
  }
}
