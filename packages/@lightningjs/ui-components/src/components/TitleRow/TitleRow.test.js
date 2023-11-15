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

import lng from '@lightningjs/core';
import { makeCreateComponent } from '@lightningjs/ui-components-test-utils';
import TitleRow from './TitleRow';

const items = Array.from({ length: 7 }).map(() => ({
  type: lng.Component,
  w: 300,
  h: 200
}));

const createComponent = makeCreateComponent(TitleRow);

describe('TitleRow', () => {
  let titleRow, testRenderer;

  beforeEach(() => {
    [titleRow, testRenderer] = createComponent({
      items
    });
  });

  it('renders', () => {
    [titleRow, testRenderer] = createComponent({
      title: 'Title',
      items
    });
    testRenderer.forceAllUpdates();
    const tree = testRenderer.toJSON(2);

    expect(tree).toMatchSnapshot();
  });

  it('sets the announce string to the row title text', () => {
    const title = 'Row Title';
    titleRow.title = title;
    testRenderer.forceAllUpdates();
    expect(titleRow.announce).toBe(title);
  });

  it('overrides the announce string', () => {
    const overrideString = 'Custom announce string';
    titleRow.announce = overrideString;
    testRenderer.forceAllUpdates();
    expect(titleRow.announce).toBe(overrideString);
  });

  describe('updating the title', () => {
    it('should add and update a title', () => {
      const titleA = 'Title';
      const titleB = 'New Title';

      expect(titleRow._Title.content).toBe('');

      titleRow.title = titleA;

      testRenderer.forceAllUpdates();

      expect(titleRow._Title.content).toBe(titleA);

      titleRow.title = titleB;
      testRenderer.forceAllUpdates();

      expect(titleRow._Title.content).toBe(titleB);
    });
    it('should remove a title', () => {
      const title = 'Title';
      titleRow.title = title;
      testRenderer.forceAllUpdates();
      expect(titleRow._Title.content).toBe(title);
      titleRow.title = undefined;
      testRenderer.forceAllUpdates();
      expect(titleRow._Title).toMatchObject({
        h: 0,
        content: ''
      });
    });
    it('should update the row placement after the title has loaded', async () => {
      [titleRow, testRenderer] = createComponent(
        {
          title: 'Title',
          items
        },
        {
          spyOnMethods: ['_titleLoaded']
        }
      );
      expect(titleRow._Items.y).toBe(titleRow.style.titleMarginBottom);

      await titleRow.__titleLoadedSpyPromise;

      expect(titleRow._Items.y).toBe(
        titleRow._Title.finalH + titleRow.style.titleMarginBottom
      );
    });
  });

  it('should by default resize the TitleRow to the total height of its contents', async () => {
    [titleRow, testRenderer] = createComponent(
      {
        title: 'Title',
        items
      },
      { spyOnMethods: ['_update', '_autoResize'] }
    );

    await titleRow._updateSpyPromise;
    await titleRow.__autoResizeSpyPromise;

    expect(titleRow.h).toBe(titleRow.Items.y + titleRow.Items.h);
  });

  it('should allow setting the height manually', async () => {
    const h = 100;
    [titleRow, testRenderer] = createComponent(
      {
        title: 'Title',
        items,
        autoResizeHeight: false,
        h
      },
      { spyOnMethods: ['_update', '_autoResize'] }
    );

    await titleRow._updateSpyPromise;
    await titleRow.__autoResizeSpyPromise;

    expect(titleRow.h).toBe(h);
  });
});
