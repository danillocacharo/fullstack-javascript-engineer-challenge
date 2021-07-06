'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('user', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        unique: true
      },
      nickname: {
        field: 'nickname',
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true
      },
      name: {
        field: 'name',
        type: Sequelize.STRING(255),
        allowNull: false
      },
      phone: {
        field: 'phone',
        type: Sequelize.STRING(255),
      },
      email: {
        field: 'email',
        type: Sequelize.STRING(255),
        allowNull: true,
        unique: true
      },
      userTypeId: {
        field: 'user_type_id',
        type: Sequelize.UUID,
        allowNull: false
      },
      active: {
        field: 'active',
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: 0
      },
      createdAt: {
        field: 'created_at',
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        field: 'updated_at',
        type: Sequelize.DATE
      }
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('user');
  }
};
