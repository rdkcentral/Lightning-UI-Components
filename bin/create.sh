if [ -z "$1" ]
then
  echo "No component name found, try again with something like:"
  echo ""
  echo "npm run create MyComponent"
  echo ""
  exit 0
fi

mkdir -p ./components/$1
touch ./components/$1/index.js ./components/$1/$1.test.js ./components/$1/$1.stories.js

STORY_TEMPLATE=$(cat "bin/templates/story.template")
MDX_TEMPLATE=$(cat "bin/templates/readme.template")
TEST_TEMPLATE=$(cat "bin/templates/test.template")
INDEX_TEMPLATE=$(cat "bin/templates/index.template")

echo "${STORY_TEMPLATE//MyComponent/$1}" > ./components/$1/$1.stories.js
echo "${MDX_TEMPLATE//MyComponent/$1}" > ./components/$1/$1.mdx
echo "${TEST_TEMPLATE//MyComponent/$1}" > ./components/$1/$1.test.js
echo "${INDEX_TEMPLATE//MyComponent/$1}" > ./components/$1/index.js
