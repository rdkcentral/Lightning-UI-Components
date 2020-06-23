touch "./components/$1/$1.stories.js" || $(echo "Create a ./components/$1 folder then re-run this command");

STORY_TEMPLATE=$(cat "./utils/storybook/story-template.js")
MDX_TEMPLATE=$(cat "./utils/storybook/docs-template.mdx")

echo "${STORY_TEMPLATE//MyComponent/$1}" > ./components/$1/$1.stories.js
echo "${MDX_TEMPLATE//Component/$1}" > ./components/$1/$1.mdx
