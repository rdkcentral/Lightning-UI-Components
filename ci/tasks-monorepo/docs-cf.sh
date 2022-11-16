
# setup ssh for GHE
mkdir ~/.ssh
ssh-keyscan -H $HOST >> ~/.ssh/known_hosts
eval $(ssh-agent -s)
ssh-add <(echo "$PRIVATE_KEY")

[ ! -d "node_modules" ] && yarn install
yarn workspace lightning-ui-docs build
yarn workspace lightning-ui-docs exec find ./storybook-static
