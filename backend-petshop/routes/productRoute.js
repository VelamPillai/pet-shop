import express from 'express';

import {
  getAllProduct,
  getSingleProduct,
  addNewProduct,
  loginProduct,
  updateProduct,
  deleteProduct,
  verifyProductToken,
} from '../controller/ProductController.js';
import { isAdmin } from '../middlewares/isAdmin.js';
import { ProductInputValidation } from '../middlewares/ProductInputValidation.js';
import verifyToken from '../middlewares/verifyToken.js';

const route = express.Router();

//GET
route.get('/', verifyToken, isAdmin, getAllProduct);


//POST - new Product
route.post('/signup', ProductInputValidation, addNewProduct);

//POST - login Product
route.post('/login', loginProduct);

// Get - Verify Product Token
route.get('/verifyProducttoken', verifyProductToken);


//GET - singleProduct
route.get('/:id', verifyToken, isAdmin, getSingleProduct);

//GET -allProduct
route.get('/',getAllProduct)

//PATCH - update Product
//route.patch('/:id', verifyToken, isAdmin, updateProduct);
 route.patch('/:id',  updateProduct); 

//DELETE - delete Product
//route.delete('/:id', verifyToken, isAdmin, deleteProduct);
route.delete('/:id', deleteProduct);




export default route;
