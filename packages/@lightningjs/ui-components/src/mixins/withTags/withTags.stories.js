﻿/**
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
import withTagsMixin from '.';
import { CATEGORIES } from '../../docs/constants';

export default {
  title: 'Utilities/withTags'
};

export const withTags = () =>
  class withTags extends withTagsMixin(lng.Component) {
    static get tags() {
      return ['Text'];
    }

    static _template() {
      return {
        x: 50,
        y: 50,
        Text: {
          text: {
            text: 'This has a tag'
          }
        }
      };
    }
  };

withTags.storyName = 'withTags';
withTags.args = {};
withTags.argTypes = {};
