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
import { context } from '../../globals';
import { default as GridOverlayComponent } from '.';
import mdx from './GridOverlay.mdx';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[4]}/GridOverlay`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const GridOverlay = args =>
  class GridOverlay extends lng.Component {
    static _template() {
      return {
        GridOverlay: {
          type: GridOverlayComponent,
          x: context.theme.layout.marginX * -1,
          y: context.theme.layout.marginY * -1,
          showColumns: args.showColumns,
          showMargins: args.showMargins,
          showSafe: args.showSafe,
          showGutters: args.showGutters,
          showText: args.showText,
          alpha: args.alpha
        }
      };
    }
  };
GridOverlay.storyName = 'GridOverlay';
GridOverlay.args = {
  alpha: 1,
  showColumns: true,
  showMargins: true,
  showSafe: true,
  showGutters: true,
  showText: true
};
GridOverlay.argTypes = {
  alpha: {
    control: {
      type: 'range',
      min: 0,
      max: 1,
      step: 0.01
    },
    description:
      'Adjusts the opacity, parameter should be a value between 0 and 1',
    table: { defaultValue: { summary: 'undefined' } }
  },
  showColumns: {
    control: 'boolean',
    description: 'When true, displays the column span rectangles',
    table: {
      defaultValue: { summary: true }
    }
  },
  showMargins: {
    control: 'boolean',
    description: 'When true, displays the X and Y margin rulers',
    table: {
      defaultValue: { summary: true }
    }
  },
  showSafe: {
    control: 'boolean',
    description:
      'When true, displays the X and Y "safe" zone rulers (this is the area that content should not be rendered in to avoid screen clipping on a device)',
    table: {
      defaultValue: { summary: true }
    }
  },
  showGutters: {
    control: 'boolean',
    description: 'When true, displays the rulers for spacing between columns',
    table: {
      defaultValue: { summary: true }
    }
  },
  showText: {
    control: 'boolean',
    description:
      'When true, displays the textbox containing the exact numbers associated with the screen, margin, safe, and gutter sizes',
    table: {
      defaultValue: { summary: true }
    }
  }
};
GridOverlay.parameters = {
  argActions: {}
};
