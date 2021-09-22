/**
 * Copyright 2021 Comcast Cable Communications Management, LLC
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

import { clone } from '../utils';
import {
  CORNER_RADIUS,
  PALETTE,
  TYPOGRAPHY,
  ANIMATION,
  MATERIALS,
  getFocusScale,
  spacing
} from './Styles';

const SIZES = {
  icon: {
    small: 32,
    medium: 40,
    large: 48
  }
};

export const DEFAULT_THEME = {
  getFocusScale,
  spacing,
  materials: MATERIALS,
  palette: PALETTE,
  sizes: SIZES,
  typography: TYPOGRAPHY,
  border: {
    focused: {
      width: 2
    },
    radius: CORNER_RADIUS
  },
  animations: ANIMATION
};

/**
 * Combines two theme objects to create a new theme
 * @param {Object|function} theme - An object or callback that accepts the default theme as an argument. Gets merged with the default theme
 * @param {Object} [defaultTheme] - Theme to be merged with.
 */
export default (theme, defaultTheme = DEFAULT_THEME) => {
  if (typeof theme === 'function') {
    return clone(defaultTheme, theme(defaultTheme));
  }

  return clone(defaultTheme, theme);
};
