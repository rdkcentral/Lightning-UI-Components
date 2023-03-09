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
import mdx from './withUpdates.mdx';
import withUpdatesMixin from '.';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[512]}/withUpdates`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const withUpdates = args =>
  class withUpdates extends withUpdatesMixin(lng.Component) {
    static get properties() {
      return ['title'];
    }

    static _template() {
      return {
        x: 50,
        y: 50,
        Text: {}
      };
    }

    _init() {
      this._title = args.title;
    }

    _update() {
      this.tag('Text').text = this.title;
    }

    _setTitle(val) {
      // Only gets called when title is set, not _title
      return 'TITLE: ' + val;
    }
  };

withUpdates.storyName = 'withUpdates';

withUpdates.args = {
  title: 'Default Title Value'
};

withUpdates.argTypes = {
  title: {
    control: 'text',
    description: 'Title text',
    table: { defaultValue: { summary: 'undefined' } }
  }
};
