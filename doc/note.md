

[toc]

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
                // 定义的default属性值应该是一个get函数
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

```
整体说明：导出的对象整体是一个自执行函数	
__webpack_modules__：  [, fn:(module, module.exports, __webpack_require__) => {
	// 为module添加__esModule值
	// 为module.exports对象添加default属性值为函数，函数中返回模块代码
}, ...otherMoudle]; // 所有入口模块相关的模块定义
__webpack_module_cache__: 模块缓存对象
__webpack_require__ // 获取模块，先从缓存中读取，如果没有就定义初始模块，这是一个包含exports的模块。然后执行__webpack_modules__的第二个参数方法，最后返回的是module.exports属性值
__webpack_require__.r // 给对象上添加属性,这里网exports添加__esModule属性，值为{value: true}
__webpack_require__.o // 判断对象对象上是否含有某个属性
__webpack_require__.d // 复制另外一个对象的属性到exports对象上

// 最后是入口执行方法
依次加载入口模块
```

入口文件加载CommonJs

```
编译后的CommonJs模块保留module.exports = xxxx 原始语句
```

入口文件导入es module

导入的文件内部通过export default 导出

```
__webpack_require__.d中给模块添加的是exports default属性
// 原始代码
const name = 'login';
export default name;

// 编译后代码
(__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, {
                // 值应该是defineProperty中的get方法
                "default": () => (__WEBPACK_DEFAULT_EXPORT__)
            });
            const name = 'login';
            const __WEBPACK_DEFAULT_EXPORT__ = (name);
}
```

通过export {}导出

```
__webpack_require__.d给exports添加的是对应的变量信息
// 原始代码
export const name = 'login';

// 编译后代码
(__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

   __webpack_require__.r(__webpack_exports__);
	 __webpack_require__.d(__webpack_exports__, {
   		"name": () => (/* binding */ name)
   });
	 const name = 'login';

}
```

**测试用例**

login.js

```
const age = 18;

export default '刘志鹏';

export {age};
```

入口文件

```
import name, {age} from './login';
console.log('name', name);
console.log('age', age);
document.write('首页加载');
// document.write(about);
```

打包后代码，自己写

```
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
```

#### 动态import加载原理分析

(1)初始执行

定义window.webpackJsonp数组对象并对其的push方法进行劫持，重定义webpackJsonpCallback为push方法

webpackJsonpCallback方法用于合并动态模块到全局的module对象，并将动态模块的状态改为resolve

(2)动态加载的文件源码

如加载login.js则实际源码为window.webpackJsonp.push([ ['login'], { 'src/login.js': function(module, exports){} }])

(4)动态加载的源代码

