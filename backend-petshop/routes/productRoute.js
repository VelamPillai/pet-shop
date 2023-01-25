import express from 'express';

import {
  
    addNewProduct,
    getAllProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct
  
 
} from '../controller/productController.js';

import verifyToken from '../middlewares/verifyToken.js';
import isAdmin from '../middlewares/isAdmin.js';

/* import { ProductInputValidation } from '../middlewares/ProductInputValidation.js'; */


const route = express.Router();

//GET
route.get('/', getAllProduct); 


//POST - new Product
route.post('/addProduct',  addNewProduct);


//GET - singleProduct
route.get('/:id',  getSingleProduct);


//PATCH - update Product
 route.patch('/:id', verifyToken, isAdmin, updateProduct); 

//DELETE - delete Product
route.delete('/:id', verifyToken, isAdmin, deleteProduct);
//route.delete('/:id', deleteProduct); 




export default route;
