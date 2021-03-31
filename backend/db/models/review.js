'use strict';



module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    reviewerId: DataTypes.INTEGER,
    bathroomId: DataTypes.INTEGER,
    reviewText: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
    reviewImgUrl: DataTypes.STRING
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.User, { foreignKey: "reviewerId"});
    Review.belongsTo(models.Bathroom, { foreignKey: "bathroomId"})
  };
  return Review;
};
