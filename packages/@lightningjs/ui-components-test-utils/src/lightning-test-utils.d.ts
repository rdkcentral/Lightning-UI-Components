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
import {
  default as TestRenderer,
  testRenderer
} from './lightning-test-renderer';

/**
 * nextTick
 */
export function nextTick(wait?: number): Promise<void>;

/**
 * fastForward
 */
export function fastForward(elements: lng.Element[]): void;

/**
 * makeCreateComponent
 */
declare namespace makeCreateComponent {
  export type Config = lng.Element.PatchTemplate;
  export interface DefaultOptions extends Partial<lng.Application.Options> {
    focused?: boolean;
    applicationW?: number;
    applicationH?: number;
    stage?: Partial<lng.Application.Options['stage']>;
  }

  export namespace createComponent {
    interface Options extends DefaultOptions {
      spyOnMethods?: string[];
    }

    type SpyOnMethodsPromises<T extends string[]> = {
      [K in T[number] as `_${K}SpyPromise`]: Promise<void>;
    };

    type SpyOnMethodsResolvers<T extends string[]> = {
      [K in T[number] as `_${K}SpyResolve`]: () => void;
    };

    type ComponentInstance<T extends string[]> = {
      [key: string]: unknown;
    } & lng.Component &
      SpyOnMethodsPromises<T> &
      SpyOnMethodsResolvers<T>;

    export type CreateComponent = (
      config: Config,
      options?: Options
    ) => [
      ComponentInstance<NonNullable<(typeof options)['spyOnMethods']>>,
      testRenderer
    ];
  }
}

export function makeCreateComponent(
  type: lng.Component.Constructor,
  defaultConfig?: makeCreateComponent.Config,
  defaultOptions?: makeCreateComponent.DefaultOptions
): makeCreateComponent.createComponent.CreateComponent;

/**
 * completeAnimation
 */
export function completeAnimation(
  element: lng.Element,
  transitionProperties?: string | string[]
): Promise<void>;

/**
 * mockContext
 */
// TODO: no TS def for Context available
export type context = Record<string, unknown>;

export function mockContext(
  context: context,
  mockKeyMetricsHandler: jest.Mock | ((...args: unknown[]) => unknown)
): context;

/**
 * resetContext
 */
export function resetContext(): void;

/**
 * exports
 */
export { TestRenderer };

declare namespace _default {
  export { fastForward };
  export { makeCreateComponent };
  export { nextTick };
  export { completeAnimation };
}
export default _default;
