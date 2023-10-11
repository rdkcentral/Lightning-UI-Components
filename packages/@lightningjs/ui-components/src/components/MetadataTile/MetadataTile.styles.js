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
  titleTextStyle: theme.typography.headline3,
  descriptionTextStyle: theme.typography.body3
});

export const tone = theme => ({
  neutral: {
    detailsTextStyle: { textColor: theme.color.textNeutralSecondary },
    descriptionTextStyle: { textColor: theme.color.textNeutral },
    mode: {
      disabled: {
        detailsTextStyle: { textColor: theme.color.textNeutralDisabled },
        descriptionTextStyle: {
          textColor: theme.color.textNeutralDisabled
        }
      }
    }
  },
  inverse: {
    detailsTextStyle: { textColor: theme.color.textInverseSecondary },
    descriptionTextStyle: { textColor: theme.color.textInverse },
    mode: {
      disabled: {
        detailsTextStyle: { textColor: theme.color.textNeutralDisabled },
        descriptionTextStyle: {
          textColor: theme.color.textNeutralDisabled
        }
      }
    }
  },
  brand: {
    detailsTextStyle: { textColor: theme.color.textNeutralSecondary },
    descriptionTextStyle: { textColor: theme.color.textNeutral },
    mode: {
      disabled: {
        detailsTextStyle: { textColor: theme.color.textNeutralDisabled },
        descriptionTextStyle: {
          textColor: theme.color.textNeutralDisabled
        }
      }
    }
  }
});
