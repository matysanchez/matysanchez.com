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
            portfolio: {
                files: {
                    'public/stylesheets/base.css': ['bower_components/skeleton/css/normalize.css', 'bower_components/skeleton/css/skeleton.css']
                }
            }
        },
        ///////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////
        less: {
            portfolio: {
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
            portfolio: {
                files: [{
                    cwd: 'bower_components/angular/',
                    src: ['angular.min.js', 'angular.min.js.map'],
                    dest: 'public/javascripts/',
                    expand: true
                },
                {
                    cwd: 'bower_components/angular-route/',
                    src: ['angular-route.min.js', 'angular-route.min.js.map'],
                    dest: 'public/javascripts/',
                    expand: true
                }]
            },
        },
        ///////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['cssmin', 'less', 'copy']);


};