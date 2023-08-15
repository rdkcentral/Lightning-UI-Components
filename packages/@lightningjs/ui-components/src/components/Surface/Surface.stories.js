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
import { default as SurfaceComponent } from '.';
import mdx from './Surface.mdx';
import { createModeControl } from '../../docs/utils';
import { CATEGORIES } from '../../docs/constants';

export default {
<<<<<<< HEAD
  title: `${CATEGORIES[8]}/Surface`,
=======
  title: 'Foundations/Surface',
>>>>>>> f169f6a0 (feature(Storybook): changes tile to use string)
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Surface = () =>
  class Surface extends lng.Component {
    static _template() {
      return {
        Surface: {
          type: SurfaceComponent,
          itemLayout: {
            ratioX: 16,
            ratioY: 9,
            upCount: 3
          }
        }
      };
    }
  };

Surface.args = { mode: 'focused' };

Surface.argTypes = createModeControl({ summaryValue: 'focused' });
