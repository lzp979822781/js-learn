const express = require('express');

const router = express.Router();

const userRoutes = require('./user');
const profileRoutes = require('./profile');
// const articleRoutes = require('./article');
const tagRoutes = require('./tag');

router.use(userRoutes);
router.use('/profiles', profileRoutes);

// 文章相关
// router.use('/articles', articleRoutes);
// 标签相关
router.use('/tags', tagRoutes);

module.exports = router;