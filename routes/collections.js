const express = require("express");
const router = express.Router();
const { asyncHandler } = require("../utils");
const { requireAuth } = require('../auth');

const { Comic, Collection, User } = require("../db/models");


router.get("/", requireAuth, asyncHandler(async (req, res) => {
    let userId;
    if (req.session.auth) {
        userId = req.session.auth.userId
    }
    const collections = await Collection.findAll({
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
    res.render('collection', { collectionNames, collections })
}))


router.post("/", asyncHandler(async (req, res) => {
    const collectionName = req.body.custom;
    const userId = req.session.auth.userId;
    // bootleg: prepopulate the collection with a random comic because it is too
    //     late to update our database to include a table with collection names
    // const comicId = Math.floor(Math.random() * 20)

    await Collection.create({
        name: collectionName,
        userId,
        readStatus: true
    })

    const collections = await Collection.findAll({
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
    res.render('collection', { collectionNames, collections });

}))


module.exports = router;
