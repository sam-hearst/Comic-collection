"use strict";
module.exports = (sequelize, DataTypes) => {
  const Comic = sequelize.define(
    "Comic",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING(200),
      },
      author: {
        allowNull: false,
        type: DataTypes.STRING(75),
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING(10000)
      },
      price: {
        allowNull: false,
        type: DataTypes.DECIMAL,
      },
      publisher: {
        allowNull: false,
        type: DataTypes.STRING(100),
      },
      publishDate: {
        allowNull: false,
        type: DataTypes.DATEONLY,
      },
      pages: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      available: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      imageUrl: {
        type: DataTypes.STRING(255),
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {}
  );
  Comic.associate = function (models) {
    // associations can be defined here
    Comic.hasMany(models.Reviews, { foreignKey: 'comicId'});
  };
  return Comic;
};
