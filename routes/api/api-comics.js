const express = require("express");
const router = express.Router();
const { asyncHandler } = require("../../utils");
const { requireAuth } = require('../../auth'); 
const { Comic, Review, User, Collection } = require("../../db/models");

// Query the collections for a specific user and comic (when the comic page loads)
router.get('/:id', requireAuth, asyncHandler(async (req, res) => {
    const comicId = req.params.id;
    const userId = req.session.auth.userId;

    const collections = await Collection.findAll({
        where: {
            userId,
            comicId
        }
    })
    let collectionList = []
    collections.forEach(collection => {
        collectionList.push(collection.name);
    })
    return res.json(collectionList)
}))


module.exports = router;
