#!/bin/sh

# Quality
mv ../node_modules/node_modules node_modules
# Run All Lints
npm run bootstrap
npm run lint