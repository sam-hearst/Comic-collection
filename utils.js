const { validationResult } = require("express-validator");
const csrf = require("csurf");
const csrfProtection = csrf({ cookie: true });

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


function sortedCollectionNames(collectionNames) {
    let sorted = ["Want to Read", "Currently Reading", "Read"]

    for (let i = 0; i < collectionNames.length; i++) {
        let collectionName = collectionNames[i]

        if (sorted.includes(collectionName)) {
            continue
        }

        sorted.push(collectionName);
    }

    return sorted
}

module.exports = {
    asyncHandler,
    handleValidationErrors,
    csrfProtection,
    sortedCollectionNames
};
