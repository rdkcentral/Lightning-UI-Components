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
import { default as ProgressBarComponent } from '.';
import mdx from './ProgressBar.mdx';
import { CATEGORIES } from '../../docs/constants';

export default {
  title: `${CATEGORIES[512]}/ProgressBar`,
  parameters: {
    tag: 'ProgressBar',
    docs: {
      page: mdx
    },
    actions: {
      handles: ['mouseover', 'click .btn']
    }
  }
};

function changeColor(value) {
  if (value >= 0 && value <= 1) {
    var red, green, blue;

    if (value < 0.5) {
      red = Math.round(value * 2 * 255);
      green = 255;
    } else {
      red = 255;
      green = Math.round((1 - value) * 2 * 255);
    }

    blue = 0;

    var color = rgbToHex(red, green, blue);
    return color;
  } else {
    throw new Error('Value must be between 0 and 1');
  }
}

function rgbToHex(r, g, b) {
  var redHex = r.toString(16).padStart(2, '0');
  var greenHex = g.toString(16).padStart(2, '0');
  var blueHex = b.toString(16).padStart(2, '0');

  return '#' + redHex + greenHex + blueHex;
}

export const ProgressBar = () =>
  class ProgressBar extends lng.Component {
    _init() {
      setInterval(() => {
        const progress = Math.random();
        this.childList.last.patch({
          progress,
          style: {
            progressColor: [changeColor(progress), 100]
          }
        });
        const progress2 = Math.random();
        this.childList.first.patch({
          progress: progress2,
          style: {
            progressColor: [changeColor(progress2), 100]
          }
        });
      }, 1e3);
    }
    static _template() {
      return {
        ProgressBar: {
          type: ProgressBarComponent,
          tone: 'brand',
          mode: 'focused'
        },
        ProgressBar2: {
          type: ProgressBarComponent,
          w: 600,
          y: 100,
          progress: 0.5,
          mode: 'focused',
          style: {
            progressColor: 'theme.color.red'
          }
        }
      };
    }
  };
ProgressBar.storyName = 'ProgressBar';
ProgressBar.args = {
  progress: 0.5,
  w: 410
};
ProgressBar.argTypes = {
  progress: {
    control: {
      type: 'range',
      min: 0,
      max: 1,
      step: 0.01
    },
    description: 'Percentage of the current progress from 0 to 1',
    table: { defaultValue: { summary: 0 } }
  },
  w: {
    control: {
      type: 'range',
      min: 0,
      max: 600,
      step: 0.01
    },
    description: 'width of the entire bar',
    table: { defaultValue: { summary: 0 } }
  }
};
