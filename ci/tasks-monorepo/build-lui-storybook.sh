#!/bin/sh

[ ! -d "node_modules" ] && yarn install
yarn workspace lightning-ui-docs build
yarn workspace lightning-ui-docs exec find ./storybook-static