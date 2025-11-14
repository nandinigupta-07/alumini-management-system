import { validationResult } from 'express-validator';

const validateRequest = (req) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const extractedErrors = errors.array().map((err) => ({
      field: err.path,
      message: err.msg,
    }));
    const error = new Error('Validation failed');
    error.statusCode = 422;
    error.errors = extractedErrors;
    throw error;
  }
};

export default validateRequest;


