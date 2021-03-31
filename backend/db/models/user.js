'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      validate: {
        len: [1, 30]
      },
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    lastName: {
      validate: {
        len: [1, 30]
      },
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 30],
        isNotEmail(value) {
          if (Validator.isEmail(value)) {
            throw new Error('Cannot be an email.');
          }
        },
      },
    },

    address: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        len: [3, 30]
      }
    },
    city: {
      type: DataTypes.STRING(30),
      allowNull: false,
      validate: {
        len: [3, 30]
      }
    },
    state: {
      type: DataTypes.STRING(30),
      allowNull: false,
      validate: {
        len: [2, 30]
      }
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256]
      },
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: {
        len: [60, 60]
      },
    },
  },
  {
    defaultScope: {
      attributes: {
        exclude: ['hashedPassword', 'email', 'createdAt', 'updatedAt'],
      },
    },
    //when you run User.findAll() all fields besides hashedPasswords, updatedAt, email, and createdAt will be populated in the return of that query.

    scopes: {
      currentUser: {
        attributes: { exclude: ['hashedPassword'] }, //define a User model scope for currentUser that will exclude only the hashedPassword field.
      },

      loginUser: {
        attributes: {},  //Finally, define another scope for including all the fields, which should only be used when checking the login credentials of a user.
      },

    },

  });

  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Review, { foreignKey: 'reviewerId'});
    User.hasMany(models.Bathroom, { foreignKey: 'ownerId'});
    User.hasMany(models.Reservation, { foreignKey: "reserverId"});


    // User.belongsToMany(models.Bathroom, {
    //   through: "Reservations",
    //   foreignKey: "reserverId",
    //   otherKey: "bathroomId",
    // })

    // User.belongsToMany(models.Bathroom, {
    //   through: "Reviews",
    //   foreignKey: "reviewerId",
    //   otherKey: "bathroomId",
    // })


  };

  User.prototype.toSafeObject = function() { // remember, this cannot be an arrow function
    const { id, username, email } = this; // context will be the User instance
    return { id, username, email };
  };

  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };

  User.getCurrentUserById = async function (id) {
    return await User.scope('currentUser').findByPk(id);
  };
  
  User.login = async function ({ credential, password }) {
    const { Op } = require('sequelize');
    const user = await User.scope('loginUser').findOne({
      where: {
        [Op.or]: {
          username: credential,
          email: credential,
        },
      },
    });
    if (user && user.validatePassword(password)) {
      return await User.scope('currentUser').findByPk(user.id);
    }
  };

  User.signup = async function ({ username, email, firstName, lastName, address, city, state, password }) {

    const hashedPassword = bcrypt.hashSync(password);

    const user = await User.create({
      username,
      firstName,
      lastName,
      address,
      city,
      state,
      email,
      hashedPassword, // saves the hashed
    });
    return await User.scope('currentUser').findByPk(user.id);
    // find the userId but exclude the hashedPassword
  };
  return User;
};
