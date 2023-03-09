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

export const base = theme => {
  const size = theme.spacer.lg;
  return {
    arrowAlphaValue: 1,
    arrowAlphaValueLimit: 0.5,
    arrowHeight: theme.spacer.xxl,
    arrowSpacing: theme.spacer.md,
    arrowWidth: theme.spacer.xxl,
    arrowColor: theme.color.fillNeutral,
    containerHeight: theme.spacer.lg + theme.spacer.xs,
    iconLeftSrc: theme.asset.arrowLeft,
    iconRightSrc: theme.asset.arrowRight,
    minWidth: getWidthByColumnSpan(theme, 2),
    progressBar: {},
    w: size,
    h: size,
    radius: size / 2,
    sliderHeight: theme.spacer.md,
    showArrows: true,
    showKnob: true,
    circleAnimation: {}
  };
};

export const mode = () => ({
  disabled: {
    arrowAlphaValue: 0
  }
});

export const tone = theme => ({
  neutral: {
    arrowColor: theme.color.fillNeutral,
    circleColor: theme.color.interactiveNeutralFocus
  },
  inverse: {
    arrowColor: theme.color.fillInverse,
    circleColor: theme.color.interactiveInverseFocus
  },
  brand: {
    arrowColor: theme.color.fillNeutral,
    circleColor: theme.color.interactiveNeutralFocus
  }
});
