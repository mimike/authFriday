'use strict';
const { Random } = require('random-js');
const faker = require('faker');
const random = new Random();  //object

module.exports = {
  up: (queryInterface, Sequelize) => {
    // making a random bathroom title and description generator .concat[]
    let randomTitle = function(){
      const words = ["The", "Loo", "Bathroom", "Toilet", "Porta", "Squatter", "Urinal", "Hole", "Spa", "Peu", "Unique", "Lavendar", "Lavatory", "Twinkle", "Powder", "Wash", "Privy", "Smelly", "Pan", "Outdoor", "Latrine", "Outhouse", "Bog", "Potty", "Watercloset", "Bidet", "Dunny", "Shabby Chic", "Flamboyant", "Jazzy", "Radiant", "Glowing", "Fresh", "Iridescent", "Drab", "Chintzy", "Sooty", "Rustic", "Somber", "Muddy", "Dump", "Number 2", "Sudatory", "Dirty", "Merde", "La Salle de Bain", "Toilettes", "Merda", "Dung", "Putrid", "Pungent", "Blooming", "Antiseptic", "Crater", "Sinkhole", "Pothole", "Pit"]
      const titleLength = random.integer(3, 8);  // min 3-10
      const title = [];
      for (let i = 0; i < titleLength; i++){
        let newWord = words[random.integer(0, words.length - 1)]
        if(!title.includes(newWord)){
          title.push(newWord)     // 0 index to last index
        } else {
          i--
        }
      }
      return title.join(" "); // return a random word concatted with a space
    }

    let randomDescriptionTitle = function(){
      const sentences = [
        "Standing short and stout with white jade, this stone toilet has a very hard to feel about them.",

        `Standing 5' 3" tall, this olive skinned loo has a passive feel about it. A particularly notable feature is his double bidet. He has short, greasy, dark brown doorknobs which is layered. He has piercings in six places: both earlobes, both lips, his navel, both eyebrows, his tongue and his chin.
        He has toned arms and powerful hands, a heavy torso with defined muscles, a narrow waist, angular hips, toned legs, and average-sized feet.
        He has a blackwork tattoo covering his left thigh, and an animal tattoo covering his right foot.`,

      "The toilet seat was moist with steam, the mirror fogged, the bath mat damply rumpled on the floor, and the sink blobbed with his thick discharges of toothpaste. I performed my toilet cocooned in my fathers smell of hair oil, Old Spice deodorant, sweat, and faded urine, and then went to sit at the breakfast table with him.",
      `Yes, you read that correctly. As a way to both save women's time from lengthy line waits and the environment from over usage of water, engineers have designed and implemented pretty, pink female urinals. Never fear, though, if you find yourself in one of these babies, they come complete with directions for how to use them.`,

      `Have you ever had a fear you were going to be shot while going to the bathroom? Well, here, there is a spot you need not worry about. This restroom was built to be completely bulletproof. The bulletproof bathroom can be found in Zhong Guan Village Plaza. It was built in response to the terror attacks in the United States on September 11, 2001.`,
      `These delightful little public restrooms might just give you an added vitamin C boost along with the sweet relief that comes from using the WC when you really need to go. Shaped and textured like oranges, these citrus-y pods make for a satisfying and nutritious trip to the loo.`,
      `This strange bathroom prides itself on its unique restrooms. Inside the men's room, you'll feel more like you're in the great outdoors than a hotel bathroom. It features a stone wall trickling with water, but it's not just for decoration - this is actually the urinal. To top things off, the sinks inside the bathroom are made from colossal clam shells.`,
      `Everyone pees and poops. It ias a fact of life we all learn (and laugh about) as kids. In fact, we often laugh about it as grown-ups too, but there are some situations with using the restroom that really aren not funny, at least not for the people living through them! And the most embarrassing moments always seem to occur when you need to go in a public place.`,

      `The Hipopo Papa Café in Japan is one of the strangest bathrooms in the world because its surrounded by a giant aquarium. Its been around for 12 years now and many people from around the world visit the café to see its unique bathroom. You get to see exotic fish in the aquarium. There is also a giant sea turtle swimming around the tank.
      This bathroom cost about $270,000 to build and its only for the ladies. However, if the café isnt busy and there are no people in the restroom, male customers are allowed to have a look inside.
      The lighting in this bathroom is magnificent and the colours and aesthetics give you the feeling of being inside the ocean.`,

      `When you look at the outside of Jungle Jims bathroom it looks like an outhouse. But when you open the door you will see a long corridor that leads into a large bathroom. Even though this looks like a port-a-potty on the outside the bathroom inside is clean and surprisingly elegant.

      This bathroom makes a unique statement and people love it. If you create something thats over the top its going to get attention from a lot of people.`,

      `There are some houses located in South Africa that have the most unusual bathroom settings. You may be able to take some inspiration from these types of bathrooms. One particular house located in Midrand has a clean crisp bathroom with a standalone bathtub thats on a raised platform.

      The platform is lit up by LED lights to create a focal point in the large bathroom. If you want a bathtub in the centre of your bathroom you will need a certified plumber to complete the job for you.`

    ];

      return sentences[random.integer(0, sentences.length - 1)] // random sentence from the array of sentences
    }

    let randomLocationType = function(){
      let locationTypes = ["public bathroom", "private bathroom", "luxury bathroom", "family bathroom", "primitive bathroom", "outdoor bathroom", "snake hole", "basic bathroom", "scenic bathroom"]
      return locationTypes[random.integer(0, locationTypes.length-1)]
    }

    let randomPhotoUrl = function(){
      let photoUrls = [
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1465257474426-bd133d4db35e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1789&q=80",
        "https://cdn.pixabay.com/photo/2020/04/09/06/39/architecture-5019972_960_720.jpg",
        "https://i.pinimg.com/564x/02/76/dd/0276ddcc5a930ef0d46cf854ec6b04b6.jpg",
        "https://static2.thetravelimages.com/wordpress/wp-content/uploads/2018/08/gettyimages-1016170282.jpg?q=50&fit=crop&w=740&h=416",
        "https://hips.hearstapps.com/pop.h-cdn.co/assets/cm/15/05/768x516/54caaa88870be_-_8-ecology-bathroom-xln.jpg?resize=980:*",
        "https://nohomejustroam.com/wp-content/uploads/2018/05/The-Jungle-Jims-Infamous-Privy-680x510.jpg",
        "https://secure.i.telegraph.co.uk/multimedia/archive/01106/fishtoilet460_1106930c.jpg",
        "https://media-cdn.tripadvisor.com/media/photo-s/17/4f/51/4e/bathrooms.jpg",
        "https://i.pinimg.com/originals/10/15/c0/1015c0b4556f3cc98da2b7ed2f842061.jpg",
        "https://cdn.cheapism.com/images/072516_best_restrooms_around_the_world_slide.max-784x410_kzquUH5.jpg",
        "https://cdn.vox-cdn.com/thumbor/BgXq8wArEo6ovDvBSRO3iVOiTDw=/0x0:500x375/1820x1365/filters:focal(0x0:500x375):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/62554188/01_jaleo.0.0.0.jpeg",
        "https://cdn.vox-cdn.com/thumbor/3emZuhxu0cZWNnq5feshajslhPQ=/0x0:500x375/1820x1365/filters:focal(0x0:500x375):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/62554189/02_oki_bowl.0.0.0.jpeg",
        "https://img-s3.onedio.com/id-582db27fb0815a900d8c5a93/rev-0/w-635/listing/f-jpg-webp/s-84a508b46084ebcc3765325a3e6e46383e673bef.webp",
        "https://img-s3.onedio.com/id-582db46eb0815a900d8c5a97/rev-0/w-635/listing/f-jpg-webp/s-a2d8d818e3069b0bdd1c467cca4f17a617ad66ee.webp",
        "https://img-s3.onedio.com/id-582db42bb2cfac7f0dfe817b/rev-0/w-635/listing/f-jpg-webp/s-c29c363a124328df238a6c88da546ac7c5ac8703.webp",
        "https://static-37.sinclairstoryline.com/resources/media/2ae26e41-fe08-4d03-ae7c-9060bad135ef-large1x1_Trump_toilet.jpg?1562185364841",
        "https://i.guim.co.uk/img/media/0730f7aa5c9de467b6ffeb34b52fe83766c036c8/0_234_3500_2101/master/3500.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=70bb37fd99dcd43ee541b289fea44c77",
        "https://i.pinimg.com/originals/97/a5/60/97a5606bf76748423ee8ae13dabd23a8.png",
        "https://media-cdn.tripadvisor.com/media/photo-s/09/a7/76/49/mr-toilet-house.jpg",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/a7/76/45/mr-toilet-house.jpg?w=1000&h=-1&s=1",
        "https://static.dezeen.com/uploads/2020/08/shigeru-ban-transparent-tokyo-toilet-yo-yogi-fukamachi-park-haru-no-ogawa_dezeen_2364%E2%80%93hero_24-852x479.jpg",
        "https://coresites-cdn-adm.imgix.net/mpora_new/wp-content/uploads/2015/06/Crazy-Toilet-1.jpg?fit=crop&w=500&h=439",
        "https://coresites-cdn-adm.imgix.net/mpora_new/wp-content/uploads/2015/06/Crazy-Toilet-22-680x452.jpg?fit=crop&w=680&h=452",
        "https://coresites-cdn-adm.imgix.net/mpora_new/wp-content/uploads/2015/06/Crazy-Toilet-25.jpg?fit=crop&w=470&h=363",
        "https://coresites-cdn-adm.imgix.net/mpora_new/wp-content/uploads/2015/06/Crazy-Toilet-21.jpg?fit=crop&w=670&h=545",
        "https://coresites-cdn-adm.imgix.net/mpora_new/wp-content/uploads/2015/06/Screen-Shot-2015-06-30-at-10.21.04.png?fit=crop&w=634&h=412",
        "https://coresites-cdn-adm.imgix.net/mpora_new/wp-content/uploads/2015/06/Crazy-Toilet-18.jpg?fit=crop&w=468&h=320",
        "https://coresites-cdn-adm.imgix.net/mpora_new/wp-content/uploads/2015/06/Crazy-Toilet-30.jpg?fit=crop&w=669&h=559",
        "https://coresites-cdn-adm.imgix.net/mpora_new/wp-content/uploads/2015/06/Crazy-Toilet-10.jpg?fit=crop&w=450&h=289",
        "https://coresites-cdn-adm.imgix.net/mpora_new/wp-content/uploads/2015/06/Crazy-Toilet-7.jpg?fit=crop&w=400&h=342",
        "https://coresites-cdn-adm.imgix.net/mpora_new/wp-content/uploads/2015/06/Crazy-Toilet-16.jpg?fit=crop&w=640&h=450",
        "https://coresites-cdn-adm.imgix.net/mpora_new/wp-content/uploads/2015/06/Crazy-Toilet-13.jpg?fit=crop&w=600&h=614"

      ]
      return photoUrls[random.integer(0, photoUrls.length - 1)]
    }


    let seederData = [];
    for(let i = 0; i < 800; i++){
      seederData.push(
        {
          ownerId: random.integer(1, 7),
          title: randomTitle(),
          description: randomDescriptionTitle(),
          address: faker.address.streetAddress(),
          city: faker.address.city(),
          state: faker.address.state(),
          costPerDay: random.integer(1, 100),
          locationType: randomLocationType(),
          bathroomImgUrl: randomPhotoUrl()
        }
      )
    }

      return queryInterface.bulkInsert('Bathrooms', [
        {
          ownerId: 1,
          title: "Outdoor Porta Potty for All Folx",
          description: "The most utilitarian place ever to pee. All humans welcome. No fuss.",
          address: "13 Main Place",
          city: "Madison",
          state: "Wisconsin",
          costPerDay: 40.00,
          locationType: "public bathroom",
          bathroomImgUrl: "https://images.unsplash.com/photo-1465257474426-bd133d4db35e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1789&q=80"
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
          bathroomImgUrl: "https://images.unsplash.com/photo-1584346651592-3aacc3c99075?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80"

        },

        {
          ownerId: 3,
          title: "Underground Bathroom in a Himalayan Salt Cave",
          description: "The most relaxing place to rest surrounded by real organic himalayan salt. Feel recharged after your rest.",
          address: "6 New Age Ave",
          city: "Asheville",
          state: "North Carolina",
          costPerDay: 20.00,
          locationType: "public bathroom",
          bathroomImgUrl: "https://cdn.pixabay.com/photo/2016/02/29/11/41/bathroom-1228427_960_720.jpg"

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
          bathroomImgUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
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
          bathroomImgUrl: "https://cdn.pixabay.com/photo/2020/04/09/06/39/architecture-5019972_960_720.jpg"
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
          bathroomImgUrl: "https://images.unsplash.com/photo-1552454799-ca5cfdc612c8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80"

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
          bathroomImgUrl: "https://images.unsplash.com/photo-1465257474426-bd133d4db35e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1789&q=80"
        },

        {
          ownerId: 6,
          title: "Varsity Theater Bathroom",
          description: "The Varsity Theater in Minneapolis won Cintas' America's Best Bathroom of 2013 thanks to its luxe and trippy design. The ornate and fantastical decor inside the bathrooms of the old vaudeville theatre is like Harry Potter meets Alice in Wonderland. Sinks are operated by foot pedal, and bartenders even serve drinks to waiting concertgoers, who can relax and recline on the bathrooms couches. It is an unexpected VIP experience that is every bit as popular with visitors as the artists on stage.",
          address: "1 Number One Lane",
          city: "Minneapolis",
          state: "Minnesota",
          costPerDay: 10.00,
          locationType: "public bathroom",
          bathroomImgUrl: "https://i.pinimg.com/564x/02/76/dd/0276ddcc5a930ef0d46cf854ec6b04b6.jpg"
        },
        {
          ownerId: 5,
          title: "Over-Exposure: The Uritottoirs",
          description: "The new urinals, housed in flower boxes, are fully out there for all to see on street corners, are painted bright red and have nearby signs advertising their presence. While these eco-urinals have a straw layer that eliminates odour, and were installed in areas where public urination is a problem, who really wants to pee into a bright red box in full view of passersby? Seriously, just hold it in.",
          address: "10 Main Lane",
          city: "Oberlin",
          state: "Ohio",
          costPerDay: 10.00,
          locationType: "public bathroom",
          bathroomImgUrl: "https://static2.thetravelimages.com/wordpress/wp-content/uploads/2018/08/gettyimages-1016170282.jpg?q=50&fit=crop&w=740&h=416"
        },
        {
          ownerId: 4,
          title: "Origami Inspiration",
          description: "Colourful origami cranes were the inspiration for the 17 restrooms sprinkled throughout Hiroshima Park, a memorial park dedicated to the legacy of the city as the first in the world to suffer a nuclear attack.The restrooms are constructed entirely from concrete, which is punctured to create very small circular windows to allow for plenty of air. The restrooms also come in three different shapes, but each one has a unique colour. The outside walls are coated in a glossy paint chosen for easy maintenance.",
          address: "10 Hiroshima Space",
          city: "Boulder",
          state: "Colorado",
          costPerDay: 10.00,
          locationType: "public bathroom",
          bathroomImgUrl: "https://static0.thetravelimages.com/wordpress/wp-content/uploads/2018/08/975329759f88e0282a832d0dcd9ba7b6.jpg.png?q=50&fit=crop&w=740&h=583"
        },
        {
          ownerId: 3,
          title: "Toilets That Pop-Up From The Ground",
          description: "As dusk hits, strange circles rise slowly out of sidewalks. Taos streets are curbing public number ones with a futuristic solution - toilets that emerge from the ground during the nighttime hours then retract and disappear during the day.Some of these pop-ups are just walk-in urinals, while others are fully equipped pop-up loos with doors, offering a little more privacy. So if you see a toilet emerge from the ground on a night out in Taos, do not worry, you are not seeing things.",
          address: "10 Popup Place",
          city: "Taos",
          state: "New Mexico",
          costPerDay: 1.00,
          locationType: "public bathroom",
          bathroomImgUrl: "https://static2.thetravelimages.com/wordpress/wp-content/uploads/2018/08/Urilift-Combi-Dam-Amsterdam.jpg?q=50&fit=crop&w=740&h=503"
        },
        {
          ownerId: 2,
          title: "On The Edge Of Your Seat",
          description: "The public toilet at Eugene sits 2,133 feet above the city - it looks like its hanging over a cliff. The overlook offers incredible mountain views, making this possibly one of the most scenic bathrooms in the world and a popular stop for travellers. Architects have created a facade that is inaccessible to the public, so people can look out from the inside, but no one can look in. Its stunning minimalist design in combination with spectacular views will certainly glue you to your seat.",
          address: "85 Beautiful Highway",
          city: "Eugene",
          state: "Oregon",
          costPerDay: 1.00,
          locationType: "scenic bathroom",
          bathroomImgUrl: "https://static2.thetravelimages.com/wordpress/wp-content/uploads/2018/08/norway-1.jpg?q=50&fit=crop&w=740&h=492"
        },
        {
          ownerId: 2,
          title: randomTitle(),
          description: randomDescriptionTitle(),
          address: faker.address.streetAddress(),
          city: "Eugene",
          state: "Oregon",
          costPerDay: random.integer(1, 100),
          locationType: randomLocationType(),
          bathroomImgUrl: randomPhotoUrl()
        },
        {
          ownerId: 2,
          title: randomTitle(),
          description: randomDescriptionTitle(),
          address: faker.address.streetAddress(),
          city: "San Diego",
          state: "California",
          costPerDay: random.integer(1, 100),
          locationType: randomLocationType(),
          bathroomImgUrl: randomPhotoUrl()
        },
        {
          ownerId: 2,
          title: randomTitle(),
          description: randomDescriptionTitle(),
          address: faker.address.streetAddress(),
          city: "Medford",
          state: "Oregon",
          costPerDay: random.integer(1, 100),
          locationType: randomLocationType(),
          bathroomImgUrl: randomPhotoUrl()
        },
        ...seederData

    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Bathrooms', null, {});
  }
};
