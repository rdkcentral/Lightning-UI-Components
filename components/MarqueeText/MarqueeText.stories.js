/**
 * Copyright 2020 Comcast Cable Communications Management, LLC
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

import lng from 'wpe-lightning';

import MarqueeText from '.';
import mdx from './MarqueeText.mdx';
import { getHexColor, COLORS_TEXT, TYPOGRAPHY } from '../Styles';

export default {
  title: 'MarqueeText',
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
        MarqueeText: {
          type: MarqueeText,
          w: 350,
          h: 180,
          title: {
            text: 'This is a scrolling Marquee component for long text',
            ...TYPOGRAPHY.headline2,
            textColor: getHexColor(COLORS_TEXT.light),
            maxLines: 1
          },
          autoStart: true,
          delay: 1
        }
      };
    }
  };

export const CenteredText = () =>
  class CenteredText extends lng.Component {
    static _template() {
      return {
        MarqueeText: {
          type: MarqueeText,
          w: 400,
          h: 50,
          title: {
            text: 'No scroll center',
            ...TYPOGRAPHY.headline2,
            textColor: getHexColor(COLORS_TEXT.light),
            maxLines: 1,
            textAlign: 'center'
          },
          autoStart: true,
          delay: 1
        }
      };
    }
  };
