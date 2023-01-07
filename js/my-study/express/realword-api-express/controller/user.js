const {sign} = require("../util/jwt");
const {jwtSecret} = require("../config/config.default");

const {User} = require('../model');

// 登录
exports.login = async (req, res, next) => {
    try {
        // 处理请求
        const user = req.user.toJSON();
        
        const token = await sign({
            userId: user._id
        }, jwtSecret, {
            expiresIn: 60 * 60 * 24
        });
        delete user.password;
        res.status(200).json({
            ...user,
            token
        })
    } catch(err) {
        next(err);
    }
}

// 注册
exports.register = async (req, res, next) => {
    try {
        // 处理请求
        const user = new User(req.body.user);
        await user.save();

        const {password, ...otherUser} = user.toJSON();
        res.status(201).json({
            user: otherUser
        });
    } catch(err) {
        next(err);
    }
}

// 获取当前用户
exports.getCurrentUser = async (req, res, next) => {
    try {
        // 处理请求
        res.status(200).json({
            user: req.user
        });
    } catch(err) {
        next(err);
    }
};

// 更新当前用户
exports.updateCurrentUser = async (req, res, next) => {
    try {
        // 处理请求
        res.status(200).json({
            user: req.user
        });
    } catch(err) {
        next(err);
    }
};

