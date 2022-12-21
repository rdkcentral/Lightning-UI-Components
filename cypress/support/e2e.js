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

const titleToFileName = title => title.replace(/[:/]/g, '');
Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {
    let parent = runnable.parent;
    let filename = '';
    while (parent && parent.title) {
      filename = `${titleToFileName(parent.title)} -- ${filename}`;
      parent = parent.parent;
    }
    let subfolder = '';
    if (Cypress.env('TAGS') && Cypress.env('TAGS').includes(' or ')) {
      subfolder = Cypress.spec.relative.match(
        /cypress\/e2e\/features\/sanity\/(.*\/).*feature/
      );
      subfolder = subfolder === null ? '' : subfolder[1];
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

Cypress.on('fail', err => {
  const ignoredErrors = [
    'Api key not authenticated',
    'no healthy upstream',
    'Error querying the database',
    "cy.task('VRT_STOP')",
    'Expected to find an error message',
    'Record to delete does not exist.',
    'upstream connect error or disconnect/reset before headers'
  ];

  for (let i = 0; i < ignoredErrors.length; i++) {
    if (err.message && err.message.includes(ignoredErrors[i])) {
      console.error(err);

      // returning false to prevent Cypress from failing the test
      return false;
    }
  }

  // rethrow all errors that are not to be ignored
  throw err;
});
