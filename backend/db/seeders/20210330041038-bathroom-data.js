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
          state: "Wisconsin",
          costPerDay: 40.00,
          locationType: "public bathroom",
          bathroomImgUrl: "https://www.google.com/url?sa=i&u"
        },

        {
          ownerId: 2,
          title: "Brewery Urinals at Reunion Brewery",
          description: "The hoppiest place to pee while enjoying the hoppiest IPA from a hoppy restroom",
          address: "222 Beer Lane",
          city: "Madison",
          state: "Wisconsin",
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
          state: "North Carolina",
          costPerDay: 20.00,
          locationType: "public bathroom",
          bathroomImgUrl: "https://www.google.com/url?sa=i&u"

        },

        {
          ownerId: 4,
          title: "The Novel Neighbor",
          description: "Walls are decorated with pages from old, classic novels. When people ask Holland Saltsman if her book store, the Novel Neighbor in Webster Groves, has a public restroom, she's always delighted to show them the way and then watch their reaction.First their eyes light up. Then they often summon a friend. You have got to see this bathroom!",
          address: "6 New Age Ave",
          city: "St. Louis",
          state: "Missouri",
          costPerDay: 20.00,
          locationType: "public bathroom",
          bathroomImgUrl: "https://www.google.com/url?sa=i&u"
        },

        {
          ownerId: 5,
          title: "The Loo Designed For Discomfort: The Portland Loo",
          description: "The Portland Loo, a unique, patented outdoor bathroom used around the city of Portland, inspires huge fan worship. Locals are very proud of it and its no-nonsense design.These weathered-looking steel shells offer no sink or running water, and grates at the top and bottom of the structure allow onlookers to see in. But do not panic, there is a blind spot, preventing people from seeing something they can never un-see. These loos basically make users want to leave as fast as humanly possible, which is entirely intentional. Its clever designers do not want people to feel comfortable, in case they decide to hang around. Mission accomplished.",
          address: "34 Pearl Street",
          city: "Portland",
          state: "Oregon",
          costPerDay: 20.00,
          locationType: "public bathroom",
          bathroomImgUrl: "https://www.google.com/url?sa=i&u"

        },

        {
          ownerId: 6,
          title: "Down the Mine Passageway Restroom",
          description: "The tiny Colorado town of Minturn might only have a small population of 1,200 people, but the legend of its public toilets has spread far and wide. The two restrooms, one for men and one for women, sit a few feet apart and feature fabricated wood pieces to mimic the entrance to a mine, in a cool nod to the towns mining heritage. One of Design Curail's top picks in 2017, they also feature shiny copper doors with depictions of elk, and inside they are adorned with colourful metal butterflies and other nature images that accent the area's rustic outdoor environment.",
          address: "4 Highway",
          city: "Minturn",
          state: "Colorado",
          costPerDay: 20.00,
          locationType: "public bathroom",
          bathroomImgUrl: "https://www.google.com/url?sa=i&u"

        },

        {
          ownerId: 7,
          title: "The Living Wall Of Lavatories",
          description: "Longwood Gardens, a horticultural space in Kennett Square, Pennsylvania, is a beautiful place for a stroll but it is an even better place to use the restroom. Its facilities, which won the 2014 Cintas America's Best Restroom award, offer 17 commodious chambers built into an enormous 4,200-square-foot living green wall. The eco-friendly facility even features its own docents, in case you get lost. Using the loo here is quite an extraordinary experience, which is why these toilets have become a must-see destination for the gardens guests.",
          address: "6 NewAge Ave",
          city: "Longwood",
          state: "Pennsylvania",
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
