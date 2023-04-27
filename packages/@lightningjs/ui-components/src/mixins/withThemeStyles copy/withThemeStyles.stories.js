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
import mdx from './withThemeStyles.mdx';
import withThemeStylesMixin from './index.js';
import { CATEGORIES } from '../../docs/constants';
import { context } from '../../globals';

export default {
  title: `${CATEGORIES[512]}/withThemeStyles`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const withThemeStyles = () => {
  const style = {
    color: context.theme.color.fillNeutral
  };

  class Box extends withThemeStylesMixin(lng.Component) {
    static get __componentName() {
      return 'Box';
    }

    static get __themeStyle() {
      return style;
    }

    static _template() {
      return {
        Box: {
          w: 150,
          h: 150,
          rect: true
        }
      };
    }

    toggleColor(theme) {
      this.tag('Box').color = theme ? this.style.color : 0xff0000ff;
    }
  }

  return class withThemeStyles extends lng.Component {
    static _template() {
      return {
        Box: {
          type: Box
        }
      };
    }
  };
};

withThemeStyles.storyName = 'withThemeStyles';
withThemeStyles.args = {
  themeColor: true
};
withThemeStyles.argTypes = {
  themeColor: {
    control: 'boolean',
    description: 'Should the box use the color from the theme?',
    table: {
      defaultValue: { summary: withThemeStyles.args.themeColor }
    }
  }
};
withThemeStyles.parameters = {
  argActions: {
    themeColor: (themeColor, component) => {
      component.tag('Box').toggleColor(themeColor);
    }
  }
};
