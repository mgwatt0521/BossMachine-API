const deleteFromDatabaseById = require('../../db').deleteFromDatabasebyId;

const deleteIdeaById = (req, res, next) => {
  deleteFromDatabaseById('ideas', req.params.id);
  res.status(204).end();
};

module.exports = deleteIdeaById;
