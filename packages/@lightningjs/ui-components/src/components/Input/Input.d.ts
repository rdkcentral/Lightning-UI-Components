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
import Button, { ButtonStyle } from '../Button';
import { TextBoxStyle } from '../TextBox';
import { StylePartial } from '../../types/lui';

export type InputStyle = ButtonStyle & {
  cursorStyle: object;
  eyebrowTextStyle: TextBoxStyle;
  helpTextStyle: TextBoxStyle;
  minWidth: number;
  paddingX: number;
  paddingY: number;
};

export default class Input extends Button {
  actualTitle?: string;
  cursor: string;
  eyebrow?: string;
  helpText?: string;
  listening: boolean;
  mask?: string;
  password?: boolean;
  position?: number;
  get isCursorActive(): boolean;
  set value(value: string);
  get value(): string;
  get style(): InputStyle;
  set style(v: StylePartial<InputStyle>);

  // tags
  get _Eyebrow(): lng.Component;
  get _HelpText(): lng.Component;
  get _Cursor(): lng.Component;
  get _HiddenContent(): lng.Component;

  // public methods
  clear: () => void;
  insert: (content: string) => void;
  backspace: () => void;
  moveLeft: () => void;
  moveRight: () => void;
}
