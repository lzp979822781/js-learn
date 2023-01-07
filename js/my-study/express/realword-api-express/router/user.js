const express = require('express');
const auth = require('../middleware/auth');
const { validationResult } = require('express-validator');

const userValidator = require('../validator/user');

const router = express.Router();
const userCtrl = require('../controller/user');

// 用户登录
router.post('/user/login', userValidator.login, userCtrl.login);

// 用户注册
router.post('/users', userValidator.register, (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
}, userCtrl.register);

// 获取当前登录用户
router.post('/user', auth, userCtrl.getCurrentUser);

// 更新用户
// router.put('/user', auth, userCtrl.updateCurrentUser);

module.exports = router;