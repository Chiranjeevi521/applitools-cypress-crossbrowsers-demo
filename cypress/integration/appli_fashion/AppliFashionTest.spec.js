var config = require('../../../applitools.config');
const appName = 'AppliFashion';

// URL of produciton environemnt
// const url = 'https://demo.applitools.com/tlcHackathonMasterV1.html';

// URL of dev environment
//const url = 'https://demo.applitools.com/tlcHackathonDev.html';

// URL of final production environment
const url = 'https://demo.applitools.com/tlcHackathonMasterV2.html';

function eyesCheck(params) {
  Cypress.config('eyesTimeout');
  cy.eyesOpen({
    appName: appName,
    batchName: config.batchName,
    browser: config.browserCombo,
    testName: params.testName,
    stepName: params.stepName,
  });

  if (params.target != 'region') {
    cy.eyesCheckWindow(params.testName);
  } else {
    cy.eyesCheckWindow({
      tag: params.testName,
      target: 'region',
      selector: params.selector,
      fully: true,
    });
  }

  cy.eyesClose();
}

describe('AppliFashionTests', () => {
  it(`Test 1`, function() {
    cy.visit(url);
    eyesCheck({ testName: this.test.title, stepName: 'mainPage' });
  });

  it(`Test 2`, function() {
    eyesCheck({ testName: this.test.title, stepName: 'filter by color', target: 'region', selector: '#product_grid' });
  });

  it(`Test 3`, function() {
    cy.get('#IMG__imgfluid__215').click();
    cy.get('.product_details_img').then(($productDetail) => {
      expect(Cypress.dom.isVisible($productDetail)).to.be.true;
      eyesCheck({ testName: this.test.title, stepName: 'product details' });
    });
  });
});
