import lng from '@lightningjs/core';
import { default as ArtworkComponent } from './index.js';
import mdx from './Artwork.mdx';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[4]}/Artwork`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Artwork = () =>
  class Artwork extends lng.Component {
    static _template() {
      return {
        Artwork: {
          type: ArtworkComponent,
          itemLayout: {
            ratioX: 16,
            ratioY: 9,
            upCount: 3
          }
        }
      };
    }
  };

Artwork.args = {
  blur: false,
  foregroundSrc: false,
  gradient: false,
  format: 'default',
  srcCallback: false,
  fill: false,
  shouldScale: false
};

Artwork.argTypes = {
  format: {
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
    description: 'When true it will apply opacity on the image'
  },
  shouldScale: {
    control: 'boolean',
    description:
      'When true it will scale the image to the value specified by the imageScale property'
  }
};

Artwork.parameters = {
  argActions: {
    foregroundSrc: (foregroundSrc, component) => {
      component.tag('Artwork').foregroundSrc =
        'none' !== foregroundSrc ? foregroundSrc : undefined;
    },
    srcCallback: (active, component) => {
      if (active) {
        // Accepts a regular function or function that returns a promise
        component.tag('Artwork').patch({
          src: '8501866671289235112',
          srcCallback: ({ w, closestAspectRatio, src }) => {
            return new Promise(resolve => {
              setTimeout(() => {
                resolve(
                  `https://myriad.merlin.comcast.com/select/image?entityId=${src}&width=${w}&ratio=${closestAspectRatio}&rule=noTitle`
                );
              }, 500);
            });
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
