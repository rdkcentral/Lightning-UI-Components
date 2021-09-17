/**
* Copyright 2020 Comcast Cable Communications Management, LLC
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
import TestRenderer from '../../test/lightning-test-renderer';
import withTransitions from '.';

describe('withTransitions', () => {
  class Example extends lng.Component {};
  let WithTransitions;

  beforeEach(() => {
    WithTransitions = withTransitions(Example);
  });

  afterEach(() => {
    WithTransitions = null;
  });

  it('returns an extended component', () => {
    expect(WithTransitions.__proto__).toBe(Example)
  });

  it('sets transition on the template', () => {
    const expectedTransition = expect.objectContaining({
      delay: 0,
      duration: 0.2,
      timingFunction: 'cubic-bezier(0.20, 1.00, 0.52, 1.00)'
    });
    const template = WithTransitions._template();

    expect(template.transitions).toBeDefined();
    expect(template.transitions.alpha).toEqual(expectedTransition);
    expect(template.transitions.color).toEqual(expectedTransition);
    expect(template.transitions.h).toEqual(expectedTransition);
    expect(template.transitions.scale).toEqual(expectedTransition);
    expect(template.transitions.w).toEqual(expectedTransition);
    expect(template.transitions.x).toEqual(expectedTransition);
    expect(template.transitions.y).toEqual(expectedTransition);
  });
  it('sets transitions on children', () => {
    const expectedTransition = expect.objectContaining({
      delay: 0,
      duration: 0.2,
      timingFunction: 'cubic-bezier(0.20, 1.00, 0.52, 1.00)'
    });
    const component = TestRenderer.create({
      Component: {
        type: WithTransitions,
        Child: { type: lng.Component }
      }
    }).getInstance();
    const child = component.tag('Child');

    expect(child._transitions).toBeDefined();
    expect(child._transitions.alpha).toEqual(expectedTransition);
    expect(child._transitions.color).toEqual(expectedTransition);
    expect(child._transitions.h).toEqual(expectedTransition);
    expect(child._transitions.scale).toEqual(expectedTransition);
    expect(child._transitions.w).toEqual(expectedTransition);
    expect(child._transitions.x).toEqual(expectedTransition);
    expect(child._transitions.y).toEqual(expectedTransition);
  });

  it('sets transitions on sub-children', () => {
    const expectedTransition = expect.objectContaining({
      delay: 0,
      duration: 0.2,
      timingFunction: 'cubic-bezier(0.20, 1.00, 0.52, 1.00)'
    });
    const component = TestRenderer.create({
      Component: {
        type: WithTransitions,
        Child: {
          type: lng.Component,
          children: [
            { type: lng.Component },
            { type: lng.Component },
            { type: lng.Component }
          ]
        }
      }
    }).getInstance();
    const subChildren = component.tag('Child').children;

    subChildren.forEach(child => {
      expect(child._transitions).toBeDefined();
      expect(child._transitions.alpha).toEqual(expectedTransition);
      expect(child._transitions.color).toEqual(expectedTransition);
      expect(child._transitions.h).toEqual(expectedTransition);
      expect(child._transitions.scale).toEqual(expectedTransition);
      expect(child._transitions.w).toEqual(expectedTransition);
      expect(child._transitions.x).toEqual(expectedTransition);
      expect(child._transitions.y).toEqual(expectedTransition);
    });
  });

  it('supports options', () => {
    WithTransitions = withTransitions(Example, {
      properties: ['alpha'],
      transition: { delay: 0.2 }
    });

    const expectedTransition = expect.objectContaining({
      delay: .2,
      duration: 0.2,
      timingFunction: 'cubic-bezier(0.20, 1.00, 0.52, 1.00)'
    });
    const template = WithTransitions._template();

    expect(template.transitions.alpha).toEqual(expectedTransition);
    expect(template.transitions.x).not.toBeDefined();
  });

  it('does not override explicitly set child transitions', () => {
    const expectedTransition = expect.objectContaining({
      delay: 0,
      duration: 0.2,
      timingFunction: 'ease'
    });
    const component = TestRenderer.create({
      Component: {
        type: WithTransitions,
        Child: {
          transitions: {
            x: { timingFunction: 'ease' }
          }
        }
      }
    }).getInstance();
    const child = component.tag('Child');

    expect(child._transitions).toBeDefined();
    expect(child._transitions.x).toEqual(expectedTransition);
  });

  it('multiple components can safely be wrapped', () => {
    const Child1 = withTransitions(Example, {
      properties: ['x'],
      transition: { duration: 1 }
    });
    const Child2 = withTransitions(Example, {
      properties: ['y'],
      transition: { delay: 1 }
    });

    const globalTransition = expect.objectContaining({
      delay: 0,
      duration: 0.2,
      timingFunction: 'cubic-bezier(0.20, 1.00, 0.52, 1.00)'
    });
    const xTransition = expect.objectContaining({
      duration: 1,
    });
    const yTransition = expect.objectContaining({
      delay: 1
    });

    const component = TestRenderer.create({
      Component: {
        type: WithTransitions,
        Child1: { type: Child1 },
        Child2: { type: Child2 }
      }
    }).getInstance();
    const child1 = component.tag('Child1');
    const child2 = component.tag('Child2');

    expect(child1._transitions).toBeDefined();
    expect(child1._transitions.alpha).toEqual(globalTransition);
    expect(child1._transitions.x).toEqual(xTransition);

    expect(child2._transitions).toBeDefined();
    expect(child2._transitions.alpha).toEqual(globalTransition);
    expect(child2._transitions.y).toEqual(yTransition);
  });
});
