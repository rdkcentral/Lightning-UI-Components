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

import { makeCreateComponent } from '@lightningjs/ui-components-test-utils';
import withLayout from '.';
import Tile from '../../components/Tile';
import context from '../../globals/context';
import { jest } from '@jest/globals';

const createTileWithLayout = props =>
  makeCreateComponent(
    class TileExtended extends withLayout(Tile) {
      static get _componentName() {
        return 'TileExtended';
      }
    }
  )(props);

describe('withLayout', () => {
  let tileWithLayout, testRenderer;

  const w = 320;
  const h = 180;
  const ratioY = 9;
  const ratioX = 16;
  const upCount = 5;

  beforeEach(() => {
    [tileWithLayout, testRenderer] = createTileWithLayout();
  });

  afterEach(() => {
    tileWithLayout = null;
    testRenderer = null;
    jest.restoreAllMocks();
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('should explicity set height, width', () => {
    tileWithLayout.itemLayout = { h, w };
    testRenderer.update();
    expect(tileWithLayout.h).toBe(h);
    expect(tileWithLayout.w).toBe(w);
    expect(tileWithLayout.itemLayout).toStrictEqual({ h: 180, w: 320 });
  });

  it('should set width from height and screen dimension', () => {
    tileWithLayout.itemLayout = { h, ratioX, ratioY };
    testRenderer.update();
    expect(tileWithLayout.h).toBe(h);
    expect(tileWithLayout.w).toBe((h * 16) / 9);
  });

  it('should set width from height and upCount', () => {
    tileWithLayout.itemLayout = { h, upCount };
    testRenderer.update();
    expect(tileWithLayout.w).toBeDefined();
    expect(tileWithLayout.w).not.toBe(0);
  });

  it('should set height and width from screen dimensions and upCount', () => {
    tileWithLayout.itemLayout = { ratioX, ratioY, upCount };
    testRenderer.update();
    expect(tileWithLayout.w).toBeDefined();
    expect(tileWithLayout.w).not.toBe(0);
  });

  it('should set height from width and default ratio', () => {
    tileWithLayout.itemLayout = { w };
    testRenderer.update();
    expect(tileWithLayout.h).toBeDefined();
    expect(tileWithLayout.h).toBe(
      (w * context.theme.layout.screenH) / context.theme.layout.screenW
    );
  });

  it('should set width from height and default ratio', () => {
    tileWithLayout.itemLayout = { h };
    testRenderer.update();
    expect(tileWithLayout.w).toBeDefined();
    expect(tileWithLayout.w).toBe(
      (h * context.theme.layout.screenW) / context.theme.layout.screenH
    );
  });

  it('should throw a context error if a invalid value is used for ratioX', () => {
    const errLog = jest.spyOn(context, 'error');
    tileWithLayout.itemLayout = { ratioX: -20, ratioY, h, upCount };
    testRenderer.update();
    expect(errLog).toHaveBeenCalled();
    expect(errLog).toHaveBeenCalledWith(
      'itemLayout for TileExtended received an invalid value of -20 for ratioX'
    );
  });

  it('should throw a context error if a invalid value is used for ratioY', () => {
    const errLog = jest.spyOn(context, 'error');
    tileWithLayout.itemLayout = { ratioX, ratioY: -8, h, upCount };
    testRenderer.update();
    expect(errLog).toHaveBeenCalled();
    expect(errLog).toHaveBeenCalledWith(
      'itemLayout for TileExtended received an invalid value of -8 for ratioY'
    );
  });

  it('should throw a context error if an invalid value is used for upCount', () => {
    const errLog = jest.spyOn(context, 'error');
    tileWithLayout.itemLayout = { ratioX, ratioY, h, upCount: -2 };
    testRenderer.update();
    expect(errLog).toHaveBeenCalled();
    expect(errLog).toHaveBeenCalledWith(
      'itemLayout for TileExtended received an invalid value of -2 for upCount'
    );
  });
});
