const path = require('path');

const appRoot = process.cwd();

const resolvePath = relativePath => {
    return path.resolve(appRoot, relativePath);
};

module.exports = resolvePath;