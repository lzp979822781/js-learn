const SingleEntryPlugin = require("./SingleEntryPlugin");

function itemToPlugin(context, item, name) {
    return new SingleEntryPlugin(context, item, name);
}

class EntryOptionPlugin {
    apply(compiler) {
        // 使用Compiler hooks中的entryOption hook
        compiler.hooks.entryOption.tap("EntryOptionPlugin", (context, entry) => {
            itemToPlugin(context, entry, 'main').apply(compiler);
        });
    }
}

module.exports = EntryOptionPlugin;