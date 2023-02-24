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

export const setSelected: unique symbol;
export const currentSelected: unique symbol;

export interface WithSelectionsOptionsKeys {
  currentSelected?: string;
  currentSelectedIndex?: string;
  isSelected?: string;
  items?: string;
  setSelected?: string;
}

export interface WithSelectionsOptions {
  captureKey?: string;
  defaultIndex?: number;
  eventName?: string;
  options?: WithSelectionsOptionsKeys;
}

export interface WithSelections {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get [currentSelected](): any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [setSelected](selected: any, val: any): void;
}

export interface WithSelectionsConstructor {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  new (...args: any[]): WithSelections;
}

export default function withExtensions<BaseType extends typeof lng.Component>(
  base: BaseType,
  options: WithSelectionsOptions
): BaseType & WithSelectionsConstructor;
