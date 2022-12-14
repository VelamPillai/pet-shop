import express from 'express';

import {
  getAllUser,
  getSingleUser,
  addNewUser,
  loginUser,
  updateUser,
  deleteUser,
} from '../controller/userController.js';
import { userInputValidation } from '../middlewares/userInputValidation.js';
import verifyToken from '../middlewares/verifyToken.js';
import { isAdmin } from '../middlewares/isAdmin.js';

const route = express.Router();

//GET
route.get('/',verifyToken, isAdmin, getAllUser);

//GET - singleUser
route.get('/:id', verifyToken,isAdmin, getSingleUser);

//POST - new user
route.post('/signup', userInputValidation, addNewUser);

//POST - login user
route.post('/login', loginUser);

//PATCH - update user
route.patch('/:id', verifyToken,isAdmin, updateUser);

//DELETE - delete user
route.delete('/:id', verifyToken, deleteUser);

export default route;
