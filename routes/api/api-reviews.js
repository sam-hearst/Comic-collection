const express = require("express");
const { validationResult } = require("express-validator");
const router = express.Router();
const { Review } = require("../../db/models");
const {
  asyncHandler,
  csrfProtection,
  handleValidationErrors,
} = require("../../utils");

router.get(
  "/new-review/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const reviews = await Review.findAll({
      order: [["createdAt", "DESC"]],
    });

    res.json({ reviews });
  })
);

router.post(
  "/new-review/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const { description } = req.body;
    const comicId = req.params.id;
    const userId = req.session.auth.userId;
    //res.locals.user will have userId
    // don't need to add in userId
    let review;
    const validatorErrors = validationResult(req);
    if (validatorErrors.isEmpty()) {
      review = await Review.create({
        description: description,
        userId: userId,
        comicId: comicId,
      });
    } else {
      const errors = validatorErrors.array().map((error) => {
        console.log(error.msg);
        return error.msg;
      });
    }

    res.json({ review });
  })
);

module.exports = router;
