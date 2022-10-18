// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
import 'cypress-mochawesome-reporter/register';
import addContext from 'mochawesome/addContext';

// Alternatively you can use CommonJS syntax:
// require('./commands')

if (Cypress.env('testType') && Cypress.env('testType') == 'vrt') {
  before(() => {
    cy.vrtStart();
  });
  after(() => {
    cy.vrtStop();
  });
}

const titleToFileName = title => title.replace(/[:\/]/g, '');
Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {
    let parent = runnable.parent;
    let filename = '';
    while (parent && parent.title) {
      filename = `${titleToFileName(parent.title)} -- ${filename}`;
      parent = parent.parent;
    }
    let subfolder = '';
    if (Cypress.env('TAGS').includes(' or ')) {
      subfolder = Cypress.spec.relative.match(
        /cypress\/e2e\/features\/(.*\/).*feature/
      );
      subfolder = subfolder[1];
    }
    if (Cypress.env('ON_CI')) {
      addContext(
        { test },
        `/[REPORT_DATE]/assets/videos/${subfolder}${Cypress.spec.name}.mp4`
      );
    } else {
      addContext({ test }, `../videos/${subfolder}${Cypress.spec.name}.mp4`);
    }
  }
});

// returning false here prevents Cypress from failing the test
Cypress.on('uncaught:exception', err => {
  console.error('Ignored uncaught exception', err);
  return false;
});
