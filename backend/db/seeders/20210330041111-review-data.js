'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Reviews', [
        {
        reviewerId: 2,
         bathroomId: 1,
         reviewText: "this bathroom is really great!!",
         rating: 5,
         reviewImgUrl: "some url"
      },
      {
        reviewerId: 2,
         bathroomId: 2,
         reviewText: "this bathroom is really smelly!!",
         rating: 3,
         reviewImgUrl: "some url"
      },
      {
        reviewerId: 3,
         bathroomId: 4,
         reviewText: "this is the greatest toilet ever!!",
         rating: 3,
         reviewImgUrl: "some url"
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Reviews', null, {});

  }
};
