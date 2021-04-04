'use strict';
const { Random } = require('random-js');
const faker = require('faker');
const random = new Random();  //object

module.exports = {
  up: (queryInterface, Sequelize) => {
    //for random reviewText
    let randomReviewText=function(){
      const words = ["The", "a", "for", "smells", "hate", "worst", "love", "Loo", "Bathroom", "Toilet", "porta potty", "Squatter", "urinal", "hole", "Spa", "Peu", "unique", "Lavendar", "Lavatory", "Twinkle", "Powder", "Wash", "Privy", "smelliest", "Pan", "Outdoor", "Latrine", "Outhouse", "Bog", "Potty", "Watercloset", "Bidet", "Dunny", "Shabby Chic", "Flamboyant", "Jazzy", "Radiant", "Glowing", "fresh", "iridescent", "Drab", "never want to leave", "sooty", "Rustic", "Somber", "Muddy", "Dump", "Number 2", "Sudatory", "Dirty", "Merde", "this is", "Toilettes", "Merda", "Dung", "Putrid", "Pungent", "Blooming", "Antiseptic", "Crater", "Sinkhole", "Pothole", "Pit"]
      const reviewTextLength = random.integer(5, 20);
      const reviewText = [];
      for (let i = 0; i < reviewTextLength; i++){
        let newWord = words[random.integer(0, words.length - 1)]
        reviewText.push(newWord)
      }
      return reviewText.join(" ");
    }

    let seederData = [];
    for(let i = 0; i < 1000; i++){
      seederData.push(
        {
          reviewerId: random.integer(1, 8),
          bathroomId: random.integer(1, 1000),
          reviewText: randomReviewText(),
          rating: random.integer(1, 5),
          reviewImgUrl: faker.image.imageUrl()
        }
      )
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
    return queryInterface.bulkInsert('Reviews', seederData, {});


  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Reviews', null, {});

  }
};
