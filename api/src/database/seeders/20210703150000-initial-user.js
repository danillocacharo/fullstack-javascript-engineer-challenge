'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('user', [{
      id: '3138560e-a4da-4baf-aa08-ecf1a891958c',
      nickname: 'admin',
      name: 'Administrator',
      email: 'admin@maxxidata.com',
      user_type_id: "3138560e-a4da-4baf-aa08-ecf1a891958c",
      active: true,
      created_at: new Date()
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('user', null, {});
  }
};
