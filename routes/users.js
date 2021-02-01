const express = require('express');
const bcrypt = require('bcrypt');
const { asyncHandler, csrfProtection, handleValidationErrors } = require("../utils");
const { check } = require("express-validator");
const { User } = require("../db/models");
// const { User } = db;
const { loginUser, logoutUser } = require("../auth");
const router = express.Router();

// console.log(User);
/* GET users listing. */
router.get('/', asyncHandler( async (req, res, next) => {
    const users = await User.findAll();
    console.log(req.session.auth);
    res.render('users', {users, title: "im working" });
}));



module.exports = router;
