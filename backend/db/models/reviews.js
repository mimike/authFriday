'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reviews extends Model {  //WHAT IS THIS
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Review.belongsTo( models.User, { foreignKey: 'reviewerId'})
      Review.belongsTo( models.Bathroom, { foreignKey: 'bathroomId'} )
    }
  };
  Reviews.init({
    reviewerId: DataTypes.INTEGER,
    bathroomId: DataTypes.INTEGER,
    reviewText: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
    reviewImgUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Reviews',
  });
  return Reviews;
};
