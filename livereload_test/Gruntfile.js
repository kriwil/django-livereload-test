module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        less: {
            dev: {
                options: {
                    compress: true,
                    yuicompress: true
                },
                files: {
                    "core/static/css/main.css": "core/static/less/main.less"
                }
            }
        },

        watch: {
            options: {
                livereload: true
            },
            less: {
                files: "core/static/**",
                tasks: ["less"]
            },
            templates: {
                files: "core/templates/**",
                tasks: []
            }
        }
    });

    // Load plugins here.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Register tasks here.
    grunt.registerTask('default', ['less', 'watch']);

};
