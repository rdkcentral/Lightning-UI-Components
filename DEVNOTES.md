﻿<!--
  Copyright 2023 Comcast Cable Communications Management, LLC

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.

  SPDX-License-Identifier: Apache-2.0
-->

# DEV NOTES

This is a shared scratchpad where we can track notes on configs, weirdness, etc. things that can't be easily tagged in a comment.

## Monorepo

As to not modify the ci commands there are postinstall commands to copy a bin file to mock npx semantic-release

## Semantic Release

When working off of the `next` branch, in order to get the latest code from the `develop` branch, we have been `rebasing`. This allows all of the next commmits to be stacked on top of the develop commits.

### Rebasing

```
git checkout develop
git fetch origin
git pull origin develop
get checkout next
git pull origin next
git rebase -i origin/develop
```

Follow normal rebase steps to resolve merge conflicts. For any merge conflicts in package.json related to `version`, always take the incoming `next` changes, not version numbers from `develop`.

### Resolving new Tags and Notes

First, you will need to ensure you can view the "notes" for the tags.

Notes are not automatically pulled down when you clone a repo, so you will need to manually fetch them:

```
git fetch origin 'refs/notes/*:refs/notes/*'
```

You can confirm that the notes are now working by printing out the semantic-release notes for a given tag

```
git notes --ref semantic-release show vVERSION_NUMBER
```

For example:

```
git notes --ref semantic-release show v5.0.0-next.19
```

You should see something like `{"channels":["next"]}`.

For more information about Git Notes: https://git-scm.com/docs/git-notes

For more information about Git Tags: https://git-scm.com/docs/git-tag

#### Update the Tag

Next, find the new commit hash for the most recent chore release commit on `next` (you can run `git log`). Copy that commit to your clipboard or save it somewhere else to easily grab in a few steps.

Then, update that tag's associated commit

```
git tag -a vVERSION_NUMBER NEW_COMMIT_HASH -f
```

For example:

```
git tag -a v5.0.0-next.19 43726051b51f0a2056312ec5488af03984d8b2d8 -f
```

Then, force push up the tag change:

```
git push origin -f vVERISON_NUMBER
```

For example:

```
git push origin -f v5.0.0-next.19
```

#### Update the Note

Next, update the associated note to reference next again.

```
git notes --ref semantic-release add -m "{\"channels\":[\"next\"]}" vVERSION_NUMBER
```

For example:

```
git notes --ref semantic-release add -m "{\"channels\":[\"next\"]}" v5.0.0-next.19
```

Push up the notes change:

```
git push origin 'refs/notes/*:refs/notes/*'
```

#### Push Up

Lastly, push up the rebased version of `next`. NOTE: You may need to update the branch protection rules in GitHub "Settings" to "Allow force pushes":

```
git push origin -f next
```

## Jest and Nested Dependencies

We prefer to import component dependencies directly from the dependency's directory instead of using the nearest `index.js`. Due to the way jest's runtime loads modules, importing from the `index.js` can lead to situations where nested dependencies aren't loaded in the correct order, breaking the test suite and resulting in a lot of errors that look like this:

```sh
 FAIL  patterns/Card/CardProgram.test.js
  ● Test suite failed to run
    TypeError: Cannot read properties of undefined (reading 'default')
      at Object.Base (elements/index.js:74:17)
      at Object.<anonymous> (elements/Artwork/index.js:12:23)
      at Object.<anonymous> (elements/index.js:11:1)
      at Object.<anonymous> (patterns/Card/Card.js:3:1)
      at Object.<anonymous> (patterns/Card/index.js:1:1)
      at Object.<anonymous> (patterns/Card/CardProgram.js:1:1)
      at Object.<anonymous> (patterns/Card/CardProgram.test.js:2:1)
```

In short, do this:

```js
import Base from '../Base';
import Checkbox from '../Checkbox';
import TextBox from '../TextBox';
```

not this:

```js
import { Base, Checkbox, TextBox } from '..';
```

## Rewriting Git History to Change Committers from GHE name/email to Public GitHub name/email

