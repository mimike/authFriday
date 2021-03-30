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
         bathroomImgUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.forbes.com%2Fsites%2Fjamiegold%2F2021%2F01%2F12%2Feight-residential-bathroom-design-trends-for-2021%2F&psig=AOvVaw1Z95_eEA3_E25dkOUBkqNK&ust=1617144240301000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLCMmvLJ1u8CFQAAAAAdAAAAABAG"

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
