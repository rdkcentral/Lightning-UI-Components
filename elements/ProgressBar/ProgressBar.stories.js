/**
 * Copyright 2021 Comcast Cable Communications Management, LLC
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
import { rgba2argb } from '../../utils';
import ProgressBar from '.';
import mdx from './ProgressBar.mdx';

export default {
  title: 'Elements / ProgressBar',
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
        ProgressBar: {
          type: ProgressBar,
          progress: args.progress,
          animationDuration: 0,
          w: args.width,
          radius: args.radius,
          barColor: rgba2argb(args.barColor),
          progressColor: rgba2argb(args.progressColor)
        }
      };
    }

    _getFocused() {
      return this.tag('ProgressBar');
    }
  };

Basic.args = {
  progress: 0.5,
  width: 410,
  radius: 5,
  barColor: 'rgba(98,98,98,1)',
  progressColor: 'rgba(255,255,255,0.96)'
};
Basic.argTypes = {
  progress: {
    control: {
      type: 'range',
      min: 0,
      max: 1,
      step: 0.01
    }
  },
  width: {
    control: {
      type: 'number',
      min: 0,
      step: 1
    }
  },
  radius: {
    control: {
      type: 'number',
      min: 0,
      step: 1
    }
  },
  barColor: { control: 'color' },
  progressColor: { control: 'color' }
};