This was done as we were getting ready to release version 2.x of the open-sourced version of LUI, [Lightning-UI-Components](https://github.com/rdkcentral/Lightning-UI-Components).

### Steps:

1. Get public GitHub emails of all contributors. We compiled this in an excel sheet, ask someone on the team where to access that.
2. From the data in the excel sheet create an object for each person containing the following fields. Export this object as `users` from a file called `users.js`:
   | name | description |
   | ------- | --------------- |
   | first | first name of committer |
   | last | last name of committer |
   | email | email name of committer |
   | user | GitHub username name of committer (This field is optional. GitHub will look up the user by their email. This allows you to verify that emails matched the correct accounts.) |
   | ccEmail | array of email addresses that should be replaced by value set on `email` field |
   ```js
   // users.js
   exports.users = {
     JohnDoe: {
       first: 'John',
       last: 'Doe',
       email: 'johndoe@gmail.com',
       user: 'johndoedev',
       ccEmails: ['john_doe@comcast.com', 'jdoe_1234@comcast.com']
     }
     // ...more users following the above format
   };
   ```
3. Save the following code in a file adjacent to `users.js`

```js
// create-users-filter.js
/**
 * Execute this file to generate the git filter-branch command to run.
 * The command will be written to a file called author-filter.sh
 *
 */
const fs = require('fs');
const { users } = require('./users');

const createScript = ({ ccEmail, email: pubEmail, first, last }) => {
  const fullName = `${first} ${last}`;
  return `
if [ "$GIT_COMMITTER_EMAIL" = "${ccEmail}" ]
then
    export GIT_COMMITTER_NAME="${fullName}"
    export GIT_COMMITTER_EMAIL="${pubEmail}"
    export GIT_AUTHOR_NAME="${fullName}"
    export GIT_AUTHOR_EMAIL="${pubEmail}"
    export EMAIL="${pubEmail}"
fi
if [ "$GIT_AUTHOR_EMAIL" = "${ccEmail}" ]
then
    export GIT_COMMITTER_NAME="${fullName}"
    export GIT_COMMITTER_EMAIL="${pubEmail}"
    export GIT_AUTHOR_NAME="${fullName}"
    export GIT_AUTHOR_EMAIL="${pubEmail}"
    export EMAIL="${pubEmail}"
fi
    `;
};

const contentArr = Object.entries(users).map(([_, data]) => {
  const { ccEmails, email, first, last } = data;

  const scripts = ccEmails.map(ccEmail =>
    createScript({ ccEmail, email, first, last })
  );

  return scripts.join(`
`);
});

const content = contentArr.join(`
`);

const filterScriptCommand = `git filter-branch -f --env-filter '
${content}
' --tag-name-filter cat -- --branches --tags`;

fs.writeFile('authors-filter-branch.sh', filterScriptCommand, err => {});
```

4. Run the file you just created. This will create a file, `authors-filter-branch.sh`.

```sh
node create-users-filter.js
```

5. Run the command that was output to `authors-filter-branch.sh`. This will rewrite git history, changing committers according the the users map created in step 2.

### Sources:

- [How can I change the author name / email of a commit?](https://www.git-tower.com/learn/git/faq/change-author-name-email)
- [Understanding Git Filter-branch and the Git Storage Model](https://manishearth.github.io/blog/2017/03/05/understanding-git-filter-branch/)
- [git filter-branch documentation](https://git-scm.com/docs/git-filter-branch)

## Are your snapshots different from another team member/Concourse?

First run the `test:updateSnapshot` scripts (`yarn test:updateSnapshot`) in case the snapshots haven't been updated.

If the snapshots are still failing:

- Try running `yarn clean` followed by `yarn install` to see if that fixes the issue
- Try deleting the node_modules folder followed by `yarn install`

## Open Source License and Copyright Headers

Clone the `add-copyright` repo: https://github.com/atapas/add-copyright/ and follow its instructions. Examples are belong.

Additionally, here is a write-up on the tool: https://blog.greenroots.info/add-copyright-or-license-text-to-the-source-files-recursively.

```bash
find "PATH TO FOLDER" -type d -name "FOLDER TO IGNORE" -prune -o -name "EXTENSION" -print0 | xargs -0 ./addcopyright.sh
```

Ignore the following folders before running the script:

- node_modules
- .husky
- .vscode
- .yarn
- dist

For example:

```bash
find ~/Sites/lightning-ui -type d -name "node_modules" -prune -o -type d -name ".husky" -prune -o -type d -name ".vscode" -prune -o -type d -name ".yarn" -prune -o -type d -name "dist" -prune -o -name "*.js" -print0 | xargs -0 ./addcopyright.sh
```

Use the `LICENSEHEADER.js` file for use with the following extensions:

- .js
- .cjs
- .mjs
- .ts

Use the `LICENSEHEADER.html` file for use with the following extensions:

- .md
- .mdx
- .html
