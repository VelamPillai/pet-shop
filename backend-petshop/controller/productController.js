import productCollection from '../models/productSchema.js';

import dotenv from 'dotenv';


dotenv.config();

//get all user
const getAllProduct=async(req, res, next) => {
  try {
    const product= await productCollection.find()
    res.status(200).json({success:true,data:user})
  } catch (err) {
    next(err);
  }
};

//get single user
const getSingleproduct= async(req, res, next) => {
  try {
    const product= await productCollection.findOne()
  } catch (err) {
    next(err);
  }
};

//  add new product to DB at Backend side
const addNewProduct= async (req, res, next) => {
  //console.log(req.body)
  try {
    
    const DBProduct= await productCollection.findOne({ productName: req.body.productName });
    //console.log(DBUser);
    if (!DBProduct) {
      const product= new productCollection(req.body);
      //console.log(product)//to display req.body information
      
      await product.save();
      res.json({ success: true, data: product});
    } else {
      throw new Error(
        'product already exists !'
      );
    }
  } catch (err) {
    console.log(err.message);

    next(err.message);
  }
};

//login - user
const loginproduct= async (req, res, next) => {
  try {
    const product= await productCollection.findOne({ email: req.body.email });

    if (user) {
      const checkPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );

      if (checkPassword) {
        let token = jwt.sign(
          { _id: user._id, firstName: user.firstName },
          process.env.TOKEN_KEY,
          { expiresIn: '1h', issuer: 'velam' }
        );

        const updatedproduct= await productCollection.findByIdAndUpdate(
          user._id,
          { token: token },
          { new: true }
        );
        res.header('token', token).json({ success: true, data: updatedproduct});
      } else {
        throw new Error('Invalid password, please try again!');
      }
    } else {
      throw new Error('Email does not exists. please try again!');
    }
  } catch (err) {
    next(err.message);
  }
};
//update user
const updateproduct= async(req, res, next) => {
  try {
 
    let product= await productCollection.findById(req.params.id);
    //image
    if (user.profileImage !== req.body.profileImage)
    {
      user.profileImage = req.body.profileImage
    }
    //password
    if (req.body.password != user.password) {
      user.password = req.body.password;
    }
    await user.save(); 
    let body = {};
    for (const key in req.body) {        
      if (req.body[key]!=='' && key !=='password' ) {
          body[key] = req.body[key];
      }
      const updatedproduct= await productCollection.findByIdAndUpdate(req.params.id, body, { new: true })
      res.json({ success: true, data: updatedproduct });
  }
    
  } catch (err) {    
    next(err.message);
  }
};

//delete user
const deleteproduct= async(req, res, next) => {
  try {
    const {id}= req.params 
    const existingproduct= await productCollection.findById(id);

    if(existingUser){
        const deleteStatus = await productCollection.deleteOne({_id:existingUser._id})
        res.json({success:true, status: deleteStatus})
    }else{
        throw new Error("productid doesn't exist ! ")
    }
    
}
catch(err){
    next(err)
}
  
};

const verifyUserToken = async (req, res, next) => {
  try {
   /*  console.log('token') */
    const token = req.headers.token;
    const payload = jwt.verify(token, process.env.TOKEN_KEY );
    /* console.log(payload) */
    const product= await productCollection.findById(payload._id);
   /*  console.log(user) */
    res.json({ success: true, data: product});
  } catch (err) {
    console.log(err.message)
    next(err);
  }
};
export {
    addNewProduct 
};
