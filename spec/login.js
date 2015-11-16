var HomePage = require('../pages/homePage.js');
var LoginPage = require('../pages/loginPage.js');

describe('Login Test', function() {

  beforeEach(function() {
    HomePage.get();
    HomePage.openLoginPage();
  });

  it('should not login with wrong credentials', function() {
    LoginPage.login('aaaa', 'aaaa');

    var errorMsg = LoginPage.getErrorMessage();
    expect(errorMsg).toBe('Incorrect username or password.');
  });

  it('should login successfully', function() {
    LoginPage.login('fav-organizer', 'favorganize1');

    var isLoggedIn = LoginPage.isLoggedIn();
    expect(isLoggedIn).toBe(true);
  });

  afterAll(function () {});
});
