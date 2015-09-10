/**
 * Created by fabledag21 on 12/8/14.
 */
'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            compile: {
                files: {
                    'css/generals.css': ['less/styles.less']
                }
            }
        },
        watch: {
            files: ['less/*'],
            tasks: ['less']
        }

    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);
}
