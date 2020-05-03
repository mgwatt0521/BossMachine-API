const { body, validationResult } = require('express-validator');
const createValidationError = require('../errors')

const validateMinion = [
  body('salary').isFloat(),
  (req, res, next) => {
    const validationErr = createValidationError(validationResult(req));
    if (validationErr !== undefined) {
      next(validationErr);
    } else {
      next();
    }
  }
];

module.exports = validateMinion;
