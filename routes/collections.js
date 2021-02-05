const express = require("express");
const router = express.Router();
const { asyncHandler } = require("../utils");
const { requireAuth } = require('../auth'); 

const { Comic, Collection, User } = require("../db/models");

// STILL WORKING ON ADDING A COMIC TO A COLLECTION
async function addComicToCollection(userId, comicId, collectionName) {

    await Collection.create({
        name: "reading",
        userId,

    })
}


router.get("/", requireAuth, asyncHandler(async (req, res) => {
    let userId;
    if (req.session.auth) {
        userId = req.session.auth.userId
    }
    // Query db
    const collections = await Collection.findAll({
        where: {
            userId
        },
        include: [User, Comic]
    })

    // Find all of the collections for the user
    let collectionArray = []
    for (let collection of collections) {
        collectionArray.push(collection.name)
    }
    const collectionNames = [...new Set(collectionArray)];

    // Render
    res.render('collection', { collectionNames, collections })
}))




/*
    Read Status Collection names:
    Want to Read
    Currently Reading
    Read
*/

router.post('/:name', requireAuth, asyncHandler(async (req, res) => {
    const comicId = parseInt(req.params.id, 10);
    const collectionName = req.params.name;
    let userId;
    if (req.session.auth) {
        userId = req.session.auth.userId
    }
    addComicToCollection(userId, comicId, collectionName)
}))


module.exports = router;
