const deleteAllFromDatabase = require('../../db').deleteAllFromDatabase;

const deleteAllMeetings = (req, res, next) => {
  deleteAllFromDatabase('meetings');
  res.status(204).end();
};

module.exports = deleteAllMeetings;
