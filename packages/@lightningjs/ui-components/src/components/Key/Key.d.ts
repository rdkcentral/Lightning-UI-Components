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

import Button, { ButtonStyle } from '../Button';
import type { StylePartial } from '../../types/lui';

type SizeObject = {
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
};

export type KeyStyle = ButtonStyle & {
  h: number;
  sizes: SizeObject;
  iconW: number;
  iconH: number;
};

export default class Key extends Button {
  icon?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  toggle: string;
  get style(): KeyStyle;
  set style(v: StylePartial<KeyStyle>);
}
