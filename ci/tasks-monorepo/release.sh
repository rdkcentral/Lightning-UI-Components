#!/bin/sh

# setup ssh for GHE
mkdir ~/.ssh
ssh-keyscan -H $HOST >>~/.ssh/known_hosts
eval $(ssh-agent -s)
echo "${PRIVATE_KEY}" | ssh-add -

git config user.name $USERNAME
git config user.email $NPM_EMAIL

[ ! -d "node_modules" ] && yarn install

yarn releaseCi

PACKAGE_VERSION_UI=$(cat ./packages/@lightning/ui/package.json |
  grep version |
  head -1 |
  awk -F: '{ print $2 }' |
  sed 's/[",]//g')

PACKAGE_VERSION_UI_CORE=$(cat ./packages/@lightning/ui-core/package.json |
  grep version |
  head -1 |
  awk -F: '{ print $2 }' |
  sed 's/[",]//g')

PACKAGE_VERSION_UI_EXTENSIONS=$(cat ./packages/@lightning/ui-extensions/package.json |
  grep version |
  head -1 |
  awk -F: '{ print $2 }' |
  sed 's/[",]//g')

git add -A
git commit -m "chore(release): @lightning/ui@${PACKAGE_VERSION_UI}, @lightning/ui-core@${PACKAGE_VERSION_UI_CORE}, @lightning/ui-extensions@${PACKAGE_VERSION_UI_EXTENSIONS} [skip ci]" || echo 0
yarn updateReleaseLog || echo 0
