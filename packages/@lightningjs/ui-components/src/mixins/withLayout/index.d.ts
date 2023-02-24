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

export interface LayoutOptions {
  w?: number;
  h?: number;
  circle?: boolean;
  ratioX?: number;
  ratioY?: number;
  upCount?: number;
}

export interface WithLayout {
  _previousDimensionsData: string;
  _itemLayout?: LayoutOptions;

  set itemLayout(val: LayoutOptions);
  get itemLayout(): LayoutOptions;

  _allowUpdate(): boolean;
  _updateItemLayout(): void;
}

export type WithLayoutConstructor<BaseType extends typeof lng.Component> =
  BaseType & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    new (...args: any[]): BaseType & WithLayout;
  };

export default function withLayout<BaseType extends typeof lng.Component>(
  base: BaseType
): WithLayoutConstructor<BaseType>;
