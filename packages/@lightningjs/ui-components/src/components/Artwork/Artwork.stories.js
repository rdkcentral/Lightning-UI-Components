/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import lng from '@lightningjs/core';
import { default as ArtworkComponent } from '.';
import mdx from './Artwork.mdx';
import { CATEGORIES } from '../../../docs/constants';

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
    control: 'select',
    options: [
      'none',
      'https://image.tmdb.org/t/p/w500/uBZlZ8yN3zScGIsbIRnyWg14JeM.png'
    ],
    description: 'Image to be displayed on top of artwork',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  srcCallback: {
    control: 'boolean',
    description:
      'This property can be supplied with your own custom callback function to generate the src value. The values passed back into the srcCallback can help you make the proper request from a service for the image that will best fit your artwork space.',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  fill: {
    control: 'boolean',
    description: 'When true it will apply opacity on the image',
    table: {
      defaultValue: { summary: false }
    }
  },
  shouldScale: {
    control: 'boolean',
    description:
      'When true it will scale the image to the value specified by the imageScale property',
    table: {
      defaultValue: { summary: false }
    }
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
          src: 'https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg',
          srcCallback: () => {
            return new Promise(resolve => {
              setTimeout(() => {
                resolve(
                  'https://image.tmdb.org/t/p/w500/o7qi2v4uWQ8bZ1tW3KI0Ztn2epk.jpg'
                );
              }, 500);
            });
          }
        });
      } else {
        component.tag('Artwork').patch({
          src: 'https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg',
          srcCallback: undefined
        });
      }
    }
  }
};
