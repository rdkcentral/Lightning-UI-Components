#!/bin/sh

# setup ssh for GHE
mkdir ~/.ssh
ssh-keyscan -H $HOST >> ~/.ssh/known_hosts
eval $(ssh-agent -s)
ssh-add <(echo "$PRIVATE_KEY")

[ ! -d "node_modules" ] && yarn install
yarn workspace lightning-ui-docs build
yarn workspace lightning-ui-docs exec find ./storybook-static

git config user.name $USERNAME
git config user.email $EMAIL
yarn gh-pages -d /packages/apps/lightning-ui-docs/storybook-static
