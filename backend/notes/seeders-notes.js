'use strict';

const faker = require('faker');
module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.bulkInsert('Bathrooms', [
       {
         ownerId: 1,
         title: "Outdoor Portor Potty",
         description: "The best place ever to pee",
         address: "13 Main Place",
         city: "Madison",
         state: "WI",
         costPerDay: 40.00,
         locationType: "public bathroom",
         bathroomImgUrl: "https://www.google.com/url?sa=i&u"

       }
     ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Bathrooms', null, {});

 }
};








'use strict';
const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.bulkInsert('Reviews', [
       {
         reviewerId: 2,
         bathroomId: 1,
         reviewText: "this bathroom is really great!!",
         rating: 5,
         reviewImgUrl: "some url"
       }], {});
  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.bulkDelete('Reviews', null, {});

  }
};


'use strict';
const faker = require('faker');
module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.bulkInsert('Reservations', [{
       reserverId: 1,
       bathroomId: 1,
       reservationDate: new Date()
      }], {});

  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.bulkDelete('Reservations', null, {});

  }
};
