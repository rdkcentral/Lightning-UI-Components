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
 * Creates a Promise that resolves after a defined amount of time. If no amount of time is specified, the Promise will resolve immediately.
 * @param {number} [wait=0] Number of milliseconds before the returned Promise is resolved.
 * @returns {Promise} Promise that is resolved after the wait time has elapsed.
 */
export function nextTick(wait?: number): Promise<void>;

/**
 * Force all running Lightning Transitions on one or more Lightning Elements to finish and update the transitioning property to its target value immediately.
 * @param {lng.Element|lng.Element[]} elements Element(s) with transitioning property values.
 */
export function fastForward(elements: lng.Element | lng.Element[]): void;

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

/**
 * Returns a function, referred to as a createComponent function, which is used to generate an instance of a component to run unit test cases against.
 * @param {lng.Component} type Component to generate an instance of. {@link lng.Component.Constructor}
 * @param {object} [defaultConfig={}] Properties that should be applied to the component by default. {@link makeCreateComponent.Config}
 * @param {object} [defaultOptions={}] Default options used when creating the component instance (these options are passed to the TestRenderer.create function) {@link makeCreateComponent.DefaultOptions}
 * @returns {object} A createComponent function.
 */
export function makeCreateComponent(
  type: lng.Component.Constructor,
  defaultConfig?: makeCreateComponent.Config,
  defaultOptions?: makeCreateComponent.DefaultOptions
): makeCreateComponent.createComponent.CreateComponent;

/**
 * Returns a Promise that resolves once all animating properties have updated to their target value(s).
 * @param {Lightning.Element} element Element with properties that transition value changes {@link lng.Element}
 * @param {string | string[]} [transitionProperties=[]] Property name(s) that transition value changes on component.
 * @returns {Promise} Promise that resolves once all animating properties have updated to their target value(s).
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
