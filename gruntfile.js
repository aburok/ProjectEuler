module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        typescript: {
            base: {
                src: ['src/**/*.ts'],
                dest: 'dist',
                options: {
                    module: 'amd', //or commonjs 
                    target: 'es5', //or es3 
                    sourceMap: false,
                    declaration: false
                }
            }
        },
        watch: {
            files: '**/*.ts',
            tasks: ['typescript', 'karma']
        },
        jasmine: {
            // Your project's source files
            src: 'dist/**/*.js',
            // Your Jasmine spec files
            specs: 'dist/**/*.spec.js',
            // Your spec helper files
            helpers: 'specs/helpers/*.js'
        },
        karma: {
            options: {
                files: ['dist/**/*.js']
            },
            unit: {
                files: [
                    { src: ['dist/**/*.test.js'] }
                ]
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    //   grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-watch');


    // Default task(s).
    grunt.registerTask('default', ['typescript', 'watch']);

};