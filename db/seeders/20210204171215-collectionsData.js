'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Collections', [
        {
          name: "Want to Read",
          userId: 1,
          comicId: 1,
          readStatus: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Read",
          userId: 1,
          comicId: 2,
          readStatus: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Currently Reading",
          userId: 1,
          comicId: 3,
          readStatus: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Want to Read",
          userId: 1,
          comicId: 4,
          readStatus: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Want to Read",
          userId: 1,
          comicId: 5,
          readStatus: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Want to Read",
          userId: 1,
          comicId: 6,
          readStatus: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Read",
          userId: 1,
          comicId: 7,
          readStatus: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Read",
          userId: 1,
          comicId: 8,
          readStatus: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Read",
          userId: 1,
          comicId: 9,
          readStatus: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Read",
          userId: 1,
          comicId: 10,
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
