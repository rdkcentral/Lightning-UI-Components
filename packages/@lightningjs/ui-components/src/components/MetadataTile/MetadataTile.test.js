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
import MetadataTile from '.';

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
        spyOnMethods: ['_update', '_detailsLoaded', '_updateDetails']
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
    const details = 'Details';
    const description = 'Description';
    const logoTitle = 'Logo Title';
    metadataTile.patch({ title, details, logoTitle });
    testRenderer.forceAllUpdates();
    expect(metadataTile.announce).toEqual([title, details, logoTitle]);
    metadataTile.patch({ title, details: undefined, description, logoTitle });
    testRenderer.forceAllUpdates();
    expect(metadataTile.announce).toEqual([title, description, logoTitle]);
  });

  it('overrides the announce string', () => {
    const overrideString = 'Custom announce string';
    metadataTile.announce = overrideString;
    testRenderer.forceAllUpdates();
    expect(metadataTile.announce).toBe(overrideString);
  });

  it('hides details if description is provided', async () => {
    metadataTile.details = 'details';
    await metadataTile.__detailsLoadedpyPromise;
    testRenderer.forceAllUpdates();

    expect(metadataTile._Details.alpha).toBe(1);
    expect(metadataTile._Details.visible).toBe(true);
    metadataTile.description = 'description';
    await metadataTile.__updateDetailsSpyPromise;
    testRenderer.forceAllUpdates();

    expect(metadataTile._Details.alpha).toBe(0);
    expect(metadataTile._Details.visible).toBe(false);
    expect(metadataTile._DetailsWrapper.h).toBe(0);
  });

  it('should render details', async () => {
    const details = 'details text';
    expect(metadataTile._DetailsWrapper.h).toBe(0);
    metadataTile.details = details;
    await metadataTile.__detailsLoadedSpyPromise;
    testRenderer.forceAllUpdates();
    expect(metadataTile._Details.content).toBe(details);
    expect(metadataTile._DetailsWrapper.h).toBeGreaterThan(0);
    expect(metadataTile._DetailsWrapper.alpha).toBe(1);
  });
});
