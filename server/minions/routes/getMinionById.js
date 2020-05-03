const getMinionById = (req, res, next) => {
  res.send(req.minion);
};

module.exports = getMinionById;
