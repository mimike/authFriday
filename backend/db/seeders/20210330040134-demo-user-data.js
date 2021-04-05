'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Users', [
        {
          email: 'demo@user.io',
          username: 'Bart-Dorsey',
          firstName: "Bart",
          lastName: "Dorsey",
          address: '12 Massy Ave',
          city: 'Madison',
          state: 'Wisconsin',
          hashedPassword: bcrypt.hashSync('password'),

        },
        {
          email: faker.internet.email(),
          username: 'FakeUser1',
          firstName: "Josh",
          lastName: "Toopiss",
          address: '123 Disney World',
          city: 'Iowa City',
          state: 'Iowa',
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          email: faker.internet.email(),
          firstName: "Kent",
          lastName: "Barchair",
          username: 'FakeUser2',
          address: '1 Beijing Place',
          city: 'San Francisco',
          state: 'California',
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },

        {
          email: faker.internet.email(),
          firstName: "Andrew",
          lastName: "Loo",
          username: 'FakeUser3',
          address: '1 Paris Drive',
          city: 'San Francisco',
          state: 'California',
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },

        {
          email: faker.internet.email(),
          firstName: "Jim",
          lastName: "Guny",
          username: 'FakeUser4',
          address: '10 Marrakesh Drive',
          city: 'St. Paul',
          state: 'Minnesota',
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          email: faker.internet.email(),
          firstName: "Troy",
          lastName: "Dawsin",
          username: 'FakeUser5',
          address: '11 Eleven Lane',
          city: 'San Francisco',
          state: 'California',
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          email: faker.internet.email(),
          firstName: "Happy",
          lastName: "Apple",
          username: 'FakeUser6',
          address: '10 Pojo Place',
          city: 'Moore',
          state: 'Oklahoma',
          hashedPassword:bcrypt.hashSync(faker.internet.password()),
        },
        {
          email: faker.internet.email(),
          firstName: "Tristan",
          lastName: "Sand",
          username: 'FakeUser7',
          address: '12 Bach Drive',
          city: 'San Diego',
          state: 'California',
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        }

    ], {});

  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Bart-Dorsey', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
