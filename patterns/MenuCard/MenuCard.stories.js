import lng from '@lightningjs/core';
import Row from '../../layout/Row';
import MenuCard from '.';
import mdx from './MenuCard.mdx';

export default {
  title: 'Patterns/MenuCard',
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Basic = args =>
  class Basic extends lng.Component {
    static _template() {
      return {
        Row: {
          type: Row,
          h: 600,
          itemSpacing: 40,
          items: [
            {
              type: MenuCard,
              h: 600,
              w: 400,
              color: 'rgba(255, 255, 255,1)',
              headerText: 'HeaderTitle',
              headerImage: 'static/media/assets/images/Jurassic_World_16x9.jpg',
              bodyText: 'Body',
              footerText: 'Footer'
            },
            {
              type: MenuCard,
              h: 600,
              w: 400,
              color: 'rgba(235, 64, 52, 1)',
              headerText: 'HeaderTitle',
              headerImage:
                'static/media/assets/images/Jurassic_World_16x9.jpgf',
              bodyText: 'Body',
              footerText: 'Footer'
            },
            {
              type: MenuCard,
              h: 600,
              w: 400,
              color: 'rgba(52, 70, 235, 1)',
              headerText: 'HeaderTitle',
              bodyText: 'Body',
              footerText: 'Footer'
            }
          ]
        }
      };
    }

    _getFocused() {
      return this.tag('Row');
    }
  };
Basic.args = {};
Basic.argTypes = {};
Basic.parameters = {
  argActions: {}
};
