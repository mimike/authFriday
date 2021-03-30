'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Reservations', [
        {
          reserverId: 1,
          bathroomId: 1,
          reservationDate: new Date()
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Reservations', null, {});

  }
};
