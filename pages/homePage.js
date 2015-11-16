var HomePage = function() {

  this.get = function() {
    browser.driver.get('https://github.com');
  };

  this.openLoginPage = function() {
    var btnSignIn = element(by.linkText('Sign in'));
    btnSignIn.click();
  };

  this.search = function(text) {
    var searchField = element(by.name('q'));
    searchField.sendKeys(text);
    searchField.sendKeys(protractor.Key.ENTER);
  };
};

module.exports = new HomePage();
