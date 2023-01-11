import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import multer from "multer";
import cors from "cors";

//import path: __dirname
import path from "path";
const __dirname = path.dirname(new URL(import.meta.url).pathname);

//to access env parameters
dotenv.config();

//DB connection
import "./models/dbConnection.js";

//import : user defined function
import userRoute from "./routes/userRoute.js";

//create and initialize express server
const app = express();

//cors config
app.use(cors({ origin: "http://localhost:3001", exposedHeaders: ["token"] }));

// configure multer package
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let fullPath = "./upload";
    cb(null, fullPath);
  },
  filename: function (req, file, cb) {
    let fileName = Date.now() + "_" + file.originalname;
    cb(null, fileName);
  },
});

const upload = multer({ storage: storage });

// server static files/pages
app.use(express.static("upload"));

//external middleware
//req-log middleware
app.use(morgan("dev"));
//parse json middleware
app.use(express.json());

//routes - custom middleware

//GET ,POST,PATCH,DELETE - req '/user'endpoint and its controller
app.use("/users", upload.single("profileImage"), userRoute);

//page not found
app.use((req, res, next) => {
  res.sendFile("views/pageNotFound.html", { root: __dirname }); //sendFile needs absolute path of the File+
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
