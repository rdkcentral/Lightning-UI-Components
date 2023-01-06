#!/bin/sh

# setup ssh for GHE
mkdir ~/.ssh
ssh-keyscan -H $HOST >>~/.ssh/known_hosts
eval $(ssh-agent -s)
echo "${PRIVATE_KEY}" | ssh-add -

git config user.name $USERNAME
git config user.email $NPM_EMAIL

[ ! -d "node_modules" ] && yarn install

yarn workspaces foreach --exclude lightning-ui-docs run build && yarn workspaces foreach run semantic-release -e semantic-release-monorepo || echo 0 # Always pass step just in case a semantic release plugin fails (ex. slack notification). That way things will always be in sync.