#!/bin/sh

[ ! -d "node_modules" ] && yarn install

yarn workspace @lightning/ui build
yarn workspace @lightning/ui pack --dry-run