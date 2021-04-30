const express = require("express");
const router = express.Router();
const { csrfProtection, asyncHandler } = require("../utils");
const { requireAuth } = require('../auth'); // wanna require for all things where user has to be logged in

const { Comic, Review, User, Collection } = require("../db/models");

router.get("/:id(\\d+)", asyncHandler(async (req, res, next) => {
  const comicId = parseInt(req.params.id, 10)
  const comic = await Comic.findByPk(comicId);
  const reviews = await Review.findAll({where: {
    comicId
  }, include: User });
  let userId = null;
  if (req.session.auth) {
    userId = req.session.auth.userId;
  }
  let collections = await Collection.findAll({
    where: {
      userId
    }
  })
  //still need to make sure duplicates are not included
  const defaultCollections = ['Want to Read', 'Read', 'Currently Reading'];
  const customColls = collections.filter(collection => {
    return !defaultCollections.includes(collection.name)
  });
  let customNames = []
  customColls.forEach(coll => {
    customNames.push(coll.name)
  })
  const customCollections = [...new Set(customNames)]
  
    collections = await Collection.findAll({
        where: {
            userId
        },
        include: [User, Comic]
    })
    let collectionArray = []
    for (let collection of collections) {
        collectionArray.push(collection.name)
    }
    const collectionNames = [...new Set(collectionArray)];


  res.render("comic", { comic, reviews, userId, customCollections, collectionNames, collections  });
}));


module.exports = router;
