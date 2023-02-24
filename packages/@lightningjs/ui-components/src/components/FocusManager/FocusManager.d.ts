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

export default class FocusManager extends Base {
  protected _selectedChange(
    selected: lng.Component | undefined,
    prevSelected: lng.Component | undefined
  ): void;
  protected _selectedIndex: number;

  direction?: string;
  set items(
    items: Array<
      lng.Component.NewPatchTemplate<lng.Component.Constructor> | lng.Component
    >
  );
  get items(): Array<
    lng.Component.NewPatchTemplate<lng.Component.Constructor> | lng.Component
  >;
  get Items(): lng.Element;

  get selected(): lng.Component;
  get selectedIndex(): number;
  set selectedIndex(index: number);
  get fullyOnScreenItems(): Array<lng.Component>;

  appendItems(
    items: Array<lng.Component.NewPatchTemplate<lng.Component.Constructor>>
  ): void;
  appendItemsAt(
    items: Array<lng.Component.NewPatchTemplate<lng.Component.Constructor>>,
    idx: number
  ): void;
  prependItems(
    items: Array<lng.Component.NewPatchTemplate<lng.Component.Constructor>>
  ): void;
  removeItemAt(idx: number): void;
  render(): void;
  selectPrevious(): void;
  selectNext(): void;

  // tags
  get _Items(): lng.Component;
}
