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


router.post("/custom", asyncHandler(async (req, res) => {
    const collectionName = req.body.custom;
    const userId = req.session.auth.userId;
    // bootleg: prepopulate the collection with a random comic because it is too
    //     late to update our database to include a table with collection names
    const comicId = Math.floor(Math.random() * 20)
    
    await Collection.create({
        name: collectionName,
        userId,
        comicId,
        readStatus: true
    })

    // res.render('collection');

}))


/*
Read Status Collection names:
Want to Read => wantToRead
Currently Reading
Read
*/
// STILL WORKING ON ADDING A COMIC TO A COLLECTION
// async function addComicToCollection(userId, comicId, collectionName) {

//     await Collection.create({
//         name: "reading",
//         userId,

//     })
// }

// router.post('/:name', requireAuth, asyncHandler(async (req, res) => {
//     // const comicId = parseInt(req.params.id, 10);
//     const collectionName = req.params.name;
    
//     console.log('sent collection: ', req.body.collection)
//     console.log('collectionName: ', collectionName)
//     // console.log('comicId: ', comicId)
//     console.log('userId: ', userId)
//     // addComicToCollection(userId, comicId, collectionName)
//     res.json({  });
// }))


module.exports = router;
