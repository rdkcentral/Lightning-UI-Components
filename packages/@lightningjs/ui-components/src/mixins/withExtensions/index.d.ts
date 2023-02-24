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

export interface WithExtensions {
  get _withExtensionsApplied(): boolean;
  get _prototypeChain(): Set<string>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get _extensions(): Record<string, any>[];
  get _componentExtensions(): unknown[];
  get _extensionsApplied(): boolean;

  _resetComponent(): void;
  _calculateComponentExtensionLength(): number;
  _createExtension(): void;
  _createExtensionClass(): unknown;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _createExtensionAliases(obj: Record<string, any>): object;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _setComponentAliases(aliasObj: Record<string, any>): void;
}

export interface WithExtensionsConstructor {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  new (...args: any[]): WithExtensions;
}

export default function withExtensions<
  BaseType extends lng.Component.Constructor // use this instead of lng.Component for BaseType in mixins
>(base: BaseType): BaseType & WithExtensionsConstructor;
