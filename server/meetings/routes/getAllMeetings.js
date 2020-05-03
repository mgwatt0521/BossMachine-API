const getAllFromDatabase = require('../../db').getAllFromDatabase;

const getAllMeetings = (req, res, next) => {
  res.send(getAllFromDatabase('meetings'));
};

module.exports = getAllMeetings;
