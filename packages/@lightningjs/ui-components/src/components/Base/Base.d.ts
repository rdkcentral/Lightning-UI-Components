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
import { SpeechType } from '../../mixins/withAnnouncer';

declare namespace Base {
  export interface TemplateSpec extends lng.Component.TemplateSpec {
    skipPlinko: boolean;
    centerInParent: boolean;
    loaded?: Promise<void>;
    _smooth?: boolean;
    _announce: SpeechType;
    _whenEnabled: Promise<void>;
  }
}

declare class Base<
  TemplateSpec extends Base.TemplateSpec,
  TypeConfig extends lng.Component.TypeConfig
> extends lng.Component<TemplateSpec, TypeConfig> {
  // redeclare properties in class declaration
  skipPlinko: boolean;
  centerInParent: boolean;
  loaded?: Promise<void>;
  _smooth?: boolean;
  _announce: SpeechType;
  _whenEnabled: Promise<void>;

  // methods/accessors should only be included in the class declaration
  isFullyOnScreen(): boolean;
  getFocusScale(): number;
  getUnfocusScale(): number;
  _focus(): void;
  _unfocus(): void;
  _update(): void;

  get _isDisabledMode(): boolean;
  get _isUnfocusedMode(): boolean;
  get _isFocusedMode(): boolean;

  get shouldSmooth(): boolean;
  set shouldSmooth(v: boolean);

  set announce(announce: SpeechType);
  get announce(): SpeechType;
}

export default Base;
