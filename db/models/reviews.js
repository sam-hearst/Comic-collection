'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reviews = sequelize.define('Reviews', 
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING(10000)
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
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
  }, {});
  Reviews.associate = function(models) {
    // associations can be defined here
    Reviews.belongsTo(models.Users, { foreignKey: "userId"});
    Reviews.belongsTo(models.Comics, { foreignKey: "comicId"});
  };
  return Reviews;
};
