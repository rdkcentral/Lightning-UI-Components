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

export const base = theme => ({
  // TODO radius from design or token change
  titleTextStyle: {
    ...theme.typography.headline3,
    wordWrap: true,
    maxLines: 2,
    textColor: theme.color.textNeutral
  },
  descriptionTextStyle: {
    ...theme.typography.body2,
    textColor: theme.color.textNeutralSecondary,
    wordWrap: true,
    maxLines: 3
  },
  detailsTextStyle: {
    ...theme.typography.body3,
    textColor: theme.color.textNeutral,
    wordWrap: true,
    maxLines: 1
  }
});

export const mode = theme => ({
  disabled: {
    descriptionTextStyle: { textColor: theme.color.textNeutralDisabled },
    detailsTextStyle: { textColor: theme.color.textNeutralDisabled }
  }
});
