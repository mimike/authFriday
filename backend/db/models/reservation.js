'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservation extends Model { //why???
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // NO ASSOCIAITONS
      // Reservation.belongsTo(models.User, { foreignKey: 'reserverId'})
      // Reservation.belongsTo(models.Bathroom, { foreignKey: 'bathroomId'});

    }
  };
  Reservation.init({
    reserverId: DataTypes.INTEGER,
    bathroomId: DataTypes.INTEGER,
    reservationDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Reservation',
  });
  return Reservation;
};
