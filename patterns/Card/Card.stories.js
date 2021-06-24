import lng from '@lightningjs/core';

import {
  BasicCard,
  HorizontalCard,
  HorizontalCardLarge,
  VerticalCard,
  VerticalCardLarge,
  VerticalCardDynamic
} from '.';
import mdx from './Card.mdx';
import circle from '../../assets/images/circle.svg';
import pets from '../../assets/images/The_Secret_Life_of_Pets_16x9.jpg';

export default {
  title: 'Patterns/Card',
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
        Card: {
          type: BasicCard,
          title: 'Title',
          description: 'Short description',
          logo: circle,
          logoWidth: 1920,
          logoHeight: 1080
        }
      };
    }

    _getFocused() {
      return this.tag('Card');
    }
  };
// Basic.args = {};
// Basic.argTypes = {};
// Basic.parameters = {
//   argActions: {}
// };

export const Horziontal = args =>
  class Horizontal extends lng.Component {
    static _template() {
      return {
        Card: {
          type: HorizontalCard,
          src: pets,
          artHeight: 1080,
          artWidth: 1920,
          title: 'Title',
          description: 'Short description',
          data: [
            '86%',
            {
              icon:
                'http://myriad.merlin.comcast.com/select/logo?entityId=8527084350383982239&width=32&height=&ratio=1x1&trim=false',
              title: 'Rotten Tomatoes rating'
            }
          ],
          logo: circle,
          logoWidth: 1920,
          logoHeight: 1080
        }
      };
    }

    _getFocused() {
      return this.tag('Card');
    }
  };
// Horizontal.args = {};
// Horizontal.argTypes = {};
// Horizontal.parameters = {
//   argActions: {}
// };

export const HorziontalLarge = args =>
  class HorizontalLarge extends lng.Component {
    static _template() {
      return {
        Card: {
          type: HorizontalCardLarge,
          src: pets,
          artHeight: 1080,
          artWidth: 1920,
          title: 'Title',
          description: 'Short description',
          data: [
            '86%',
            {
              icon:
                'http://myriad.merlin.comcast.com/select/logo?entityId=8527084350383982239&width=32&height=&ratio=1x1&trim=false',
              title: 'Rotten Tomatoes rating'
            }
          ],
          logo: circle,
          logoWidth: 1920,
          logoHeight: 1080
        }
      };
    }

    _getFocused() {
      return this.tag('Card');
    }
  };
// HorizontalLarge.args = {};
// HorizontalLarge.argTypes = {};
// HorizontalLarge.parameters = {
//   argActions: {}
// };

export const Vertical = args =>
  class Vertical extends lng.Component {
    static _template() {
      return {
        Card: {
          type: VerticalCard,
          src: pets,
          artHeight: 1080,
          artWidth: 1920,
          title: 'Title',
          description: 'Short description'
        }
      };
    }

    _getFocused() {
      return this.tag('Card');
    }
  };
// Vertical.args = {};
// Vertical.argTypes = {};
// Vertical.parameters = {
//   argActions: {}
// };

export const VerticalLarge = args =>
  class VerticalLarge extends lng.Component {
    static _template() {
      return {
        Card: {
          type: VerticalCardLarge,
          src: pets,
          artHeight: 1080,
          artWidth: 1920,
          title: 'Title',
          description: 'Short description',
          data: [
            '86%',
            {
              icon:
                'http://myriad.merlin.comcast.com/select/logo?entityId=8527084350383982239&width=32&height=&ratio=1x1&trim=false',
              title: 'Rotten Tomatoes rating'
            }
          ],
          logo: circle,
          logoWidth: 1920,
          logoHeight: 1080
        }
      };
    }

    _getFocused() {
      return this.tag('Card');
    }
  };
// VerticalLarge.args = {};
// VerticalLarge.argTypes = {};
// VerticalLarge.parameters = {
//   argActions: {}
// };

export const VerticalDynamic = args =>
  class VerticalDynamic extends lng.Component {
    static _template() {
      return {
        Card: {
          type: VerticalCardDynamic,
          src: pets,
          artWidth: 1920,
          artHeight: 1080,
          title: 'Title',
          description: 'Short description',
          action: 'Watch on Netflix',
          logo: circle,
          logoWidth: 1920,
          logoHeight: 1080
        }
      };
    }

    _getFocused() {
      return this.tag('Card');
    }
  };
// VerticalDynamic.args = {};
// VerticalDynamic.argTypes = {};
// VerticalDynamic.parameters = {
//   argActions: {}
// };
