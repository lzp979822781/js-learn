# 工程化之项目辅助工具篇

# 1.demo

## 1.1 package.json中配置

```
"plop": "./node_modules/plop/bin/plop.js"
```

## 1.2 添加plop配置文件

在工程根目录下添加plopfile.js

```
module.exports = function(plop) {
    plop.setGenerator('component', {
        description: 'create a component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'component name',
                default: 'MyComponent'
            },
            {
                type: 'input',
                name: 'prefix', // 代码片段中使用
                message: 'css prefix',
                default: 'my-component'
            },
            {
                type: 'input',
                name: 'destPath',
                message: '生成文件路径',
                default: 'src/components/common'
            }
        ],
        actions: [
            {
                type: 'add',
                path: '{{destPath}}/{{name}}/index.js', // 第一个input输入的值
                templateFile: 'plop-templates/component.hbs'
            },
            {
                type: 'add',
                path: '{{destPath}}/{{name}}/index.less',
                templateFile: 'plop-templates/component.less.hbs' // plop-templates为配置的模板文件夹
            }
        ]
    })
}
```

## 1.3 创建代码模板

### 1.3.1 创建模板目录

根据配置文件在代码根目录下创建plop-templates文件夹

### 1.3.2 创建模板文件

在1.3.1创建的目录下创建component.hbs、component.less.hbs两个模板文件, handlebars官网如下：[hanlebars官网][handlebars]

component.hbs如下

```
import {useState, useEffect} from 'react';
import classnames from 'classnames';
import './index.less';

const PREFIX = '{{prefix}}';
function {{name}}(props) {
    const {className} = props;
    const cls = classnames(PREFIX, className);

    return (
        <div className={cls}>{{name}}</div>
    );
}

export default {{name}};
```

component.less.hbs

```
@import 'modules/common/css/global.less';

.{{prefix}} {

}
```



## 1.4 使用

