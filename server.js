require('dotenv').config(); // For use `/.env` file

const express = require('express');
const bodyParser = require('body-parser'); // For create the `req.body` object
const cors = require('cors'); // Provides Express middleware to enable CORS with various options

const database = require('./app/models');

const app = express();

/* Constant */
// Root URL
const server = {
  DOMAIN: process.env.DOMAIN || 'http://localhost' ,
  PORT: process.env.PORT || 8080,
}
const ROOT_URL = `${server.DOMAIN}:${server.PORT}`;

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

/* Database connection */
process.env.NODE_ENV === 'production'
  ? database.sequelize.sync()
  : database.sequelize
    .sync({ force: true })
    .then(() => console.log('Drop and re-sync database.'));

/* Routes */
// Root
app.get('/', (_req, res) => {
  res.json({ message: 'Welcome to Fullstack Todo List!' });
});

/* Listener */
app.listen(server.PORT, () => {
  console.log(`Server is running on ${ROOT_URL}`);
});
