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
import { makeCreateComponent } from '@lightningjs/ui-components-test-utils';
import { Arrow, Circle } from '.';

const createTexture = makeCreateComponent(lng.Component);

describe('Circle', () => {
  let circle, component, testRenderer;

  beforeEach(() => {
    [component, testRenderer] = createTexture({
      texture: {
        type: Circle,
        radius: 10,
        fill: true
      }
    });
    circle = component.texture;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('has props', () => {
    expect(circle.fill).toBe(true);
    expect(circle.radius).toBe(10);
    expect(circle.color).toBe('rgb(0,0,0)');
    expect(circle.stroke).toBe(false);
    expect(circle.strokeColor).toBe('rgb(0,0,0)');
    expect(circle.strokeWidth).toBe(1);
  });
});

describe('Arrow', () => {
  let arrow, component, testRenderer;

  beforeEach(() => {
    [component, testRenderer] = createTexture({
      texture: {
        type: Arrow,
        w: 10,
        h: 10,
        direction: 'right'
      }
    });
    arrow = component.texture;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('has props', () => {
    expect(arrow.w).toBe(10);
    expect(arrow.h).toBe(10);
    expect(arrow.direction).toBe('right');
  });
});
