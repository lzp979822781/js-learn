

function createPages({actions}) {
    const {createPage} = actions;

    // 获取模板路径
    const template = require.resolve("./src/templates/person.js");
    // 获取模板所需要的数据
    const persons = [
        {slug: 'zhangsan', name: '张三', age: 18},
        {slug: 'lisi',name: '李四', age: 20}
    ];

    persons.forEach(person => {
        createPage({
            // 模板绝对路径
            component: template,
            // 访问地址
            path: `/pages/${person.slug}`,
            context: person
        });
    })
}

module.exports = {
    createPages
}