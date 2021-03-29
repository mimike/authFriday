'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Bathrooms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ownerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        references: { model: "Users"}

      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,

      },
      address: {
        type: Sequelize.STRING(255),
        allowNull: false,

      },
      city: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      state: {
        type: Sequelize.STRING(50),
        allowNull: false,

      },
      costPerDay: {
        type: Sequelize.INTEGER,
        allowNull: false,

      },
      locationType: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bathroomImgUrl: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Bathrooms');
  }
};
