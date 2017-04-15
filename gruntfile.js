module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        ts: {
            default: {
                src: ["src/**/*.ts"],
                outDir: "dist",
            },
            option: {
                sourceMap: false
            }
        },
        jasmine: {
            // Your project's source files
            src: 'dist/**/*.js',
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
            tasks: ['ts', 'jasmine'],
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    // Default task(s).
    grunt.registerTask('default', ['ts', 'watch']);

};