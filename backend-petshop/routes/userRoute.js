import express from 'express';

import { getAllUser, getSingleUser, addNewUser, loginUser, updateUser, deleteUser } from '../controller/userController.js';
import { userInputValidation } from '../middlewares/userInputValidation.js';




const route = express.Router();

//GET
route.get('/', getAllUser);

//GET - singleUser
route.get('/:id', getSingleUser);

//POST - new user
route.post('/signup',userInputValidation, addNewUser);

//POST - login user
route.post('/login', loginUser);

//PATCH - update user
route.patch('/:id', updateUser);

//DELETE - delete user
route.delete('/:id', deleteUser);


export default route;