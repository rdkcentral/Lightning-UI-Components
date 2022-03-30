# setup ssh for GHE
mkdir ~/.ssh
ssh-keyscan -H $HOST >> ~/.ssh/known_hosts
eval $(ssh-agent -s)
ssh-add <(echo "$PRIVATE_KEY")

npm install
npm run build

cd dist
cf login -a https://api.ame1-g2.cf.comcast.net -u $USERNAME -p $PASSWORD -s $SPACE
cf push lui-theming -b staticfile_buildpack
