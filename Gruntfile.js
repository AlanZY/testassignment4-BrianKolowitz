module.exports = function(grunt) {
  grunt.initConfig({
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

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['uglify', 'cssmin']);
};
