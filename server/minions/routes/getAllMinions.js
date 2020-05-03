const getAllFromDatabase = require('../../db').getAllFromDatabase;

const getAllMinions = (req, res, next) => {
  res.send(getAllFromDatabase('minions'));
};

module.exports = getAllMinions;
