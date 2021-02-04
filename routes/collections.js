const express = require("express");
const router = express.Router();
const { csrfProtection, asyncHandler } = require("../utils");
const { requireAuth } = require('../auth'); // wanna require for all things where user has to be logged in

const { Comic } = require("../db/models");


router.get("/:id(\\d+)/collections", asyncHandler(async (req, res) => {
    const userId = parseInt(req.params.id, 10);
    console.log(userId);

    res.render('collection', {})
}))

/*
      //generate the read status tables for the new user
      //find the user id
      const userId = user.id;
      //create the 3 tables in the utils file
      generateDefaultCollections(userId)

*/
