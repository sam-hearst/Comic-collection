'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Collections', [
        {
          name: "wantToRead",
          userId: 1,
          comicId: 1,
          readStatus: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "haveRead",
          userId: 1,
          comicId: 1,
          readStatus: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "reading",
          userId: 1,
          comicId: 1,
          readStatus: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ], {});
    
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Collections', null, {});
  }
};
