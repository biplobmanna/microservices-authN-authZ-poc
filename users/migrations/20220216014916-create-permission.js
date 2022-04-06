'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Permission', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      RoleID: {
        type: Sequelize.INTEGER,
        references: {
          model: "Role",
          key: "id"
        }
      },
      ModuleID: {
        type: Sequelize.INTEGER,
        references: {
          model: "Module",
          key: "id"
        }
      },
      HexPermission: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Permission');
  }
};