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

export type JSONTreeProperties = any; // TODO
export type JSONTree = Record<string, JSONTreeProperties>;

export type testRenderer = {
  toJSON: (children?: number) => JSONTree;
  update: () => void;
  forceAllUpdates: () => void;
  focus: () => void;
  unfocus: () => void;
  getContext: () => any; // TODO: Context does not have a TS def

  // TODO: I don't think this is correct, lng.Element.ElementChildList is readonly so can't access from lng
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

declare function create(
  Component: lng.Component,
  options?: createOptions
): testRenderer;

export type toJSON = (
  element: lng.Element,
  options?: { children: number }
) => JSONTree;

declare namespace _default {
  export { create };
  export { toJSON };
}

export default _default;
