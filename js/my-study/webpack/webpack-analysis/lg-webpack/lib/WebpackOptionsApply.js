const EntryOptionPlugin = require('./EntryOptionPlugin');

class WebpackOptionsApply {
    process(options, compiler) {
        // 为compiler中的entryOption hook注册监听事件 -> SingleEntryOption中make注册监听
        new EntryOptionPlugin().apply(compiler);
        compiler.hooks.entryOption.call(options.context, options.entry);
    }
}

module.exports = WebpackOptionsApply;