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

import { base as ControlStyle } from './Control.styles.js';

export const base = theme => {
  const parentStyle = ControlStyle(theme);
  const h = theme.spacer.md * 7;
  const radiusOffset = (parentStyle.h - h) / 2;
  const radius = Math.max(parentStyle.radius - radiusOffset, 0);
  const logoRadius = Math.max(radius - parentStyle.paddingX / 2, 0);

  return {
    h,
    logoStyle: {
      radius: logoRadius,
      height: theme.spacer.md * 5,
      width: theme.spacer.md * 6
    },
    prefixH: theme.spacer.md * 5,
    radius,
    minWidth: theme.spacer.md * 8,
    textStyle: theme.typography.button2
  };
};
