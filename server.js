const express = require('express');
const bodyParser = require('body-parser'); // For create the `req.body` object
const cors = require('cors'); // Provides Express middleware to enable CORS with various options
require('dotenv').config(); // For use `/.env` file

const app = express();

/* Constant */
// Root URL
const DOMAIN = process.env.DOMAIN || 'http://localhost' ;
const PORT = process.env.PORT || 8080;
const ROOT_URL = `${DOMAIN}:${PORT}`;

/* CORS Setting */
const corsOptions = {
  origin: ROOT_URL,
};
app.use(cors(corsOptions));

/* Body Parser */
// Parse requests of content-type: application/json
app.use(bodyParser.json());
// Parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

/* Routes */
// Root
app.get('/', (_req, res) => {
  res.json({ message: 'Welcome to Fullstack Todo List!' });
});

/* Listener */
app.listen(PORT, () => {
  console.log(`Server is running on ${ROOT_URL}`);
});
