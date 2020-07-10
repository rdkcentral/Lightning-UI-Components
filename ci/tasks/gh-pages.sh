# setup ssh for GHE
mkdir ~/.ssh
ssh-keyscan -H $HOST >> ~/.ssh/known_hosts
eval $(ssh-agent -s)
ssh-add <(echo "$PRIVATE_KEY")

npm install
npm run build

git config user.name $USERNAME 
git config user.email $EMAIL
npm run gh-pages