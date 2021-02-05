const express = require("express");
const router = express.Router();
const { csrfProtection, asyncHandler } = require("../utils");
const db = require("../db/models");

/* GET home page. */
router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    // const userId = req.session.auth.userId;

    //   let user; // this code can get use the user

    //   if (userId) {
    //     user = await db.User.findByPk(userId);
    //   }
  let userId = null;
  if (req.session.auth) {
    userId = req.session.auth.userId;
  }
    const comics = await db.Comic.findAll();
    res.render("index", { comics, userId });
  })
);

router.get("/signup", csrfProtection, (req, res) => {
  res.render("signup", { csrfToken: req.csrfToken(), user: {} });
});

router.get("/login", csrfProtection, (req, res) => {
  res.render("login", { csrfToken: req.csrfToken(), userName: "" });
});

router.get('/test/sidebar', csrfProtection, asyncHandler(async (req, res) => {
    res.render('sidebar', {csrfToken: req.csrfToken() });
}))

module.exports = router;
