// models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // email unique hoga
  },
  password: {
    type: String,
    required: true,
  },
}, { timestamps: true }); // optional: createdAt, updatedAt fields

export default mongoose.model("User", userSchema);
