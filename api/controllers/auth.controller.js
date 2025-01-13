import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
//import dotenv from "dotenv";
import { errorHandler } from "./../middleware/error.handler.js";
import jwt from "jsonwebtoken";

//dotenv.config();

export const signup = async (request, response, next) => {
  // next to use middleware
  //console.log(request.body);
  const { username, email, password } = request.body;

  // check if values exist !username || !email || !password || username==='' || email==='' || password===''
  if ([username, email, password].some((value) => value === "" || !value)) {
    // return response
    //   .status(400)
    //   .json({ message: "Please fill the required fields" });
    // use middleware
    next(errorHandler(400, "Please fill the required fields")); // use next to use middleware error handler
  }

  // hash the password
  const hashedPassword = bcryptjs.hashSync(password || "", 10); // hashSync method includes await, 10 rounds of salt [A salt is a piece of random data added to a password before it is hashed and stored.]
  // const newUser = new User({
  //   username: username,
  //   email: email,
  //   password: password,
  // });

  //es6 syntax
  const newUser = new User({
    username,
    email,
    password: hashedPassword, // set hash password
  });

  try {
    await newUser.save(); // saver user
    response.json("Signup successful");
  } catch (error) {
    next(error); // use middlware
    // response.status(500).json({ message: error.message });
  }
};

export const signin = async (request, response, next) => {
  const { email, password } = request.body;

  if ([email, password].some((value) => value === "" || !value)) {
    next(errorHandler(400, "Please fill the required fields")); // use next to use middleware error handler
  }
  try {
    // https://www.geeksforgeeks.org/mongodb-findone-method/

    const userFound = await User.findOne({ email });
    const userNotFound = !userFound;

    if (userNotFound) {
      return next(errorHandler(400, "User not found"));
    }

    const userPassword = userFound.password;
    // To check a password: bcrypt.compareSync("password", hash);
    const correctPassword = bcryptjs.compareSync(password, userPassword);
    // const correctPassword = async (password, userPassword) => {
    //   return await bcrypt.compareSync(password, userPassword);
    // };

    // if password is not correct notify user
    if (!correctPassword) {
      return next(errorHandler(400, "Wrong credentials"));
    }

    // create user token
    const token = jwt.sign(
      { userId: userFound._id }, // set user id with the _id from the database
      // process.env._JWT_SECRET_KEY // create user unique secret key
      `${process.env.JWT_SECRET_KEY}`
      // { expiresIn: '1d' }, // expire in 1 day - if omitted session drops on browser close
    );

    //_doc is the mongoose raw document object
    const { password: pass, ...userData } = userFound._doc; // exclude password from the user data
    response
      .status(200)
      .cookie("a_t", token, {
        // user_access_token
        httpOnly: true, // make cookie secure
        // sameSite:"strict", if nackend and frontend is same url
      })
      //.json(userFound); // send who is the user logged in including password
      .json(userData); // send who is the user logged in without password
  } catch (error) {
    next(error);
  }
};
