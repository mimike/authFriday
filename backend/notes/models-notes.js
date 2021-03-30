'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bathroom extends Model { //???
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      Bathroom.hasMany(models.Review, { foreignKey: 'bathroomId'});
      Bathroom.belongsTo(models.User, {foreignKey: 'ownerId'});
      //FK always references itself! refs User. ^^

      // Bathroom.belongsToMany(models.User, {     // do not ref reservation
      //   through: 'Reservations',   ///JOINS TABLE!!
      //   otherKey: 'reserverId',   //lives on Reservations
      //   foreignKey: 'bathroomId'   // lives on reservations
      // })

      // Bathroom.belongsToMany(models.User, {
      //   through: "Reviews",
      //   otherKey: "reviewerId",
      //   foreignKey: 'bathroomId'
      // })
    }
  };
  Bathroom.init({  //THIS?
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



'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reviews extends Model {  //WHAT IS THIS???
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Review.belongsTo( models.User, { foreignKey: 'reviewerId'})
      // Review.belongsTo( models.Bathroom, { foreignKey: 'bathroomId'} )
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





