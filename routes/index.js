const express = require("express");
const router = express.Router();
const { csrfProtection } = require("../utils");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Comic-Collection " });
});

router.get("/signup", csrfProtection, (req, res) => {
  res.render("signup", { csrfToken: req.csrfToken(), user: {} });
});

// router.get("/login", csrfProtection, (req, res) => {
//   res.render("login", { csrfToken: req.csrfToken(), email: "" });
// });

module.exports = router;