module.exports = function (grunt) {

  // Config
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      options: {
        reporter: require('jshint-stylish')
      },
      dist: {
        files: {
          src: ['src/ideal-image-slider.js']
        }
      },
      extensions: {
        files: {
          src: ['extensions/**/*.js']
        }
      }
    },

    uglify: {
      options: {
        banner: '/*! Ideal Image Slider v<%= pkg.version %> */\n'
      },
      default: {
        options: {
          mangle: false,
          preserveComments: true,
          compress: false,
          beautify: true
        },
        files: {
          'ideal-image-slider.js': 'src/ideal-image-slider.js'
        }
      },
      dist: {
        files: {
          'ideal-image-slider.min.js': 'src/ideal-image-slider.js'
        }
      }
    },

    'string-replace': {
      version: {
        options: {
          replacements: [
            {
              pattern: /(v\d+.\d+.\d+)/,
              replacement: 'v<%= pkg.version %>'
            }
          ]
        },
        files: {
          'ideal-image-slider.js': 'ideal-image-slider.js',
          'ideal-image-slider.css': 'ideal-image-slider.css'
        }
      }
    },

    compass: {
      dev: {
        options: {
          config: '_config.rb',
          trace: true,
          environment: 'dev'
        }
      },
      dist: {
        options: {
          config: '_config.rb',
          force: true,
          trace: true,
          environment: 'production'
        }
      },
      dev_example: {
        options: {
          config: '_config-example.rb',
          trace: true,
          environment: 'dev'
        }
      },
      dist_example: {
        options: {
          config: '_config-example.rb',
          force: true,
          trace: true,
          environment: 'production'
        }
      },
      dev_themes: {
        options: {
          config: '_config-example.rb',
          trace: true,
          environment: 'dev'
        }
      },
      dist_themes: {
        options: {
          config: '_config-example.rb',
          force: true,
          trace: true,
          environment: 'production'
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: ['> 5%', 'last 2 version', 'IE 8', 'IE 9', 'Android 4', 'Android 3', 'Firefox ESR']
      },
      multiple_files: {
        expand: true,
        flatten: true,
        src: '*.css', // -> src/css/file1.css, src/css/file2.css
        dest: '/' // -> dest/css/file1.css, dest/css/file2.css
      }
    },

    watch: {
      options: {
        livereload: true
      },
      dist: {
        files: ['src/**/*.js', '*/*.scss'],
        tasks: ['css', 'jshint:dist', 'uglify:dist', 'string-replace'],
        options: {
          spawn: false,
        }
      },
      extensions: {
        files: ['src/**/*.js', '**/*.scss'],
        tasks: ['css', 'jshint:extensions', 'uglify:dist'],
        options: {
          spawn: false,
        }
      }
    }

  });

  // Plugins
  require('load-grunt-tasks')(grunt);
  grunt.registerTask('forceOn', 'turns the --force option ON', function () {
    if (!grunt.option('force')) {
      grunt.config.set('forceStatus', true);
      grunt.option('force', true);
    }
  });
  grunt.registerTask('forceOff', 'turns the --force option OFF', function () {
    if (grunt.config.get('forceStatus')) {
      grunt.config.set('forceStatus', false);
      grunt.option('force', false);
    }
  });

  // Tasks
  grunt.registerTask('default', [
    'css',
    'jshint',
    'uglify',
    'string-replace',
    'watch'
  ]);


  // css: just compile sass in dev mode
  grunt.registerTask('css', [
    'compass:dev',
    'compass:dev_example',
    'compass:dev_themes',
    'autoprefixer'
  ]);

};
