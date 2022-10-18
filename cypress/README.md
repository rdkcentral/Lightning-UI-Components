# LUI Test Automation

## Setting up
1. Install dependencies before you start the server: `npm i`
2. Start the server: `npm start`
```shell
npm start
# This page should be opened in your browser on port 8000.
# If you are getting a message "Port 8000 is not available. Would you like to run Storybook on port 8001 instead?" 
# You should stop running the server that is running on port 8000 and try starting the server again
```

## Run Cypress tests

1. Using the Cypress UI
```shell
npm run cy:open
```
2. Run all tests in console
```shell
npm run cy:run
```
3. Run tests in console based on tag
```shell
npm run cy:tags -- -e TAGS=@sanity
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
npm run cy:vrt #short command
```

```sh
npm run cy:tags -- --env testType=vrt,TAGS=@sanity-vrt #detailed command
```

> Note that a testing type is specified as a Cypress env, this is used to fully setup VRT

### Using VRT
```cucumber
@sanity-vrt @icon-vrt @png-vrt

Feature: Icon PNG Element Validation

  Background: 
    Given I launch the LUI app 
    When I navigate to 'Icon' 'PNG' with 'Base' theme
  
  Scenario: Verify Icon PNG Element with Visual Regression
    Then I verify the 'Icon' 'PNG' component with visual regression
```
