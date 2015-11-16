var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
  framework: 'jasmine2',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec/**/*.js'],

  onPrepare: function() {
    browser.ignoreSynchronization = true;
    browser.driver.manage().window().maximize();
		jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
			savePath: 'reports/'
		}));
  }
}
