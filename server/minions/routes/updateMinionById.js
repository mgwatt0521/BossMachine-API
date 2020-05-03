const updateInstanceInDatabase = require('../../db').updateInstanceInDatabase;

const updateMinionById = (req, res, next) => {
  const minion = req.body;
  minion.id = req.params.id;
  try {
    let result = updateInstanceInDatabase('minions', minion);
    res.send(result);
  } catch(err) {
    next(err);
  }
};

module.exports = updateMinionById;
