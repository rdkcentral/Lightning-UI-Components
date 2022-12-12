
# setup ssh for GHE
mkdir ~/.ssh
ssh-keyscan -H $HOST >> ~/.ssh/known_hosts
eval $(ssh-agent -s)
ssh-add <(echo "$PRIVATE_KEY")

git config user.name $USERNAME 
git config user.email $NPM_EMAIL

# no-ci actually skips CI check, which is what we want.
npm install
npx semantic-release --no-ci --repository-url git@github.comcast.com:Lightning/lightning-ui.git
