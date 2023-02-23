import lng from '@lightningjs/core';
import mdx from './withUpdates.mdx';
import withUpdatesMixin from './index.js';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[512]}/withUpdates`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const withUpdates = args =>
  class withUpdates extends withUpdatesMixin(lng.Component) {
    static get properties() {
      return ['title'];
    }

    static _template() {
      return {
        x: 50,
        y: 50,
        Text: {}
      };
    }

    _init() {
      this._title = args.title;
    }

    _update() {
      this.tag('Text').text = this.title;
    }

    _setTitle(val) {
      // Only gets called when title is set, not _title
      return 'TITLE: ' + val;
    }
  };

withUpdates.storyName = 'withUpdates';

withUpdates.args = {
  title: 'Default Title Value'
};

withUpdates.argTypes = {
  title: {
    control: 'text',
    description: 'Title text',
    table: { defaultValue: { summary: 'undefined' } }
  }
};
