import mongoose from "mongoose";
import { Schema } from "./../../node_modules/mongoose/types/index.d";

const userSchema = new Mongoose.Schema({
  user: {
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
  {timestaps:true} // set timestamps to update user information
});

const User = mongoose.model('User',userSchema);

export default User;