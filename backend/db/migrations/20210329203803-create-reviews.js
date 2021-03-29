'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      reviewerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Users"}

      },
      bathroomId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Bathrooms"}

      },
      reviewText: {
        type: Sequelize.TEXT,
      },
      rating: {
        type: Sequelize.INTEGER
      },
      reviewImgUrl: {
        type: Sequelize.STRING(255)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Reviews');
  }
};
