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

import { makeCreateComponent } from '@lightningjs/ui-test-utils';
import Tab from './Tab.js';

const iconPath = '../../assets/images/ic_lightning_white_32.png';

const createComponent = makeCreateComponent(Tab);

describe('Tab', () => {
  let tab, testRenderer;

  beforeEach(async () => {
    [tab, testRenderer] = createComponent({}, { spyOnMethods: ['_update'] });
    await tab.__updateSpyPromise;
  });

  it('renders', async () => {
    [tab, testRenderer] = createComponent(
      {
        title: 'Tab',
        icon: iconPath
      },
      {
        spyOnMethods: ['_update']
      }
    );

    await tab.__updateSpyPromise;

    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('sets the announce string to the title string', () => {
    const title = 'Tab 1';
    tab.title = title;
    testRenderer.forceAllUpdates();
    expect(tab.announce).toBe(title);
  });

  it('overrides the announce string', () => {
    const overrideString = 'Custom announce string';
    tab.announce = overrideString;
    testRenderer.forceAllUpdates();
    expect(tab.announce).toBe(overrideString);
  });

  it('should render a tab with just an icon', async () => {
    expect(tab._Icon).not.toBeDefined();

    tab.icon = iconPath;
    await tab.__updateSpyPromise;

    expect(tab._Icon).toBeDefined();
  });

  it('should render a tab with just text', async () => {
    const title = 'Tab';
    expect(tab._Text.content).toBeUndefined();

    tab.title = title;
    await tab.__updateSpyPromise;

    expect(tab._Text.content).toBe(title);
    expect(tab._Text.mountX).toBe(0.5);
  });

  it('should render a tab with an icon and text', async () => {
    const title = 'Tab';

    tab.icon = iconPath;
    tab.title = title;
    await tab.__updateSpyPromise;

    expect(tab._Icon).toBeDefined();
    expect(tab._Text.content).toBe(title);
    expect(tab._Text.mountX).toBe(0);
  });

  it('should remove icon and text from a tab when not defined', async () => {
    const title = 'Tab';

    tab.icon = iconPath;
    tab.title = title;
    await tab.__updateSpyPromise;

    expect(tab._Icon).toBeDefined();
    expect(tab._Text.content).toBe(title);
    expect(tab.w).toBeGreaterThan(0);
    expect(tab.h).toBeGreaterThan(0);

    tab.icon = undefined;
    tab.title = undefined;
    await tab.__updateSpyPromise;

    expect(tab._Icon).toBeUndefined();
    expect(tab._Text.content).toBe('');
    expect(tab.w).toBe(0);
    expect(tab.h).toBe(0);
  });
});
