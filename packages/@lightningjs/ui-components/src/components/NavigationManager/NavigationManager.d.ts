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
import type { StylePartial } from '../../types/lui';
import FocusManager from '../FocusManager';

export type TransitionObject = {
  delay: number;
  duration: number;
  timingFunction: string;
};

export type DirectionProps = {
  axis: string;
  crossAxis: string;
  lengthDimension: string;
  crossDimension: string;
  innerCrossDimension: string;
};

export type NavigationManagerStyles = {
  alwaysScroll: boolean;
  itemSpacing: number;
  itemTransition: TransitionObject;
  neverScroll: boolean;
  scrollIndex: number;
};

declare namespace NavigationManager {
  export interface TemplateSpec extends FocusManager.TemplateSpec {
    alwaysScroll?: boolean;
    neverScroll?: boolean;
    scrollIndex?: number;
    autoResizeWidth?: boolean;
    autoResizeHeight?: boolean;
    lazyUpCount?: number;
    lazyUpCountBuffer?: number;
  }
}

declare class NavigationManager<
  TemplateSpec extends NavigationManager.TemplateSpec = NavigationManager.TemplateSpec,
  TypeConfig extends lng.Component.TypeConfig = lng.Component.TypeConfig
> extends FocusManager<TemplateSpec, TypeConfig> {
  // Properties
  alwaysScroll?: boolean;
  neverScroll?: boolean;
  scrollIndex?: number;
  autoResizeWidth?: boolean;
  autoResizeHeight?: boolean;
  lazyUpCount?: number;
  lazyUpCountBuffer?: number;

  // Accessors
  // TODO: ask if necessary --> these are private accessors so do they need to be included?
  get _directionPropNames(): DirectionProps;
  get _canScrollBack(): boolean;
  get _canScrollNext(): boolean;
  get _isColumn(): boolean;
  get _isRow(): boolean;

  get style(): NavigationManagerStyles;
  set style(v: StylePartial<NavigationManagerStyles>);

  // Methods
  $itemChanged(): void;
  updatePositionOnAxis(item: lng.Component, position: number): void;
  scrollTo(index: number, duration: number): void;
  transitionDone(): void;
  shouldScrollLeft(): boolean;
  shouldScrollRight(): boolean;
  shouldScrollUp(): boolean;
  shouldScrollDown(): boolean;
}

export default NavigationManager;
