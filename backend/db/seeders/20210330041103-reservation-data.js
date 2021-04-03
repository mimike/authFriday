'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Reservations', [
        {
          reserverId: 7,
          bathroomId: 1,
          reservationDate: new Date()
        },
        {
          reserverId: 6,
          bathroomId: 1,
          reservationDate: new Date()
        },
        {
          reserverId: 5,
          bathroomId: 3,
          reservationDate: new Date()
        }

    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Reservations', null, {});

  }
};
