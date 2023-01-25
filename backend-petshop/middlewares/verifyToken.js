import jwt from 'jsonwebtoken';
import userCollection from '../models/userSchema.js';

async function verifyToken(req, res, next) {
  try {
    // extracting token out fom headers
    const { token } = req.headers;
   
    // verify token
    const payload = jwt.verify(token, process.env.TOKEN_KEY); // decoded or payload
    // console.log(payload);

    // Get user from data base
    const user = await userCollection.findById(payload._id);
    // Attaching user in request
    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
}

export default verifyToken;
