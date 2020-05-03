const express = require('express');
const app = express();
const morgan = require('morgan');

module.exports = app;

/* Do not change the following line! It is required for testing and allowing
*  the frontend application to interact as planned with the api server
*/
const ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 4001;

// Add middleware for handling CORS requests from index.html
const cors = require('cors');
app.use(cors());

// Add middware for parsing request bodies here:
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Logging
const logConf = ENV === 'production' ? 'tiny' : 'dev';
app.use(morgan(logConf));

// Mount your existing apiRouter below at the '/api' path.
const apiRouter = require('./server/api');
app.use('/api', apiRouter);

// Error handling
app.use((err, req, res, next) => {
  console.log(err.logString || err.message || 'Something terrible happened!');
  const status = err.status || 500;
  const msg = err.message || 'Something terrible happened!';
  res.status(status).send(msg);
});


// This conditional is here for testing purposes:
if (!module.parent) {
  // Add your code to start the server listening at PORT below:
  app.listen(PORT, () => console.log(`BossMachine API listening at http://localhost:${PORT}`));
}
