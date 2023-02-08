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
import  isAdmin from '../middlewares/isAdmin.js';
import { userInputValidation } from '../middlewares/userInputValidation.js';
import verifyToken from '../middlewares/verifyToken.js';

const route = express.Router();

//GET
//route.get('/', verifyToken, isAdmin, getAllUser);
route.get('/',getAllUser);



//POST - new user
route.post('/signup', userInputValidation, addNewUser);

//POST - login user
route.post('/login', loginUser);

// Get - Verify User Token
route.get('/verifyusertoken', verifyUserToken);


//GET - singleUser
route.get('/:id', verifyToken, isAdmin, getSingleUser);

//GET -allUser
route.get('/',getAllUser)

//PATCH - update user
route.patch('/:id', verifyToken, isAdmin, updateUser);
 //route.patch('/:id',  updateUser); 

//DELETE - delete user
route.delete('/:id', verifyToken, deleteUser);
//route.delete('/:id', deleteUser);




export default route;
