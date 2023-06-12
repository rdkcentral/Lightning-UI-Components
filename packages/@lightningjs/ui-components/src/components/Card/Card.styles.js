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

import utils from '../../utils';

export const base = theme => ({
  h: theme.spacer.xxl * 12,
  paddingHorizontal: theme.spacer.xl,
  paddingVertical: theme.spacer.xl,
  radius: theme.radius.md,
  titleTextStyle: {
    ...theme.typography.headline1,
    wordWrap: true,
    maxLines: 2,
    textColor: theme.color.textNeutral
  },
  w: utils.getWidthByUpCount(theme, 6)
});

export const mode = theme => ({
  disabled: {
    titleTextStyle: { textColor: theme.color.textNeutralDisabled }
  }
});

export const tone = theme => ({
  neutral: {
    mode: {
      focused: {
        backgroundColor: theme.color.interactiveNeutralFocusSoft
      }
    }
  },
  inverse: {
    mode: {
      focused: {
        backgroundColor: theme.color.interactiveInverseFocusSoft
      }
    }
  },
  brand: {
    mode: {
      focused: {
        backgroundColor: theme.color.interactiveBrandFocusSoft
      }
    }
  }
});
