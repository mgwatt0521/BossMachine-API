const addToDatabase = require('../../db').addToDatabase;

const createMinion = (req, res, next) => {
  const minion = req.body;
  try {
    let result = addToDatabase('minions', minion);
    res.status(201).send(result);
  } catch(err) {
    next(err);
  }
};

module.exports = createMinion;
