const express = require("express");
const bcrypt = require("bcrypt");
const {
  asyncHandler,
  csrfProtection,
  handleValidationErrors,
} = require("../utils");
const { check, validationResult } = require("express-validator");
const { User } = require("../db/models");
// const { User } = db;
const { loginUser, logoutUser } = require("../auth");
const router = express.Router();

const userValidators = [
  check("firstName")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for First Name")
    .isLength({ max: 50 })
    .withMessage("First Name must not be more than 50 characters long"),
  check("lastName")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for Last Name")
    .isLength({ max: 50 })
    .withMessage("Last Name must not be more than 50 characters long"),
  check("email")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for Email Address")
    .isLength({ max: 255 })
    .withMessage("Email Address must not be more than 255 characters long")
    .isEmail()
    .withMessage("Email Address is not a valid email"),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for Password")
    .isLength({ max: 50 })
    .withMessage("Password must not be more than 50 characters long")
    //  work on the Regex for passwords
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, "g")
    .withMessage(
      'Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*")'
    )
    .custom((value) => {
      return User.findOne({ where: { email: value } }).then((user) => {
        if (user) {
          return Promise.reject(
            "The provided Email Address is already in use by another account"
          );
        }
      });
    }),
  check("confirmPassword")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for Confirm Password")
    .isLength({ max: 50 })
    .withMessage("Confirm Password must not be more than 50 characters long")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Confirm Password does not match Password");
      }
      return true;
    }),
];

// console.log(User);
/* GET users listing. */
router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    const users = await User.findAll();
    console.log(req.session.auth);
    res.render("users", { users, title: "im working" });
  })
);

router.post(
  "/",
  csrfProtection,
  userValidators,
  asyncHandler(async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    const validatorErrors = validationResult(req);
    if (validatorErrors.isEmpty()) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({
        firstName,
        lastName,
        email,
        hashedPassword,
      });
      loginUser(req, res, user);
      res.redirect("/");
    } else {
      const errors = validatorErrors.array().map((error) => {
        console.log(error.msg);
        return error.msg;
      });
      const user = { firstName, lastName, email };
      res.render("signup", {
        title: "Sign Up",
        user,
        errors,
        csrfToken: req.csrfToken(),
      });
    }
  })
);

module.exports = router;
