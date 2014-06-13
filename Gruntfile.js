module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ['public/css']
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
            files: ['*.less', '*.ejs'],
            tasks: ['less', 'ejs'],
            options: {
                livereload: {
                    port: 2000
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-ejs');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['less', 'ejs', 'watch']);
};