module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      all: ["pages/**/*.js", "spec/**/*.js"],
      options: {
        jshintrc: true
      }
    },
    protractor_webdriver: {
        start: {
            options: {
                path: 'node_modules/protractor/bin/',
                command: 'webdriver-manager start'
            }
        }
    },
    protractor: {
      options: {
        configFile: "conf.js",
        keepAlive: false,
        noColor: false,
        args: {}
      },
      local: {},
      saucelabs: {
        configFile: "conf-saucelabs.js",
        keepAlive: false,
        noColor: false,
        args: {}
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-protractor-webdriver');
  grunt.loadNpmTasks('grunt-protractor-runner');

  grunt.registerTask("default", ["jshint", "protractor_webdriver", "protractor:local"]);
  grunt.registerTask("saucelabs", ["jshint", "protractor:saucelabs"]);
};
