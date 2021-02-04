"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Comics",
      [
        {
          title: "40 Seconds",
          author: "Jeremy Haun",
          price: "2.99",
          publisher: "comiXology",
          publishDate: new Date("2021-01-26"),
          pages: "26",
          available: true,
          imageUrl:
            "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/882313/882313._SX360_CLs%7C360,553%7Ccu/cmx-cu-sash-lg.png%7C0,0,361,554%20208,401,152,152_QL80_TTD_.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "EdgeWord",
          author: "Chuck Austen",
          price: "2.99",
          publisher: "Wimzi, Inc.",
          publishDate: new Date("2021-01-19"),
          pages: "25",
          available: true,
          imageUrl:
            "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/888319/888319._SX360_CLs%7C360,553%7Ccu/cmx-cu-sash-lg.png%7C0,0,361,554%20208,401,152,152_QL80_TTD_.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Wonder Woman",
          author: "Greg Rucka",
          price: "10.11",
          publisher: "DC",
          publishDate: new Date("2017-02-28"),
          pages: "170",
          available: true,
          imageUrl:
            "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/439378/439378._SX360_CLs%7C360,553%7Ccu/cmx-cu-sash-lg.png%7C0,0,361,554%20208,401,152,152_QL80_TTD_.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Cyberpunk",
          author: "Cullen Bunn",
          price: "1.99",
          publisher: "Dark Horse",
          publishDate: new Date("2020-09-09"),
          pages: "22",
          available: true,
          imageUrl:
            "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/882762/882762._SX360_QL80_TTD_.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Daredevil",
          author: "Frank Miller & Klaus Janson",
          price: "24.99",
          publisher: "Marvel",
          publishDate: new Date("2014-03-06"),
          pages: "326",
          available: true,
          imageUrl:
            "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/77594/77594._SX360_CLs%7C360,553%7Ccu/cmx-cu-sash-lg.png%7C0,0,361,554%20208,401,152,152_QL80_TTD_.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: "All-Star Superman",
          author: "Grant Morrison",
          price: "15.99",
          publisher: "DC",
          publishDate: new Date("2018-03-12"),
          pages: "298",
          available: true,
          imageUrl:
            "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/736406/736406._SX360_QL80_TTD_.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: "Iron Man Masterworks Vol. 1",
          author: "Stan Lee",
          price: "16.99",
          publisher: "Marvel",
          publishDate: new Date("2010-03-15"),
          pages: "208",
          available: true,
          imageUrl:
            "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/22178/22178._SX360_QL80_TTD_.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: "Avatar: The Next Shadow #1",
          author: "Jeremy Barlow",
          price: "1.99",
          publisher: "Dark Horse",
          publishDate: new Date("2010-01-06"),
          pages: "23",
          available: true,
          imageUrl:
            "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/909608/909608._SX360_QL80_TTD_.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Comics", null, {});
  },
};
