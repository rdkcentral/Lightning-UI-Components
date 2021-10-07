import lng from '@lightningjs/core';
import ListItemImageGroup from './ListItemImageGroup';
import mdx from './ListItemImageGroup.mdx';
import cast from '../../assets/images/cast.png';
import cast1 from '../../assets/images/cast1.png';
import cast2 from '../../assets/images/cast2.png';

export default {
  title: 'Patterns / ListItemImageGroup',
  parameters: {
    docs: { page: mdx }
  }
};

export const Basic = () =>
  class Basic extends lng.Component {
    static _template() {
      return {
        Cast: {
          type: ListItemImageGroup,
          listItems: [
            {
              title: 'Jessia Findlay',
              subtitle: 'Lenina Crowne',
              src: cast
            },
            {
              title: 'Alden Ehrenreich',
              subtitle: 'John the Savage',
              src: cast1
            },
            {
              title: 'Harry Lloyd',
              subtitle: 'Bernard Marx',
              src: cast2
            }
          ]
        }
      };
    }
  };
Basic.args = { focused: false };
Basic.argTypes = {
  focused: { control: 'boolean' }
};
Basic.parameters = {
  argActions: {
    focused: (isFocused, component) => {
      component._getFocused = isFocused
        ? () => component.tag('Cast')
        : () => {};
      component._refocus();
    }
  }
};
