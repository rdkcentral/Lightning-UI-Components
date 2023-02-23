const urlBase = 'https://github.comcast.com/Lightning/lightning-ui/packages/@lightningjs/ui-components/src/components/';

module.exports = (name, dir) => `
import { Canvas, Story } from '@storybook/addon-docs';
import ${name} from '.';

# ${name}

## Source

${urlBase}${name}/${name}.js

## Usage

\`\`\`js
import { ${name} } from '@lightningjs/ui';

class Basic extends lng.Component {
  static _template() {
    return {
      ${name}: {
        type: ${name},
      }
    };
  }
};
\`\`\`

<Canvas>
  <Story id="${dir}-${name.toLowerCase()}--basic" />
</Canvas>

## API

### Properties

| name  | type   | required | default | description |
| ----- | ------ | -------- | ------- | ----------- |
|       |        |          |         |             |

### Style Properties

| name  | type   | description |
| ----- | ------ | ----------- |
|       |        |             |

### Methods

`;
