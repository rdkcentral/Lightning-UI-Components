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
  descriptionTextStyle: {
    ...theme.typography.body2,
    textColor: theme.color.textNeutralSecondary,
    wordWrap: true,
    maxLines: 5
  },
  disabledAlpha: theme.alpha.inactive,
  subtitleTextStyle: {
    ...theme.typography.body3,
    maxLines: 1,
    textColor: theme.color.textNeutralSecondary,
    wordWrap: true
  },
  iconWidth: theme.spacer.xxl,
  iconHeight: theme.spacer.xxl,
  h: theme.spacer.xxl * 10,
  w: utils.getWidthByColumnSpan(theme, 3)
});

export const mode = theme => ({
  disabled: {
    descriptionTextStyle: { textColor: theme.color.textNeutralDisabled }
  }
});