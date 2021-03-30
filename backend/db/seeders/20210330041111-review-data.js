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
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Reviews', null, {});

  }
};
