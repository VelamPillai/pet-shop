import orderCollection from '../models/orderSchema.js';

import dotenv from "dotenv";

dotenv.config();

//POST : add a new order to the database 
const addOrder = async (req, res, next) => {
    console.log('order')
    try {
        console.log(req.body)
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
        const orders = await orderCollection.find().populate();

        res.json({ success: true, data: orders });
    }
    catch (err) {
        next(err);
        
    }
    
}


export {
    addOrder,
    getAllOrder
}