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
import { jest } from '@jest/globals';
import type {
  default as TestRenderer,
  testRenderer
} from './lightning-test-renderer.d.ts';

export function nextTick(wait?: number): Promise<undefined>;

export function fastForward(elements: lng.Element[]): void;

type makeCreateComponentConfig = Record<string, any>;
interface makeCreateComponentDefaultOptions {
  applicationW?: number;
  applicationH?: number;
  [key: string]: any;
}
interface makeCreateComponentOptions extends makeCreateComponentDefaultOptions {
  spyOnMethods?: string[];
}
type createComponent = (
  config: makeCreateComponentConfig,
  options: makeCreateComponentOptions
) => [lng.Element, testRenderer];
export function makeCreateComponent(
  type: lng.Component,
  defaultConfig?: makeCreateComponentConfig,
  defaultOptions?: makeCreateComponentDefaultOptions
): createComponent;

export function completeAnimation(
  element: lng.Element,
  transitionProperties?: string | string[]
): Promise<undefined>;

import { Mock } from 'jest-mock';

export function mockContext(
  context: any, // TODO: no TS def for Context available
  mockKeyMetricsHandler?: jest.Mock<any>
): any;

export function resetContext(): void;

export { TestRenderer };

declare namespace _default {
  export { fastForward };
  export { makeCreateComponent };
  export { nextTick };
  export { completeAnimation };
}
export default _default;
