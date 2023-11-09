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

type KeyboardStyle = {
  keySpacing: number;
  screenW: number;
  marginX: number;
  inputSpacing: number;
  inputStyle: inputStyleObject;
};

type KeyboardFormat = Record<
  string,
  Array<Array<string | Record<string, unknown>>>
>;

declare namespace Keyboard {
  export interface TemplateSpec extends Base.TemplateSpec {
    // properties
    formats?: KeyboardFormat;
    centerKeyboard?: boolean;
    rowWrap?: boolean;
    centerKeys?: boolean;
    keyComponent?: lng.Component;
    defaultFormat?: string;
    columnCount?: number;
    rowCount?: number;
  }

  export interface TypeConfig extends lng.Component.TypeConfig {
    SignalMapType: SignalMap;
  }
  /**
   * emitted when the width of the Keyboard changes in response to a child component's dimensions changing (triggered by a signal called '$itemChanged')
   */
  export type SignalMap = {
    keyboardWidthChanged(): void;
  };
}

type KeyboardSelectedKeyPosition = {
  row: number;
  column: number;
};

declare class Keyboard<
  TemplateSpec extends Keyboard.TemplateSpec = Keyboard.TemplateSpec,
  TypeConfig extends Keyboard.TypeConfig = Keyboard.TypeConfig
> extends Base<TemplateSpec, TypeConfig> {
  // Properties
  /**
   * object containing arrays that represent different formats that the keyboard can be presented in. These arrays can contain strings or objects.
   */
  formats?: KeyboardFormat;

  /**
   * center the keyboard within it's set width (must set the w property of Keyboard)
   */
  centerKeyboard?: boolean;

  /**
   * wrap keyboard rows when navigating left and right
   */
  rowWrap?: boolean;

  /**
   * center the keys within it's set width (must set the w property of Keyboard)
   */
  centerKeys?: boolean;

  /**
   * component to display for each key
   */
  keyComponent?: lng.Component;

  /**
   * Default format of the keyboard to be shown. Should be a key of `formats`.
   */
  defaultFormat?: string;

  /**
   * number of columns across the keyboard if passing a flat array
   */
  columnCount?: number;

  /**
   * number of rows down the keyboard if passing a flat array
   */
  rowCount?: number;

  get style(): KeyboardStyle;
  set style(v: StylePartial<KeyboardStyle>);

  // methods
  /**
   * switches the keyboard format used to a newly specified format
   * @param string a key of keyboard format to switch to
   */
  $toggleKeyboard(next: string): void;

  /**
   *
   * @param keyboard an element rendering a keyboard
   * @param KeyboardSelectedKeyPosition an object specifying the row and column of the key to select
   */
  selectKeyOn(
    keyboard: lng.Component,
    KeyboardSelectedKeyPosition: KeyboardSelectedKeyPosition
  ): void;

  /**
   * returns an object specifying the row and column of the selected key
   */
  getSelectedKey(): KeyboardSelectedKeyPosition;

  /**
   * An method triggered by fireAncestors('$itemChanged') being invoked by a child component.
   */
  $itemChanged(): void;
}

export {
  Keyboard as default,
  KeyboardStyle,
  KeyboardSelectedKeyPosition,
  KeyboardFormat
};