![image](https://gitee.com/lzp979822781/personal-img/raw/master/img/webpack4%20dynamic-import-origin-code.png)

__webpack_require___.e中创建动态模块的初始状态存于installedChunks中，初始为installedChunks['login'] = [resolve, reject, promise]

然后在html中插入script标签，src属性为 src/login.js文件从而触发window.webpackJsonp的push方法从而执行webpackJsonpCallback方法修改状态

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

### 自定义loader

```
// markdown-loader
// 必须返回js供下面的loader去处理，如果只是返回一段字符串的话，不是js语句，无法进行处理
const marked = require('marked');

module.exports = source => {
    console.log('source', source);
    console.log('html', marked(source)); // html片段
    console.log('sringify', JSON.stringify(marked(source))); // html字符串
    return `module.exports = ${JSON.stringify(marked(source))}`; // 转换成js语句
};
```

打包生成的dist源码

```
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = "<h1 id=\"关于我\">关于我</h1>\n<p>我是汪磊，一个手艺人~</p>\n"

/***/ })
/******/ 	]);
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
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _about_md__WEBPACK_IMPORTED_MODULE_0__ = `__webpack_require__`(1);
/* harmony import */ var _about_md__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_about_md__WEBPACK_IMPORTED_MODULE_0__);


console.log('about', (_about_md__WEBPACK_IMPORTED_MODULE_0___default()));
})();

/******/ })()
;
```



webpack.config.js

```
const path = require('path');

module.exports = {
    mode: 'none',
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        clean: true,
        path: path.join(__dirname, 'dist'),
        publicPath: 'dist/'
    },
    module: {
        rules: [
            {
                test: /.md$/,
                use: [
                    './markdown-loader.js'
                ]
            }
        ]
    }
}
```

### 自定义plugin

#### 常用对象说明

**webpack 核心模块**

```
Webpack 工程相当庞大，但 Webpack 本质上是一种事件流机制。通过事件流将各种插件串联起来，最终完成 Webpack 的全流程，而实现事件流机制的核心是 Tapable 模块。Webpack 负责编译的 Compiler 和创建 Bundle 的 Compilation 都是继承自 Tapable。
Webpack 核心库 Tapable 的原理和 EventEmitter 类似，但是功能更强大，包括多种类型，通过事件的注册和监听，触发 Webpack 生命周期中的函数方法。在Webpack 中，tapable 都是放到对象的 hooks 上，所以我们叫它们钩子
Tapable 的原理解析，Tapable 的执行流程可以分为四步：
使用 tap* 对事件进行注册绑定。根据类型不同，提供三种绑定的方式：tap、tapPromise、tapAsync，其中 tapPromise、tapAsync 为异步类 Hook的绑定方法；
使用 call* 对事件进行触发，根据类型不同，也提供了三种触发的方式：call、promise、callAsync；
生成对应类型的代码片段（要执行的代码实际是拼字符串拼出来的）；
生成第三步生成的代码片段。
总结：Tapable 是 Webpack 的核心模块，Webpack 的所有工作流程都是通过 Tapable 来实现的。Tapable 本质上是提供了多种类型的事件绑定机制，根据不同的流程特点可以选择不同类型的 Hook 来使用。Tapable 的核心实现在绑定事件阶段跟我们平时的自定义 JavaScript 事件绑定（例如EventEmitter）没有太大区别，但是在事件触发执行的时候，会临时生成可以执行的函数代码片段。通过这种实现方式，Tapable 实现了强大的事件流程控制能力，也增加了如 waterfall/parallel 系列方法，实现了异步/并行等事件流的控制能力。
```

**Webpack 的 Compiler 和 Compilation**

```
在 Webpack 工作流程中，Compiler 和 Compilation 都是继承自 Tapable ，不同点是 Compiler 是每个 Webpack 的配置，对应一个 Compiler 对象，记录着整个 Webpack 的生命周期；在构建的过程中，每次构建都会产生一次Compilation，Compilation 则是构建周期的产物。
总结：Webpack 中两个核心的类 Compiler 和 Compilation。Compiler 是每次 Webpack 全部生命周期的对象，而 Compilation 是 Webpack 中每次构建过程的生命周期对象，Compilation 是通过 Compiler创建的实例。两个类都有自己生命周期，即有自己不同的 Hook，通过添加对应 Hook 事件，可以拿到各自生命周期关键数据和对象。Compilation 有个很重要的对象是 Stats 对象，通过这个对象可以得到 Webpack 打包后的所有 module、chunk 和 assets 信息，通过分析 Stats对象可以得到很多有用的信息，比如 webpack-bundle-analyzer 这类分析打包结果的插件都是通过分析 Stats 对象来得到分析报告的。
```

**Webpack的基本流程**

```
1.Webpack 的基本流程可以分为三个阶段，如下所示：
准备阶段：主要任务是创建 Compiler 和 Compilation 对象；
编译阶段：这个阶段任务是完成 modules 解析，并且生成 chunks；
module 解析：包含了三个主要步骤，创建实例、loaders 应用和依赖收集；
chunks 生成，主要步骤是找到每个 chunk 所需要包含的 modules。
2.产出阶段：这个阶段的主要任务是根据 chunks 生成最终文件，
在产出阶段中，主要有三个步骤：模板 Hash 更新，模板渲染 chunk，生成文件。细化到具体的代码层次，大概可以分为：
初始化参数：包括从配置文件和 shell 中读取和合并参数，然后得出最终参数；
shell 中的参数要优于配置文件的；
使用上一步得到的参数实例化一个 Compiler 类，注册所有的插件，给对应的 Webpack 构建生命周期绑定 Hook；
开始编译：执行 Compiler 类的 run 方法开始执行编译；
compiler.run 方法调用 compiler.compile，在 compile 内实例化一个Compilation 类。
3.Compilation 是做构建打包的事情，主要事情包括：
查找入口：根据 entry 配置，找出全部的入口文件；
编译模块：根据文件类型和 loader 配置，使用对应 loader 对文件进行转换处理；
解析文件的 AST 语法树；
找出文件依赖关系；
递归编译依赖的模块。
4.递归完后得到每个文件的最终结果，根据 entry 配置生成代码块 chunk；
输出所有 chunk 到对应的 output 路径。
5.shell 中的参数要优于配置文件。举例说明：配置文件指定了 mode 是development，而 shell中传入了 --mode production，则最终 mode 值为production。
6.在 Webpack 工作流程里，Tapable 始终贯穿其中，Tapable 各种 Hook（钩子）组成了 Webpack 的生命周期。Tapable Hook 和生命周期的关系为：
Hook：钩子，对应 Tapable 的 Hook；
生命周期：Webpack 的执行流程，钩子实际就是生命周期，一般类似 entryOption 的 Hook，在生命周期中 entry-option。
参与 Webpack 流程的两个重要模块是：Compiler和Compilation。
7.总结: Webpack 打包流程从配置文件的读取开始，分别经过了准备阶段、modules 产出阶段、chunks 产出阶段和 bundle 产出物产出阶段。在各自阶段，分别有不同的「角色」参与，整个Webpack 的打包流程是通过 Compiler 来控制的，而每次打包的过程是通过 Compilation 来控制的。在普通打包模式下，webpack 的 Compiler 和 Compilation 是一一对应的关系； watch 模式下，Webpack 的 Compiler会因为文件变化而产生多次打包流程，所以 Compiler和 Compilation 是一对多关系，通过 Hook Compiler 的流程，可以得到每次打包过程的回调。

8.Webpack 的工作流程中的类，如下所示：

Tapbale：Webpack 事件流程核心类；
Compiler：Webpack 工作流程中最高层的对象，初始化配置，提供 Webpack 流程的全局钩子，比如 done、compilation 这类；
Compilation：由 Compiler 来创建的实例对象，是每次打包流程最核心的流程，该对象内进行模块依赖解析、优化资源、渲染 runtime 代码等事情，下面在 Compilation 中还有用到的一些对象：
Resolver：解析模块（module）、loader 等路径，帮助查找对应的位置；
ModuleFactory：负责构造模块的实例，将 Resolver 解析成功的组件中把源码从文件中读取出来，然后创建模块对象；
Template：主要是来生成 runtime代码，将解析后的代码按照依赖顺序处理之后，套上 Template 就是我们最终打包出来的代码。
```

**webpack 中的 HMR**

```
1.HMR 的一个完整周期，整个周期分为两部分：启动阶段和文件监控更新流程。
2.在启动阶段，Webpack 和 webpack-dev-server 进行交互。Webpack 和 webpack-dev-server 主要是通过 Express的中间件 webpack-dev-middleware进行交互，这个阶段可以细分为以下几个步骤：
webpack-dev-server 启动 Webpack 打包的 watch 模式，在这种模式下 Webpack 会监听文件的变化，一旦有文件发生变化，则会重新进行打包，watch 模式下 Webpack 打包的结果不会落盘（保存到硬盘上）；
webpack-dev-server 通过 webpack-dev-middleware 与 Webpack 进行交互，Webpack-dev-middleware 初始化会接收 Webpack 的 Compiler 对象，通过Compiler 的钩子可以监听 Webpack 的打包过程；
如果 devServer.watchContentBase=true，则 webpack-dev-server 监听文件夹中静态文件的变化，发生变化则通知浏览器刷新页面重新请求新的文件；
打开浏览器之后，webpack-dev-server 会利用 sockjs 在浏览器和 Server 之间创建一个 WebSocket 长连接，这个长连接是浏览器和 webpack-dev-server 的通信桥梁，它们之间的通信内容主要是传递编译模块的文件信息（hash值），这时候如果 Webpack 监控的文件发生了修改，webpack/hot/dev-server 来实现 HMR 更新还是刷新页面。
3.注意的是，如下所示：
webpack-dev-server 的 contentBase 可以理解为静态资源服务器的目录文件夹，启动 server 之后，可以通过网址+电脑中文件路径的方式访问到具体文件，这个文件跟 Webpack 打包出来的路径并不一样；
这里有两个文件变化的监控，第一步中 Webpack 监控整个依赖模块的文件变化，发生变化则重新出发 Webpack 编译；第三步中 webpack-dev-server自己监控 contentBase 的文件变化，文件发生变化则通知浏览器刷新页面，这里是刷新页面并不是 HMR，这是因为 contentBase 内容是非 Webpack 打包的依赖文件。
WebSocket 需要服务端和浏览器端都有对应的创建连接代码（new WebSocket），webpack-dev-server在浏览器中通过在 chunks 中插入 webpack-dev-server/client 这个文件来创建 WebSocket 通信。
4.到此启动阶段结束，当 Webpack 监控的文件发生变化之后，这时候就进入了文件监控更新流程，当 Webpack 监控的依赖图中的某个文件修改之后：
Webpack 会重新编译文件，这时候我们在 webpack.config.js 中添加的插件 HotModuleReplacementPlugin 会生成两次编译之间差异文件列表（manifest）文件 [hash].hot-update.json，这个 manifest JSON 文件包含了变化文件的 Update 内容，即 [id].[hash].hot-update.js。webpack-dev-server 中的 webpack-dev-middler 会通过 Webpack 的 Compiler 钩子监听打包进程，然后通知 webpack-dev-server 使用 WebSocket 长连接推送编译之后的 hash 值；
除了发送编译后 Hash 值之外，webpack-dev-server 还会通过长连接告诉浏览器当前的页面代码是 invalid 状态的，需要更新新的代码；
浏览器拿到 Hash之后，会首先发起一个 Ajax 请求 manifest 文件[hash].hot-update.json 文件内容；
manifest 列表文件内容拿到之后，会告诉 HMR的 Runtime 请求那些变化的 JavaScript 文件，这时候会 Runtime 会按照清单列表发起 JSONP 请求，将两次编译的差异文件 [id].[hash].hot-update.js 获取下来，插到页面 head 标签的 script 中执行，最终完成了更新的全流程。
5.总结：webpack-dev-server 虽然可以直接来启动 HMR，但是真正核心的是 webpack-dev-middleware。webpack-dev-server 除了这个中间件之外主要功能就是个静态服务器。
```

### Webpack-dev-server 配置

**启动命令**

```
"start": "webpack serve --open --progress"
```

直接用webpack-dev-server启动在webpack5下会报错

webpack.config.js配置

```
const path = require('path');
const yaml = require('yamljs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        print: './src/print.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(csv|tsv)$/i,
                use: ['csv-loader'],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.yaml$/i,
                type: 'json',
                parser: {
                    parse: yaml.parse
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '管理输出'
        })
    ]
};
```





