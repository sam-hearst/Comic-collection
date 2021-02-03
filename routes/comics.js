const express = require("express");
const router = express.Router();
const { csrfProtection, asyncHandler } = require("../utils");

const { Comic } = require("../db/models");

router.get("/:id", asyncHandler(async (req, res, next) => {
  const comic = await Comic.findByPk(parseInt(req.params.id, 10));
  res.render("comic", { comic });
}));


module.exports = router;