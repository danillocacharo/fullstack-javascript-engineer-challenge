'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('user_type', [{
      id: '3138560e-a4da-4baf-aa08-ecf1a891958c',
      description: 'User',
      active: true,
      created_at: new Date()
    },{
      id: '4138560e-a4da-4baf-aa08-ecf1a891958d',
      description: 'Admin',
      active: true,
      created_at: new Date()
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('user_type', null, {});
  }
};
