"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "Demo",
          lastName: "User",
          email: "demo@user.com",
          hashedPassword: "eb45a6e1-baf8-4557-9f4b-8bb71912f6c4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Robert",
          lastName: "Cole",
          email: "robe@gmail.com",
          hashedPassword: "robert1234",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Alex",
          lastName: "Ball",
          email: "alex@gmail.com",
          hashedPassword: "alex1234",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Tom",
          lastName: "Harris",
          email: "tom@gmail.com",
          hashedPassword: "tom1234",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
