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

import withMarqueeSync from './withMarqueeSync';
import Base from '../../components/Base';
import mdx from './withMarqueeSync.mdx';
import TextBox from '../../components/TextBox';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[512]}/withMarqueeSync`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Basic = () => {
  return class Basic extends withMarqueeSync(Base) {
    static get __componentName() {
      return 'Basic';
    }
    static _template() {
      return {
        Basic: {
          Title: {
            type: TextBox,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
            style: { textStyle: { wordWrapWidth: 250, maxLines: 1 } },
            marquee: true
          },
          Subtitle: {
            type: TextBox,
            content:
              'Morbi vehicula rhoncus aliquam. Cras eget vulputate lectus. Aenean egestas mi at scelerisque cursus.',
            y: 30,
            style: { textStyle: { wordWrapWidth: 250, maxLines: 1 } },
            marquee: true
          }
        }
      };
    }

    get syncArray() {
      return [this.tag('Title'), this.tag('Subtitle')];
    }
  };
};

Basic.storyName = 'withMarqueeSync';
