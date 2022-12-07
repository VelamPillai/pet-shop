import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';

//import path: __dirname
import path from 'path';
const __dirname = path.dirname(new URL(import.meta.url).pathname);

//to access env parameters
dotenv.config();

//DB connection
import './models/dbConnection.js';

//import : user defined function
import userRoute from './routes/userRoute.js';

//create and initialize express server
const app = express();

//external middleware
//req-log middleware
app.use(morgan('dev'));
//parse json middleware
app.use(express.json());

//routes - custom middleware

//GET ,POST,PATCH,DELETE - req '/user'endpoint and its controller
app.use('/users', userRoute);

//page not found
app.use((req, res, next) => {
  res.sendFile('views/pageNotFound.html', { root: __dirname }); //sendFile needs absolute path of the File+
});

//universal Error handler - custom middleware with error as a parameter
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ status: false, message: err });
});

//listening request on port
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`Server started ... listening on port : ${PORT}`);
});
