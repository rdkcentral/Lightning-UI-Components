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

import lng from '@lightningjs/core';
import Button, { ButtonStyle } from './Button';
import { StylePartial } from '../../types/lui';

type ButtonSmallStyle = ButtonStyle & {
  prefixH: number;
  suffixH: number;
};

declare namespace ButtonSmall {
  export type TemplateSpec = Button.TemplateSpec;
}

declare class ButtonSmall<
  TemplateSpec extends Button.TemplateSpec = Button.TemplateSpec,
  TypeConfig extends lng.Component.TypeConfig = lng.Component.TypeConfig
> extends Button<TemplateSpec, TypeConfig> {
  get style(): ButtonSmallStyle;
  set style(v: StylePartial<ButtonSmallStyle>);
}

export { ButtonSmall as default, ButtonSmallStyle };
