const express = require('express');
const meetingsRouter = express.Router();

meetingsRouter.get('/', require('./routes/getAllMeetings'));
meetingsRouter.post('/', require('./routes/createMeeting'));
meetingsRouter.delete('/', require('./routes/deleteAllMeetings'));

module.exports = meetingsRouter;
