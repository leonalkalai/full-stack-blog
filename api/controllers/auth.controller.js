import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
export const signup = async (request, response) => {
  //console.log(request.body);
  const { username, email, password } = request.body;

  // check if values exist !username || !email || !password || username==='' || email==='' || password===''
  if ([username, email, password].some((value) => value === "" || !value)) {
    return response
      .status(400)
      .json({ message: "Please fill the required fields" });
  }

  // hash the password
  const hashedPassword = bcryptjs.hashSync(password, 10); // hashSync method includes await, 10 rounds of salt [A salt is a piece of random data added to a password before it is hashed and stored.]
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
    response.json({ message: "new user added" });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};
