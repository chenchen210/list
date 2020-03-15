module.exports = function (grunt) {
    grunt.initConfig({
      eslint: {
        options: {
                  configFile: '.eslintrc.json'
        },
          target: ['*.js']
      },
      htmlmin: {
        options: {
                collapseWhitespace: true,
                preserveLineBreaks: false
        },
        files: {
                src: 'dist/index.html',
                dest: 'dist/index.html'
        }
      },
      cssmin: {
            'dist/rectangle.css': 'rectangle.css'
      }
    });
  
      grunt.loadNpmTasks('grunt-eslint');
      grunt.loadNpmTasks('grunt-contrib-htmlmin');
      grunt.loadNpmTasks('grunt-contrib-cssmin');
      grunt.registerTask('lint', ['htmlhint', 'csslint', 'eslint']);
  };