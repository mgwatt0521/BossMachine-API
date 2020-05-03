const createNewMeeting = require('../../db').createMeeting;
const addToDatabase = require('../../db').addToDatabase;

const createMeeting = (req, res, next) => {
  const meeting = createNewMeeting();
  try {
    let result = addToDatabase('meetings', meeting);
    res.status(201).send(result);
  } catch(err) {
    next(err);
  }
};

module.exports = createMeeting;
