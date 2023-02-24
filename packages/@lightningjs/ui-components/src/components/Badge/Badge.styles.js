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

export const base = theme => ({
  contentSpacing: theme.spacer.sm,
  paddingX: theme.spacer.md,
  paddingY: theme.spacer.xs,
  offsetY: theme.spacer.xxs,
  radius: theme.radius.sm,
  textAlign: 'center',
  textStyle: theme.typography.caption1
});

export const tone = theme => ({
  neutral: {
    backgroundColor: theme.color.fillInverseSecondary,
    iconColor: theme.color.fillNeutral,
    textStyle: { textColor: theme.color.textNeutral }
  },
  inverse: {
    backgroundColor: theme.color.fillNeutralSecondary,
    iconColor: theme.color.fillInverse,
    textStyle: { textColor: theme.color.textInverse }
  },
  brand: {
    backgroundColor: theme.color.fillBrand,
    iconColor: theme.color.fillNeutral,
    textStyle: { textColor: theme.color.textNeutral }
  }
});
