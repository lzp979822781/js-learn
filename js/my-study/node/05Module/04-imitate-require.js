const fs = require('fs');
const vm = require('vm');
const path = require('path');

function Module(id) {
    this.id = id;
    this.exports = exports;
}

Module.prototype.load = function() {
    // 根据不同的后缀进行加载
    const extname = path.extname(this.id);
    Module._extensions[extname](this);
};

// 缓存模块
Module._cache = {};

// 判断文件是否存在
Module._exist = filename => {
    return fs.existsSync(filename);
}

Module.wrapper = [
    "(function(exports, require, module, __filename, __dirname){",
    "})"
]

// 文件后缀类型
Module._extensions = {
    '.js'(module) {
        // 获取文件内容
        const content = fs.readFileSync(module.id, 'utf-8');

        // 拼接前后缀
        const newContent = Module.wrapper[0] + content + Module.wrapper[1];

        // 通过vm模块进行加载
        const compileFn = vm.runInThisContext(newContent);
        const exports = module.exports;
        const filename = module.id;
        const dirname = path.dirname(filename);
        compileFn.call(exports, exports, myRequire, module, filename, dirname);
    },
    '.json'(module) {

    }
};

Module._resolveFilename = function(filename) {
    // 获取文件绝对路径
    const absPath = path.isAbsolute(filename) ? filename : path.resolve(__dirname, filename);
    
    // 判断当前内容是否存在
    if (Module._exist(absPath)) {
        return absPath;
    } else {
        // 添加后缀继续寻找文件
        const keys = Object.keys(Module._extensions);
        for(let i = 0; i < keys.length; i++) {
            const newPath = absPath + keys[i];
            if (Module._exist(newPath)) {
                return newPath;
            }
        }
    }

    throw new Error(`${filename} is not exist`);
};

function myRequire(filename) {
    // 获取绝对路径
    const mPath = Module._resolveFilename(filename);

    // 从缓存中获取
    const cacheModule = Module._cache[mPath];
    if (cacheModule) return cacheModule.exports;

    // 缓存中没有则创建模块
    const module = new Module(mPath);

    // 缓存模块
    Module._cache[mPath] = module;

    // 加载模块(编译执行)
    module.load();
    // 导出结果
    return module.exports;
}

const name = myRequire('./v');

console.log('name', name);

