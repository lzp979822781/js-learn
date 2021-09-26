(() => {

    // 模块定义
    var __webpack_module__ = [ , (__unused_module__, __webpack_exports__, __webpack_require__) => {
        // 添加module标记
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
            default: () => '刘志鹏',
            age: () => age
        })

        const age = 18; 
    }];

    var __webpack_module_cache__ = {};
    // require函数
    function __webpack_require__(moduleId) {
        var cacheModule = __webpack_module_cache__[moduleId];
        if (cacheModule !== undefined) {
            return cacheModule[moduleId].exports;
        }

        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_module__[moduleId](module, module.exports, __webpack_require__);
        return module.exports;
    }

    // 判断是否包含某个属性
    (() => {
        __webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
    })();
    __webpack_require__.a = 'aaa';
    // 通过defineProperty添加属性
    (() => {
        __webpack_require__.d = (exports, definition) => {
            for (var key in definition) {
                if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                    Object.defineProperty(exports, key, {enumerable: true, get: definition[key]});
                }
            }
        };
    })();

    // 添加__esModule属性,先判断Symbol是否存在
    (() => {
        __webpack_require__.r = exports => {
            if (typeof Symbol !== undefined && Symbol.toStringTag) {
                Object.defineProperty(exports, Symbol.toStringTag, {value: 'Module'});
            }

            Object.defineProperty(exports, '__esModule', {value: true});
        };
    })();

    // 加载入口模块
    var __webpack_exports__ = {};
    (() => {
        __webpack_require__.r(__webpack_exports__);
        var _login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
        console.log('name', _login__WEBPACK_IMPORTED_MODULE_0__.default);
        console.log('age', _login__WEBPACK_IMPORTED_MODULE_0__.age);
        document.write('首页加载');
    })();

})()