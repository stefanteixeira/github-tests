var LoginPage = function() {

  this.login = function(username, password) {
    element(by.id('login_field')).sendKeys(username);
    element(by.id('password')).sendKeys(password);
    element(by.name('commit')).click();
  };

  this.getErrorMessage = function() {
    return element(by.css('.flash.flash-full.flash-error')).getText();
  };

  this.isLoggedIn = function() {
    return element(by.css('.avatar')).isPresent();
  };
};

module.exports = new LoginPage();
