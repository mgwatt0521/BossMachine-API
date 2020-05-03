const express = require('express');
const apiRouter = express.Router();

const minionsRouter = require('./minions/minionsRouter');
apiRouter.use('/minions', minionsRouter);

const ideasRouter = require('./ideas/ideasRouter');
apiRouter.use('/ideas', ideasRouter);

const meetingsRouter = require('./meetings/meetingsRouter');
apiRouter.use('/meetings', meetingsRouter);

module.exports = apiRouter;
