module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        ts: {
            default: {
                src: ["src/**/*.ts"],
                outDir: "dist",
                sourceMap: false
            }
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
                ],
                background: true,
                singleRun: false
            }
        },
        watch: {
            files: '**/*.ts',
            tasks: ['ts', 'karma']
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks('grunt-karma');


    // Default task(s).
    grunt.registerTask('default', ['ts', 'karma', 'watch']);

};