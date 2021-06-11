"use strict";
const { Random } = require("random-js");
const faker = require("faker");
const random = new Random(); //object

module.exports = {
  up: (queryInterface, Sequelize) => {
    //for random reviewText
    let randomReviewText = function () {
      const words = [

        "smells",
        "hate",
        "worst",
        "love",
        "loo",
        "bathroom",
        "toilet",
        "porta potty",
        "squatter",
        "urinal",
        "hole",
        "spa",
        "peu",
        "unique",
        "lavendar",
        "lavatory",
        "twinkle",
        "Powder",
        "Wash",
        "Privy",
        "smelliest",
        "Pan",
        "Outdoor",
        "Latrine",
        "Outhouse",
        "bog",
        "potty",
        "Watercloset",
        "Bidet",
        "Dunny",
        "Shabby Chic",
        "Flamboyant",
        "Jazzy",
        "Radiant",
        "fresh",
        "iridescent",
        "Drab",
        "never want to leave",
        "sooty",
        "Rustic",
        "Somber",
        "Muddy",
        "Dump",
        "Number 2",
        "Sudatory",
        "Dirty",
        "Merde",
        "this is",
        "Toilettes",
        "Merda",
        "dung",
        "pungent",
        "blooming",
        "Antiseptic",
        "crater",
        "sinkhole",
        "Pothole",
        "Pit",
      ];

      const randomStartingWord = ["this", "the", "my"]
      const randomNoun = ["toilet", "bathroom", "business", "bidet"]
      const randomLinkingVerb = ["is", "has", "was", "were", "does", "doesn't"]
      const randomVerbs = ["sit", "squat", "pee", "poo", "visit"];
      const randomPronouns = ["she", "he", "they", "them"];
      const randomAdjectives = ["putrid", "unique", "dirty", "muddy", "glowing"]
      const randomPunctuation = ["!", "."];


// This toilet is the dirtiest bathroom I have ever experienced!
// random starting word, linkingverb, random starting word,


      const reviewTextLength = random.integer(5, 30);
      const reviewText = [];
      for (let i = 0; i < reviewTextLength; i++) {
        let newWord = words[random.integer(0, words.length - 1)];

        reviewText.push(`${randomStartingWord[random.integer(0, randomStartingWord.length - 1)]} ${randomNoun[random.integer(0, randomNoun.length - 1)]} ${randomLinkingVerb[random.integer(0, randomLinkingVerb.length - 1)]} ${randomStartingWord[random.integer(0, randomStartingWord.length - 1)]} ${randomAdjectives[random.integer(0, randomAdjectives.length - 1)]} ${randomPronouns[random.integer(0, randomPronouns.length - 1)]} ${randomVerbs[random.integer(0, randomVerbs.length - 1)]} ${randomPunctuation[random.integer(0, randomPunctuation.length - 1)]}`)

        reviewText.push(newWord);
      }
      // if it's a randomPunctuation, .split(" ") and join("") ?
      //needs space before but not after.
      if(reviewText.includes(randomPunctuation)){
        reviewText.join().split
      }
      return reviewText.join(" ");
    };
    let seederData = [];
    for (let i = 0; i < 1550; i++) {
      seederData.push({
        reviewerId: random.integer(1, 8),
        bathroomId: random.integer(1, 810),
        reviewText: randomReviewText(),
        rating: random.integer(1, 5),
        reviewImgUrl: faker.image.imageUrl(),
      });
    }

    //   return queryInterface.bulkInsert('Reviews', [
    //   //   {
    //   //   reviewerId: 1,
    //   //    bathroomId: 1,
    //   //    reviewText: "this bathroom is really great!!",
    //   //    rating: 5,
    //   //    reviewImgUrl: "some url"
    //   // },
    //   // {
    //   //   reviewerId: 2,
    //   //    bathroomId: 2,
    //   //    reviewText: "this bathroom is really smelly!!",
    //   //    rating: 3,
    //   //    reviewImgUrl: "some url"
    //   // },
    //   // {
    //   //   reviewerId: 3,
    //   //    bathroomId: 4,
    //   //    reviewText: "this is the greatest toilet ever!!",
    //   //    rating: 3,
    //   //    reviewImgUrl: "some url"
    //   // },
    //   ...seederData    // b4 the return runs, its spreading
    // ], {});
    return queryInterface.bulkInsert("Reviews", seederData, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Reviews", null, {});
  },
};
