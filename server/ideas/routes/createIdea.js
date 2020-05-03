const addToDatabase = require('../../db').addToDatabase;

const createIdea = (req, res, next) => {
  const idea = req.body;
  try {
    let result = addToDatabase('ideas', idea);
    res.status(201).send(result);
  } catch(err) {
    next(err);
  }
};

module.exports = createIdea;
