const express = require("express");
const router = express.Router();
const { asyncHandler } = require("../../utils");
const { requireAuth } = require("../../auth");
const { Comic, Review, User, Collection } = require("../../db/models");

// Query the collections for a specific user and comic (when the comic page loads)
router.get("/:id", requireAuth, asyncHandler(async (req, res) => {
    const comicId = req.params.id;
    const userId = req.session.auth.userId;

    const collections = await Collection.findAll({
        where: {
            userId,
            comicId
        }
    });
    let collectionList = [];
    collections.forEach((collection) => {
      collectionList.push(collection.name);
    });
    // console.log(collectionList);
    return res.json(collectionList);
  })
);

router.delete("/:id", requireAuth, asyncHandler(async (req, res) => {
    const comicId = req.params.id;
    const userId = req.session.auth.userId
    const collection = req.body.collection;

    const collectionName = collection.split('-').join(' ')
    console.log(collectionName);
    console.log(comicId);
    console.log(userId);

    const collections = await Collection.findAll({
        where: {
            comicId: comicId,
            userId: userId,
            name: collectionName
        }
    });

    const rightCollection = collections[0]

    console.log(rightCollection);

    await rightCollection.destroy()

    const comic = await Comic.findByPk(comicId);
    return res.json({ comic });
}))


router.post("/:id", requireAuth, asyncHandler(async (req, res) => {
    const comicId = req.params.id;
    const userId = req.session.auth.userId
    const collection = req.body.collection;
    const isDefaultChange = req.body.isDefaultChange

    const collectionName = collection.split('-').join(' ')
    console.log(collectionName);
    console.log(comicId);
    console.log(userId);
    console.log(isDefaultChange);

    const newCollection = await Collection.create({
        name: collectionName,
        userId: userId,
        comicId: comicId,
        readStatus: isDefaultChange
    })

    console.log(newCollection);

    const comic = await Comic.findByPk(comicId);
    return res.json({ comic });
}))

router.put("/:id", requireAuth, asyncHandler(async (req, res) => {
    const comicId = req.params.id;
    const userId = req.session.auth.userId
    const newCollection = req.body.newCollection;
    const isDefaultChange = req.body.isDefaultChange
    const prevCollection = req.body.prevCollectionName;

    const newCollectionName = newCollection.split('-').join(' ')

    const collections = await Collection.findAll({
        where: {
            comicId: comicId,
            userId: userId,
            name: prevCollection
        }
    });

    const rightCollection = collections[0];

    rightCollection.name = newCollectionName;
    await rightCollection.save();

    const comic = await Comic.findByPk(comicId);
    return res.json({ comic });
}))

module.exports = router;
