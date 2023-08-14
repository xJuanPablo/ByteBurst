const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Thread extends Model{}

Thread.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'thread',
    freezeTableName: true
  }
);

module.exports = Thread;