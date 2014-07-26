module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ['less']
                },
                files: {
                    'public/css/quodo.css': 'assets/less/quodo.less'
                }
            }
        },
        ejs: {
            all: {
                src: ['pages/*.ejs'],
                dest: 'public/',
                expand: true,
                ext: '.html'
            }
        },
        copy: {
            main: {
                src: './public/pages/*',
                filter: 'isFile',
                expand: true,
                flatten: true,
                dest: './public'
            },

            js: {
                src: './assets/js/*',
                filter: 'isFile',
                expand: true,
                flatten: true,
                dest: './public/js'
            }
        },
        clean: ['public/pages'],
        watch: {
            options: {
                livereload: true
            },
            files: ['assets/js/*.js', 'assets/less/*.less', 'pages/*.ejs', 'include/*.ejs', 'Gruntfile.js'],
            tasks: ['less', 'ejs', 'copy', 'clean']
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
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['less', 'ejs', 'copy', 'clean', 'watch']);
};