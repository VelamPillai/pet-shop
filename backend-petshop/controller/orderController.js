import orderCollection from '../models/orderSchema.js';

import dotenv from "dotenv";

dotenv.config();

//POST : add a new order to the database 
const addOrder = async (req, res, next) => {
    console.log('add order',req.body)
    try {
        
        const order = new orderCollection(req.body);
        await order.save();
        res.json({ success: true, data: order }); 
        
    }
    catch (err) {
        console.log(err)
        next(err.message);
        
    }
    
}

//GET : get all order from the database

const getAllOrder = async (req, res, next) => {
    try {

         
        const orders = await orderCollection.find().populate('items').populate('userId');

        res.json({ success: true, data: orders });
    }
    catch (err) {
        next(err);
        
    }
    
}

//GET - Single order

const getSingleOrder = async(req, res, next) => {
    try {
        const id = req.params.id;
        const singleOrder = await orderCollection.findById(id).populate('items').populate('userId');
        console.log(singleOrder)
        res.status(200).json({success:true,data:singleOrder})

        
    }
    catch (err) {
        next(err)
    }
}

//PATCH - update order
const updateOrder = async (req, res, next) => {
    console.log('update',req.params.id)
    try {
        const id = req.params.id;
             
        const order = await orderCollection.findByIdAndUpdate(id, req.body, { new: true });
        
        const orders = await orderCollection.find();
       res.json({ success: true, data: orders })
   } 
    catch (err) {
        next(err)
    }
}

//DELETE Order

const deleteOrder = async (req, res, next) => {
    try {
        const id = req.params.id;
        const selectedOrder = await orderCollection.findById(id);
        if (selectedOrder) {
            const deleteStatus = await orderCollection.deleteOne({
                _id: id
            });
            const orders = await orderCollection.find();
            res.json({ success: true, status: deleteStatus, data: orders })
        }
       
        else{throw new Error("order doesn't exist ! ")}
        
    }
    catch (err) {
        
    }
}
export {
    addOrder,
    getAllOrder,
    getSingleOrder,
    updateOrder,
    deleteOrder
}