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

export const base = theme => ({
  h: theme.spacer.md * 10,
  w: 0,
  justify: 'center',
  minWidth: getWidthByColumnSpan(theme, 3),
  paddingX: theme.spacer.xxxl,
  paddingXNoTitle: theme.spacer.xl,
  titlePadding: theme.spacer.md,
  itemSpacing: theme.spacer.md,
  textStyle: {
    ...theme.typography.button1,
    maxLines: 1,
    textColor: theme.color.textNeutral
  },
  contentColor: theme.color.fillNeutral
});

export const mode = theme => ({
  focused: {
    textStyle: { textColor: theme.color.textInverse },
    contentColor: theme.color.fillInverse
  },
  disabled: {
    textStyle: { textColor: theme.color.textNeutralDisabled },
    contentColor: theme.color.fillNeutralDisabled
  }
});

export const tone = theme => ({
  neutral: {},
  inverse: {
    mode: {
      focused: {
        textStyle: { textColor: theme.color.textNeutral },
        contentColor: theme.color.fillNeutral
      }
    }
  },
  brand: {
    mode: {
      focused: {
        contentColor: theme.color.fillNeutral
      }
    }
  }
});
