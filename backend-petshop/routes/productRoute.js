import express from 'express';

import {
  
    addNewProduct,
    getAllProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct
  
 
} from '../controller/productController.js';

/* import { ProductInputValidation } from '../middlewares/ProductInputValidation.js'; */


const route = express.Router();

//GET
route.get('/', getAllProduct); 


//POST - new Product
route.post('/addProduct',  addNewProduct);


//GET - singleProduct
route.get('/:id',  getSingleProduct);


//PATCH - update Product
 route.patch('/:id',  updateProduct); 

//DELETE - delete Product
//route.delete('/:id', verifyToken, isAdmin, deleteProduct);
route.delete('/:id', deleteProduct); 




export default route;
