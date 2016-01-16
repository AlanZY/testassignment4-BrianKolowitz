module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    srcFolder: 'src/main/resources',
    testFolder: 'src/test/resources',
    distFolder: 'target/classes',
    jshint: {
      files: ['Gruntfile.js', '<%= srcFolder %>/public/js/**/*.js', '<%= testFolder %>/public/js/**/*.js'],
      options: {
        globals: {
          jQuery: true,
          console: true,
          module: true
        }
      }
    },
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['<%= srcFolder %>/public/js/**/*.js'],
        dest: '<%= distFolder %>/public/js/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          '<%= distFolder %>/public/js/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    // core: {
    //   files: [{
    //     expand: true,
    //     cwd: 'src/main/resources',
    //     src: 'public/js/**/*.js',
    //     dest: "target/classes",
    //     ext: '.min.js'
    //   }]
    // }
    qunit: {
      files: ['<%= testFolder %>/public/**/*.html']
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: '<%= srcFolder %>/',
          src: ['public/stylesheets/**/*.css', '!public/stylesheets/**/*.min.css'],
          dest: '<%= distFolder %>',
          ext: '.min.css'
        }]
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // this would be run by typing "grunt test" on the command line
  grunt.registerTask('test', ['jshint', 'qunit']);

  // the default task can be run just by typing "grunt" on the command line
  grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify', 'cssmin']);
};
