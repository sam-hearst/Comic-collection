const express = require("express");
const router = express.Router();
const { asyncHandler } = require("../../utils");
const { requireAuth } = require('../../auth'); 

const { Comic, Review, User, Collection } = require("../../db/models");

//Add a comic to a collection
router.post("/:name/comics/:id", requireAuth, asyncHandler(async (req,res) => {
    const collectionName = req.params.name.split('-').join(' ');
    const comicId = req.params.id;
    console.log(comicId, collectionName)
    const userId = req.session.auth.userId
    const defaultCollectionNames = ['Want to Read', 'Read', 'Currently Reading'];
    if (defaultCollectionNames.includes(collectionName)) {
        await Collection.destroy( {where: {
            userId,
            comicId,
            readStatus: true,
        }})
        await Collection.create({
            name: collectionName,
            userId,
            comicId,
            readStatus: true
        })
    } else {
        await Collection.create({
            name: collectionName,
            userId,
            comicId,
            readStatus: false
        })
    }
    return res.status(200);
}))

module.exports = router;