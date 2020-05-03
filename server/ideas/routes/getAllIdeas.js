const getAllFromDatabase = require('../../db').getAllFromDatabase;

const getAllIdeas = (req, res, next) => {
  res.send(getAllFromDatabase('ideas'));
};

module.exports = getAllIdeas;
