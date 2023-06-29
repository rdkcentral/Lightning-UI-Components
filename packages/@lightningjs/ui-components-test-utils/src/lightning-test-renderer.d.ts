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

export interface JSONTree {
  alpha: lng.Component['alpha'];
  active: lng.Component['active'];
  attached: lng.Component['attached'];
  boundsMargin: lng.Component['attached'];
  color: lng.Component['color'];
  clipping: lng.Component['clipping'];
  enabled: lng.Component['enabled'];
  h: lng.Component['h'];
  isComponent: boolean;
  mount: lng.Component['mount'];
  mountY: lng.Component['mountY'];
  mountX: lng.Component['mountX'];
  pivot: lng.Component['pivot'];
  pivotX: lng.Component['pivotX'];
  pivotY: lng.Component['pivotY'];
  ref: lng.Component['ref'];
  renderOfScreen?: unknown;
  renderToTexture: lng.Component['renderToTexture'];
  scale: lng.Component['scale'];
  scaleX: lng.Component['scaleX'];
  scaleY: lng.Component['scaleY'];
  state: lng.Component['state'];
  tag: lng.Component['tag'];
  visible: lng.Component['visible'];
  w: lng.Component['w'];
  x: lng.Component['x'];
  y: lng.Component['y'];
  zIndex: lng.Component['zIndex'];
  /**
   * @remarks
   * This does not return the flex object property on the Lightning Element.
   * It returns a boolean of whether or not that property exists on the Element.
   */
  flex: boolean; // returns
  /**
   * @remarks
   * This does not return the flexItem object property on the Lightning Element.
   * It returns a boolean of whether or not that property exists on the Element.
   */
  flexItem: boolean;
  hasFocus?: boolean;
  hasFinalFocus?: boolean;
  [key: string]: any;
}

export type testRenderer = {
  toJSON: (children?: number) => JSONTree;
  update: () => void;
  forceAllUpdates: () => void;
  focus: () => void;
  unfocus: () => void;
  getContext: () => any; // TODO: Context does not have a TS def
  getInstance: () => lng.Element;
  getFocused: () => lng.Component<
    lng.Component.TemplateSpecLoose,
    lng.Component.TypeConfig
  >;
  getApp: () => lng.Application;
  keyPress: (key: string | Record<'key', string>) => void;
  keyRelease: (key: string | Record<'key', string>) => void;
  destroy: () => void;
  focusPath: () => string[];
};

export type createOptions = {
  applicationW: number;
  applicationH: number;
  [key: string]: any;
};

export declare function create(
  Component: lng.Component,
  options?: createOptions
): testRenderer;

export declare function toJSON(
  element: lng.Element,
  options?: { children: number }
): JSONTree;
