
# Lightning UI Components

A collection of reusable UI components aimed at reducing the development cycle required to build apps with Lightning.

**See the [Storybook](https://rdkcentral.github.io/Lightning-UI-Components)**

## Quick Start

Install from NPM:

```bash
npm install --save @lightningjs/ui-components
```

Import components as ES Modules

```js
import { FocusManager } from '@lightningjs/ui-components';
```

Use components in your application

```js
import from '@lightningjs/ui-components';
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

## Questions?

[Join the Lightning Community on Slack](https://join.slack.com/t/lightning-community/shared_invite/zt-f0khi0lt-OXNrRqCfmEWX7jx3F6GaTw)
