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
  descriptionTextStyle: { ...theme.typography.body2, maxLines: 1 },
  fadeWidth: theme.layout.gutterX.lg,
  logoWidth: theme.typography.body3.lineHeight,
  logoHeight: theme.typography.body3.lineHeight,
  logoPadding: theme.spacer.lg,
  subtitleTextStyle: theme.typography.body3,
  titleTextStyle: { ...theme.typography.headline1, maxLines: 1 },
  marqueeSync: true,
  alpha: theme.alpha.primary
});

export const mode = theme => ({
  disabled: {
    subtitleTextStyle: { textColor: theme.color.textNeutralDisabled },
    alpha: theme.alpha.inactive
  }
});

export const tone = theme => ({
  neutral: {
    titleTextStyle: { textColor: theme.color.textNeutral },
    subtitleTextStyle: { textColor: theme.color.textNeutral },
    descriptionTextStyle: { textColor: theme.color.textNeutralSecondary },
    mode: {
      disabled: {
        titleTextStyle: { textColor: theme.color.textNeutralDisabled },
        subtitleTextStyle: { textColor: theme.color.textNeutralDisabled },
        descriptionTextStyle: {
          textColor: theme.color.textNeutralDisabled
        }
      }
    }
  },
  inverse: {
    titleTextStyle: { textColor: theme.color.textInverse },
    subtitleTextStyle: { textColor: theme.color.textInverse },
    descriptionTextStyle: { textColor: theme.color.textInverseSecondary },
    mode: {
      disabled: {
        titleTextStyle: { textColor: theme.color.textNeutralDisabled },
        subtitleTextStyle: { textColor: theme.color.textNeutralDisabled },
        descriptionTextStyle: {
          textColor: theme.color.textNeutralDisabled
        }
      }
    }
  },
  brand: {
    titleTextStyle: { textColor: theme.color.textNeutral },
    subtitleTextStyle: { textColor: theme.color.textNeutral },
    descriptionTextStyle: { textColor: theme.color.textNeutralSecondary },
    mode: {
      disabled: {
        titleTextStyle: { textColor: theme.color.textNeutralDisabled },
        subtitleTextStyle: { textColor: theme.color.textNeutralDisabled },
        descriptionTextStyle: {
          textColor: theme.color.textNeutralDisabled
        }
      }
    }
  }
});
