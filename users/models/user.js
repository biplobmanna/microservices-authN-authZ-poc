'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.CustomPerission);
    }
  }
  User.init({
    Name: DataTypes.STRING,
    Email: DataTypes.STRING,
    Password: DataTypes.STRING,
    PermissionHex: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'User',
    freezeTableName: true,
    defaultScope: {
      attributes: { exclude: ['Password'] }
    }
  });
  return User;
};