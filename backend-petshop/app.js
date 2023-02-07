import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import morgan from 'morgan';
import upload from 'express-fileupload';
import cors from 'cors';

//import path: __dirname
import path from 'path';
const __dirname = path.dirname(new URL(import.meta.url).pathname);

//to access env parameters
dotenv.config();

//DB connection
import './models/dbConnection.js';

//import : user defined function
import userRoute from './routes/userRoute.js';
import productRoute from './routes/productRoute.js';
import orderRoute from './routes/orderRoute.js';

//create and initialize express server
const app = express();

//for monnogoose error
mongoose.set('strictQuery', true);

//cors config
app.use(cors({ origin: 'http://localhost:3000', exposedHeaders: ['token'] }));

//middleware for get file-data request(from express-fileupload)
app.use(upload());

//external middleware
//req-log middleware
app.use(morgan('dev'));
//parse json middleware
app.use(express.json());

//routes - custom middleware


app.use(express.static("./views/build"));

app.get('/', (req,res, next)=> {
  res.sendFile("./views/build/index.html", { root: "." });
})
//GET ,POST,PATCH,DELETE - req '/user'endpoint and its controller

app.use('/users', userRoute);
//GET ,POST,PATCH,DELETE - req '/product'endpoint and its controller
app.use('/products', productRoute);
//GET ,POST,PATCH,DELETE - req '/order'endpoint and its controller
app.use('/orders', orderRoute);

//page not found
app.use((req, res, next) => {
  res.sendFile('views/pageNotFound.html', { root: __dirname }); //sendFile needs absolute path of the File+
});

//universal Error handler - custom middleware with error as a parameter
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ status: false, message: err });
});

//listening request on port
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server started ... listening on port : ${PORT}`);
});
