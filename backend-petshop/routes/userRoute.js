import express from 'express';

import {
  getAllUser,
  getSingleUser,
  addNewUser,
  loginUser,
  updateUser,
  deleteUser,
  verifyUserToken,
} from '../controller/userController.js';
import { isAdmin } from '../middlewares/isAdmin.js';
import { userInputValidation } from '../middlewares/userInputValidation.js';
import verifyToken from '../middlewares/verifyToken.js';

const route = express.Router();

//GET
route.get('/', verifyToken, isAdmin, getAllUser);


//POST - new user
route.post('/signup', userInputValidation, addNewUser);

//POST - login user
route.post('/login', loginUser);

// Get - Verify User Token
route.get('/verifyusertoken', verifyUserToken);


//GET - singleUser
route.get('/:id', verifyToken, isAdmin, getSingleUser);

//PATCH - update user
route.patch('/:id', verifyToken, isAdmin, updateUser);

//DELETE - delete user
route.delete('/:id', verifyToken, isAdmin, deleteUser);

export default route;
