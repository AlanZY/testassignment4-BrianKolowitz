module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/main/resources/public/js/**/*.js', 'src/test/resources/public/js/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    uglify: {
      core: {
        files: [{
          expand: true,
          cwd: 'src/main/resources',
          src: 'public/js/**/*.js',
          dest: "target/classes",
          ext: '.min.js'
        }]
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'src/main/resources',
          src: ['public/stylesheets/**/*.css', '!public/stylesheets/**/*.min.css'],
          dest: 'target/classes',
          ext: '.min.css'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['jshint', 'uglify', 'cssmin']);
};
