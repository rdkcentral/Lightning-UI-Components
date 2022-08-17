# DEV NOTES

This is a shared scratchpad where we can track notes on configs, weirdness, etc. things that can't be easily tagged in a comment.

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

**NOTE:** If a new Concourse job does not automatically run after, simply hit the "Trigger Build" icon in the upper right corner (Plus Sign) on the [`publish-next` job](https://ci-alpha.delivery.comcast.net/teams/lightning/pipelines/lightning-ui/jobs/publish-next/).

## Jest and Nested Dependencies

We should prefer to import component dependencies directly from the dependency's directory instead of using the nearest `index.js`. Due to the way jest's runtime loads modules, importing from the `index.js` can lead to situations where nested dependencies aren't loaded in the correct order, breaking the test suite and resulting in a lot of errors that look like this:

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

## Storybook Config

Notes from exploring LUI's current Storybook config and how Storybook config works.
Take aways:
- We are doing a lot of custom configs for panels, more of an observation than a critique.
- For the most part the standard Storybook config files look to be in order except `preview.js`
- We should refactor the code in `main.js`. The stories glob could probably be simplified, to keep things DRY
- `preview.js` and `argActions` is where we should dedicate our refactoring and research time. 
- further research needs to be done decorators and figuring out how to rewrite the custom one we have in `preview.js` 


| File                                     | Description                                                                                                                                                                 | Storybook Description                                                                                                                                         |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.storybook/addons/Announce`             | custom config for screen readers                                                                                                                                            |
| `.storybook/addons/ComponentStylesPanel` | creates panel specfic component style controls                                                                                                                              |
| `.storybook/addons/GridOverlay `         | creates panel grid overlay controls                                                                                                                                         |
| `.storybook/addons/ThemeDownload`        | creates the theme download function & button the lives on the Storybook Toolbar                                                                                             |
| `.storybook/addons/ThemePanel`           | creates Global Theme values panel with controls to adjust global values                                                                                                     |
| `.storybook/addons/ThemePicker`          | creates Theme picker dropdown that is located in the toolbar                                                                                                                |
| `.storybook/addons/Register`             | imports all the addons                                                                                                                                                      |
| `.storybook/addons/components`           | folder containing table and table row components used in Component Style Panel, Grid Overlay Panel, and Global Theme Values                                                 |
| `.storybook/utils/index.js`              | various custom Storybook utility functions                                                                                                                                  |
| `.storybook/constants.js`                | creates variables used through out the Storybook config files (ex. `THEMES`)                                                                                                |
| `.storybook/main.js`                     | in general this file lines up with Storybook expected usage, should examine the way we are loading stories for `Development` vs  `Production`, the code could be simplified | controls Storybook server's behavior, contains the location of stories to load, webpack and babel custom configs, add-ons, and any framework specific configs |
| `.storybook/manager-head.html`           | grid overlay styles                                                                                                                                                         |                                                                                                                                                               |
| `.storybook/manager.js`                  | Config for Storybook theme                                                                                                                                                  | controls the behavior of the Storybook UI, the place to set UI options and configure the Storybook theme                                                      |
| `.storybook/preview-head.html`           | docs style overrides                                                                                                                                                        | add extra elements to the head of the preview iframe, for instance, to load static stylesheets, font files                                                    | `.storybook/preview.js` | has a custom decorator function so Lightning and Storybook work together , case logic for which theme is loaded when the ThemePicker is used. NOTE: `argActions` (LUI specific) used to define functions to execute on changes to an arg. See `Contributing.md` for more detail | config to render components in Canvas (preview iframe). The JavaScript build configuration of the preview is controlled by a webpack config |