import userCollection from '../models/userSchema.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';

dotenv.config();

//get all user
const getAllUser = (req, res, next) => {
  try {
    console.log('hello i am get user');
    res.send('hello i am get user');
  } catch (err) {
    next(err);
  }
};

//get single user
const getSingleUser = (req, res, next) => {
  try {
    console.log('hello from getalluser');
    res.send('hellofrom sendalluser');
  } catch (err) {
    next(err);
  }
};

//sign up - add new user
const addNewUser = async (req, res, next) => {
  console.log('hello')
  try {
    console.log(req.file)
    const DBUser = await userCollection.findOne({ email: req.body.email });
    //console.log(DBUser);
    if (!DBUser) {
      const user = new userCollection(req.body);
      console.log(user)
      req.file && (user.profileImage = `/${req.file}`);
      await user.save();
      res.json({ success: true, data: user });
    } else {
      throw new Error(
        'Email already exists , Please register with other email address!'
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
          { expiresIn: '1h', issuer: 'velam' }
        );

        const updatedUser = await userCollection.findByIdAndUpdate(
          user._id,
          { token: token },
          { new: true }
        );
        res.header('token', token).json({ success: true, data: updatedUser });
      } else {
        throw new Error('Invalid password, please try again!');
      }
    } else {
      throw new Error('Email does not exists. please try again!');
    }
  } catch (err) {
    next(err.message);
  }
};
//update user
const updateUser = (res, req, next) => {
  try {
    console.log('i am from update');
    res.send('i am from update');
  } catch (err) {
    next(err);
  }
};
//delete user
const deleteUser = (req, res, next) => {
  try {
    console.log('i am from delete');
    res.send('i am from delete');
  } catch (err) {
    next(err);
  }
};

const verifyUserToken = async (req, res, next) => {
  try {
    console.log('token')
    const token = req.headers.token;
    const payload = jwt.verify(token, process.env.TOKEN_KEY );
    console.log(payload)
    const user = await userCollection.findById(payload._id);
    console.log(user)
    res.json({ success: true, data: user });
  } catch (err) {
    console.log(err.message)
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
