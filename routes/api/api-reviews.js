const express = require("express");
const { validationResult } = require("express-validator")
const router = express.Router();
const { Review, User } = require("../../db/models");
const { asyncHandler, csrfProtection, handleValidationErrors } = require("../../utils");

router.get(
  "/new-review",
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
      })
    } else {
      const errors = validatorErrors.array().map((error) => {
        console.log(error.msg);
        return error.msg;
      });
    }
    const userInfo = await User.findByPk(parseInt(userId));
    const user = {}
    user.firstName = userInfo.firstName;
    user.lastName = userInfo.lastName;

    res.json({ review, user });
  })
);

//router.put(
  //'/reviews/edit/:id(\\d+)',
  //asyncHandler(async (req, res) => {
//
  //}))
//
//
//

router.delete(
  `/reviews/:id(\\d+)`,
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    try {

    await Review.destroy({
      where: {
        id
      }
    })
    res.json({status: 200});
    }
    catch{
      res.json({ status:500 })
    }
})
)


module.exports = router;
