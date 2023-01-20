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
          src: 'https://image.tmdb.org/t/p/w500/rQWoKq52opggnJsNWoLw7cHX2ew.jpg',
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
      'https://image.tmdb.org/t/p/w500/uBZlZ8yN3zScGIsbIRnyWg14JeM.png'
    ],
    description: 'Image to be displayed on top of artwork',
    table: {
      defaultValue: { summary: 'default' }
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
