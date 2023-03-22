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
  marginBottom: theme.spacer.xxxl,
  paddingX: theme.spacer.lg,
  paddingY: theme.spacer.md,
  pointerW: theme.spacer.xl,
  pointerH: theme.spacer.md + theme.spacer.xs,
  radius: theme.radius.md,
  textStyle: {
    ...theme.typography.caption1,
    textColor: theme.color.textInverse
  },
  transition: theme.animation.utility // TODO: should delay and duration be xfast?
});

export const tone = theme => ({
  neutral: {
    backgroundColor: theme.color.fillNeutral,
    textStyle: { textColor: theme.color.textInverse }
  },
  inverse: {
    backgroundColor: theme.color.fillInverse,
    textStyle: { textColor: theme.color.textNeutral }
  },
  brand: {
    backgroundColor: theme.color.fillBrand,
    textStyle: { textColor: theme.color.textNeutral }
  }
});
