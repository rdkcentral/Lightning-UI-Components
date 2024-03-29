﻿/**
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

import { makeCreateComponent } from '@lightningjs/ui-components-test-utils';
import Shadow from '.';

const createComponent = makeCreateComponent(Shadow);

const baseStyle = {
  offsetX: 0,
  offsetY: 32,
  blur: 32,
  spread: -8,
  alpha: 0.6,
  radius: 16,
  color: 0xff000000,
  maxOffsetY: 32,
  maxOffsetX: 0
};

describe('Shadow', () => {
  let shadow, testRenderer;

  beforeEach(() => {
    [shadow, testRenderer] = createComponent({
      w: 200,
      h: 200,
      style: {
        ...baseStyle
      }
    });
  });

  afterEach(() => {
    shadow = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with masked shadow', () => {
    [shadow, testRenderer] = createComponent({
      w: 200,
      h: 200,
      maskShadow: true
    });
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('starts the shadow at the component base size', () => {
    const width = 100;
    const height = 150;
    [shadow, testRenderer] = createComponent({
      w: width,
      h: height,
      style: {
        ...baseStyle,
        offsetX: 0,
        offsetY: 0,
        blur: 0,
        spread: 0,
        maxOffsetY: 0,
        maxOffsetX: 0
      }
    });

    expect(shadow.w).toEqual(width);
    expect(shadow.h).toEqual(height);
    expect(shadow._Frame.w).toEqual(width);
    expect(shadow._Frame.h).toEqual(height);
  });

  it('adds the blur style value to shadow frame size', () => {
    const width = 100;
    const height = 150;
    const blur = 10;

    [shadow, testRenderer] = createComponent({
      w: width,
      h: height,
      style: {
        ...baseStyle,
        offsetX: 0,
        offsetY: 0,
        blur: blur,
        spread: 0,
        maxOffsetY: 0,
        maxOffsetX: 0
      }
    });

    expect(shadow.w).toEqual(width);
    expect(shadow.h).toEqual(height);
    expect(shadow._Frame.w).toEqual(width + blur * 4);
    expect(shadow._Frame.h).toEqual(height + blur * 4);
  });

  it('adds the spread style value to shadow frame size', () => {
    const width = 100;
    const height = 150;
    const spread = 10;

    [shadow, testRenderer] = createComponent({
      w: width,
      h: height,
      style: {
        ...baseStyle,
        offsetX: 0,
        offsetY: 0,
        blur: 0,
        spread: spread,
        maxOffsetY: 0,
        maxOffsetX: 0
      }
    });

    expect(shadow.w).toEqual(width);
    expect(shadow.h).toEqual(height);
    expect(shadow._Frame.w).toEqual(width + spread * 2);
    expect(shadow._Frame.h).toEqual(height + spread * 2);
  });

  it('adds all sizing values to the shadow frame size ', () => {
    const width = 100;
    const height = 150;
    const spread = 10;
    const blur = 15;

    [shadow, testRenderer] = createComponent({
      w: width,
      h: height,
      style: {
        ...baseStyle,
        offsetX: 0,
        offsetY: 0,
        blur: blur,
        spread: spread,
        maxOffsetY: 0,
        maxOffsetX: 0
      }
    });

    expect(shadow.w).toEqual(width);
    expect(shadow.h).toEqual(height);
    expect(shadow._Frame.w).toEqual(width + 2 * (spread + blur * 2));
    expect(shadow._Frame.h).toEqual(height + 2 * (spread + blur * 2));
  });

  it('updates the shadow size', () => {
    const width = 400;
    const height = 450;
    const spread = 10;
    const blur = 15;

    shadow.patch({
      w: width,
      h: height,
      style: {
        ...baseStyle,
        offsetX: 0,
        offsetY: 0,
        blur: blur,
        spread: spread,
        maxOffsetY: 0,
        maxOffsetX: 0
      }
    });
    testRenderer.forceAllUpdates();
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
    expect(shadow.w).toEqual(width);
    expect(shadow.h).toEqual(height);
    expect(shadow._Frame.w).toEqual(width + 2 * (spread + blur * 2));
    expect(shadow._Frame.h).toEqual(height + 2 * (spread + blur * 2));
  });
});
