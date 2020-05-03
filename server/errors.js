const createValidationError = (errors) => {
  if (!errors.isEmpty()) {
    const logString = JSON.stringify({ errors: errors.array() }, null, 2);
    const errString = JSON.stringify({ errors: errors.array() });
    const err = new Error(errString);
    err.status = 400;
    err.logString = logString;
    return err;
  } else {
    return undefined;
  }
};

module.exports = createValidationError;
