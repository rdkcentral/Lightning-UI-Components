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
import { default as GradientComponent } from '.';
import mdx from './Gradient.mdx';
import { CATEGORIES } from '../../docs/constants';

export default {
  title: 'Foundations/Gradient',
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Gradient = () =>
  class Gradient extends lng.Component {
    static _template() {
      return {
        Gradient: {
          type: GradientComponent,
          itemLayout: {
            ratioX: 16,
            ratioY: 9,
            upCount: 3
          }
        }
      };
    }
  };

Gradient.args = {};
Gradient.argTypes = {};
Gradient.parameters = {
  argActions: {}
};
