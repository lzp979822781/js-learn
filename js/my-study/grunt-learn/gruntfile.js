module.exports = grunt => {

    grunt.initConfig({
        foo: {
            multiple: false,
            js: 1
        }
    })
    grunt.registerTask("foo", () => {
        console.log('foo', grunt.config('foo'));
    });

    grunt.registerTask('bar', '任务描述', () => {
        console.log('bar task');
    });

    grunt.registerTask('default', ["foo", "bad", "bar"]);

    grunt.registerTask("async-task", function() {
        const done = this.async();
        setTimeout(() => {
            console.log('async-task');
            done();
        }, 1000);
    });

    grunt.registerTask('bad', function() {
        const done = this.async();
        setTimeout(() => {
            console.log('bad task');
            done(false); // 异步任务失败的标记方法
        }, 1000);
    })
};