![img](https://gitee.com/lzp979822781/personal-img/raw/master/img/plop2.png)

# 2 源码解析

## 2.1 plop package.json解析

```

  "name": "plop",
  "version": "2.7.6",
  "description": "Micro-generator framework that makes it easy for an entire team to create files with a level of uniformity",
  "main": "./src/plop", // 包入口文件
  "repository": {
    "type": "git",
    "url": "https://github.com/plopjs/plop.git" // npm 包git地址
  },
  "keywords": [
    "generator",
    "scaffolding",
    "yeoman",
    "make",
    "build",
    "generate",
    "gen",
    "plop"
  ],
  "author": "Andrew Worcester <andrew@amwmedia.com> (http://amwmedia.com)",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/plopjs/plop/issues"
  },
  "scripts": {
    "test": "npm run test:instrument && ava && nyc report",
    "test:instrument": "nyc instrument ./bin ./instrumented/bin && nyc instrument ./src ./instrumented/src && cp package.json ./instrumented",
    "format": "eslint --fix ./",
    "prepare": "husky install"
  },
  "devDependencies": {
    "ava": "^3.15.0", // 测试用例工具
    "eslint": "^8.0.1",
    "eslint-config-prettier": "^8.3.0",
    "eslint-plugin-prettier": "^4.0.0",
    "execa": "^5.0.0", // 通过代码执行终端命令
    "husky": "^7.0.2", // commit钩子工具
    "inquirer-directory": "^2.2.0", // 目录选择工具
    "lint-staged": "^11.2.3", // 代码检查
    "nyc": "^15.1.0", // 结合测试工具使用，显示测试覆盖率
    "plop-pack-fancy-comments": "^0.2.0",
    "prettier": "^2.4.1",
    "queue-microtask": "^1.2.3"
  },
  "homepage": "https://plopjs.com",
  "dependencies": {
    "@types/liftoff": "^2.5.1",
    "chalk": "^1.1.3", // 给输出命令添加颜色
    /**
    * This is used by Liftoff to automatically require dependencies for configuration files, and by rechoir for         
    * registering module loaders.
    * 自动加载配置文件依赖和注册模块加载器
    */
    "interpret": "^1.2.0", // 配合liftoff使用
    "liftoff": "^2.5.0", // 一个全局命令行调用本地项目中安装的包、加载配置文件
    "minimist": "^1.2.5", // 命令行参数转换
    "node-plop": "^0.26.3", // 通过代码测试功能而不是cli，通过命令行以外的流程和工具自动生成代码
    "ora": "^3.4.0", // 终端loading工具
    "v8flags": "^2.0.10" // 获取可用的v8和node flags
  },
  "engines": {
    "node": ">=8.9.4"
  },
  "preferGlobal": "true",
  "bin": {
    "plop": "./bin/plop.js" // npm命令执行文件
  },
  "lint-staged": {
    "*.js": "eslint --cache --fix"
  }
}
```

[liftoff][liftoff]

## 2.2 包目录说明

node-plop目录说明

```
src
├─baked-in-helpers.js
├─fs-promise-proxy.js
├─generator-runner.js // prompt、action处理方法
├─index.js
├─node-plop.js // 所有工具集合
├─prompt-bypass.js // 输入参数和promp提示处理
├─actions // 所有操作的处理
|    ├─_common-action-add-file.js
|    ├─_common-action-interface-check.js
|    ├─_common-action-utils.js
|    ├─add.js // 新增功能
|    ├─addMany.js
|    ├─append.js
|    ├─index.js
|    └modify.js
```

plop 目录说明

```
plop
├─LICENSE
├─README.md
├─inquirer-prompts.md
├─package.json
├─plop-load.md
├─wallaby.js
├─src
|  ├─bypass.js
|  ├─console-out.js
|  ├─input-processing.js
|  ├─plop.d.ts
|  └plop.js // 主入口文件
├─example
|    ├─package.json
|    ├─plopfile.js
|    ├─templates
|    |     ├─burger.txt
|    |     ├─change-me.txt
|    |     ├─part.txt
|    |     ├─potatoes.txt
|    |     └temp.txt
├─bin
|  └plop.js // 包入口文件
```



## 2.3 流程解析

### 2.3.1初始化的说明

初始化Liftoff name为plop实例，则在目录下寻找plopfile名的文件后缀和文件名可以随意配置

In this example Liftoff will look for myappfile{.js,.json,.coffee}. If a config with the extension .coffee is found, Liftoff will try to require coffee-script/require from the current working directory.

```
const MyApp = new Liftoff({
  name: 'myapp',
  extensions: {
    '.js': null,
    '.json': null,
    '.coffee': 'coffee-script/register'
  }
});
```

In this example, Liftoff will look for `.myapp{rc}`.

```
const MyApp = new Liftoff({
  name: 'myapp',
  configName: '.myapp',
  extensions: {
    'rc': null
  }
});
```

In this example, Liftoff will automatically attempt to load the correct module for any javascript variant supported by [interpret](https://github.com/js-cli/js-interpret) (as long as it does not require a register method).

```
const MyApp = new Liftoff({
  name: 'myapp',
  extensions: require('interpret').jsVariants
});
```

```
callback(env)
A function called after your environment is prepared. A good place to modify the environment before calling execute. When invoked, this will be your instance of Liftoff. The env param will contain the following keys:

cwd: the current working directory
require: an array of modules that liftoff tried to pre-load
configNameSearch: the config files searched for
configPath: the full path to your configuration file (if found)
configBase: the base directory of your configuration file (if found)
modulePath: the full path to the local module your project relies on (if found)
modulePackage: the contents of the local module's package.json (if found)
configFiles: an object of filepaths for each found config file (filepath values will be null if not found)
```

### 2.3.2 流程说明

![plop流程](https://gitee.com/lzp979822781/personal-img/raw/master/img/plop%E6%B5%81%E7%A8%8B.png)



# 附录

[handlebars]: https://handlebarsjs.com/
[liftoff]: https://www.bilibili.com/read/cv4996413/