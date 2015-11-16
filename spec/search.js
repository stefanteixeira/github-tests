var HomePage = require('../pages/homePage.js');
var SearchPage = require('../pages/searchPage.js');

describe('Search Test', function() {

  beforeAll(function() {
    HomePage.get();
  });

  it('should not search a repository that does not exist', function() {
    var searchText = 'qwerty123456790abc';
    HomePage.search(searchText);

    var errorMsg = SearchPage.getErrorMessage();
    expect(errorMsg).toBe('We couldn’t find any repositories matching \''+searchText+'\'');
  });

  it('should search a repository successfully', function() {
    SearchPage.search('node');

    var searchCount = SearchPage.getRepoSearchCount();
    expect(searchCount).toBeDefined();
  });

  afterAll(function () {});
});
