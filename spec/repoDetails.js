var RepoDetailsPage = require('../pages/repoDetailsPage.js');

describe('Repository Details Test', function() {

  beforeAll(function() {
    browser.driver.get('https://github.com/nodejs/node');
  });

  it('should display the correct clone URL', function() {
    var cloneURL = RepoDetailsPage.getCloneURL();
    expect(cloneURL).toBe('https://github.com/nodejs/node.git');
  });

  it('should have a star count greater or equal than zero', function() {
    var starCountPromise = RepoDetailsPage.getStarCount();

    starCountPromise.then(function(starCountStr) {
      var starCount = getIntFromStr(starCountStr);
      expect(starCount).toBeGreaterThan(0);
    });
  });

  afterAll(function () {});

  function getIntFromStr(text) {
    text = text.replace(/,/g, "");
    return parseInt(text);
  }
});
