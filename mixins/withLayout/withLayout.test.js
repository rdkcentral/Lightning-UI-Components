/**
 * Copyright 2021 Comcast Cable Communications Management, LLC
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

import TestUtils from '../../test/lightning-test-utils';
import Button from '../../elements/Button';
import { SCREEN } from '../../Styles/Layout';
import withLayout from '.';

const createButtonWithLayout = props =>
  TestUtils.makeCreateComponent(withLayout(Button))(props);

describe('withLayout', () => {
  let buttonWithLayout, testRenderer;
  const w = 320;
  const h = 180;
  const ratioY = 9;
  const ratioX = 16;
  const upCount = 5;

  beforeEach(() => {
    [buttonWithLayout, testRenderer] = createButtonWithLayout();
  });
  afterEach(() => {
    buttonWithLayout = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('should explicity set height, width', () => {
    buttonWithLayout.itemLayout = { h, w };
    testRenderer.update();
    expect(buttonWithLayout.h).toBe(h);
    expect(buttonWithLayout.w).toBe(w);
    expect(buttonWithLayout.itemLayout).toStrictEqual({ h: 180, w: 320 });
  });

  it('should set width from height and screen dimension', () => {
    buttonWithLayout.itemLayout = { h, ratioX, ratioY };
    testRenderer.update();
    expect(buttonWithLayout.h).toBe(h);
    expect(buttonWithLayout.w).toBe((h * 16) / 9);
  });

  it('should set width from height and upCount', () => {
    buttonWithLayout.itemLayout = { h, upCount };
    testRenderer.update();
    expect(buttonWithLayout.w).toBeDefined();
    expect(buttonWithLayout.w).not.toBe(0);
  });

  it('should set height and width from screen dimensions and upCount', () => {
    buttonWithLayout.itemLayout = { ratioX, ratioY, upCount };
    testRenderer.update();
    expect(buttonWithLayout.w).toBeDefined();
    expect(buttonWithLayout.w).not.toBe(0);
  });

  it('should set height from width and default ratio', () => {
    buttonWithLayout.itemLayout = { w };
    testRenderer.update();
    expect(buttonWithLayout.h).toBeDefined();
    expect(buttonWithLayout.h).toBe((w * SCREEN.h) / SCREEN.w);
  });

  it('should set width from height and default ratio', async () => {
    buttonWithLayout.itemLayout = { h };
    testRenderer.update();
    expect(buttonWithLayout.w).toBeDefined();
    expect(buttonWithLayout.w).toBe((h * SCREEN.w) / SCREEN.h);
  });
});
