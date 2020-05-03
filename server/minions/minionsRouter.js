const express = require('express');
const minionsRouter = express.Router();
const existsInDatabase = require('../existsInDatabase')('minions');

minionsRouter.get('/', require('./routes/getAllMinions'));

// Checks if the object with id exists.
minionsRouter.param('id', existsInDatabase);

const validateMinion = require('./validateMinion');
minionsRouter.post('/', validateMinion, require('./routes/createMinion'));
minionsRouter.put('/:id', validateMinion, require('./routes/updateMinionById'));

minionsRouter.get('/:id', require('./routes/getMinionById'));
minionsRouter.delete('/:id', require('./routes/deleteMinionById'));


module.exports = minionsRouter;
