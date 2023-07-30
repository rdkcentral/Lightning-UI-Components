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
import { StylePartial } from '../../types/lui';

type SizeObject = {
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
};

type KeyStyle = ButtonStyle & {
  h: number;
  sizes: SizeObject;
  iconW: number;
  iconH: number;
};

declare namespace Key {
  export interface TemplateSpec extends Button.TemplateSpec {
    /**
     * url for icon
     */
    icon?: string;

    /**
     * it allows custom handling of the "Enter" key press behavior in the Key component, overriding the default $onSoftKey and $toggleKeyboard events.
     */
    onEnter?: (key: string, toggle: boolean) => void;

    /**
     * width of the Key
     */
    size?: string;

    /**
     * used to toggle `$toggleKeyboard`
     */
    toggle?: boolean;

    style?: StylePartial<KeyStyle>;
  }
  export interface TypeConfig extends lng.Component.TypeConfig {
    SignalMapType: SignalMap;
  }
  /**
   * Signal map interface for Key component
   */
  export type SignalMap = {
    /**
     * This signal is fired when the enter key is pressed while the Key component is focused.
     * @param key The key value that triggered the event.
     * @param toggle The toggle value of the `Key` component.
     */
    onSoftKey(key: string, toggle: boolean): void;

    /**
     *  This signal is fired when the enter key is pressed while the Key component is focused, and its toggle property is set to true
     * @param key The key value that triggered the event.
     * @param toggle The toggle value of the `Key` component.
     */
    toggleKeyboard(key: string, toggle: boolean): void;
  };
}
declare class Key<
  TemplateSpec extends Key.TemplateSpec = Key.TemplateSpec,
  TypeConfig extends lng.Component.TypeConfig = lng.Component.TypeConfig
> extends Button<TemplateSpec, TypeConfig> {
  /**
   * description text
   */
  icon?: string;

  /**
   * it allows custom handling of the "Enter" key press behavior in the Key component, overriding the default $onSoftKey and $toggleKeyboard events.
   */
  onEnter?: (key: string, toggle: boolean) => void;

  /**
   * Logo to be placed to the left of the title and description
   */
  size?: string;

  /**
   * used to toggle `$toggleKeyboard`
   */
  toggle?: boolean;

  get style(): KeyStyle;
  set style(v: StylePartial<KeyStyle>);
}

export { Key as default, KeyStyle, SizeObject };
