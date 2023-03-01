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
import MetadataTile from './index.js';

const createComponent = makeCreateComponent(MetadataTile, {
  w: 400,
  h: 300
});

describe('MetadataTile', () => {
  let metadataTile, testRenderer;

  beforeEach(() => {
    [metadataTile, testRenderer] = createComponent(
      {},
      {
        spyOnMethods: ['_update', '_subtitleLoaded']
      }
    );
  });
  afterEach(() => {
    metadataTile = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('sets the announce string to the appropriate text content status', () => {
    const title = 'Title';
    const subtitle = 'Subtitle';
    const description = 'Description';
    const logoTitle = 'Logo Title';
    metadataTile.patch({ title, subtitle, logoTitle });
    testRenderer.forceAllUpdates();
    expect(metadataTile.announce).toEqual([title, subtitle, logoTitle]);
    metadataTile.patch({ title, subtitle: undefined, description, logoTitle });
    testRenderer.forceAllUpdates();
    expect(metadataTile.announce).toEqual([title, description, logoTitle]);
  });

  it('overrides the announce string', () => {
    const overrideString = 'Custom announce string';
    metadataTile.announce = overrideString;
    testRenderer.forceAllUpdates();
    expect(metadataTile.announce).toBe(overrideString);
  });

  it('hides subtitle if description is provided', async () => {
    metadataTile.subtitle = 'subtitle';
    await metadataTile.__updateSpyPromise;
    expect(metadataTile._Subtitle.alpha).toBe(1);
    expect(metadataTile._Subtitle.visible).toBe(true);
    metadataTile.description = 'description';
    await metadataTile.__updateSpyPromise;
    expect(metadataTile._Subtitle.alpha).toBe(0);
    expect(metadataTile._Subtitle.visible).toBe(false);
    expect(metadataTile._SubtitleWrapper.h).toBe(0);
  });

  it('should render a subtitle', async () => {
    const subtitle = 'subtitle text';
    expect(metadataTile._SubtitleWrapper.h).toBe(0);
    metadataTile.subtitle = subtitle;
    await metadataTile.__subtitleLoadedSpyPromise;
    testRenderer.forceAllUpdates();
    expect(metadataTile._Subtitle.content).toBe(subtitle);
    expect(metadataTile._SubtitleWrapper.h).toBeGreaterThan(0);
    expect(metadataTile._SubtitleWrapper.alpha).toBe(1);
  });
});
