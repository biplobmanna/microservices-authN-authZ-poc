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
      this.belongsTo(models.User, {as: 'UserID'});
      this.belongsTo(models.Module, {as: 'ModuleID'});
    }
  }
  CustomPermission.init({
    UserID: DataTypes.INTEGER,
    ModuleID: DataTypes.INTEGER,
    HexPermission: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CustomPermission',
    tableName: 'CustomPermission',
    freezeTableName: true,
  });
  return CustomPermission;
};