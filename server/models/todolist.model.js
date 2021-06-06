/* Create and Define the schema of `todolist` table */
module.exports = (sequelize, Sequelize) => sequelize.define('todolist', {
  title: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
});
