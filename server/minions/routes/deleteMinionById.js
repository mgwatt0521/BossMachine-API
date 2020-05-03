const deleteFromDatabaseById = require('../../db').deleteFromDatabasebyId;

const deleteMinionById = (req, res, next) => {
  deleteFromDatabaseById('minions', req.params.id);
  res.status(204).end();
};

module.exports = deleteMinionById;
