'use strict';
module.exports = (sequelize, DataTypes) => {
  const Collections = sequelize.define('Collections', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.STRING
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(25)
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Users' }
    },
    comicId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Comics' }
    },
    readStatus: {
      type: DataTypes.BOOLEAN
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {});
  Collections.associate = function(models) {
    // associations can be defined here
  };
  return Collections;
};
