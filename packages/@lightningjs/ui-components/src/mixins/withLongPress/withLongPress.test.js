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

import { jest } from '@jest/globals';
import { makeCreateComponent } from '@lightningjs/ui-components-test-utils';
import Tile from '../../components/Tile';
import withLongPress from '.';
import { nextTick } from '@lightningjs/ui-components-test-utils';

const createComponent = makeCreateComponent(
  withLongPress(Tile),
  {
    src: 'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg',
    w: 320,
    h: 180,
    threshold: 1000,
    mode: 'focused'
  },
  { focused: true },
  { spyOnMethods: ['_handleKey'] }
);

describe('withLongPress', () => {
  let withLongPressTile, testRenderer;

  beforeEach(() => {
    [withLongPressTile, testRenderer] = createComponent({
      spyOnMethods: ['fireAncestors']
    });
  });

  afterEach(() => {
    withLongPressTile = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('should fireAncestors $longPressHit after threshold', async () => {
    jest.spyOn(withLongPressTile, 'fireAncestors');
    // adding in two keypresses to simulate a long press
    testRenderer.keyPress('Enter');
    await nextTick(1500);
    testRenderer.keyPress('Enter');
    expect(withLongPressTile.fireAncestors).toHaveBeenCalledWith(
      '$longPressHit',
      'Enter'
    );
  });

  it('should not fireAncestors $longPressHit before threshold', async () => {
    jest.spyOn(withLongPressTile, 'fireAncestors');
    withLongPressTile.threshold = 2000; // 2 seconds
    testRenderer.keyPress('Enter');
    await nextTick(1000);
    testRenderer.keyPress('Enter');

    expect(withLongPressTile.fireAncestors).not.toHaveBeenCalled();
  });

  it('should only fireAncestors $longPressHit once if executeOnce is true', async () => {
    jest.spyOn(withLongPressTile, 'fireAncestors');
    withLongPressTile.threshold = 1000; // 1 second
    withLongPressTile.continuousExecution = false;
    testRenderer.keyPress('Enter');
    await nextTick(1500);
    testRenderer.keyPress('Enter');
    await nextTick(2500);
    testRenderer.keyPress('Enter');
    expect(withLongPressTile.fireAncestors).toHaveBeenCalledTimes(1);
    expect(withLongPressTile.fireAncestors).toHaveBeenCalledWith(
      '$longPressHit',
      'Enter'
    );
  });

  it('should reset hasExecuted and fireAncestors $longPressEnd on key release', async () => {
    withLongPressTile.threshold = 1000; // 1 second
    withLongPressTile.continuousExecution = false;
    jest.spyOn(withLongPressTile, 'fireAncestors');
    testRenderer.keyPress('Enter');
    await nextTick(1500);
    testRenderer.keyPress('Enter');
    expect(withLongPressTile.fireAncestors).toHaveBeenNthCalledWith(
      1,
      '$longPressHit',
      'Enter'
    );

    testRenderer.keyRelease('Enter');
    await nextTick(2500); // 2.5 seconds later
    testRenderer.keyPress('Enter');
    expect(withLongPressTile.fireAncestors).toHaveBeenCalledTimes(2);
    expect(withLongPressTile.fireAncestors).toHaveBeenNthCalledWith(
      2,
      '$longPressEnd',
      'Enter'
    );
  });
});
