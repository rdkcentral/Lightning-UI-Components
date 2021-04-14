import lng from 'wpe-lightning';
import mdx from './withUpdates.mdx';
import withUpdates from '.';

export default {
  title: 'Mixins/withUpdates',
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Basic = args =>
  class Basic extends withUpdates(lng.Component) {
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

Basic.args = {
  title: 'Default Title Value'
};

Basic.argTypes = {
  title: { control: 'text' }
};
