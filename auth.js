const { User } = require("./db/models");

const loginUser = (req, res, user) => {
    req.session.auth = { userId: user.id, email: user.email }
};

const logoutUser = (req, res) => {
    delete req.session.auth
}

module.exports = { loginUser, logoutUser };
