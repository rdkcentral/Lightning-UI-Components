#!/bin/sh

# Build
mv ../node_modules/node_modules node_modules
npm run bootstrap
npm test
# mv reports/* ../reports/