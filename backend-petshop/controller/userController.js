import userCollection from "../models/userSchema.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import mongoose from "mongoose";

dotenv.config();

//get all user
const getAllUser = async (req, res, next) => {
  try {
    const user = await userCollection
      .find()
      .populate("ordersId")
      .populate("favoriteProduct");

    res.status(200).json({ success: true, data: user });
  } catch (err) {
    next(err);
  }
};

//get single user
const getSingleUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await userCollection
      .findById(id)
      .populate("ordersId")
      .populate("favoriteProduct");
  } catch (err) {
    next(err);
  }
};

//sign up - add new user
const addNewUser = async (req, res, next) => {
  //console.log(req.body)
  try {
    const DBUser = await userCollection.findOne({ email: req.body.email });
    //console.log(DBUser);
    if (!DBUser) {
      const user = new userCollection(req.body);
      //console.log(user)//to display req.body information

      await user.save();
      res.json({ success: true, data: user });
    } else {
      throw new Error(
        "Email already exists , Please register with other email address!"
      );
    }
  } catch (err) {
    console.log(err.message);

    next(err.message);
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

        const updatedUser = await userCollection.findByIdAndUpdate(
          user._id,
          { token: token },
          { new: true }
        );
        res.header("token", token).json({ success: true, data: updatedUser });
      } else {
        throw new Error("Invalid password, please try again!");
      }
    } else {
      throw new Error("Email does not exists. please try again!");
    }
  } catch (err) {
    next(err.message);
  }
};
//update user
const updateUser = async (req, res, next) => {
  try {
    let user = await userCollection.findById(req.params.id);
    //image
    if (user.profileImage !== req.body.profileImage) {
      user.profileImage = req.body.profileImage;
    }
    //add favorite product
    //console.log(req.body.favoriteProduct)
    //console.log(user.favoriteProduct)
    if (req.body.favoriteProduct) {
      if (req.body.favoriteProduct.length <= 24) {
        if (user.favoriteProduct.includes(req.body.favoriteProduct)) {
          //console.log('Product already exists in your favorite List!!!')

          user.favoriteProduct = user.favoriteProduct.filter(
            (item) => String(item) !== req.body.favoriteProduct
          );
        } else {
          user.favoriteProduct.push(req.body.favoriteProduct);
        }
      } else {
        /* req.body.favoriteProduct.split(',').map(item => console.log(item)) */
      }
    }

    // console.log(req.body.favoriteProduct.split(',').length)
    //orderIds
   /*  console.log("order", req.body.ordersId);
    console.log("user", user.ordersId); */
    if (req.body.ordersId) {
      user.ordersId.push(req.body.ordersId);
    }
   // console.log("user", user.ordersId);

    //password
    if (req.body.password != user.password) {
      user.password = req.body.password;
    }

    await user.save();

    let body = {};
    for (const key in req.body) {
      if (req.body[key] !== "" && key !== "password") {
        if (key === "favoriteProduct") {
          body[key] = user.favoriteProduct;
        } else if (key === "ordersId") {
          body[key] = user.ordersId;
        } else {
          body[key] = req.body[key];
        }
      }
    }

    const updatedUser = await userCollection.findByIdAndUpdate(
      req.params.id,
      body,
      { new: true }
    );
    res.json({ success: true, data: updatedUser });
  } catch (err) {
    console.log(err.message);
    next(err.message);
  }
};

//delete user
const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const existingUser = await userCollection.findById(id);

    if (existingUser) {
      const deleteStatus = await userCollection.deleteOne({
        _id: existingUser._id,
      });
      res.json({ success: true, status: deleteStatus });
    } else {
      throw new Error("user id doesn't exist ! ");
    }
  } catch (err) {
    next(err);
  }
};

const verifyUserToken = async (req, res, next) => {
  try {
    /*  console.log('token') */
    const token = req.headers.token;
    const payload = jwt.verify(token, process.env.TOKEN_KEY);
    /* console.log(payload) */
    const user = await userCollection.findById(payload._id);
    /*  console.log(user) */
    res.json({ success: true, data: user });
  } catch (err) {
    console.log(err.message);
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
  verifyUserToken,
};
