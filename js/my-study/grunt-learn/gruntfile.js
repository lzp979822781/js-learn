const sass = require('sass');
const loadGruntTasks = require('load-grunt-tasks');

module.exports = grunt => {

    /* grunt.initConfig({
        foo: {
            multiple: false,
            js: 1
        },
        build: {
            // options为当前任务通用配置,子任务内部的同名配置会覆盖通用配置
            options: {
                foo: 'bce'
            },
            js: {
                multiple: false,
                options: {
                    foo: 'js'
                }
            },
            css: {
                background: '#fff'
            }
        }
    });

    
    // 多个子任务并行执行 通过yarn grunt build执行
    grunt.registerMultiTask('build', function(){
        console.log('this.target', this.target);
        console.log('this.data', this.data);
        console.log('this.options', this.options());
    });

    // 通过yarn grunt foo执行 foo为任务名
    grunt.registerTask("foo", () => {
        console.log('foo', grunt.config('foo'));
    });

    grunt.registerTask('bar', '任务描述', () => {
        console.log('bar task');
    });

    // 通过yarn grunt执行,不指定任务名的话就执行default任务
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
    }); */
    /* grunt.initConfig({
        clean: {
            temp: "temp/*.txt"
        }
    })
    grunt.loadNpmTasks('grunt-contrib-clean'); */
    grunt.initConfig({
        // sass解析
        sass: {
            options: {
                sourceMap: true,
                implementation: sass
            },
            dist: {
                files: {
                    'dist/css/main.css': 'src/scss/main.scss'
                }
            }
        },
        babel: {
            options: {
                sourceMap: true,
                presets: ['@babel/preset-env']
            },
            dist: {
                files: {
                    'dist/js/main.js': 'src/js/main.js'
                }
            }
        },
        watch: {
            js: {
                files: 'src/**/*.js',
                tasks: ['babel']
            },
            css: {
                files: 'src/**/*.scss',
                tasks: 'sass'
            }
        }
    })

    loadGruntTasks(grunt);
    grunt.registerTask('default', ['babel', 'sass', 'watch']);
};