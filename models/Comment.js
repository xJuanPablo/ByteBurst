const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: true
    },
    content: DataTypes.TEXT,
    allowNull: false,
  },
  {
  sequelize,
  modelName: 'comment',
  freezeTableName: true
  }
);

module.exports = Comment;