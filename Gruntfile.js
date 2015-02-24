module.exports = function(grunt) {
    grunt.initConfig({
        ///////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////
        pkg: grunt.file.readJSON('package.json'),
        ///////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'public/stylesheets/base.css': ['bower_components/skeleton/css/normalize.css', 'bower_components/skeleton/css/skeleton.css']
                }
            }
        },
        ///////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "public/stylesheets/style.css": "src/less/main.less"
                }
            }
        },
        ///////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////
        copy: {
            main: {
                files: [{
                    cwd: 'bower_components/angular/',
                    src: 'angular.min.js',
                    dest: 'public/javascripts/',
                    expand: true
                }]
            },
        }
        ///////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task(s).
    grunt.registerTask('default', ['cssmin', 'less', 'copy']);


};