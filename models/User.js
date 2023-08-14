const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Users extends Model {
  checkPassword(loginPw) {
  return bcrypt.compareSync(loginPw, this.password);
}
}
// Model is a parent object from sequelize
Users.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8]
      }
    }
  },
  {
    sequelize,
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.email = await newUserData.email.toLowerCase();
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updateUserData) => {
        updateUserData.email = await updateUserData.email.toLowerCase();
        updateUserData.password = await bcrypt.hash(updateUserData.password, 10);
        return updateUserData;
      }
      }
  },
  {
    // This links to database
    timestamps: false,
    underscored: true,
    modelName: 'user',
    freezeTableName: true
  }
);


module.exports = Users

//TODO: Notes
//if a field name is camel case when it is created in the database, it will be underscored. Ex: lastName will be last_name