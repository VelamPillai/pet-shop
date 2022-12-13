import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  token: { type: String },
  profileImage: {
    type: String,
    default: function () {
      return `https://joeschmoe.io/api/v1/${this.firstName}`;
    },
  },
});

userSchema.pre('save', function (next) {
  if (this.isModified('password')) {
    const hashedPassword = bcrypt.hashSync(
      this.password,
      Number(process.env.SALT_ROUND)
    );
    this.password = hashedPassword;
  }
  next();
});

const userCollection = model('user', userSchema);

userCollection.createIndexes({ email: -1 });

export default userCollection;
