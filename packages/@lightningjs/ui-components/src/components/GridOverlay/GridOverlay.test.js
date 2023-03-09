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
import GridOverlay from '.';
import { getWidthByColumnSpan } from '../../utils';

const createGridOverlay = makeCreateComponent(GridOverlay);

describe('GridOverlay', () => {
  let gridOverlay, testRenderer;

  beforeEach(() => {
    [gridOverlay, testRenderer] = createGridOverlay(
      {},
      { spyOnMethods: ['_update'] }
    );
  });

  afterEach(() => {
    gridOverlay = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('utilizes theme layout values', async () => {
    await gridOverlay.__updateSpyPromise;

    expect(gridOverlay._Columns.items[0].w).toBe(
      getWidthByColumnSpan(gridOverlay.theme, 1)
    );
    expect(gridOverlay._MarginLeft.w).toBe(gridOverlay._marginX);
    expect(gridOverlay._MarginTop.w).toBe(gridOverlay._marginY);
    expect(gridOverlay._SafeLeft.w).toBe(gridOverlay._safe);
    expect(gridOverlay._SafeTop.w).toBe(gridOverlay._safe);
    expect(gridOverlay._GutterHorizontal.w).toBe(gridOverlay._gutterY);
  });

  it('toggles column spans', async () => {
    await gridOverlay.__updateSpyPromise;
    expect(gridOverlay.showColumns).toBe(true);
    expect(gridOverlay._Columns.transition('alpha').targetValue).toBe(1);

    gridOverlay.showColumns = false;
    await gridOverlay.__updateSpyPromise;
    expect(gridOverlay.showColumns).toBe(false);
    expect(gridOverlay._Columns.transition('alpha').targetValue).toBe(0);
  });

  it('toggles margin rulers', async () => {
    await gridOverlay.__updateSpyPromise;
    expect(gridOverlay.showMargins).toBe(true);
    expect(gridOverlay._Margins.transition('alpha').targetValue).toBe(1);

    gridOverlay.showMargins = false;
    await gridOverlay.__updateSpyPromise;
    expect(gridOverlay.showMargins).toBe(false);
    expect(gridOverlay._Margins.transition('alpha').targetValue).toBe(0);
  });

  it('toggles safe rulers', async () => {
    await gridOverlay.__updateSpyPromise;
    expect(gridOverlay.showSafe).toBe(true);
    expect(gridOverlay._Safe.transition('alpha').targetValue).toBe(1);

    gridOverlay.showSafe = false;
    await gridOverlay.__updateSpyPromise;
    expect(gridOverlay.showSafe).toBe(false);
    expect(gridOverlay._Safe.transition('alpha').targetValue).toBe(0);
  });

  it('toggles gutters rulers', async () => {
    await gridOverlay.__updateSpyPromise;
    expect(gridOverlay.showGutters).toBe(true);
    expect(gridOverlay._Gutters.transition('alpha').targetValue).toBe(1);

    gridOverlay.showGutters = false;
    await gridOverlay.__updateSpyPromise;
    expect(gridOverlay.showGutters).toBe(false);
    expect(gridOverlay._Gutters.transition('alpha').targetValue).toBe(0);
  });

  it('toggles text box', async () => {
    await gridOverlay.__updateSpyPromise;
    expect(gridOverlay.showText).toBe(true);
    expect(gridOverlay._TextPanel.transition('alpha').targetValue).toBe(1);

    gridOverlay.showText = false;
    await gridOverlay.__updateSpyPromise;
    expect(gridOverlay.showText).toBe(false);
    expect(gridOverlay._TextPanel.transition('alpha').targetValue).toBe(0);
  });
});
