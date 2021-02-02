'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comic = sequelize.define('Comic', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    title: {
      allowNull: false,
      type: Sequelize.STRING(200)
    },
    author: {
      allowNull: false,
      type: Sequelize.STRING(75)
    },
    price: {
      allowNull: false,
      type: Sequelize.DECIMAL
    },
    publisher: {
      allowNull: false,
      type: Sequelize.STRING(100)
    },
    publishDate: {
      allowNull: false,
      type: Sequelize.DATEONLY
    },
    pages: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    available: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
      defaultValue: true
    },
    imageUrl: {
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
      defaultValue: Sequelize.fn('now')
    }
  }, {});
  Comic.associate = function(models) {
    // associations can be defined here
  };
  return Comic;
};