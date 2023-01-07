const {verify} = require('../util/jwt.js');
const {jwtSecret} = require('../config/config.default');

const {User} = require('../model');

module.exports = async (req, res, next) => {
    const authorization = req.headers.authorization;
    const token = authorization ? authorization.split('Bearer ')[1] : null;
    if (!token) {
        return res.status(401).end();
    }

    try {
        const decodeToken = await verify(token, jwtSecret);
        const user = await User.findById(decodeToken.userId);
        req.user = user;
        next();
    } catch(err) {
        return res.status(401).end();
    }
};