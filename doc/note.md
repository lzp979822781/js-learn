# 前端笔记

## es module

### node中使用import 语法

(1)启动是node --experimental-modules 文件名

(2)node旧版本文件中使用文件中使用 使用本身以.mjs为后缀

```
// 导入url模块

import {fileUrlToPath} from 'url'; // 文件url转换为路径
import {dirname} from 'path';
const __filename = fileUrlToPath(import.meta.url);
console.log(__filename); // 当前文件路径
console.log(dirname(__filename)); // 当前文件所在文件夹路径
```

(3)node新版本如12中使用es module

+ package.json中添加 type: 'module'

+ 文件已.js作为后缀
+ 如果要使用node本身的语法如require，则次文件以.cjs作为后缀

(4)node旧版本中使用且保留.js作为后缀，通过babel进行兼容

## webpack

### 默认入口

src/index.js  -> dist/main.js

### dist源码解析

```
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([,((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                __webpack_require__.r(__webpack_exports__);
                __webpack_require__.d(__webpack_exports__, {"default": () => (__WEBPACK_DEFAULT_EXPORT__)});
                const __WEBPACK_DEFAULT_EXPORT__ = (() => {
                    const element = document.createElement('h2')

                    element.textContent = 'Hello world'
                    element.addEventListener('click', () => {
                      alert('Hello webpack')
                    })

                    return element
                });
          })
/******/]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
      /******/
}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
      /******/
};
/******/    console.log("Array.isArray(__webpack_modules__)", Array.isArray(__webpack_modules__));
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
    /******/
}
/******/
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for (var key in definition) {
/******/ 				if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
          /******/
}
        /******/
}
      /******/
};
    /******/
})();
/******/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
    /******/
})();
/******/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				  Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
              }
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
      /******/
            };
    /******/
})();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
    __webpack_require__.r(__webpack_exports__);
    console.log('__webpack_exports__', __webpack_exports__);
/* harmony import */ var _heading_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

    console.log('_heading_js__WEBPACK_IMPORTED_MODULE_0__', _heading_js__WEBPACK_IMPORTED_MODULE_0__);
    // 逗号表达式会依次执行，返回最后一个表达式的结果，所以(0, _heading_js__WEBPACK_IMPORTED_MODULE_0__.default)返回
    // _heading_js__WEBPACK_IMPORTED_MODULE_0__.default
    const heading = (0, _heading_js__WEBPACK_IMPORTED_MODULE_0__.default)()

    document.body.append(heading)

  })();

  /******/
})()
  ;
```

### webpack5和webpack4的区别

对于图片的解析

webpack5配置type,代码如下

```
{
    test: /.png$/,
    type: 'asset'
}
```

```
在 webpack 5 之前，通常使用：

raw-loader 将文件导入为字符串
url-loader 将文件作为 data URI 内联到 bundle 中
file-loader 将文件发送到输出目录
资源模块类型(asset module type)，通过添加 4 种新的模块类型，来替换所有这些 loader：

asset/resource 发送一个单独的文件并导出 URL。之前通过使用 file-loader 实现。
asset/inline 导出一个资源的 data URI。之前通过使用 url-loader 实现。
asset/source 导出资源的源代码。之前通过使用 raw-loader 实现。
asset 在导出一个 data URI 和发送一个单独的文件之间自动选择。之前通过使用 url-loader，并且配置资源体积限制实现。
```

