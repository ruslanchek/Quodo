module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            dev: {
                options: {
                    paths: ['less'],
                    sourceMap: true,
                    sourceMapFilename: 'public/css/quodo.map',
                    sourceMapURL: 'quodo.map',
                    outputSourceFiles: true,
                    compress: false
                },
                files: {
                    'public/css/quodo.css': 'assets/less/demo.less'
                }
            },
            dist: {
                options: {
                    paths: ['less'],
                    sourceMap: true,
                    sourceMapFilename: 'dist/css/quodo.css.map',
                    sourceMapURL: 'quodo.css.map',
                    outputSourceFiles: true,
                    compress: true
                },
                files: {
                    'dist/css/quodo.css': 'assets/less/project.less'
                }
            },
            dist_compressed: {
                options: {
                    paths: ['less'],
                    sourceMap: true,
                    sourceMapFilename: 'dist/css/quodo.min.css.map',
                    sourceMapURL: 'quodo.css.min.map',
                    outputSourceFiles: true,
                    compress: true
                },
                files: {
                    'dist/css/quodo.min.css': 'assets/less/project.less'
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
        concat: {
            options: {
                separator: ''
            },
            dist: {
                src: [
                    'assets/js/quodo.animate.js'
                ],
                dest: 'assets/js/quodo.js'
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

            fonts: {
                src: './assets/fonts/icons/*',
                filter: 'isFile',
                expand: true,
                flatten: true,
                dest: './public/fonts/icons/'
            },

            prettify: {
                src: './assets/prettify/*',
                filter: 'isFile',
                expand: true,
                flatten: true,
                dest: './public/prettify'
            },

            dist_fonts: {
                src: './assets/fonts/icons/*',
                filter: 'isFile',
                expand: true,
                flatten: true,
                dest: './dist/fonts/icons/'
            },

            dist_js: {
                src: ['./assets/js/*', '!./assets/js/demo.js'],
                filter: 'isFile',
                expand: true,
                flatten: true,
                dest: './dist/js'
            },

            dist_less: {
                src: ['./assets/less/*', '!./assets/less/demo.less'],
                filter: 'isFile',
                expand: true,
                flatten: true,
                dest: './dist/less'
            },

            dist_css: {
                src: ['./assets/css/project.css'],
                filter: 'isFile',
                expand: true,
                flatten: true,
                dest: './dist/css'
            },

            dist_index: {
                src: ['./assets/index.html'],
                filter: 'isFile',
                dest: './dist/index.html'
            }
        },
        clean: {
            main_full: ['public/*'],
            main: ['public/pages'],
            dist: ['dist']
        },
        uglify: {
            my_target: {
                options: {
                    sourceMap: true,
                    compress: true,
                    sourceMapName: 'dist/js/quodo.min.js.map'
                },
                files: {
                    'dist/js/quodo.min.js': ['dist/js/quodo.js']
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            files: ['assets/js/*.js', 'assets/less/*.less', 'pages/*.ejs', 'include/*.ejs', 'Gruntfile.js', '!assets/js/quodo.js'],
            tasks: ['less:dev', 'ejs', 'concat:dist', 'copy:fonts', 'copy:html', 'copy:js', 'copy:prettify', 'clean:main']
        },
        compress: {
            main: {
                options: {
                    archive: 'public/quodo.zip'
                },
                files: [
                    {cwd: 'dist/', src: ['**'], expand: true}
                ]
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
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', [
        'clean:main_full',
        'less:dev',
        'ejs',
        'concat:dist',
        'copy:fonts',
        'copy:html',
        'copy:js',
        'copy:prettify',
        'clean:main',
        'watch'
    ]);

    grunt.registerTask('production', [
        'clean:main_full',
        'less:dev',
        'ejs',
        'concat:dist',
        'copy:fonts',
        'copy:html',
        'copy:js',
        'copy:prettify',
        'clean:main',

        'clean:dist',
        'less:dist',
        'less:dist_compressed',
        'copy:dist_fonts',
        'copy:dist_js',
        'copy:dist_less',
        'copy:dist_css',
        'copy:dist_index',
        'uglify',
        'compress'
    ]);
};