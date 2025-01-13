import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String, // error username if not string
      required: true, // error username not typed
      unique: true, //  // error username typed already exists
    },
    email: {
      type: String, // error username if not string
      required: true, // error username not typed
      unique: true, //  // error username typed already exists
    },
    password: {
      type: String, // error username if not string
      required: true, // error username not typed
    },
  },
  { timestamps: true } // set timestamps to update user information
);

const User = mongoose.model("User", userSchema);

export default User;
