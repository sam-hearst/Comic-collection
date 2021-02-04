const express = require("express");
const router = express.Router();
const { csrfProtection, asyncHandler } = require("../utils");
const { requireAuth } = require('../auth'); // wanna require for all things where user has to be logged in

const { Comic, Review, User } = require("../db/models");

router.get("/:id(\\d+)", asyncHandler(async (req, res, next) => {
  const comic = await Comic.findByPk(parseInt(req.params.id, 10));
  const reviews = await Review.findAll({where: {
    comicId: req.params.id
  }, include: User });

  res.render("comic", { comic, reviews });
}));


module.exports = router;
