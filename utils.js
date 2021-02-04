const { validationResult } = require("express-validator");
const csrf = require("csurf");
const csrfProtection = csrf({ cookie: true });
const { Collection } = require("./db/models");

const asyncHandler = (handler) => (req, res, next) =>
handler(req, res, next).catch(next);

const handleValidationErrors = (req, res, next) => {
    const validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {

        const errors = validationErrors.array().map((error) => {
            return error.msg
        });

        const err = new Error("Bad request.");
        err.status = 400;
        err.title = "Bad request.";
        err.errors = errors;
        return next(err);
    }

    next();
}

async function generateDefaultCollections(userId) {
    await Collection.create({
        name: "reading",
        userId,
        
    })
}

module.exports = { 
    asyncHandler,
    handleValidationErrors,
    csrfProtection,
    generateDefaultCollections
};
