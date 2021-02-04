const express = require("express");
const router = express.Router();
const { csrfProtection, asyncHandler } = require("../utils");
const { requireAuth } = require('../auth'); // wanna require for all things where user has to be logged in

const { Comic } = require("../db/models");

router.get("/:id(\\d+)", asyncHandler(async (req, res, next) => {
  const comic = await Comic.findByPk(parseInt(req.params.id, 10));
  res.render("comic", { comic });
}));


module.exports = router;
