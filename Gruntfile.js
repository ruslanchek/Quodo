module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ['less']
                },
                files: {
                    'public/css/quodo.css': 'less/quodo.less'
                }
            }
        },
        ejs: {
            all: {
                src: ['*.ejs', '!include/**/*'],
                dest: 'public/',
                expand: true,
                ext: '.html'
            }
        },
        watch: {
            options: {
                livereload: true
            },
            files: ['less/*.less', '*.ejs', 'include/*.ejs'],
            tasks: ['less', 'ejs']
        },
        connect: {
            server: {
                options: {
                    port: 8000,
                    hostname: '*',
                    base: 'public',
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-ejs');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['less', 'ejs', 'watch']);
};