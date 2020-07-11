# If not stated otherwise in this file or this component's license file the
# following copyright and licenses apply:
#
# Copyright 2020 RDK Management
#
# Licensed under the Apache License, Version 2.0 (the License);
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an AS IS BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

touch "./components/$1/$1.stories.js" || $(echo "Create a ./components/$1 folder then re-run this command");

STORY_TEMPLATE=$(cat "./utils/storybook/story-template.js")
MDX_TEMPLATE=$(cat "./utils/storybook/docs-template.mdx")

echo "${STORY_TEMPLATE//MyComponent/$1}" > ./components/$1/$1.stories.js
echo "${MDX_TEMPLATE//Component/$1}" > ./components/$1/$1.mdx
