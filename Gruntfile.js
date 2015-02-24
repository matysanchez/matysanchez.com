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
                    'src/stylesheets/base.css': ['bower_components/skeleton/css/normalize.css', 'bower_components/skeleton/css/skeleton.css']
                }
            }
        }
        ///////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task(s).
    grunt.registerTask('default', ['cssmin']);


};