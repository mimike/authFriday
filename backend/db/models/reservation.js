'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define('Reservation', {
    reserverId: DataTypes.INTEGER,
    bathroomId: DataTypes.INTEGER,
    reservationDate: DataTypes.DATE
  }, {});
  Reservation.associate = function(models) {
    // associations can be defined here
    Reservation.belongsTo(models.User, { foreignKey: "reserverId"});
    Reservation.belongsTo(models.Bathroom, { foreignKey: "bathroomId"});
  };
  return Reservation;
};
