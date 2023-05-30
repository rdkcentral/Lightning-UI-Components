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
  alpha: theme.alpha.primary,
  descriptionTextStyle: {
    ...theme.typography.body2,
    textColor: theme.color.textNeutralSecondary,
    wordWrap: true,
    maxLines: 3
  },
  iconWidth: theme.spacer.xxl,
  iconHeight: theme.spacer.xxl,
  h: theme.spacer.xxxl * 19,
  subtitleTextStyle: {
    ...theme.typography.body3,
    maxLines: 2,
    textColor: theme.color.textNeutralSecondary,
    wordWrap: true
  },
  w: utils.getWidthByColumnSpan(theme, 3)
});

export const mode = theme => ({
  disabled: {
    alpha: theme.alpha.inactive,
    descriptionTextStyle: { textColor: theme.color.textNeutralDisabled },
    subtitleTextStyle: { textColor: theme.color.textNeutralDisabled }
  }
});
