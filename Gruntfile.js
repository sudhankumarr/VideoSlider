module.exports = function(grunt) {

// Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      build: {
        src: [ 'build/scripts/**', 'build/styles/**', 'build/main.html' ]
      }
    },
    copy: {
      build: {
        cwd: 'source',
        src: [ 'scripts/**', 'styles/vendor/**'],
        dest: 'build',
        expand: true
      }
    },
    jade: {
      compile: {
        options: {
          pretty: true
        },
        files: [{
          expand: true,
          cwd: 'source',
          src: [ 'main.jade' ],
          dest: 'build',
          ext: '.html'
        }]
      }
    },
    less: {
      compile: {
        options: {
          data: {}
        },
        files: [{
          expand: true,
          cwd: 'source',
          src: ['styles/main.less'],
          dest: 'build',
          ext: '.css'
        }]
      }
    }
  });

  // Load
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-less');
  // Default task(s).
  grunt.registerTask('serve', ['clean', 'copy', 'jade', 'less']);
};