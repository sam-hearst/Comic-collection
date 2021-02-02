const express = require("express");
const router = express.Router();
const { csrfProtection } = require("../utils");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "a/A Express Skeleton Home" });
});

router.get("/signup", csrfProtection, (req, res) => {
  res.render("signup", { csrfToken: req.csrfToken(), user: {} });
});

module.exports = router;
