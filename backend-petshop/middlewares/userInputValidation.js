import { check, validationResult } from 'express-validator';

export const userInputValidation = [
  check('firstName')
    .exists()
    .trim()
    .isLength({ min: 4, max: 20 })
    .withMessage('First Name should be in the range between 4 and 20!'),
  check('lastName')
    .exists()
    .trim()
    .isLength({ min: 4, max: 20 })
    .withMessage('Last Name should be in the range between 4 and 20!'),
  check('email')
    .isEmail()
    .normalizeEmail()
    .trim()
    .withMessage('Please enter a valid email!'),

  check('password')
    .isStrongPassword({
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
      returnScore: false,
      pointsPerUnique: 0,
      pointsPerRepeat: 0,
      pointsForContainingLower: 0,
      pointsForContainingUpper: 0,
      pointsForContainingNumber: 0,
      pointsForContainingSymbol: 0,
    })

    .withMessage(
      'Password should contain 8 minium characters, 1 lowercase, 1 uppercase and one number'
    ),

  (req, res, next) => {
    const result = validationResult(req);
    let error = null;
    next(
      result.isEmpty()
        ? null
        : (error = result.errors.reduce((acc, currentElement) => {
            acc[currentElement.param] = currentElement.msg;
            return acc;
          }, {}))
    );
  },
];
