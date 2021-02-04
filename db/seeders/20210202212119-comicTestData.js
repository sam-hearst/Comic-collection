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
          description:
            "Something is very very wrong. Lost things return. Lies are revealed. The horde draws nearer. Our team struggles to survive against unbelievable odds to get to the final gate. Part of the comiXology Originals line of exclusive digital content only available on comiXology and Kindle. Read for free as part of your subscription to comiXology Unlimited, Kindle Unlimited or Amazon Prime. Also available for purchase via comiXology and Kindle.",
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
          description:
            "A weird infestation is spreading around Rush, killing victims suddenly and painfully. Desperate to stop it before it becomes a plague, Killian and Cheela work together to find the cause and the cure. It seems to be spreading, rapidly and without reason, but how? Edgeworld marks the surprise return to comics of Dreamworks television producer Chuck Austen, the controversial X-Men and Superman writer, partnering with his good friend, long-time Marvel/DC artist Patrick Olliffe.",
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
          description:
            "Heroic. Iconic. Unstoppable. Armed with her Lasso of Truth and imbued with the power of the gods themselves, Princess Diana of Themyscira-known to the world as Wonder Woman-is one of the greatest superheroes in history. But who is she…really? Not even Wonder Woman herself knows for sure. Diana’s links to both the Amazons and the Gods of Olympus have been severed. Her memories are a tangle of contradictions that even her lie-detecting lasso cannot untangle.",
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
          description:
            "New series based on the highly anticipated game! Nadia, an assistant EMT for a privately-owned business known as Trauma Team International, is the sole survivor of a failed rescue mission turned shootout. After she agrees to continue work for an upcoming mission, Nadia and her new team find themselves in an even more dangerous and life-threatening situation. Featuring the incredible creative team of writer Cullen Bunn (Harrow County, Uncanny X-Men) and illustrator Miguel Valderrama (Giants)!",
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
          description:
            "Daredevil got a new lease on life in a landmark 1979-1983 run by writer-penciler Frank Miller and inker-penciler Klaus Janson, whose daring reinvention of the character quickly made Miller one of the biggest and most influential stars in the comic-book industry. Miller put his own stamp on established cast members such as reporter Ben Urich, femme fatale Black Widow, mad assassin Bullseye, the saw-fisted Gladiator, and monstrous crime boss Kingpin. Miller also introduced Daredevil's mysterious mentor Stick, deadly ninja foes the Hand, and Matt's long-lost love Elektra, a beautiful assassin who would become one of Marvel's most memorable characters",
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
          description:
            "The Man of Steel goes toe-to-toe with Bizarro, his oddball twin, and the new character Zibarro, also from the Bizarro planet. And Superman faces the final revenge of Lex Luthor in the form of his own death! All-Star Superman is a spectacular reimagining of the Superman mythos, from the Man of Steel's origin to his greatest foes and beyond. Combining their singular talents to create a new and brilliant vision of the Man of Steel, comics storytellers Grant Morrison and Frank Quitely are reunited with their WE3 collaborator Jamie Grant for one of the greatest Superman stories ever imagined. Collects All-Star Superman #1-12",
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
          description:
            "Collects Tales of Suspense #39-50. Inventor, businessman, playboy... SUPER HERO! Gravely injured in combat, billionaire genius Tony Stark saved his own life by designing a life-sustaining shell - the high-tech protective covering that transformed him into the invincible Iron Man! Now, the world believes him to be Tony Stark's personal bodyguard. In this dual role, he faces both boardroom intrigue and super-powered menaces. A modern-day knight in shining armor, he fights injustice wherever it rears its ugly head!",
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
          description:
            "Jake Sully maintains his position as leader of the Omatikaya Na'vi tribe, but with their homeland in ruins, he begins to doubt his place among them. As the Na'vi and human feud persists, tensions between the tribes begin to escalate as longstanding family rivalries ignite—spawning treachery and betrayal! An untold story set immediately after the events of Avatar!",
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
