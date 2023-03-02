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

import { pathToDataURI, makeCreateComponent } from '@lightningjs/ui-components-test-utils';
import CardContent from './CardContent';
import { Tile } from '@lightningjs/ui-components';

const icon = pathToDataURI('./src/assets/images/ic_lightning_white_32.png');

const createComponent = makeCreateComponent(CardContent);

describe('CardContent', () => {
  // eslint-disable-next-line no-unused-vars
  let cardContent, testRenderer;

  beforeEach(() => {
    [cardContent, testRenderer] = createComponent();
  });
  afterEach(() => {
    cardContent = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('sets the announce string to the metadata text from both the metadata component on the right and the tile on the left', () => {
    const title = 'Title';
    const description = 'Description';
    const details = 'Details';
    const logoAnnounce = 'Lightning';
    const providers = Array(5).fill({
      icon: 'test.png',
      announce: logoAnnounce
    });
    const badge = { title: 'HD' };
    const label = { title: 'Live' };
    const progressBar = { progress: 0.5 };
    cardContent.patch({
      metadata: {
        title,
        description,
        details,
        provider: { providers, visibleCount: 3 }
      },
      tile: {
        badge,
        label,
        progressBar
      }
    });
    testRenderer.forceAllUpdates();
    expect(cardContent.announce).toEqual([
      [title, description, details, [...Array(3).fill(logoAnnounce), '+2']],
      [undefined, badge.title, label.title, `${progressBar.progress * 100}%`]
    ]);
  });

  it('overrides the announce string', () => {
    const overrideString = 'Custom announce string';
    cardContent.announce = overrideString;
    testRenderer.forceAllUpdates();
    expect(cardContent.announce).toBe(overrideString);
  });

  it('creates Tile', () => {
    [cardContent, testRenderer] = createComponent({ src: icon });
    expect(cardContent._Tile.type).toBe(Tile);
  });

  it('shows Tile and Metadata when shouldCollapse is false', () => {
    cardContent.shouldCollapse = false;

    cardContent.collapseToMetadata = false;
    cardContent.mode = 'unfocused';
    testRenderer.forceAllUpdates();
    expect(cardContent._Tile.alpha).toBe(1);
    expect(cardContent._Metadata.alpha).toBe(1);
    cardContent.mode = 'disabled';
    testRenderer.forceAllUpdates();
    expect(cardContent._Tile.alpha).toBe(1);
    expect(cardContent._Metadata.alpha).toBe(1);
    cardContent.mode = 'focused';
    testRenderer.forceAllUpdates();
    expect(cardContent._Tile.alpha).toBe(1);
    expect(cardContent._Metadata.alpha).toBe(1);

    cardContent.collapseToMetadata = true;
    cardContent.mode = 'unfocused';
    testRenderer.forceAllUpdates();
    expect(cardContent._Tile.alpha).toBe(1);
    expect(cardContent._Metadata.alpha).toBe(1);
    cardContent.mode = 'disabled';
    testRenderer.forceAllUpdates();
    expect(cardContent._Tile.alpha).toBe(1);
    expect(cardContent._Metadata.alpha).toBe(1);
    cardContent.mode = 'focused';
    testRenderer.forceAllUpdates();
    expect(cardContent._Tile.alpha).toBe(1);
    expect(cardContent._Metadata.alpha).toBe(1);
  });

  it('hides Metadata and shows Tile when shouldCollapse is true', () => {
    cardContent.shouldCollapse = true;
    cardContent.collapseToMetadata = false;

    cardContent.mode = 'unfocused';
    testRenderer.forceAllUpdates();
    expect(cardContent._Tile.alpha).toBe(1);
    expect(cardContent._Metadata.alpha).toBe(0);
    cardContent.mode = 'disabled';
    testRenderer.forceAllUpdates();
    expect(cardContent._Tile.alpha).toBe(1);
    expect(cardContent._Metadata.alpha).toBe(0);
    cardContent.mode = 'focused';
    testRenderer.forceAllUpdates();
    expect(cardContent._Tile.alpha).toBe(1);
    expect(cardContent._Metadata.alpha).toBe(1);
  });

  it('hides Tile and shows Metadata when shouldCollapse and collapseToMetadata are true', () => {
    cardContent.shouldCollapse = true;
    cardContent.collapseToMetadata = true;

    cardContent.mode = 'unfocused';
    testRenderer.forceAllUpdates();
    expect(cardContent._Tile.alpha).toBe(0);
    expect(cardContent._Metadata.alpha).toBe(1);
    cardContent.mode = 'disabled';
    testRenderer.forceAllUpdates();
    expect(cardContent._Tile.alpha).toBe(0);
    expect(cardContent._Metadata.alpha).toBe(1);
    cardContent.mode = 'focused';
    testRenderer.forceAllUpdates();
    expect(cardContent._Tile.alpha).toBe(1);
    expect(cardContent._Metadata.alpha).toBe(1);
  });

  it('uses the custom radius values for individual corners', () => {
    cardContent.style = { radius: [1, 2, 3, 4] };

    cardContent.orientation = 'horizontal';
    testRenderer.forceAllUpdates();
    expect(cardContent._Tile.style.radius).toEqual([1, 0, 0, 4]);

    cardContent.orientation = 'vertical';
    testRenderer.forceAllUpdates();
    expect(cardContent._Tile.style.radius).toEqual([1, 2, 0, 0]);
  });

  it('should accept src as getter at the root component level or nested inside artwork object', () => {
    expect(cardContent.src).toBeUndefined();

    const imageUrl1 = 'test.png';
    cardContent.src = imageUrl1;
    testRenderer.forceAllUpdates();
    expect(cardContent.src).toBe(imageUrl1);
    expect(cardContent.tile).toBeUndefined();
    expect(cardContent._Tile.src).toBe(imageUrl1);

    const imageUrl2 = 'test.png';
    cardContent.tile = { src: imageUrl2 };
    testRenderer.forceAllUpdates();
    expect(cardContent.src).toBe(imageUrl2);
    expect(cardContent.tile.src).toBe(imageUrl2);
    expect(cardContent._Tile.src).toBe(imageUrl2);

    cardContent.src = undefined;
    cardContent.tile = { src: imageUrl2 };
    testRenderer.forceAllUpdates();
    expect(cardContent.src).toBe(imageUrl2);
    expect(cardContent.tile.src).toBe(imageUrl2);
    expect(cardContent._Tile.src).toBe(imageUrl2);
  });

  describe('horizontal layout', () => {
    beforeEach(() => {
      [cardContent, testRenderer] = createComponent({
        src: icon,
        orientation: 'horizontal',
        badge: 'Badge',
        label: 'Label',
        progressBar: 50,
        metadata: {
          title: 'Title',
          description: 'Description',
          details: 'Details',
          provider: {
            visibleCount: 1,
            providers: [icon]
          }
        }
      });
    });

    it('positions Metadata', () => {
      expect(cardContent._Metadata.x).toBe(
        cardContent.style.imageSize.w + cardContent.style.paddingHorizontal
      );
      expect(cardContent._Metadata.y).toBe(cardContent.style.paddingVertical);
    });
  });

  describe('vertical layout', () => {
    beforeEach(() => {
      [cardContent, testRenderer] = createComponent({
        src: icon,
        orientation: 'vertical',
        badge: 'Badge',
        label: 'Label',
        progressBar: 50,
        metadata: {
          title: 'Title',
          description: 'Description',
          details: 'Details',
          provider: {
            visibleCount: 1,
            providers: [icon]
          }
        }
      });
    });

    it('positions Metadata', () => {
      expect(cardContent._Metadata.x).toBe(cardContent.style.paddingHorizontal);
      expect(cardContent._Metadata.y).toBe(
        cardContent.style.imageSize.h + cardContent.style.paddingVertical
      );
    });
  });
});
