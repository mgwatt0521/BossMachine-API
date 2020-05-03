const updateInstanceInDatabase = require('../../db').updateInstanceInDatabase;

const updateIdeaById = (req, res, next) => {
  const idea = req.body;
  idea.id = req.params.id;
  try {
    let result = updateInstanceInDatabase('ideas', idea);
    res.send(result);
  } catch(err) {
    next(err);
  }
};

module.exports = updateIdeaById;
