'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bathroom = sequelize.define('Bathroom', {
    ownerId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    costPerDay: DataTypes.INTEGER,
    locationType: DataTypes.STRING,
    bathroomImgUrl: DataTypes.STRING
  }, {});
  Bathroom.associate = function(models) {
    // associations can be defined here
    Bathroom.hasMany(models.Review, { foreignKey: 'bathroomId'});
    Bathroom.belongsTo(models.User, { foreignKey: 'ownerId'});
  };
  return Bathroom;
};
