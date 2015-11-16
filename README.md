# github-tests [![Circle CI](https://circleci.com/gh/stefanteixeira/github-tests.svg?style=shield)](https://circleci.com/gh/stefanteixeira/github-tests)
Sample UI Tests running against GitHub website.

## About the project

The project contains automated UI tests written in Node.js using:

  - [Protractor](https://angular.github.io/protractor/#/) - an end-to-end test framework for AngularJS apps, but that works very nicely with non-Angular apps as well
  - [Jasmine](http://jasmine.github.io/) - a JS test library. Protractor uses it as default test library, but it allows to use other libraries, such as Mocha
  - [Grunt](http://gruntjs.com/) - a JS task runner

**PS:** The tests are written using the [Page Object Pattern](http://martinfowler.com/bliki/PageObject.html).

---

### Requirements

- Node.js
- Google Chrome

## Setup

- Install Grunt and Grunt-CLI globally:

  ```npm install -g grunt grunt-cli```

- Install the project dependencies:

  ```npm install```
  
- To run all tests:

  ```grunt ```

The default Grunt task will run a jshint check on the code syntax, start webdriver-manager locally and run the Protractor tests using your Chrome browser.

## Running tests in the cloud

The project is also configured to run tests in the cloud, using [Sauce Labs](https://saucelabs.com/). The ```conf-saucelabs.js``` file defines two environments in which the tests will run:

- Chrome 46 + Windows 8
- Firefox 42 + OS X 10.10 (Yosemite)

You can add or edit these environments as you want. Sauce Labs provides a [Platform Configurator](https://docs.saucelabs.com/reference/platforms-configurator/#/) to help with that.

**PS:** The project is using a sample Sauce Labs user. In a real-world project, the username/accessKey would be passed by environment variables.
  
## Reports

An HTML report will be automatically generated in the ```reports``` directory. For every test case, the report will show a screenshot that represents the last state of the browser. The report will look like that:

![](http://i.imgur.com/7Dc8lMg.png)

## Continuous Integration

After every commit, [CircleCI](https://circleci.com/) will build and run the [project](https://circleci.com/gh/stefanteixeira/github-tests). CircleCI is a cloud-based Continuous Integration server, which has easy integration with GitHub repositories. The build steps are defined in the ```circle.yml``` file. CircleCI is also archiving the generated test reports (if logged in, you can see the reports in the "Artifacts" tab).




