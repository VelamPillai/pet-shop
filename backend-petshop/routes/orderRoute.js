import express from 'express';

import {
  addOrder,
  getAllOrder,
  getSingleOrder,
  updateOrder,
  deleteOrder 
 
} from '../controller/orderController.js'

import isAdmin from '../middlewares/isAdmin.js';
//import { OrderInputValidation } from '../middlewares/OrderInputValidation.js';
import verifyToken from '../middlewares/verifyToken.js';

const route = express.Router();

//GET -all order -Admin
//route.get('/', verifyToken, isAdmin, getAllOrder);


//GET - only user can view his own orders
//route.get('/userOrders', verifyToken, getAllOrder);
route.get('/',getAllOrder);


//POST - new Order
route.post('/addOrder',addOrder);

//GET - singleOrder
//route.get('/:id', verifyToken, getSingleOrder);
route.get('/:id',getSingleOrder);


//PATCH - update Order
//route.patch('/:id', verifyToken,  updateOrder);
 route.patch('/:id',  updateOrder); 

//DELETE - delete Order
//route.delete('/:id', verifyToken, deleteOrder);
route.delete('/:id', deleteOrder);




export default route;