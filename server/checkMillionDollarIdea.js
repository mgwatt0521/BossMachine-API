const checkMillionDollarIdea = (req, res, next) => {
  const idea = req.body;

  if (idea.numWeeks === undefined || idea.weeklyRevenue === undefined) {
    const err = new Error('Invalid idea: must supply \'numWeeks\' and \'weeklyRevenue\'');
    err.status = 400;
    return res.status(err.status).send(err.message);
  }

  if (isNaN(idea.numWeeks) || isNaN(idea.weeklyRevenue)) {
    const err = new Error('Invalid idea: \'numWeeks\' and \'weeklyRevenue\' must be numeric');
    err.status = 400;
    return res.status(err.status).send(err.message);
  }

  if ((idea.numWeeks * idea.weeklyRevenue) >= 1000000) {
    next();
  } else {
    const err = new Error('Invalid idea: the idea supplied is worth less than $1,000,000!');
    err.status = 400;
    return res.status(err.status).send(err.message);
  }
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
