'use strict';
const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.bulkInsert('Reviews', [
       {
         reviewerId: 2,
         bathroomId: 4,
         reviewText: "this bathroom is really great!!",
         rating: 5,
         reviewImgUrl: "some url"
       }
     ], {});
  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.bulkDelete('Reviews', null, {});

  }
};
