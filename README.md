<!--
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

# Lightning UI

This library contains shared Lightning components, you can view our live [Storybook documentation](https://rdkcentral.github.io/Lightning-UI-Components/) to learn more about each component and how to leverage them in your application.

In order to facilitate the development process for our theming architecture we have converted this project into a monorepo using Yarn workspaces. This allows engineers to work across multiple packages without the need for `npm link` or `yarn link`. This also has some other benefits including easy visibility across different @lightningjs/ui packages, standardization, and better release management.

Three packages are currently maintained and released from this project.

- @lightningjs/ui-components
- @lightningjs/ui-components-test-utils
- @lightningjs/ui-components-theme-base

## Local Development

To run the repository locally, run:

```
yarn install
yarn start
```

This will launch Storybook at [http://localhost:8000/](http://localhost:8000/).

## Peer Dependencies

`@lightningjs/ui-components` has a peer dependency on `@lightningjs/core^2.x`. If you are stuck using the _old Lightning_, i.e. `wpe-lightning^1.x`, you will need to alias `@lightningjs/core` in your build process. If you are bundling your app using [Webpack](https://webpack.js.org/), you should add this to your config:

```js
// in webpack.config.js
module.exports = {
  resolve: {
    alias: {
      '@lightningjs/core': path.resolve(__dirname, 'node_modules/wpe-lightning')
    }
  }
};
```

> **NOTE:** aliasing `@lightningjs/core` to point to `wpe-lightning` is _not_ guaranteed to work with everything! Consider updating your Lightning library as soon as possible.

## Installation

Install from NPM:

```bash
npm install --save @lightningjs/ui-components
```

`@lightningjs/ui-components` has a peer dependency on the [Lightning package](https://www.npmjs.com/package/@lightningjs/core)

```sh
npm install -S @lightningjs/ui @lightningjs/core
```

## Usage

You should import components using ES6 named imports, like so:

```js
// App.js
import lng from '@lightningjs/core';
import { Button } from '@lightningjs/ui-components';
```

You should NOT use path imports like this:

```js
// Do not use
import Button from '@lightningjs/ui-components/components/Button';
```

Since packages are now bundled with rollup this allows proper tree shaking behavior. For more information on tree shaking the `@material/ui` documentation has a great guide on [development bundle size](https://material-ui.com/guides/minimizing-bundle-size/) (**note**: this is external documentation otherwise unrelated to this project!).

Use components in your application

```js
import { FocusManager } from '@lightningjs/ui-components';

class MyComponent extends lng.Component {
  static _template() {
    return {
      FocusManager: {
        type: FocusManager,
        direction: 'row',
        children: []
      }
    };
  }
  _getFocused() {
    return this.tag('FocusManager');
  }
};
```

## Questions???

Submit a GitHub Issue or [Join us on Slack](https://join.slack.com/t/lightning-community/shared_invite/zt-1q9ggb668-iTvnDyKYLhlM0dnJpoWcWw)!
