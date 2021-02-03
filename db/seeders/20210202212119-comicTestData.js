'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Comics', [
        {
          title: "40 Seconds",
          author: "Jeremy Haun",
          price: "2.99",
          publisher: "comiXology",
          publishDate: new Date("2021-01-26"),
          pages: "26",
          available: true,
          imageUrl: "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/882313/882313._SX360_CLs%7C360,553%7Ccu/cmx-cu-sash-lg.png%7C0,0,361,554%20208,401,152,152_QL80_TTD_.jpg",
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
          imageUrl: "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/888319/888319._SX360_CLs%7C360,553%7Ccu/cmx-cu-sash-lg.png%7C0,0,361,554%20208,401,152,152_QL80_TTD_.jpg",
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
            imageUrl: "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/439378/439378._SX360_CLs%7C360,553%7Ccu/cmx-cu-sash-lg.png%7C0,0,361,554%20208,401,152,152_QL80_TTD_.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Comics', null, {});
  }
};
