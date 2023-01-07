const mongoose = require('mongoose');
const baseModel = require('./base-model');

const { Schema } = mongoose;

module.exports = new Schema({
    ...baseModel,
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        /* set: value => md5(value),
        select: false */
    },
    bio: {
        type: String,
        default: null
    },
    image: {
        type: String,
        default: null
    }
});