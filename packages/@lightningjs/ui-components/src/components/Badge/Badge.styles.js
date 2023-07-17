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

export const base = theme => {
  return {
    contentSpacing: theme.spacer.sm,
    paddingX: theme.spacer.md,
    paddingY: theme.spacer.xs,
    offsetY: theme.spacer.xxs,
    radius: theme.radius.sm,
    textStyle: {
      ...theme.typography.caption1,
      textAlign: 'center'
    },
    strokeWidth: theme.stroke.sm,
    strokeColor: theme.color.strokeNeutral
  };
};

export const tone = theme => ({
  neutral: {
    backgroundColor: theme.color.fillInverseSecondary,
    iconColor: theme.color.textNeutral,
    textStyle: { textColor: theme.color.textNeutral },
    strokeColor: theme.color.strokeNeutral
  },
  inverse: {
    backgroundColor: theme.color.fillNeutralSecondary,
    iconColor: theme.color.textInverse,
    textStyle: { textColor: theme.color.textInverse },
    strokeColor: theme.color.strokeInverse
  },
  brand: {
    backgroundColor: theme.color.fillBrand,
    iconColor: theme.color.textNeutral,
    textStyle: { textColor: theme.color.textNeutral },
    strokeColor: theme.color.strokeInverse
  }
});
