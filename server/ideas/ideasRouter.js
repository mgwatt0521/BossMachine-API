const express = require('express');
const ideasRouter = express.Router();
const existsInDatabase = require('../existsInDatabase')('ideas');
const checkMillionDollarIdea = require('../checkMillionDollarIdea');

ideasRouter.get('/', require('./routes/getAllIdeas'));

// Checks if the object with id exists.
ideasRouter.param('id', existsInDatabase);

ideasRouter.post('/', checkMillionDollarIdea, require('./routes/createIdea'));
ideasRouter.put('/:id', checkMillionDollarIdea, require('./routes/updateIdeaById'));

ideasRouter.get('/:id', require('./routes/getIdeaById'));
ideasRouter.delete('/:id', require('./routes/deleteIdeaById'));


module.exports = ideasRouter;
