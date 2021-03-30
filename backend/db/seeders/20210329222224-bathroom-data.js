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

    await queryInterface.bulkDelete('Bathroom', null, {});

 }
};




// // down: (queryInterface, Sequelize) => {
// //   const Op = Sequelize.Op;
// //   return queryInterface.bulkDelete('Users', {
// //     username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
// //   }, {});
// // }
// // };
