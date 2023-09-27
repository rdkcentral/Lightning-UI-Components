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
  animationEntrance: theme.animation.standardEntrance,
  animationExit: theme.animation.standardExit,
  metadataLocation: 'standard',
  paddingX: theme.spacer.xl,
  paddingY: theme.spacer.lg,
  paddingYProgress: theme.spacer.xl,
  paddingYBetweenContent: theme.spacer.md,
  radius: theme.radius.md,
  alpha: theme.alpha.primary,
  iconWidth: theme.spacer.lg * 5,
  iconHeight: theme.spacer.xxl + theme.spacer.md,
  iconX: theme.spacer.xl,
  iconYStandard: theme.spacer.xxl * 5
});

export const tone = theme => ({
  neutral: {
    mode: {
      focused: {
        backgroundColor: theme.color.interactiveNeutralFocusSoft
      }
    }
  },
  inverse: {
    mode: {
      focused: {
        backgroundColor: theme.color.interactiveInverseFocusSoft
      }
    }
  },
  brand: {
    mode: {
      focused: {
        backgroundColor: theme.color.interactiveBrandFocusSoft
      }
    }
  }
});

export const mode = theme => ({
  disabled: {
    alpha: theme.alpha.inactive
  }
});
