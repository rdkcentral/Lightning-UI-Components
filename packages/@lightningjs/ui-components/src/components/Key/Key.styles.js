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

import { getWidthByColumnSpan } from '../../utils';

export const base = theme => {
  const textStyle = theme.typography.headline2;
  const keySize = getWidthByColumnSpan(theme, 1);
  return {
    height: keySize,
    minWidth: theme.spacer.md * 7,
    paddingX: theme.spacer.md,
    textStyle,
    sizes: {
      sm: keySize,
      md: keySize * 2,
      lg: keySize * 3,
      xl: keySize * 4,
      xxl: keySize * 5
    },
    iconWidth: textStyle.lineHeight,
    iconHeight: textStyle.lineHeight
  };
};
