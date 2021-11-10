class SingleEntryPlugin {

    constructor(context, entry, name) {
        this.context = context;
        this.entry = entry;
        this.name = name;
    }
    apply(compiler) {
        compiler.hooks.make.tapAsync('SingleEntryPlugin', (compilation, callback) => {
            console.log('make');
            const {context, entry, name} = this;
            compilation.addEntry(context, entry, name, callback);
            // callback();
        });
    }
}

module.exports = SingleEntryPlugin;