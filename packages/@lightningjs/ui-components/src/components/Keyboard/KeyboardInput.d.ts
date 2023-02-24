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

type inputStyleObject = {
  radius: lng.Tools.CornerRadius;
};

export type KeyboardInputStyle = {
  keySpacing: number;
  screenW: number;
  marginX: number;
  inputSpacing: number;
  inputStyle: inputStyleObject;
};

export default class KeyboardInput extends Base {
  centerKeyboard?: boolean;
  defaultFormat?: string;
  input?: Record<string, unknown>;
  keyboardType?: lng.Component; // use this prop to specify which keyboard to use (KeyboardQwerty, KeyboardEmail, etc)
  get style(): KeyboardInputStyle;
  set style(v: StylePartial<KeyboardInputStyle>);
}
