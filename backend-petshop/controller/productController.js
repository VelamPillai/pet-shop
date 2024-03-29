import productCollection from "../models/productSchema.js";
import dotenv from "dotenv";
dotenv.config();
//get all products
const getAllProduct = async (req, res, next) => {
  try {
    const product = await productCollection.find();
    res
      .status(200)
      .json({ success: true, noOfProducts: product.length, data: product });
  } catch (err) {
    next(err);
  }
};
//get single product
const getSingleProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    //console.log(id);
    const product = await productCollection.findById(id);
    //console.log(product);
    res.status(200).json({ success: true, data: product });
  } catch (err) {
    next(err);
  }
};
//  add new product to DB at Backend side
const addNewProduct = async (req, res, next) => {
  try {
    const DBProduct = await productCollection.findOne({
      productName: req.body.productName,
    });
    if (!DBProduct) {
      const product = new productCollection(req.body);
      //console.log(product)//to display req.body information
      await product.save();
      const products = await productCollection.find();
      res.json({ success: true, data: products });
    } else {
      throw new Error("product already exists !");
    }
  } catch (err) {
    console.log(err.message);
    next(err.message);
  }
};
//update product
const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    //console.log(id)
    
   
    const updatedProduct = await productCollection.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    const products = await productCollection.find();
    res.json({ success: true, data: products }); 
  } catch (err) {
    next(err.message);
  }
};
//delete product
const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const selectedProduct = await productCollection.findById(id)
    if (selectedProduct) {
     const deleteStatus = await productCollection.deleteOne({
        _id: id
     });
     const products = await productCollection.find();
      res.json({ success: true, status: deleteStatus ,data:products })
    }
    else{throw new Error("product doesn't exist ! ")}
  } catch (err) {
    next(err);
  }
};
export { addNewProduct, getAllProduct, getSingleProduct, updateProduct ,deleteProduct};