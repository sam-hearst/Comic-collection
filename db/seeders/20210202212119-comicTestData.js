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
          title: "EdgeWorld",
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
        {
          title: "Archer & Armstrong #20",
          author: "Mike Baron",
          price: "2.50",
          description:
            "You better watch out when Armstrong suits up as the greatest hero in the Valiant Universe-- Santa Clause! When the immortal cynic dresses up as Saint Nick for a deadly undercover operation, will he accidentally embrace the Christmas spirit? Elsewhere, Archer joins a ragtag vigilante group that leads him on a soulful journey of his own!1st. appearance:- Night Angels- Touch",
          publisher: "Valiant",
          publishDate: new Date("1994-03-01"),
          pages: "32",
          available: true,
          imageUrl:
            "https://s3.amazonaws.com/comicgeeks/comics/covers/large-9032588.jpg?1538407549",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Archer & Armstrong #21",
          author: "Mike Baron",
          price: "2.50",
          description:
            "The Ladakh attack! When Archer learns that Master Darque has murdered everyone at the temple in Ladakh, he vows to avenge his fallen friends and teachers. He'll have to go it alone, however, thanks to the seductive powers that Pamela has developed over Armstrong. As Darque re-animates those he has slain to fight in his defense, will Archer be able to overcome an army of the undead on his own?1st appearance:- Chan",
          publisher: "Valiant",
          publishDate: new Date("1994-04-01"),
          pages: "32",
          available: true,
          imageUrl:
            "https://s3.amazonaws.com/comicgeeks/comics/covers/large-1132063.jpg?1598723662",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Archer & Armstrong #22",
          author: "Mike Baron",
          price: "2.50",
          description:"While Archer rots in a cell in Master Darque's manor, it's up to Armstrong to get to New Orleans and save him! As Archer sits in captivity, Darque continues to raise the dead and prepares to consume his soul. Can Armstrong arrive in time to stop Darque? And does he stand a chance against Darque's unspeakable power?",          
          publisher: "Valiant",
          publishDate: new Date("1994-05-01"),
          pages: "32",
          available: true,
          imageUrl:
            "https://s3.amazonaws.com/comicgeeks/comics/covers/large-5722032.jpg?1598723900",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Archer & Armstrong #23",
          author: "Mike Baron",
          price: "2.50",
          description: "Two mob families have gone to war -? and young Obadiah Archer is all that stands between them! But when local mafioso Ethan Rosen tries to reward Armstrong's partner-in-training for saving his life, Archer will need to keep one eye on Rosen ? and the other on his back!", 
          publisher: "Valiant",
          publishDate: new Date("1994-06-01"),
          pages: "32",
          available: true,
          imageUrl:
            "https://s3.amazonaws.com/comicgeeks/comics/covers/large-4180958.jpg?1538407568",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Archer & Armstrong #24",
          author: "Mike Baron",
          price: "2.50",
          description: "Archer's just gotten an offer he can't refuse ? become the bodyguard of local crime kingpin or die! Then, when a rival family strikes makes their move their move in an impressive display of firepower, will Archer be forced to a save the man who represents everything he hates?",
          publisher: "Valiant",
          publishDate: new Date("1994-07-01"),
          pages: "32",
          available: true,
          imageUrl:
            "https://s3.amazonaws.com/comicgeeks/comics/covers/large-8913579.jpg?1538407570",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Archer & Armstrong #25",
          author: "Mike Baron",
          price: "2.50",
          description: "Armstrong's secret history with The Sect revealed! Journey to 12th century France to find out how this loose-moraled immortal hero earned the ire of the Valiant Universe's deadliest secret sociey with the help of his brother, the Eternal Warrior! But how do the Knights Templar, Richard Coeur de Leon, and a secret network of spies all fit into the grandest conspiracy that history has ever known?",
          publisher: "Valiant",
          publishDate: new Date("1994-08-01"),
          pages: "32",
          available: true,
          imageUrl:
            "https://s3.amazonaws.com/comicgeeks/comics/covers/large-7663498.jpg?1538407572",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Bloodshot Reborn #16",
          author: "Jeff Lemire",
          price: "3.99",
          description:
            "Die and die again on…BLOODSHOT ISLAND! \
              As the endless process of life, death, and rebirth plagues Bloodshot and his fellow prisoners of Bloodshot Island, the being that hunts them – the ruthlessly efficient killer called Deathmate – grows stronger with each agonizing day.But as Bloodshot momentarily gains the upper hand on the shadowy organization that created him and its enigmatic instrument of destruction, he may stumble upon the greatest secrets of the island…and his own haunted past! \
              New York Times best- selling writer Jeff Lemire(Old Man Logan) and superstar artist Mico Suayan(BLOODSHOT REBORN) open fire on the most controversial chapter of BLOODSHOT ISLAND yet, sending shockwaves through the Valiant Universe that will be felt for years to come!",
          publisher: "Valiant",
          publishDate: new Date("2016-08-31"),
          pages: "32",
          available: true,
          imageUrl:
            "https://s3.amazonaws.com/comicgeeks/comics/covers/large-2526344.jpg?1491755579",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Bloodshot Reborn #17",
          author: "Jeff Lemire",
          price: "3.99",
          description:
            "Terror by twilight on BLOODSHOT ISLAND! \
              Trapped in a remote jungle paradise with no hope of escape, Bloodshot has discovered the secret behind the merciless technological monstrosity called Deathmate – and the truth has thrown his entire world into a tailspin of tragedy! But what revelations behind Project Rising Spirit’s horrific creation could bring even Bloodshot to his knees...and forever shatter the spirit of the man known as Ray Garrison? \
              New York Times best- selling writer Jeff Lemire(Moon Knight, Old Man Logan) and blockbuster artist Mico Suayan(BLOODSHOT REBORN) push their bloodstained rumble in the jungle past the point of no return with a shocking chapter that will leave the Valiant Universe reeling for years to come!",
          publisher: "Valiant",
          publishDate: new Date("2016-09-28"),
          pages: "32",
          available: true,
          imageUrl:
            "https://s3.amazonaws.com/comicgeeks/comics/covers/large-7451024.jpg?1491755579",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Bloodshot Reborn #18",
          author: "Jeff Lemire",
          price: "3.99",
          description:
            "“BLOODSHOT ISLAND” sails into the sunset with a sanguine-stained epilogue! \
              Ray Garrison and a battered team of survivors have made their escape from BLOODSHOT ISLAND...only to drift straight into shark- infested waters! Marooned in the middle of the Pacific Ocean with no defenses except the relentless will to survive, will the highly trained team of killers aboard this life raft band together...or throw each other to the prehistoric predators below? And, if they don’t kill each other first, will mother nature finish the job?’ \
              With “BLOODSHOT USA” on the horizon, it’s time to sink or swim as New York Times best- selling writer Jeff Lemire(Moon Knight) and rising star Tomas Giorello(Batman & Robin) toss Valiant’s band of nanite - fueled soldiers into the deep end!",
          publisher: "Valiant",
          publishDate: new Date("2016-10-05"),
          pages: "32",
          available: true,
          imageUrl:
            "https://s3.amazonaws.com/comicgeeks/comics/covers/large-7881070.jpg?1491755579",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The Death-Defying Doctor Mirage #1",
          author: "Jen Van Meter",
          price: "3.99",
          description:
            "Death was just the beginning… \
            Doctor Mirage talks to the dead…but the only spirit Shan Fong can’t?nd is that of her late husband, Hwen.Instead, America’s favorite semi- retired paranormal investigator is haunted and raw, using her gift to solve homicides and bring peace to the recently bereaved.But when a big - time occultist with a classi ? ed military past hires her for a special job, Shan discovers a lead that might close the greatest mystery she’s ever tackled – how to get Hwen back.Now, Doctor Mirage must enter the undiscovered country and cross all the realms of the underworld, if she has any hope of rescuing the man she loves… or be forever lost beyond the earthly plane.",
          publisher: "Valiant",
          publishDate: new Date("2014-09-03"),
          pages: "32",
          available: true,
          imageUrl:
            "https://s3.amazonaws.com/comicgeeks/comics/covers/large-1468410.jpg?1409703892",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The Death-Defying Doctor Mirage #2",
          author: "Jen Van Meter",
          price: "3.99",
          description:
            "Descent and peril! \
            Leaving her mortal body in deadly danger, the spirit of Dr.Mirage is about to enter the afterlife’s web of worlds, and begin the fight to win back a partner she thought she’d lost forever.But enemies lie in wait everywhere, and while demons and beasts besiege Mirage in the spirit world, an unexpected new eruption of evil threatens her life on Earth!",
          publisher: "Valiant",
          publishDate: new Date("2014-10-08"),
          pages: "32",
          available: true,
          imageUrl:
            "https://s3.amazonaws.com/comicgeeks/comics/covers/large-6201543.jpg?1412633660",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The Death-Defying Doctor Mirage #3",
          author: "Jen Van Meter",
          price: "3.99",
          description:
            "Down in the darkness! Below the veil of the living world, deep in the lands of the dead, Dr. Mirage fights her way through the evils and monstrosities that besiege the spirits. But the real monsters live in the world above, where a sinister hit squad tries to put an end to Mirage's mission - permanently.",
          publisher: "Valiant",
          publishDate: new Date("2014-11-05"),
          pages: "32",
          available: true,
          imageUrl:
            "https://s3.amazonaws.com/comicgeeks/comics/covers/large-5154964.jpg?1415033110",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Divinity #1",
          author: "Matt Kindt",
          price: "3.99",
          description:
            "From New York Times best-selling writer Matt Kindt (THE VALIANT, Mind MGMT) and blockbuster artist Trevor Hairsine (X-Men: Deadly Genesis) comes a shocking new vision of science fiction in an all-new prestige format limited series. \
            At the height of the Cold War, the Soviet Union – determined to win the Space Race at any cost – green lit a dangerously advanced mission.They sent a man farther into the cosmos than anyone has gone before or since.Lost in the stars, he encountered something unknown.Something that…changed him. \
            Long thought lost and erased from the history books, he has suddenly returned, crash- landing in the Australian Outback.The few that have been able to reach him believe him to be a deity – one who turned the scorched desert into a lush oasis.They say he can bend matter, space, and even time to his will.Earth is about to meet a new god.And he’s a communist. \
            How long can it be before the first confrontation between mankind and DIVINITY begins ?",
          publisher: "Valiant",
          publishDate: new Date("2015-02-11"),
          pages: "32",
          available: true,
          imageUrl:
            "https://s3.amazonaws.com/comicgeeks/comics/covers/large-6916207.jpg?1465744035",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Divinity #2",
          author: "Matt Kindt",
          price: "3.99",
          description:
            "New York Times best-selling writer Matt Kindt and blockbuster artist Trevor Hairsine unleash an all-new chapter of the year’s most powerful science fiction saga! Can the world withstand its first confrontation with a being of god-like proportions? \
            A Soviet cosmonaut – seemingly imbued with the powers of a god – has taken up residence in the Australian Outback.Some think him to be a savior…while others believe he will usher in a new Communist Age… \
            Now the rest of the world’s powers must decide for themselves – will the enigmatic DIVINITY offer his hand in friendship or will Earth’s heroes find themselves helpless against the wrath of the divine?",
          publisher: "Valiant",
          publishDate: new Date("2015-03-18"),
          pages: "32",
          available: true,
          imageUrl:
            "https://s3.amazonaws.com/comicgeeks/comics/covers/large-6963312.jpg?1426594096",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Divinity #3",
          author: "Matt Kindt",
          price: "3.99",
          description:
            "The sci-fi saga of 2015 continues – from New York Times best-selling writer Matt Kindt (RAI) and blockbuster artist Trevor Hairsine (X-Men: Deadly Genesis)! \
            A being with the power of a god roams free in the Australian Outback, bringing life to the barren wasteland and making him a hero to natives who live there and the visitors that have sought him out.But can the global superpowers of Earth rely on this long lost cosmonaut not to abuse his seemingly limitless power? The entity called DIVINITY will put that trust to the test when he discovers what became of the life he left behind…and the family he once knew…",
          publisher: "Valiant",
          publishDate: new Date("2015-04-22"),
          pages: "32",
          available: true,
          imageUrl:
            "https://s3.amazonaws.com/comicgeeks/comics/covers/large-3956927.jpg?1429651084",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Divinity #4",
          author: "Matt Kindt",
          price: "3.99",
          description:
            "This is it! The mind-bending, reality-altering reveal of what happened to turn a long-lost Russian cosmonaut into the godlike being known as DIVINITY! \
            But there are some things even gods can’t do – a lesson that DIVINITY may not learn easily.Can the super-powered heroes of the world contain the rage of a mad god? The earth- shattering conclusion to Matt Kindt and Trevor Hairsine’s sci - fi epic will have long - term ramifications for the entire Valiant Universe!",
          publisher: "Valiant",
          publishDate: new Date("2015-05-27"),
          pages: "32",
          available: true,
          imageUrl:
            "https://s3.amazonaws.com/comicgeeks/comics/covers/large-7036626.jpg?1432686418",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Fallen World #1",
          author: "Dan Abnett",
          price: "3.99",
          description:
            "In the year 4002, a cyborg samurai named Rai struggles to find his morality, while the nanite-filled supersoldier Bloodshot is on a mission to save the citizens of Earth. Will they work together for the greater good? All signs point to no. \
            Oh, and did we mention there are also dinosaurs on the loose and powerful animal- human hybrid mutants ? Good luck with that, Rai. \
            Love smart sci - fi and engrossing world - building ? Dan Abnett(Aquaman) and Adam Pollina's (X-Force) FALLEN WORLD has you covered.",
          publisher: "Valiant",
          publishDate: new Date("2019-05-01"),
          pages: "32",
          available: true,
          imageUrl:
            "https://s3.amazonaws.com/comicgeeks/comics/covers/large-2560342.jpg?1583885243",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Fallen World #2",
          author: "Dan Abnett",
          price: "3.99",
          description:
            "Get ready for the second thrilling chapter in Valiant's explosive event series! Rai's most dangerous foe has returned! The cyborg samurai faces an impossible challenge. Can he stop his greatest enemy from gaining even more power? How many more positronic dinosaurs will have to die for Rai to save the future?",
          publisher: "Valiant",
          publishDate: new Date("2019-06-05"),
          pages: "32",
          available: true,
          imageUrl:
            "https://s3.amazonaws.com/comicgeeks/comics/covers/large-2796213.jpg?1559693602",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Fallen World #3",
          author: "Dan Abnett",
          price: "3.99",
          description:
            "The mind-controlled Bloodshot enlists the help of the Church of the Fallen to further his nefarious plans! Rai comes face-to-face with the animalistic hybrids of the Kor'Tunga clan! Can Rai stop the resurrection of his greatest enemy before it's too late?",
          publisher: "Valiant",
          publishDate: new Date("2019-05-01"),
          pages: "32",
          available: true,
          imageUrl:
            "https://s3.amazonaws.com/comicgeeks/comics/covers/large-1594853.jpg?1562716279",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Fallen World #4",
          author: "Dan Abnett",
          price: "3.99",
          description:
            "Rai's greatest enemy has returned in a whole new form, and he's got an army with him! Can the cyborg samurai save innocent people from the powerful foe? What role will fan-favorite characters Eternal Warrior, Geomancer, and War Mother play in the battle?",
          publisher: "Valiant",
          publishDate: new Date("2019-08-07"),
          pages: "32",
          available: true,
          imageUrl:
            "https://s3.amazonaws.com/comicgeeks/comics/covers/large-3109884.jpg?1565133768",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Fallen World #5",
          author: "Dan Abnett",
          price: "3.99",
          description:
            "The Siege of Sontaku Sector continues, as Rai's forces combat those of the terrible Bloodfather. Can Bloodshot be saved from his ultimate fate? What does the future of 4002 hold for these characters? The first answers of what comes next starts here.",
          publisher: "Valiant",
          publishDate: new Date("2019-09-04"),
          pages: "32",
          available: true,
          imageUrl:
            "https://s3.amazonaws.com/comicgeeks/comics/covers/large-4033784.jpg?1585986924",
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
