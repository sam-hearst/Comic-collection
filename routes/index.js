const express = require("express");
const router = express.Router();
const { csrfProtection, asyncHandler, sortedCollectionNames } = require("../utils");
const db = require("../db/models");
const { Comic } = db;
const { User } = db;

/* GET home page. */
router.get(
    "/",
    asyncHandler(async (req, res, next) => {
        let userId = null;
        if (req.session.auth) {
            userId = req.session.auth.userId;
        }
        const comics = await db.Comic.findAll();

        const collections = await db.Collection.findAll({
            where: {
                userId,
            },
            include: [Comic]
        });
        let collectionArray = [];
        for (let collection of collections) {
            collectionArray.push(collection.name);
        }
        let collectionNames = [...new Set(collectionArray)];

        collectionNames = sortedCollectionNames(collectionNames);  // sort the names

        res.render("index", { collections, collectionNames, comics, userId });
    })
);

router.get("/signup", csrfProtection, (req, res) => {
    res.render("signup", { csrfToken: req.csrfToken(), user: {} });
});

router.get("/login", csrfProtection, (req, res) => {
    res.render("login", { csrfToken: req.csrfToken(), userName: "" });
});

router.get(
    "/test/sidebar",
    csrfProtection,
    asyncHandler(async (req, res) => {
        let userId = null;
        if (req.session.auth) {
            userId = req.session.auth.userId;
        }

        const collections = await db.Collection.findAll({
            where: {
                userId,
            },
            include: [User, Comic],
        });
        let collectionArray = [];
        for (let collection of collections) {
            collectionArray.push(collection.name);
        }
        const collectionNames = [...new Set(collectionArray)];

        res.render("sidebar", {
            collections,
            collectionNames,
            csrfToken: req.csrfToken(),
        });
    })
);

module.exports = router;
