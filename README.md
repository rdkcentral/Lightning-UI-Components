
# @lightning/ui

A collection of Comcast-branded UI components for the [Lightning](https://rdkcentral.github.io/Lightning/) framework.

## Installation

`@lightning/ui` is published internally to [Artifactory](https://comcastcorp.sharepoint.com/sites/ArtifEnterprise/SitePages/Knowl.aspx). To install this package, add the following to your local `~/.npmrc` or `your-repo/.npmrc`

```
@lightning:registry=https://artifactory.comcast.com/artifactory/api/npm/Lightning-npm-releases/
```

`@lightning/ui` has a peer dependency on the [Lightning package](https://www.npmjs.com/package/wpe-lightning)

```sh
npm install -S @lightning/ui wpe-lightning
```

## Usage

There are two ways to import components:

```js
// App.js
import lng from 'wpe-lightning';
import { ActionButton } from '@lightning/ui';
// or
import Button from '@lightning/ui/components/ActionButton';
```

All components are available at the top level `@lightning/ui`. For more information on the difference between these patterns, the `@material/ui` documentation has a great guide on [development bundle size](https://material-ui.com/guides/minimizing-bundle-size/) (**note**: this is external documentation otherwise unrelated to this project!).

See our Storybook for [detailed documentation](https://github.comcast.com/pages/Lightning/lightning-ui/) on each component

## Questions?

[Join us on Slack](https://slack.com/app_redirect?team=T024VU91V&channel=C016PQ0G4HY)
