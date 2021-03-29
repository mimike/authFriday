'use strict';
const faker = require('faker');
module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.bulkInsert('Reservation', [{
       reservationId: 6,
       bathroomId: 9,
       reservationDate: 
      }], {});

  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.bulkDelete('Reservation', null, {});

  }
};
