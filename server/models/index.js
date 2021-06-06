const Sequelize = require('sequelize');
const {
  DB,
  USER,
  PASSWORD,
  HOST,
  dialect,
  pool
} = require('../config.js');

const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect,
  pool,
});

module.exports = {
  Sequelize,
  sequelize,
  todolist: require('./todolist.model')(sequelize, Sequelize),
};
