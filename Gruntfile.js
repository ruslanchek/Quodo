module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            dev: {
                options: {
                    paths: ['less'],
                    sourceMap: true,
                    sourceMapFilename: 'public/css/quodo.map',
                    compress: false
                },
                files: {
                    'public/css/quodo.css': 'assets/less/quodo.less'
                }
            },
            dist: {
                options: {
                    paths: ['less'],
                    sourceMap: false
                },
                files: {
                    'dist/css/quodo.css': 'assets/less/quodo.less'
                }
            },
            dist_compressed: {
                options: {
                    paths: ['less'],
                    sourceMap: true,
                    sourceMapFilename: 'dist/css/quodo.map',
                    compress: true
                },
                files: {
                    'dist/css/quodo.min.css': 'assets/less/quodo.less'
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

            less: {
                src: './assets/less/*',
                filter: 'isFile',
                expand: true,
                flatten: true,
                dest: './public/less'
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
            tasks: ['less:dev', 'ejs', 'copy:less', 'copy:html', 'copy:js', 'copy:prettify', 'clean:main']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-ejs');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['clean:main_full', 'less:dev', 'ejs', 'copy:html', 'copy:less', 'copy:js', 'copy:prettify', 'clean:main', 'watch']);
    grunt.registerTask('dist', ['less:dist', 'less:dist_compressed', 'clean:dist', 'copy:dist_js', 'copy:dist_css', 'copy:dist_less']);
};