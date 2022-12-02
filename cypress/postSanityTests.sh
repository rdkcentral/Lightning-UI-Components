#!/usr/bin/bash

npx mochawesome-merge cypress/reports/results*/*.json > cypress/reports/output.json
npx marge cypress/reports/output.json --reportDir cypress/reports --reportFilename index.html --inline
