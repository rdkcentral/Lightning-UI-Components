import lng from '@lightningjs/core';
import mdx from './withThemeStyles.mdx';
import withThemeStylesMixin from './index.js';
import { CATEGORIES } from 'lightning-ui-docs';
import { context } from '../../globals';

export default {
  title: `${CATEGORIES[512]}/withThemeStyles`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const withThemeStyles = () => {
  const style = {
    color: context.theme.color.fillNeutral
  };

  class Box extends withThemeStylesMixin(lng.Component) {
    static get __componentName() {
      return 'Box';
    }

    static get __themeStyle() {
      return style;
    }

    static _template() {
      return {
        Box: {
          w: 150,
          h: 150,
          rect: true
        }
      };
    }

    toggleColor(theme) {
      this.tag('Box').color = theme ? this.style.color : 0xff0000ff;
    }
  }

  return class withThemeStyles extends lng.Component {
    static _template() {
      return {
        Box: {
          type: Box
        }
      };
    }
  };
};

withThemeStyles.storyName = 'withThemeStyles';
withThemeStyles.args = {
  themeColor: true
};
withThemeStyles.argTypes = {
  themeColor: {
    control: 'boolean',
    description: 'Should the box use the color from the theme?',
    table: {
      defaultValue: { summary: withThemeStyles.args.themeColor }
    }
  }
};
withThemeStyles.parameters = {
  argActions: {
    themeColor: (themeColor, component) => {
      component.tag('Box').toggleColor(themeColor);
    }
  }
};
