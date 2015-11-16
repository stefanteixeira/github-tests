var SearchPage = function() {

  this.search = function(text) {
    var searchField = element(by.name('q'));
    searchField.clear();
    searchField.sendKeys(text);
    searchField.sendKeys(protractor.Key.ENTER);
  };

  this.getRepoSearchCount = function() {
    return element.all(by.css('.counter')).get(0).getText();
  };

  this.getErrorMessage = function() {
    return element(by.css('.blankslate')).element(by.tagName('h3')).getText();
  };
};

module.exports = new SearchPage();
