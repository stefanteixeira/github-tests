var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
  framework: 'jasmine2',
  specs: ['spec/**/*.js'],
  sauceUser: 'fav-organizer',
  sauceKey: '67f84d23-778a-4def-b579-c98c363a097f',

  multiCapabilities: [{
      'name': 'UI Tests',
      'browserName': 'chrome',
      'version': '46.0',
      'platform': 'Windows 8'
    }, {
      'name': 'UI Tests',
      'browserName': 'firefox',
      'version': '42.0',
      'platform': 'OS X 10.10'
    }],

  onPrepare: function() {
    browser.ignoreSynchronization = true;
    browser.driver.manage().window().maximize();
		jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
			savePath: 'reports/'
		}));
  }
}
