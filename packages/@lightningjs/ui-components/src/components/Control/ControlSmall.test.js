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

import ControlSmall from './ControlSmall';
import { makeCreateComponent } from '@lightningjs/ui-components-test-utils';

import { base } from './ControlSmall.styles.js';
import baseTheme from '@lightningjs/ui-components-theme-base';

const createControlSmall = makeCreateComponent(ControlSmall);

describe('ControlSmall', () => {
  let controlSmall, testRenderer;

  beforeEach(() => {
    [controlSmall, testRenderer] = createControlSmall(
      { title: 'ControlSmall' },
      { spyOnMethods: ['_update'] }
    );
    testRenderer.update();
  });

  afterEach(() => {
    controlSmall = null;
    testRenderer = null;
  });

  it('should render', () => {
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('has a base theme', () => {
    expect(typeof base).toBe('function');
    expect(base(baseTheme)).toEqual(
      expect.objectContaining({
        height: expect.any(Number),
        logoStyle: expect.any(Object),
        radius: expect.any(Number),
        textStyle: expect.any(Object),
        minWidth: expect.any(Number)
      })
    );
  });

  it('renders the correct height from styles', () => {
    expect(controlSmall.h).toBe(
      controlSmall.style.textStyle.lineHeight + controlSmall.style.paddingY * 2
    );
  });

  it('renders the correct height if assigned a height', () => {
    const height = 50;
    controlSmall.h = height;
    expect(controlSmall.h).toBe(height);
  });

  it('renders the correct radius', async () => {
    expect(controlSmall.style.radius).toBe(
      Math.max(
        controlSmall.theme.radius.xl -
          (controlSmall.theme.spacer.md * 8 - controlSmall.style.h) / 2,
        0
      )
    );
  });

  it('renders the correct logo radius', async () => {
    expect(controlSmall.style.logoStyle.radius).toBe(
      Math.max(controlSmall.style.radius - controlSmall.style.paddingX / 2, 0)
    );
  });
});
