import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

try {
  mongoose.connect(process.env.MONGO_URI, () => {
    console.log('DB connection established');
  });
}
catch (err) {
  console.log(err.message);
}