import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import { useMiddleware } from "./middleware/error.handler.js";

dotenv.config();

mongoose
  .connect(process.env._MO)
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

// middleware for error handling
// app.use((error, request, response, next) => {
//   const statusCode = error.statusCode || 500; // get error status code and if dont exist 500
//   const message = error.message || "Server error occured"; // get error message and if dont exist alt message
//   response.status(statusCode).json({
//     success: false,
//     statusCode,
//     message,
//   });
// });

useMiddleware(app);
