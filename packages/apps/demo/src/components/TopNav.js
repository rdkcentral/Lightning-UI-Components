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

import { Base, context, Row } from '@lightningjs/ui-components';
import { Clock } from '.';

export default class TopNav extends Base {
  static get __componentName() {
    return 'TopNav';
  }

  static _template() {
    const w = window.app.stage.w / window.app.stage.getRenderPrecision();
    return {
      w: w - context.theme.layout.safe * 2,
      y: context.theme.layout.safe,
      x: context.theme.layout.safe,
      Logo: {
        w: 98,
        h: 48
      },
      Controls: {
        x: w => w,
        mountX: 1,
        autoResizeWidth: true,
        type: Row,
        items: [
          {
            type: Clock
          }
        ]
      }
    };
  }

  _update() {
    if (this.theme.logo) {
      this.tag('Logo').alpha = 1;
      this.tag('Logo').src = this.theme.logo;
    } else {
      this.tag('Logo').alpha = 0;
    }
    super._update();
  }
}
