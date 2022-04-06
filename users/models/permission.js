'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Permission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Module, {as: 'ModuleID'});
      this.belongsTo(models.Role, { as: 'RoleID'});
    }
  }
  Permission.init({
    RoleID: DataTypes.INTEGER,
    ModuleID: DataTypes.INTEGER,
    HexPermission: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Permission',
    tableName: 'Permission',
    freezeTableName: true,
  });
  return Permission;
};