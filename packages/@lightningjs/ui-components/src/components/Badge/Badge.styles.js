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
    // offsetY: 1, //TODO needto confirm before if I can remove offSet from Badge Styles
    paddingX: theme.spacer.md + theme.spacer.xxs,
    paddingY: theme.spacer.xs,
    radius: theme.radius.sm,
    strokeWidth: theme.stroke.sm,
    textStyle: {
      ...theme.typography.tag1,
      textAlign: 'center'
    }
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
