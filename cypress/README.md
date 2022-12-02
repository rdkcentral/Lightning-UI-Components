# LUI Test Automation

## Setting up
1. Install dependencies before you start the server: `yarn install`
2. Start the server: `yarn start`
```shell
yarn start
# This page should be opened in your browser on port 8000.
# If you are getting a message "Port 8000 is not available. Would you like to run Storybook on port 8001 instead?" 
# You should stop running the server that is running on port 8000 and try starting the server again
```

## Run Cypress tests

1. Using the Cypress UI
```shell
yarn run cy:open
```
2. Run all tests in console
```shell
yarn run cy:run
```
3. Run tests in console based on tag
```shell
yarn run cy:tags -e TAGS=@sanity
```

More options are available. Please see "scripts" section of the main package.json file

## Visual Regression
> Before you get started locally, you need to create a `.env` in the root of the project with the following:

```sh
VRT_APIURL="" # The backend URL for VRT
VRT_APIKEY="" # Get this from the VRT dashboard
VRT_PROJECT="" # The project ID that you want to add your tests to
VRT_BRANCHNAME="" # Your working branch
VRT_CIBUILDID="" # Any unique ID, in the CI this would be the latest commit ID
VRT_ENABLESOFTASSERT=false
```

### Running VRT Tests
```sh
yarn run cy:vrt #short command
```

```sh
yarn run cy:tags --env testType=vrt,TAGS=@sanity-vrt #detailed command
```

> Note that a testing type is specified as a Cypress env, this is used to fully setup VRT

### Using VRT
```cucumber
@sanity-vrt @icon-vrt @png-vrt

Feature: Icon PNG Element Validation

  Background: 
    Given I launch the LUI app 
    And I navigate to 'Icon' 'PNG' with 'Base' theme
  
  Scenario: Verify Icon PNG Element with Visual Regression
    Then I verify the 'Icon' 'PNG' component with visual regression
```


## Creating Cypress Tests
### Creating Page Objects
1. Create Page Object file for the component to be tested
2. Import the page object into the `index.js` file
3. Add the page object to the list of pageObjects in the getPageObject in the `index.js` file

### Creating Step Definitions
1. If the step definition is common across multiple pages, then add it to the `Common.js` file.
2. If you find yourself needing to import additional page objects into the `Common.js` file, add a specific Step Definitions file for the page that will use the step.
3. As a general rule, the following list of items should be parameterized: page name (except in step used only for a specific page), component names (except in steps used only for a specific component)
