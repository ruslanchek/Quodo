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
            html: {
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
            },

            prettify: {
                src: './assets/prettify/*',
                filter: 'isFile',
                expand: true,
                flatten: true,
                dest: './public/prettify'
            },

            dist_js: {
                src: ['./assets/js/*', '!./assets/js/demo.js'],
                filter: 'isFile',
                expand: true,
                flatten: true,
                dest: './dist/js'
            },

            dist_css: {
                src: ['./public/css/*'],
                filter: 'isFile',
                expand: true,
                flatten: true,
                dest: './dist/css'
            },

            dist_less: {
                src: ['./assets/less/*', '!./assets/less/demo.less'],
                filter: 'isFile',
                expand: true,
                flatten: true,
                dest: './dist/less'
            }
        },
        clean: {
            main_full: ['public/*'],
            main: ['public/pages'],
            dist: ['dist']
        },
        watch: {
            options: {
                livereload: true
            },
            files: ['assets/js/*.js', 'assets/less/*.less', 'pages/*.ejs', 'include/*.ejs', 'Gruntfile.js'],
            tasks: ['less', 'ejs', 'copy:html', 'copy:js', 'copy:prettify', 'clean:main']
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

    grunt.registerTask('default', ['clean:main_full', 'less', 'ejs', 'copy:html', 'copy:js', 'copy:prettify', 'clean:main', 'watch']);
    grunt.registerTask('dist', ['clean:dist', 'copy:dist_js', 'copy:dist_css', 'copy:dist_less']);
};