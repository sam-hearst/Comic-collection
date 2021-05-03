const express = require("express");
const router = express.Router();
const { asyncHandler } = require("../../utils");
const { requireAuth } = require('../../auth');

const { Comic, Review, User, Collection } = require("../../db/models");

//Add a comic to a collection
//   update if the colllection is a ReadStatus
router.post("/:name/comics/:id", requireAuth, asyncHandler(async (req, res) => {
    const collectionName = req.params.name.split('-').join(' ');
    const comicId = req.params.id;
    const userId = req.session.auth.userId


    const defaultCollectionNames = ['Want to Read', 'Read', 'Currently Reading'];
    if (defaultCollectionNames.includes(collectionName)) {
        await Collection.destroy({
            where: {
                userId,
                comicId,
                readStatus: true,
            }
        })
        await Collection.create({
            name: collectionName,
            userId,
            comicId,
            readStatus: true
        })
    } else {
        //need to destroy the record if it is already in the table
        //find if it exists
        const record = await Collection.findOne({
            where: {
                userId,
                comicId,
                name: collectionName
            }
        })
        //if exists, destroy, else create
        if (record) {
            record.destroy();
        } else {
            await Collection.create({
                name: collectionName,
                userId,
                comicId,
                readStatus: false
            })
        }
    }

    const comic = await Comic.findByPk(comicId);
    return res.json({ comic });
}))

//add a custom collection to the database
router.post('/', requireAuth, asyncHandler(async (req, res) => {
    //find if the custom collection exists for the user
    const comicId = req.body.comicId;
    const collectionName = req.body.collectionName;
    const userId = req.session.auth.userId;
    const record = await Collection.findOne({
        where: {
            userId,
            name: collectionName
        }
    })
    //if it doesn't exits create else throw duplicate error
    let response = {};
    if (!record) {
        await Collection.create({
            name: collectionName,
            userId,
            comicId,
            readStatus: false
        })
        response.message = 'Updated your collections'
    } else {
        response.error = 'That collection already exists';
    }
    res.json(response)
}))

router.delete("/", asyncHandler(async (req, res) => {
    const { name } = req.body
    try {
        await Collection.destroy({
            where: {
                name
            }
        })
        res.json({ status: 200 })
    } catch {
        res.json({ status: 500 })
    }
}))

// update the name of a collection
router.put('/', asyncHandler(async (req, res) => {
    const { newName, oldName } = req.body;

    try {
        await Collection.update({
            name: newName
        }, {
            where: { name: oldName }
        })
        res.json({ status: 200 })
    } catch {
        res.json({ status: 500 })
    }
}))

module.exports = router;
