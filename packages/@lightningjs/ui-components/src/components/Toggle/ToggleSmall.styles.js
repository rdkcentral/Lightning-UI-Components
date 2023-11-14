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

export const base = theme => {
  const knobSize = theme.spacer.lg;
  const knobPadding = theme.spacer.xxs;
  const strokeWeight = theme.stroke.sm;
  return {
    height: knobSize + (knobPadding + strokeWeight) * 2,
    knobWidth: knobSize,
    knobHeight: knobSize,
    knobRadius: knobSize / 2,
    knobPadding,
    strokeWeight,
    width: (strokeWeight + knobPadding * 2 + knobSize) * 2
  };
};
