'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Bathrooms', [
        {
          ownerId: 1,
          title: "Outdoor Porter Potty for All Folx",
          description: "The most utilitarian place ever to pee. All humans welcome. No fuss.",
          address: "13 Main Place",
          city: "Madison",
          state: "WI",
          costPerDay: 40.00,
          locationType: "public bathroom",
          bathroomImgUrl: "https://www.google.com/url?sa=i&u"

        },

        {
          ownerId: 2,
          title: "Brewery Urinals at Reunion Brewery",
          description: "The hoppiest place to pee while enjoying the hoppiest IPA from a hoppy restroom",
          address: "222 Beer Lane",
          city: "Chicago",
          state: "IL",
          costPerDay: 10.00,
          locationType: "public bathroom",
          bathroomImgUrl: "https://www.google.com/url?sa=i&u"

        },

        {
          ownerId: 3,
          title: "Underground Bathroom in a Himalayan Salt Cave",
          description: "The most relaxing place to rest surrounded by real organic himalayan salt. Feel recharged after your rest.",
          address: "6 NewAge Ave",
          city: "Asheville",
          state: "NC",
          costPerDay: 20.00,
          locationType: "public bathroom",
          bathroomImgUrl: "https://www.google.com/url?sa=i&u"

        }


    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Bathrooms', null, {});
  }
};
