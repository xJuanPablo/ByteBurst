const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  //these are nessesary for sequelize to connect
{
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
  // 3306 is the port used by mysql workbench
}
);

module.exports = sequelize;