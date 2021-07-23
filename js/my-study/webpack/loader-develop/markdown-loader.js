const marked = require('marked');

module.exports = source => {
    console.log('source', source);
    console.log('html', marked(source));
    console.log('sringify', JSON.stringify(marked(source)));
    return marked(source);
};