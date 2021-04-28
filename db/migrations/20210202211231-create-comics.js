"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Comics", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(200),
      },
      author: {
        allowNull: false,
        type: Sequelize.STRING(75),
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING(10000),
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL,
      },
      publisher: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      publishDate: {
        allowNull: false,
        type: Sequelize.DATEONLY,
      },
      pages: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      available: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      imageUrl: {
        type: Sequelize.STRING(255),
      },
      backgroundImageUrl: {
        type: Sequelize.STRING(255),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Comics");
  },
};
