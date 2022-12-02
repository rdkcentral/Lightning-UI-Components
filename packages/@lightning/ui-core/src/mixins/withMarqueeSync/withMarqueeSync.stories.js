import withMarqueeSync from './withMarqueeSync';
import Base from '../../components/Base';
import mdx from './withMarqueeSync.mdx';
import TextBox from '../../components/TextBox';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[512]}/withMarqueeSync`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Basic = () => {
  return class Basic extends withMarqueeSync(Base) {
    static get __componentName() {
      return 'Basic';
    }
    static _template() {
      return {
        Basic: {
          Title: {
            type: TextBox,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
            style: { textStyle: { wordWrapWidth: 250, maxLines: 1 } },
            marquee: true
          },
          Subtitle: {
            type: TextBox,
            content:
              'Morbi vehicula rhoncus aliquam. Cras eget vulputate lectus. Aenean egestas mi at scelerisque cursus.',
            y: 30,
            style: { textStyle: { wordWrapWidth: 250, maxLines: 1 } },
            marquee: true
          }
        }
      };
    }

    get syncArray() {
      return [this.tag('Title'), this.tag('Subtitle')];
    }
  };
};

Basic.storyName = 'withMarqueeSync';
