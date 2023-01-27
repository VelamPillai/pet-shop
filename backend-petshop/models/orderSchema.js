import { Schema, model } from 'mongoose';






const orderSchema = new Schema({
    items: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref:"products"
    }],
    userId: { type: Schema.Types.ObjectId, ref: "users" ,required:true},
    totalPrice: { type: Number, required: true },
    quantity: { type: Number },
    userAddress: { type: String, required: true },
    status: { type: String, enum: ['delivered', 'shipped', 'inProcess'], default: 'inProcess' },
    carrier: { type: String, enum: ['DHL', 'UPS', 'DPD'], default: 'DHL' },
    orderedDate : {type:Date ,required:true,default: Date.now}
    
  
});


const orderCollection = model('orders', orderSchema);



export default orderCollection;