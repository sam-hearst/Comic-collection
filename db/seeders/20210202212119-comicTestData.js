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
          description: "Something is very very wrong. Lost things return. Lies are revealed. The horde draws nearer. Our team struggles to survive against unbelievable odds to get to the final gate.",
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
          title: "EdgeWorld",
          author: "Chuck Austen",
          description: "Local people are disappearing and it's up to Killian Jess, Magistrate of Rush, and his odd group of friends to find out what's going on. But they've got freak sandstorms, a hostile military government and the aftermath of a planet-wide war to wade through in order to reach the answers they seek. \
          Edgeworld marks the surprise return to comics of Dreamworks television producer Chuck Austen, the controversial X- Men and Superman writer, partnering with his good friend, long - time Marvel / DC artist Patrick Olliffe. In animation, Chuck has produced such impressive shows as Dawn of the Croods, She - Ra and the Princesses of Power, and Rocky and Bullwinkle for Dreamworks, and there isn't a character Patrick hasn't drawn for Marvel and DC, though he is most well - known for his work on Spider - Girl and Hawkman.Their shared creative vision brings to life a rich and complex world of characters and stories that marks Edgeworld out as a series not to be missed. \
          Chuck and Patrick are joined on this expectation - busting journey by outstanding colorist Lee Loughridge, talented designer / letterer Jodi Wynne, with edits from Bis Stringer Horne. \
          Part of the comiXology Originals line of exclusive digital content only available on comiXology and Kindle.",
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
          description: "It's been over a year since the events of INFINITE CRISIS, and Wonder Woman's Amazon Sisters have retreated to the realm of the gods. But now their Amazon's are back, screaming for vengeance. \
          What would compel the Amazons to renounce their peaceful ways and attack the United States? The answers willl prove useless to a country whose super powered protectors are utterly unprepared for this savage attack. And where is Wonder Woman while her sisters threaten to destroy a nation?",
          price: "10.11",
          publisher: "DC",
          publishDate: new Date("2017-02-28"),
          pages: "170",
          available: true,
          imageUrl: "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/882313/882313._SX360_CLs%7C360,553%7Ccu/cmx-cu-sash-lg.png%7C0,0,361,554%20208,401,152,152_QL80_TTD_.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Comics', null, {});
  }
};
