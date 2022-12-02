import { defineConfig } from 'cypress';
import * as browserify from '@cypress/browserify-preprocessor';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import { preprocessor } from '@badeball/cypress-cucumber-preprocessor/browserify';
import { addVisualRegressionTrackerPlugin } from '@visual-regression-tracker/agent-cypress/dist/plugin';
import dotenv from 'dotenv';
dotenv.config();

export async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);

  require('cypress-mochawesome-reporter/plugin')(on, config);

  if (config.env.testType === 'vrt') {
    addVisualRegressionTrackerPlugin(on, config);
    config.retries = 0;
    config.viewportWidth = 2560;
    config.viewportHeight = 1440;
  }

  on(
    'file:preprocessor',
    preprocessor(config, {
      ...browserify.defaultOptions
    })
  );

  on('before:browser:launch', (browser = {}, launchOptions) => {
    if (browser.family === 'chromium' && browser.name !== 'electron') {
      launchOptions.args.push('--start-fullscreen');
      return launchOptions;
    }

    if (browser.name === 'electron') {
      launchOptions.preferences.fullscreen = true;
      return launchOptions;
    }
  });

  return config;
}

const getReportDir = function () {
  return (
    'cypress/reports/results' +
    Math.floor(Math.random() * (Math.random() * 1000) + 1)
  );
};

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8000/iframe.html?&viewMode=story',
    specPattern: '**/*.feature',
    supportFile: 'cypress/support/e2e.js',
    viewportWidth: 1280,
    viewportHeight: 720,
    retries: 1,
    defaultCommandTimeout: 8000,
    requestTimeout: 8000,
    pageLoadTimeout: 8000,
    screenshotsFolder: 'cypress/reports/assets',
    chromeWebSecurity: false,
    numTestsKeptInMemory: 0,
    experimentalFetchPolyfill: true,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: getReportDir(),
      overwrite: false,
      html: false,
      json: true,
      inlineAssets: true,
      embeddedScreenshots: true,
      saveJson: true,
      code: false
    },
    setupNodeEvents
  },
  video: true,
  videosFolder: 'cypress/videos',
  videoCompression: false,
  videoUploadOnPasses: false
});
