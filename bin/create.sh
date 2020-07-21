if [ -z "$1" ]
then
  echo "No component name found, try again with something like:"
  echo ""
  echo "npm run create MyComponent"
  echo ""
  exit 0
fi

mkdir -p ./components/$1
touch ./components/$1/index.js ./components/$1/$1.test.js
touch "./components/$1/$1.stories.js" || $(echo "Create a ./components/$1 folder then re-run this command");

STORY_TEMPLATE=$(cat "bin/templates/story.template")
MDX_TEMPLATE=$(cat "bin/templates/readme.template")

echo "${STORY_TEMPLATE//MyComponent/$1}" > ./components/$1/$1.stories.js
echo "${MDX_TEMPLATE//MyComponent/$1}" > ./components/$1/$1.mdx
