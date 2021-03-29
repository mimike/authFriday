'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bathroom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Bathroom.hasMany(models.Review, { foreignKey: 'bathroomId'});
      Bathroom.belongsTo(models.User, {foreignKey: 'ownerId'});
      //FK always references itself! refs User. ^^
      Bathroom.hasMany(models.Reservation, { foreignKey: 'bathroomId'});
      Bathroom.belongsTo(models.Reservation, { foreignKey: 'bathroomId'});

    }
  };
  Bathroom.init({
    ownerId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    costPerDay: DataTypes.INTEGER,
    locationType: DataTypes.STRING,
    bathroomImgUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Bathroom',
  });
  return Bathroom;
};
