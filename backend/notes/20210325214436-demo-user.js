'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        firstName: "Jonny",
        lastName: "Smiths",
        address: '12 Massy Ave',
        city: 'Madison',
        state: 'Wisconsin',
        hashedPassword: bcrypt.hashSync('password'),

      },
      {
        email: faker.internet.email(),
        username: 'FakeUser1',
        firstName: "Jane",
        lastName: "Old",
        address: '123 Disney World',
        city: 'Iowa City',
        state: 'Iowa',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        firstName: "Jake",
        lastName: "Jacobson",
        username: 'FakeUser2',
        address: '1 Beijing Place',
        city: 'San Francisco',
        state: 'California',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
