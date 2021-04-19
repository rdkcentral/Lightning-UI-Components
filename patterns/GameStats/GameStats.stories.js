import lng from '@lightningjs/core';
import Stats from '.';
import mdx from './GameStats.mdx';

export default {
  title: 'Patterns / GameStats',
  parameters: {
    docs: { page: mdx }
  }
};

export const Basic = args => {
  return class Basic extends lng.Component {
    static _template() {
      return {
        Stats: {
          type: Stats,
          stats: [
            {
              label: 'Total yards',
              items: [
                {
                  name: 'Eagles',
                  color: 'rgba(8,111,107,1)',
                  value: 252
                },
                {
                  name: 'Giants',
                  color: 'rgb(11,81,161)',
                  value: 243
                }
              ]
            },
            {
              label: 'Turnovers',
              invertedScoring: true,
              items: [
                {
                  name: 'Eagles',
                  color: 'rgb(8,111,107)',
                  value: 2
                },
                {
                  name: 'Giants',
                  color: '4278931873',
                  value: 1
                }
              ]
            },
            {
              label: 'First downs',
              items: [
                {
                  name: 'Eagles',
                  color: '4278742891',
                  value: 15
                },
                {
                  name: 'Giants',
                  color: 'rgba(11,81,161,1)',
                  value: 15
                }
              ]
            },
            {
              label: 'Red zone %',
              percentage: true,
              items: [
                {
                  name: 'Eagles',
                  color: 'rgb(8,111,107)',
                  value: 100
                },
                {
                  name: 'Giants',
                  color: '4278931873',
                  value: 66
                }
              ]
            }
          ]
        }
      };
    }
  };
};

Basic.args = { focused: false };
Basic.argTypes = {
  focused: { control: 'boolean' }
};
Basic.parameters = {
  argActions: {
    focused: (isFocused, component) => {
      component._getFocused = isFocused
        ? () => component.tag('Stats')
        : () => {};
      component._refocus();
    }
  }
};
