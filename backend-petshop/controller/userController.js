import userCollection from '../models/userSchema.js';



//get all user
const getAllUser = (req, res, next) => {
    try {
        console.log('hello i am get user');
        res.send('hello i am get user');
        
    }
    catch (err) {
        next(err);
    }
    
}

//get single user
const getSingleUser = (res, req, next) => {
    try {
        console.log('hello from getalluser');
        res.send('hellofrom sendalluser');
        
    }
    catch (err) {
        next(err);
    }
}

//sign up - add new user
const addNewUser = async (req, res, next) => {
    try {
        const user = new userCollection(req.body);
        if (user) {
            

            await user.save();
            res.json({ success: true, data: user });
        }
        else {
            throw new Error('user details is not proper');
        }
      
        
    }
    catch (err) {      
        
        next(err);
    }
}
//login - user
const loginUser = (res, req, next) => {
    try {
        console.log('i am from login');
        res.send('i am from log in');
    }
    catch(err) {
        next(err);
    }
}
//update user
const updateUser = (res, req, next) => {
    try {
        console.log('i am from update');
        res.send('i am from update');

    }
    catch (err) {
        next(err);
    }
}
//delete user
const deleteUser = (req, res, next) => {
    try {
        console.log("i am from delete");
        res.send('i am from delete');
    }
    catch (err) {
        next(err);
    }
}
export { getAllUser, getSingleUser, addNewUser ,loginUser , updateUser , deleteUser };