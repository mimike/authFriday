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
          address: "6 NewAge Ave",
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
          description: "As dusk hits, strange circles rise slowly out of sidewalks. Taos streets are curbing public number ones with a futuristic solution - toilets that emerge from the ground during the nighttime hours then retract and disappear during the day.Some of these pop-ups are just walk-in urinals, while others are fully equipped pop-up loos with doors, offering a little more privacy. So if you see a toilet emerge from the ground on a night out in Amsterdam, do not worry, you are not seeing things.",
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
          locationType: "public bathroom",
          bathroomImgUrl: "https://static2.thetravelimages.com/wordpress/wp-content/uploads/2018/08/norway-1.jpg?q=50&fit=crop&w=740&h=492"
        }

    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Bathrooms', null, {});
  }
};
