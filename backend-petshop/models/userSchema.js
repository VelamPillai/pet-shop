import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName :{type :String , required : true},
    email: { type: String, required: true , unique: true },
    password: { type: String, required: true },
    profileImage: {
        type: String, default: function () {
            return `https://joeschmoe.io/api/v1/${this.firstName}`
        }
    }
        
});

const userCollection = model('user', userSchema);

userCollection.createIndexes({ email: -1 });

export default userCollection;