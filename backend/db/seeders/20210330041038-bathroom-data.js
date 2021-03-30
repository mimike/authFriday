'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Bathrooms', [
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

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('Bathrooms', null, {});
  }
};
