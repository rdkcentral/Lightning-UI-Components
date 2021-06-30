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
          title: args.title,
          description: args.description,
          logo: args.showLogo ? circle : null,
          logoWidth: 1920,
          logoHeight: 1080
        }
      };
    }

    _getFocused() {
      if (args.focused) {
        return this.tag('Card');
      }
    }
  };
Basic.args = {
  title: 'Title',
  description: 'Short Description',
  showLogo: true
};
Basic.argTypes = {
  title: { content: 'text' },
  description: { content: 'text' },
  showLogo: { content: 'boolean' },
  focused: { control: 'boolean' }
};

export const Horizontal = args =>
  class Horizontal extends lng.Component {
    static _template() {
      return {
        Card: {
          type: HorizontalCard,
          src: pets,
          artHeight: 1080,
          artWidth: 1920,
          title: args.title,
          description: args.description,
          data: args.showData
            ? [
                '86%',
                {
                  icon:
                    'http://myriad.merlin.comcast.com/select/logo?entityId=8527084350383982239&width=32&height=&ratio=1x1&trim=false',
                  title: 'Rotten Tomatoes rating'
                }
              ]
            : null,
          logo: args.showLogo ? circle : null,
          logoWidth: 1920,
          logoHeight: 1080
        }
      };
    }

    _getFocused() {
      if (args.focused) {
        return this.tag('Card');
      }
    }
  };
Horizontal.args = {
  title: 'Title',
  description: 'Short Description',
  showData: true,
  showLogo: true
};
Horizontal.argTypes = {
  title: { content: 'text' },
  description: { content: 'text' },
  showData: { content: 'boolean' },
  showLogo: { content: 'boolean' },
  focused: { control: 'boolean' }
};

export const HorizontalLarge = args =>
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
          data: args.showData
            ? [
                '86%',
                {
                  icon:
                    'http://myriad.merlin.comcast.com/select/logo?entityId=8527084350383982239&width=32&height=&ratio=1x1&trim=false',
                  title: 'Rotten Tomatoes rating'
                }
              ]
            : null,
          logo: args.showLogo ? circle : null,
          logoWidth: 1920,
          logoHeight: 1080
        }
      };
    }

    _getFocused() {
      if (args.focused) {
        return this.tag('Card');
      }
    }
  };
HorizontalLarge.args = {
  title: 'Title',
  description: 'Short Description',
  showData: true,
  showLogo: true
};
HorizontalLarge.argTypes = {
  title: { content: 'text' },
  description: { content: 'text' },
  showData: { content: 'boolean' },
  showLogo: { content: 'boolean' },
  focused: { control: 'boolean' }
};

export const Vertical = args =>
  class Vertical extends lng.Component {
    static _template() {
      return {
        Card: {
          type: VerticalCard,
          src: pets,
          artHeight: 1080,
          artWidth: 1920,
          title: args.title,
          description: args.description
        }
      };
    }

    _getFocused() {
      if (args.focused) {
        return this.tag('Card');
      }
    }
  };
Vertical.args = {
  title: 'Title',
  description: 'Short Description'
};
Vertical.argTypes = {
  title: { content: 'text' },
  description: { content: 'text' },
  focused: { control: 'boolean' }
};

export const VerticalLarge = args =>
  class VerticalLarge extends lng.Component {
    static _template() {
      return {
        Card: {
          type: VerticalCardLarge,
          src: pets,
          artHeight: 1080,
          artWidth: 1920,
          title: args.title,
          description: args.description,
          data: args.showData
            ? [
                '86%',
                {
                  icon:
                    'http://myriad.merlin.comcast.com/select/logo?entityId=8527084350383982239&width=32&height=&ratio=1x1&trim=false',
                  title: 'Rotten Tomatoes rating'
                }
              ]
            : null,
          logo: args.showLogo ? circle : null,
          logoWidth: 1920,
          logoHeight: 1080
        }
      };
    }

    _getFocused() {
      if (args.focused) {
        return this.tag('Card');
      }
    }
  };
VerticalLarge.args = {
  title: 'Title',
  description: 'Short Description',
  showData: true,
  showLogo: true
};
VerticalLarge.argTypes = {
  title: { content: 'text' },
  description: { content: 'text' },
  showData: { content: 'boolean' },
  showLogo: { content: 'boolean' },
  focused: { control: 'boolean' }
};

export const VerticalDynamic = args =>
  class VerticalDynamic extends lng.Component {
    static _template() {
      return {
        Card: {
          type: VerticalCardDynamic,
          src: pets,
          artWidth: 1920,
          artHeight: 1080,
          title: args.title,
          description: args.description,
          action: args.action,
          logo: args.showLogo ? circle : null,
          logoWidth: 1920,
          logoHeight: 1080
        }
      };
    }

    _getFocused() {
      if (args.focused) {
        return this.tag('Card');
      }
    }
  };
VerticalDynamic.args = {
  title: 'Title',
  description: 'Short Description',
  action: 'Watch on Netflix',
  showLogo: true
};
VerticalDynamic.argTypes = {
  title: { content: 'text' },
  description: { content: 'text' },
  action: { content: 'text' },
  showLogo: { content: 'boolean' },
  focused: { control: 'boolean' }
};
