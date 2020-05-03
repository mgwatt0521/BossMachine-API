const getFromDatabaseById = require('./db').getFromDatabaseById;

const existsInDatabase = (schemaType) => {
  return (req, res, next, id) => {
    const result = getFromDatabaseById(schemaType, id);
    const schemaTypeSingular = schemaType.slice(0, schemaType.length - 1);
    if (result !== undefined) {
      req[schemaTypeSingular] = result;
      next();
    } else {
      res.status(404).send(`${schemaTypeSingular} with id ${id} not found`);
    }
  };
};

module.exports = existsInDatabase;
