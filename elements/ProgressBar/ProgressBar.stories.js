import lng from '@lightningjs/core';
import ProgressBar from '.';
import mdx from './ProgressBar.mdx';
import { getHexColor } from '../../Styles';
import context from '../../context';
export default {
  title: 'Elements / ProgressBar',
  parameters: {
    tag: 'ProgressBar',
    docs: {
      page: mdx
    },
    myAddon: {
      data: 'hi'
    },
    actions: {
      handles: ['mouseover', 'click .btn']
    }
  }
};

export const Basic = () =>
  class Basic extends lng.Component {
    static _template() {
      return {
        ProgressBar: {
          type: ProgressBar
        }
      };
    }

    _getFocused() {
      return this.tag('ProgressBar');
    }
  };

Basic.argTypes = {
  progress: {
    defaultValue: 0.5,
    control: {
      type: 'range',
      min: 0,
      max: 1,
      step: 0.01
    },
    description: 'percentage of the current progress from 0 to 1',
    table: {
      category: 'Properties',
      defaultValue: { summary: 0.5 }
    }
  },
  w: {
    defaultValue: 410,
    control: {
      type: 'range',
      min: 0,
      max: 600,
      step: 0.01
    },
    description: 'width of the bar when passed, w overrides 410 default',
    table: {
      category: 'Properties',
      defaultValue: { summary: 410 }
    }
  },
  toggle: {
    name: 'Theme target',
    options: ['Global', 'Component'],
    defaultValue: 'Global',
    control: { type: 'radio' },
    table: {
      category: 'Theme values',
      defaultValue: { summary: 'Global' }
    },
    description:
      'When true, this will apply your changes to the global custom theme values. Otherwise, the global theme\'s "componentStyles" object will be updated with these overrides.'
  },
  progressColor: {
    name: 'progressColor',
    callback(value, args) {
      if (!value) return;
      if ('Global' === args.toggle) {
        localStorage.setItem(
          'customTheme',
          JSON.stringify(
            context.setTheme({ colors: { fillNeutralFocus: [value, 100] } })
          )
        );
      } else {
        localStorage.setItem(
          'customTheme',
          JSON.stringify(
            context.setTheme({
              componentStyles: {
                ProgressBar: {
                  progressColor: getHexColor(value)
                }
              }
            })
          )
        );
      }
    },
    control: { type: 'color' },
    table: { category: 'Theme values' },
    description:
      'progress fill progressColor overrides default, formats(#000000). Uses themes to update'
  },
  barColor: {
    name: 'barColor',
    callback() {},
    control: { type: 'color' },
    table: { category: 'Theme values' },
    description: 'bar background, barColor overrides default, formats(#000000)'
  }
};
