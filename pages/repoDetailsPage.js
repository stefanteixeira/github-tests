var RepoDetailsPage = function() {

  this.getCloneURL = function() {
    return element.all(by.css('.js-zeroclipboard-target')).get(0).getAttribute("value");
  };

  this.getStarCount = function() {
    //getText() returns a promise!
    return element.all(by.css('.js-social-count')).get(0).getText();
  };
};

module.exports = new RepoDetailsPage();
