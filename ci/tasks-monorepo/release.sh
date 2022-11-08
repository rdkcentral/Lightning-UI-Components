#!/bin/sh

# setup ssh for GHE
mkdir ~/.ssh
ssh-keyscan -H $HOST >> ~/.ssh/known_hosts
eval $(ssh-agent -s)
echo "${PRIVATE_KEY}" | ssh-add -

git config user.name $USERNAME 
git config user.email $NPM_EMAIL

[ ! -d "node_modules" ] && yarn install

yarn release

git add -A
git commit -m 'ci: release [ci skip]' || echo 0;
yarn updateReleaseLog || echo 0;