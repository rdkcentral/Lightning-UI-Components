# Copyright 2020 Comcast Cable Communications Management, LLC

# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at

# http://www.apache.org/licenses/LICENSE-2.0

# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# SPDX-License-Identifier: Apache-2.0

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
