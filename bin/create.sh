if [ -z "$1" ] || [ -z "$2" ]
then
  echo "No component name or type found, try again with something like:"
  echo ""
  echo "npm run create element MyComponent"
  echo ""
  exit 0
fi

if [ "$1" != "collections" ] && [ "$1" != "elements" ] && [ "$1" != "layout" ] && [ "$1" != "mixins" ] && [ "$1" != "patterns" ]
then
  echo "Invalid component directory, please use one of the following:"
  echo "collections, elements, layout, patterns"
  echo ""
  exit 0
fi

mkdir -p ./$1/$2

if [ "$1" = "collections" ]
then
  STORY_TEMPLATE=$(cat "bin/templates/story.collections.template")
  MDX_TEMPLATE=$(cat "bin/templates/readme.collections.template")
  touch ./$1/$2/$2.stories.js
else
  STORY_TEMPLATE=$(cat "bin/templates/story.template")
  MDX_TEMPLATE=$(cat "bin/templates/readme.template")
  TEST_TEMPLATE=$(cat "bin/templates/test.template")
  INDEX_TEMPLATE=$(cat "bin/templates/index.template")
  touch ./$1/$2/index.js ./$1/$2/$2.test.js ./$1/$2/$2.stories.js
  echo "${TEST_TEMPLATE//MyComponent/$2}" > ./$1/$2/$2.test.js
  echo "${INDEX_TEMPLATE//MyComponent/$2}" > ./$1/$2/index.js
  echo "export { default as $2 } from './$2'; // TODO: alphabetize" >> ./$1/index.js
fi

echo "${STORY_TEMPLATE//MyComponent/$2}" | sed -e "s,Directory,$1,g" > ./$1/$2/$2.stories.js
echo "${MDX_TEMPLATE//MyComponent/$2}" > ./$1/$2/$2.mdx
