import {check, validationResult} from 'express-validator';

const userInputValidation = [
    check('firstName').exists().trim().isLength({ min: 4, max: 20 }).withMessage('First Name should be in the range between 4 and 20'),
    check('lastName').exists().trim().isLength({ min: 4, max: 20 }).withMessage('Last Name should be in the range between 4 and 20'),
    check('email').normalizeEmail().isEmail().trim().withMessage('please enter the valid Email'),
    check('password').isStrongPassword({minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
    }).withMessage('password should contain 8 minimum characters ,1 lowercase , 1 uppercase and 1 number'),

    //custom middleware

    (req, res, next) => {
        const result = validationResult(req)
        let error = null
        result.isEmpty() ? next() :
            (error = result.errors.reduce((acc, currentElement) => {
                acc[currentElement.param] = currentElement.msg;
                return acc
            }, {}))
        next({ message: error } );
        
    }
    






]