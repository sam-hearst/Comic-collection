'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Reviews', [
        {
          description: `Enjoyed the start of this sci-fi comic. Intriguing world(s)-building. The art is expressive and the color evocative of Star Trek-like planet atmospheres. Kind of a combo between Interstellar (save the world) and Black Science (world-jumping).`,
          userId: 1,
          comicId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: `From the first page, I wanted to know, 40 seconds to what? The artwork,the story, the coloring and lettering are outstanding. Ready for the second issue. No spoilers from me. Read it!`,
          userId: 2,
          comicId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: `Good color artwork. Comixology comics freebie. 21 pages. This would be easier to review if it was 32 pages. A rescue mission is using strange gate technology to reach an endangered civilization. A fast moving story.`,
          userId: 3,
          comicId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: `4.5 stars.  Greg Rucka's previous run on Wonder Woman was a seminal one for our favorite Amazon Princess, up there with the George Perez and John Byrne runs.  And with good reason: Rucka deftly illustrates the various aspects of Diana that make her a complete person: Amazon, warrior, diplomat, feminist, peace-maker, fruend, and so much more. He created a layered picture of what SHOULD be a complex character.  Glad these issues are finally being collected as they deserve!`,
          userId: 1,
          comicId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: `Wonder Woman by Greg Rucka is just good stuff. I’ve loved every issue and both trades of it, I’d go so far as to say it’s the best Wonder Woman I’ve ever read.  It strikes a great balance between the Greek Mythology stuff and the lowly Earth narratives. And it’s all good all the time.  The art constantly shifting annoyed me as it always does but I wouldn’t call any of it horrible. Stylized yes but not horrible. I think Rags Morales and Drew Johnson do a fantastic job on the art and Sean Phillips is good but it’s an awkward shift at best because it happens right after a climactic fight.  There’s also an odd shift of characterization for Diana in the middle, but I thinks it’s due to Geoff Johns penning the issue instead of Rucka. And I like Rucka’s characterization of her more so it was noticeable to me I’m not sure if you’ll feel the same way but I will note it was an issue of Flash and not Wonder Woman.  All in all Greg Rucka’s Wonder Woman trades are fantastic and I urge you to read them if you can.`,
          userId: 2,
          comicId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
       
      ], {});
    
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Reviews', null, {});
  }
};
