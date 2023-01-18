import { Schema, model } from 'mongoose';


const productSchema = new Schema({
    productName: { type: String, required: true ,unique:true},
    description: { type: String, required: true },
    price: { type: Number, required: true },
    brand: { type: String, required: true },
    lifeStyle: { type: String, enum: ['puppy', 'adult', 'senior'], default: 'adult' },
    petSize: { type: String, enum: ['small', 'medium', 'large'], default: 'small' },
    /* productImage: {
        type: String, default: function () {
            return 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.collinsdictionary.com%2Fimages%2Ffull%2Fpetfood_150577460.jpg&imgrefurl=https%3A%2F%2Fwww.collinsdictionary.com%2Fde%2Fworterbuch%2Fenglisch%2Fpet-food&tbnid=DVqgAT2IGzGK4M&vet=12ahUKEwjd88O6oNH8AhU5oScCHYIACccQMygDegUIARDqAw..i&docid=xdve07u5DYysPM&w=1000&h=724&q=pet%20food&ved=2ahUKEwjd88O6oNH8AhU5oScCHYIACccQMygDegUIARDqAw'
        }
    }, */
    sale: { type: Boolean },

    
    
});

const productCollection = model('product', productSchema);

productCollection.createIndexes({productName : -1 });

export default productCollection;