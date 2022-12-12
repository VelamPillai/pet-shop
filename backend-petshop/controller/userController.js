import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import userCollection from "../models/userSchema.js";
import bcrypt from 'bcrypt'

//dotenv congig
dotenv.config();

//get all user
const getAllUser = (req, res, next) => {
  try {
    console.log("hello i am get user");
    res.send("hello i am get user");
  } catch (err) {
    next(err);
  }
};

//get single user
const getSingleUser = (res, req, next) => {
  try {
    console.log(req.body);
    res.send("hello from sendalluser");
  } catch (err) {
    next(err);
  }
};

//sign up - add new user
const addNewUser = async (req, res, next) => {
  try {
    const user = new userCollection(req.body);
    console.log(user);
    req.file && (user.profileImage = `/${req.file.filename}`);
    await user.save();
    res.json({ success: true, data: user });
  } catch (err) {
    next(err);
  }
};
//login - user
const loginUser = async (req, res, next) => {
     try {
        
      const user = await userCollection.findOne({ email: req.body.email });
     
    if (user) {
      const checkPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (checkPassword) {
        let token = jwt.sign(
          { _id: user._id, firstName: user.firstName },
          process.env.TOKEN_KEY,
          { expiresIn: "1h", issuer: "velam" }
        );
          console.log('token' ,token)
        const updatedUser = await userCollection.findByIdAndUpdate(
          user._id,
          { token: token },
          { new: true }
        );
          res.header({ "token": token }).json({ success: true, data: updatedUser });
      } else {
        throw new Error("Invalid password , Please try again");
      }
    } else {
      throw new Error("Email does not exists, Please try again");
    }
  } catch (err) {
    next(err);
  } 
  
};
//update user
const updateUser = (req, res, next) => {
  try {
    console.log("i am from update");
    res.send("i am from update");
  } catch (err) {
    next(err);
  }
};
//delete user
const deleteUser = (req, res, next) => {
  try {
    console.log("i am from delete");
    res.send("i am from delete");
  } catch (err) {
    next(err);
  }
};
export {
  getAllUser,
  getSingleUser,
  addNewUser,
  loginUser,
  updateUser,
  deleteUser,
};
