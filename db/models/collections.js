'use strict';
module.exports = (sequelize, DataTypes) => {
  const Collection = sequelize.define('Collection', {
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
  Collection.associate = function(models) {
    Collection.belongsTo(models.User, { foreignKey: 'userId' });
    Collection.belongsTo(models.Comic, { foreignKey: 'comicId' })
  };
  return Collection;
};