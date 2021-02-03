const express = require("express");
const router = express.Router();
const { csrfProtection } = require("../utils");
const db = require("../db/models");

/* GET home page. */
router.get("/", async (req, res, next) => {
  const comics = await db.Comic.findAll();
  res.render("index", { comics });
});

router.get("/signup", csrfProtection, (req, res) => {
  res.render("signup", { csrfToken: req.csrfToken(), user: {} });
});

router.get("/login", csrfProtection, (req, res) => {
  res.render("login", { csrfToken: req.csrfToken(), title: "Log in" });
});


module.exports = router;
