import lng from '@lightningjs/core';
import mdx from './withTags.mdx';
import withTags from './index.js';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[512]}/withTags`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Basic = () =>
  class Basic extends withTags(lng.Component) {
    static get tags() {
      return ['Text'];
    }

    static _template() {
      return {
        x: 50,
        y: 50,
        Text: {
          text: 'This has a tag'
        }
      };
    }
  };

Basic.args = {};
Basic.argTypes = {};
