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

type InputStyle = ButtonStyle & {
  cursorStyle: object;
  eyebrowTextStyle: TextBoxStyle;
  helpTextStyle: TextBoxStyle;
  minWidth: number;
  paddingX: number;
  paddingY: number;
};

declare namespace Input {
  export interface TemplateSpec extends Button.TemplateSpec {
    /**
     * actualTitle is a proxy element for title which is used to store actual value typed when password is enabled
     */
    actualTitle?: string;

    /**
     * cursor indicates the current insertion or deletion position within the title
     */
    cursor: string;

    /**
     * eyebrow of input container.
     */
    eyebrow?: string;

    /**
     * help text for the input container.
     */
    helpText?: string;

    /**
     * when true, the listening property enables the input to accept changes from methods like clear, insert, and backspace. When false, these methods have no effect on the input
     */
    listening?: boolean;

    /**
     *  specifies the character used as a mask when the password is set to true.
     */
    mask?: string;

    /**
     * determines whether input should be masked
     */
    password?: boolean;

    /**
     * index of the current cursor positions
     */
    position?: number;
  }
}

declare class Input<
  TemplateSpec extends Input.TemplateSpec = Input.TemplateSpec,
  TypeConfig extends lng.Component.TypeConfig = lng.Component.TypeConfig
> extends Button<TemplateSpec, TypeConfig> {
  /**
   * actualTitle is a proxy element for title which is used to store actual value typed when password is enabled
   */
  actualTitle?: string;

  /**
   * cursor indicates the current insertion or deletion position within the title
   */
  cursor: string;

  /**
   * eyebrow of input container.
   */
  eyebrow?: string;

  /**
   * help text for the input container.
   */
  helpText?: string;

  /**
   * when true, the listening property enables the input to accept changes from methods like clear, insert, and backspace. When false, these methods have no effect on the input
   */
  listening?: boolean;

  /**
   *  specifies the character used as a mask when the password is set to true.
   */
  mask?: string;

  /**
   * determines whether input should be masked
   */
  password?: boolean;

  /**
   * index of the current cursor positions
   */
  position?: number;

  // methods

  /**
   * clears the content of the input container
   */
  clear: () => void;

  /**
   * inserts the content at the current cursor position within the input container
   */
  insert: (content: string) => void;

  /**
   * Removes the character before the current cursor position
   */
  backspace: () => void;

  /**
   *  moves the cursor one position to the left
   */
  moveLeft: () => void;

  /**
   * moves the cursor one position to the right
   */
  moveRight: () => void;

  get style(): InputStyle;
  set style(v: StylePartial<InputStyle>);

  // tags
  get _Eyebrow(): lng.Component;
  get _HelpText(): lng.Component;
  get _Cursor(): lng.Component;
  get _HiddenContent(): lng.Component;
}

export { Input as default, InputStyle };
