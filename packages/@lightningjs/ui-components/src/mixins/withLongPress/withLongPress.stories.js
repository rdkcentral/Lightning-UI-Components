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
import Tile from '../../components/Tile/Tile';
import withLongPressMixin from '.';
import TextBox from '../../components/TextBox';

export default {
  title: 'Utilities/withLongPress'
};

export const withLongPress = args => {
  class withLongPress extends lng.Component {
    static _template() {
      return {
        Tile: {
          type: withLongPressMixin(Tile),
          src: 'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg',
          w: 320,
          h: 180,
          threshold: args.threshold || 2000,
          signals: { longPressHit: '_handleLongPress' }
        },
        Notification: {
          y: 220,
          type: TextBox,
          content: 'Long Press deteted',
          style: { textStyle: { maxLines: 3 } },
          alpha: 0
        }
      };
    }
    _init() {
      super._init();
    }

    $longPressHit(data) {
      this.tag('Notification').patch({
        content: `Long Press detected on ${data}`
      });
      this.tag('Notification').setSmooth('alpha', 1);
      setTimeout(() => {
        this.tag('Notification').setSmooth('alpha', 0);
      }, 2000);
    }
    _getFocused() {
      return this.tag('Tile');
    }
  }

  return withLongPressMixin(withLongPress);
};

withLongPress.storyName = 'withLongPress';

withLongPress.args = {
  threshold: 2000,
  executeOnce: true
};

withLongPress.argTypes = {
  threshold: {
    control: { type: 'number', min: 1000 },
    description: 'Time in MS to trigger long press',
    table: { defaultValue: { summary: 2000 } }
  },
  continuousExecution: {
    control: { type: 'boolean' },
    description:
      'execute long press action continuously when threshold is met again',
    table: { defaultValue: { summary: false } }
  }
};
