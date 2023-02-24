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

import lng from '@lightningjs/core';
import Base from '../Base';
import type { StylePartial } from '../../types/lui';

export type MarqueeStyle = {
  fadeW: number;
  offset: number;
  shouldSmooth: boolean;
};

export default class Marquee extends Base {
  autostart?: boolean;
  centerAlign?: boolean;
  contentTexture?: lng.Texture;
  delay?: number;
  repeat?: number;
  title?: string;
  get style(): MarqueeStyle;
  set style(v: StylePartial<MarqueeStyle>);

  // tags
  get _ContentClipper(): lng.Component;
  get _ContentBox(): lng.Component;
  get _Content(): lng.Component;
  get _ContentLoopTexture(): lng.Component;
}
