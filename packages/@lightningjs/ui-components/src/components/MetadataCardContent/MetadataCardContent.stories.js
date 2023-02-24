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
import { default as MetadataCardContentComponent } from '.';
import mdx from './MetadataCardContent.mdx';
import xfinityProviderLogoSquare from '../../assets/images/Xfinity-Provider-Logo-Square.png';
import { createModeControl } from 'lightning-ui-docs/.storybook/utils';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[32]}/MetadataCardContent`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const MetadataCardContent = () =>
  class MetadataCardContent extends lng.Component {
    static _template() {
      return {
        MetadataCardContent: {
          type: MetadataCardContentComponent
        }
      };
    }
  };

MetadataCardContent.storyName = 'MetadataCardContent';

// used to show example of longer text in description
const descriptionSample =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

MetadataCardContent.args = {
  w: 600,
  h: 250,
  title: 'Title',
  description: descriptionSample,
  details: 'Details',
  visibleCount: 3,
  mode: 'unfocused'
};

MetadataCardContent.argTypes = {
  ...createModeControl({ summaryValue: MetadataCardContent.args.mode }),
  w: {
    control: 'number',
    description: 'Width of component',
    table: {
      defaultValue: { summary: 0 }
    }
  },
  h: {
    control: 'number',
    description: 'Height of component',
    table: {
      defaultValue: { summary: 0 }
    }
  },
  title: {
    control: 'text',
    description: 'Title text',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  description: {
    control: 'text',
    description: 'Description text directly below title',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  details: {
    control: 'text',
    description: 'Details text at bottom left of componentDetails text',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  visibleCount: {
    control: { type: 'range', min: 1, max: 10, step: 1 },
    description: 'Number of visible providers',
    table: {
      defaultValue: { summary: 1 }
    }
  }
};

MetadataCardContent.parameters = {
  argActions: {
    visibleCount(visibleCount, component) {
      component.tag('MetadataCardContent').provider = {
        visibleCount: visibleCount,
        providers: Array(10).fill({
          icon: xfinityProviderLogoSquare,
          announce: 'xFinity',
          visibleCount: 3
        })
      };
    }
  }
};
