const getIdeaById = (req, res, next) => {
  res.send(req.idea);
};

module.exports = getIdeaById;
