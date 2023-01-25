import { Schema, model } from 'mongoose';

const productSubmenu = ['food', 'pharmacy', 'toys', 'treats', 'homes', 'care', 'supplements', 'pet-product'];
const materialType = ['rubber','polyester','push','nylon','na']

const productSchema = new Schema({
    petName:{type: String,default:'dog/cat' },
    productName: { type: String, required: true ,unique:true},
    description: { type: String, required: true },
    price: { type: Number, required: true },
    brand: { type: String, required: true },
    lifeStyle: { type: String, enum: ['puppy', 'adult', 'senior','all'], default: 'all' },
    petSize: { type: String, enum: ['small', 'medium', 'large','all'], default: 'all' },
    productCategory: { type: 'String', enum: productSubmenu, default: 'pet-product' },
    material: { type: String, enum: materialType, default: 'na' },
    productCharacter:[{type : String,default:'1kg'}],
     productImage: {
        type: String, default: function () {
            return 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.collinsdictionary.com%2Fimages%2Ffull%2Fpetfood_150577460.jpg&imgrefurl=https%3A%2F%2Fwww.collinsdictionary.com%2Fde%2Fworterbuch%2Fenglisch%2Fpet-food&tbnid=DVqgAT2IGzGK4M&vet=12ahUKEwjd88O6oNH8AhU5oScCHYIACccQMygDegUIARDqAw..i&docid=xdve07u5DYysPM&w=1000&h=724&q=pet%20food&ved=2ahUKEwjd88O6oNH8AhU5oScCHYIACccQMygDegUIARDqAw'
        }
    }, 
    sale: { type: Boolean },
    productArrival:{type:String ,enum:['new','old'],default:'new'}

    
    
});

const productCollection = model('product', productSchema);

productCollection.createIndexes({productName : -1 });

export default productCollection;