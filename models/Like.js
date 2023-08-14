const { Model, DataTypes } = require('sequelize');
const sequelize = require('sequelize');

class Like extends Model{}

Like.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    PostId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    sequelize,
    modelName: 'like',
    freezeTableName: true
  }
);

module.exports = Like;