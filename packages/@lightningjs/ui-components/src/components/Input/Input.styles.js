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

import { getWidthByUpCount } from '../../utils/index.js';

export const base = theme => ({
  cursorStyle: {
    textColor: theme.color.textNeutral,
    blink: true,
    w: theme.spacer.xs,
    h: theme.spacer.xxl
  },
  eyebrowTextStyle: {
    ...theme.typography.caption1,
    maxLines: 1,
    textColor: theme.color.textNeutral
  },
  helpTextStyle: {
    ...theme.typography.caption1,
    maxLines: 1,
    textColor: theme.color.textNeutralSecondary
  },
  minWidth: getWidthByUpCount(theme, 4),
  paddingX: theme.spacer.xl,
  paddingY: theme.spacer.xl
});

export const mode = theme => ({
  disabled: {
    eyebrowTextStyle: { textColor: theme.color.textNeutralDisabled },
    helpTextStyle: { textColor: theme.color.textNeutralDisabled }
  },
  focused: {
    cursorStyle: { textColor: theme.color.textInverse },
    eyebrowTextStyle: { textColor: theme.color.textNeutral },
    helpTextStyle: { textColor: theme.color.textNeutralSecondary }
  }
});

export const tone = theme => ({
  inverse: {
    mode: {
      focused: {
        eyebrowTextStyle: { textColor: theme.color.textNeutral },
        helpTextStyle: { textColor: theme.color.textNeutral }
      }
    }
  }
});
