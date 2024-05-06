import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    branch: {
      type: String,
      required: true,
    },
    rollno: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const User = model("User", userSchema);
