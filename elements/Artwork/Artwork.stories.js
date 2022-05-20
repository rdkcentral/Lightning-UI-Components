import lng from '@lightningjs/core';
import fallbackSrc from '../../assets/images/default_background.png';
import Artwork from '.';
import mdx from './Artwork.mdx';

export default {
  title: 'Elements/Artwork',
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Basic = () =>
  class Basic extends lng.Component {
    static _template() {
      return {
        Artwork: {
          type: Artwork,
          itemLayout: {
            ratioX: 16,
            ratioY: 9,
            upCount: 3
          },
          fallbackSrc: fallbackSrc,
          style: {
            imageScale: 1.2
          }
        }
      };
    }
  };

Basic.args = {
  blur: false,
  foregroundSrc: false,
  gradient: false,
  mode: 'default',
  srcCallback: false,
  fill: false,
  shouldScale: false
};

Basic.argTypes = {
  mode: {
    control: 'radio',
    options: ['default', 'circle', 'square', 'contain'],
    description: 'Updates the treatment of src image',
    table: {
      defaultValue: { summary: 'default' }
    }
  },
  blur: {
    control: 'boolean',
    description: 'Adds blur effect to image',
    table: {
      defaultValue: { summary: false }
    }
  },
  gradient: {
    control: 'boolean',
    description: 'Adds gradient to artwork area',
    table: {
      defaultValue: { summary: false }
    }
  },
  foregroundSrc: {
    control: {
      type: 'select'
    },
    options: [
      'none',
      'http://myriad.merlin.comcast.com/select/logo?entityId=8501866671289235112&width=300&height=200&rule=Stations%20-%20white'
    ],
    description: 'Image to be displayed on top of artwork',
    table: {
      defaultValue: { summary: 'default' }
    }
  },
  srcCallback: {
    control: 'boolean',
    description:
      'This property can be supplied with your own custom callback function to generate the src value. The values passed back into the srcCallback can help you make the proper request from a service for the image that will best fit your artwork space.',
    table: {
      defaultValue: { summary: undefined }
    }
  },
  fill: {
    control: 'boolean',
    description: 'show/hide fill'
  },
  shouldScale: {
    control: 'boolean',
    description: 'show/hide scale'
  }
};

Basic.parameters = {
  argActions: {
    foregroundSrc: (foregroundSrc, component) => {
      component.tag('Artwork').foregroundSrc =
        'none' !== foregroundSrc ? foregroundSrc : undefined;
    },
    srcCallback: (active, component) => {
      if (active) {
        component.tag('Artwork').patch({
          src: '8501866671289235112',
          srcCallback: ({ w, closestAspectRatio, src }) => {
            return `https://myriad.merlin.comcast.com/select/image?entityId=${src}&width=${w}&ratio=${closestAspectRatio}&rule=noTitle`;
          }
        });
      } else {
        component.tag('Artwork').patch({
          src: 'https://myriad.merlin.comcast.com/select/image?entityId=8501866671289235112&width=400&ratio=3x4&rule=noTitle',
          srcCallback: undefined
        });
      }
    }
  }
};
