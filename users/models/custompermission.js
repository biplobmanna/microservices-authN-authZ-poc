'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CustomPermission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CustomPermission.init({
    UserID: DataTypes.INTEGER,
    ModuleID: DataTypes.INTEGER,
    HexPermission: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CustomPermission',
  });
  return CustomPermission;
};