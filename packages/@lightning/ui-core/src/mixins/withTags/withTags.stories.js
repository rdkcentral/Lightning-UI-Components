import lng from '@lightningjs/core';
import mdx from './withTags.mdx';
import withTagsMixin from './index.js';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[512]}/withTags`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const withTags = () =>
  class withTags extends withTagsMixin(lng.Component) {
    static get tags() {
      return ['Text'];
    }

    static _template() {
      return {
        x: 50,
        y: 50,
        Text: {
          text: {
            text: 'This has a tag'
          }
        }
      };
    }
  };

withTags.storyName = 'withTags';
withTags.args = {};
withTags.argTypes = {};
