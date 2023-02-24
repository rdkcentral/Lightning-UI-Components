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

import { makeCreateComponent, fastForward } from '@lightningjs/ui-test-utils';
import Tile from './index.js';
import Artwork from '../Artwork/index.js';
import { jest } from '@jest/globals';

const sampleImage = 'sampleImage';

const createComponent = makeCreateComponent(Tile);

describe('Tile', () => {
  let tile, testRenderer;

  beforeEach(async () => {
    [tile, testRenderer] = createComponent(
      { w: 300, h: 169 },
      {
        spyOnMethods: [
          '_update',
          '_updateArtwork',
          '_updateBadge',
          '_updateCheckbox',
          '_updateContent',
          '_updateMetadata',
          '_updateProgressBar',
          '_updateLabel',
          '_cleanupMetadata',
          '_inactive'
        ]
      }
    );
    await tile.__updateSpyPromise;
    testRenderer.unfocus();
  });

  afterEach(() => {
    tile = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('sets the announce string to the appropriate metadata announce strings', () => {
    const metadata = {
      title: 'Title',
      description: 'Description',
      logoTitle: 'Peacock'
    };
    const badge = { title: 'HD' };
    const label = { title: 'Live' };
    const progressBar = { progress: 0.5 };
    tile.patch({ metadata, badge, label, progressBar });
    tile.mode = 'focused';
    testRenderer.forceAllUpdates();
    expect(tile.announce).toEqual([
      [metadata.title, metadata.description, metadata.logoTitle],
      badge.title,
      label.title,
      `${progressBar.progress * 100}%`
    ]);
  });

  it('overrides the announce string', () => {
    const overrideString = 'Custom announce string';
    tile.announce = overrideString;
    testRenderer.forceAllUpdates();
    expect(tile.announce).toBe(overrideString);
  });

  // Template
  it('should return the proper structure initially', () => {
    const templateObj = Tile._template();
    expect(templateObj.Tile).toMatchObject({
      Artwork: {
        type: Artwork,
        mount: 0.5
      }
    });
  });

  // Static Getters / Setters
  it('should have required properties', () => {
    expect(Tile.properties).toEqual(
      expect.arrayContaining([
        'artwork',
        'circle',
        'badge',
        'checkbox',
        'metadata',
        'metadataLocation',
        'persistentMetadata',
        'progressBar',
        'label'
      ])
    );
  });

  it('should have required tags', () => {
    expect(Tile.tags).toEqual(
      expect.arrayContaining([
        'Background',
        'Artwork',
        'Content',
        'Tile',
        { name: 'Badge', path: 'Content.Badge' },
        { name: 'Checkbox', path: 'Content.Checkbox' },
        { name: 'Metadata', path: 'Content.Metadata' },
        { name: 'ProgressBar', path: 'Content.ProgressBar' },
        { name: 'Label', path: 'Content.Label' }
      ])
    );
  });

  // Getters / Setters

  it('should accept src as getter at the root component level or nested inside artwork object', () => {
    expect(tile.src).toBeUndefined();

    const imageUrl1 = 'test.png';
    tile.src = imageUrl1;
    testRenderer.forceAllUpdates();
    expect(tile.src).toBe(imageUrl1);
    expect(tile.artwork && tile.artwork.src).toBeUndefined();
    expect(tile._Artwork.src).toBe(imageUrl1);

    const imageUrl2 = 'test.png';
    tile.artwork = { src: imageUrl2 };
    testRenderer.forceAllUpdates();
    expect(tile.src).toBe(imageUrl2);
    expect(tile.artwork.src).toBe(imageUrl2);
    expect(tile._Artwork.src).toBe(imageUrl2);

    tile.src = undefined;
    tile.artwork = { src: imageUrl2 };
    testRenderer.forceAllUpdates();
    expect(tile.src).toBe(imageUrl2);
    expect(tile.artwork.src).toBe(imageUrl2);
    expect(tile._Artwork.src).toBe(imageUrl2);
  });

  it('returns the proper value for gradient when has metadata and focus', async () => {
    expect(tile._gradient).toBe(false);
    // Overwrite _hasMetadata to always be true for test
    Object.defineProperty(tile, '_hasMetadata', {
      get() {
        return true;
      }
    });
    testRenderer.focus();
    await tile.__updateSpyPromise;
    expect(tile._gradient).toBe(false);
    tile.progressBar = {
      progress: 0.5
    };
    await tile.__updateSpyPromise;
    expect(tile._gradient).toBe(true);
    tile.progressBar = {
      progress: 0
    };
    tile.metadata = { title: 'test' };

    testRenderer.unfocus();
    await tile.__updateSpyPromise;
    expect(tile._gradient).toBe(false);
    testRenderer.focus();
    await tile.__updateSpyPromise;
    expect(tile._gradient).toBe(false);
    tile.metadataLocation = 'inset';
    tile.progressBar = {
      progress: 0.7
    };
    testRenderer.focus();
    await tile.__updateSpyPromise;
    expect(tile._gradient).toBe(true);
  });

  it('returns the proper value for default width of the foreground', async () => {
    tile.w = 300;
    tile.h = 180;
    await tile.__updateSpyPromise;
    expect(tile._foregroundDefaultWidth).toBe(tile.innerW * 0.75);
    tile.w = 300;
    tile.h = 169;
    await tile.__updateSpyPromise;
    expect(tile._foregroundDefaultWidth).toBe(tile.innerW * 0.5);
  });

  it('returns the proper value for gradient when has persistentMetadata set to true', async () => {
    expect(tile._gradient).toBe(false);
    tile.persistentMetadata = true;
    await tile.__updateSpyPromise;
    expect(tile._gradient).toBe(false);
    tile.progressBar = {
      progress: 0.5
    };
    await tile.__updateSpyPromise;
    expect(tile._gradient).toBe(true);
    tile.progressBar = {
      progress: 0
    };
    await tile.__updateSpyPromise;
    expect(tile._gradient).toBe(false);
    tile.metadata = { title: 'test' };
    await tile.__updateSpyPromise;
    expect(tile._gradient).toBe(false);
    tile.metadataLocation = 'inset';
    await tile.__updateSpyPromise;
    expect(tile._gradient).toBe(true);
    tile.progressBar = {
      progress: 0.5
    };
    await tile.__updateSpyPromise;
    expect(tile._gradient).toBe(true);
  });

  it('returns the proper value for gradient when has progress greater than 1', async () => {
    expect(tile._gradient).toBe(false);
    tile.progressBar = {
      progress: 0.5
    };
    await tile.__updateSpyPromise;
    expect(tile._gradient).toBe(true);
  });

  it('returns the proper value for isCircleLayout', async () => {
    expect(tile._isCircleLayout).toBe(false);
    tile.itemLayout = {
      ratioX: 16,
      ratioY: 9,
      upCount: 5,
      circle: true
    };
    await tile.__updateSpyPromise;
    expect(tile._isCircleLayout).toBe(true);
  });

  it('returns the proper scale', async () => {
    expect(tile.scale).toBe(1);
    testRenderer.focus();
    await tile.__updateSpyPromise;
    expect(tile.scale).toBe(1);
  });

  // Methods

  it('updates artwork in default state', async () => {
    tile._Artwork._Image.src = sampleImage;
    await tile.__updateImageSpyPromise;
    expect(tile._Artwork.constructor.name).toBe('Artwork');
    expect(tile._Artwork._Image.src).toBe('sampleImage');
    expect(tile._Artwork.mode).toBe('unfocused');
    expect(tile._Artwork.gradient).toBe(false);
    expect(tile._Artwork.w).toBe(tile._w);
    expect(tile._Artwork.h).toBe(tile._h);
    expect(tile._Artwork.x).toBe(tile._w / 2);
    expect(tile._Artwork.y).toBe(tile._h / 2);
    expect(tile._Artwork.style.radius).toBe(tile.style.radius);
  });

  it('updates artwork scale when imageScale is updated', async () => {
    tile.artwork = { src: sampleImage };
    testRenderer.focus();
    expect(tile._Artwork.style.imageScale).toBe(tile.style.imageScale); // base theme does not have a image scale change on focus
    tile.artwork.style = { imageScale: 2 };
    await tile.__updateArtworkSpyPromise;
    expect(tile._Artwork.style.imageScale).toBe(2);
  });

  it('should add badge if required and remove element when no longer needed', async () => {
    tile.badge = {
      title: 'test'
    };
    await tile.__updateBadgeSpyPromise;
    expect(tile._Badge).not.toBeUndefined();

    tile.itemLayout = { circle: true };
    await tile.__updateBadgeSpyPromise;
    expect(tile._Badge).toBeUndefined();
    tile.itemLayout = undefined;
    tile.badge = {
      title: 'changed'
    };
    await tile.__updateBadgeSpyPromise;
    expect(tile._Badge).not.toBeUndefined();

    tile.badge = {
      title: 'changed again'
    };
    await tile.__updateBadgeSpyPromise;
    expect(tile._Badge._transitions.title.targetValue).toBe('changed again');
    tile.shouldSmooth = false;
    tile.badge = {
      title: 'no smooth'
    };
    await tile.__updateBadgeSpyPromise;
    expect(tile._Badge.title).toBe('no smooth');
  });

  it('should not add badge if has a circle layout', async () => {
    tile.itemLayout = { circle: true };
    tile.metadata = { badge: 'test' };
    await tile.__updateBadgeSpyPromise;
    expect(tile._Badge).toBeUndefined();
  });

  it('should add label if required and remove element when no longer needed', async () => {
    tile.label = {
      title: 'test'
    };
    await tile.__updateLabelSpyPromise;
    expect(tile._Label).not.toBeUndefined();
    tile.itemLayout = { circle: true };
    await tile.__updateTagSpyPromise;
    expect(tile._Tag).toBeUndefined();
    tile.itemLayout = undefined;
    tile.label = {
      title: 'changed'
    };
    await tile.__updateLabelSpyPromise;
    expect(tile._Label._transitions.title.targetValue).toBe('changed');
    tile.label = {
      title: 'changed again'
    };
    await tile.__updateLabelSpyPromise;
    expect(tile._Label._transitions.title.targetValue).toBe('changed again');
    tile.shouldSmooth = false;
    tile.label = {
      title: 'no smooth'
    };
    await tile.__updateLabelSpyPromise;
    expect(tile._Label.title).toBe('no smooth');
    tile.label = {
      title: 'with smooth'
    };
    await tile.__updateLabelSpyPromise;
    expect(tile._Label.title).toBe('with smooth');
  });

  it('should not add tag if has a circle layout', async () => {
    tile.itemLayout = { circle: true };
    tile.metadata = { tagTitle: 'test' };
    await tile.__updateTagSpyPromise;
    expect(tile._Tag).toBeUndefined();
  });

  it('should add a checkbox if required and remove the element when no longer needed', async () => {
    expect(tile._Checkbox).toBeUndefined();

    tile.checkbox = {
      checked: true
    };
    await tile.__updateCheckboxSpyPromise;
    expect(tile._Checkbox).not.toBeUndefined();

    tile.w = 100;
    await tile.__updateCheckboxSpyPromise;
    expect(tile._Checkbox._transitions.x.targetValue).toBe(70);

    tile.w = 200;
    tile.shouldSmooth = false;
    await tile.__updateCheckboxSpyPromise;
    expect(tile._Checkbox.x).toBe(170);

    tile.itemLayout = { circle: true };
    await tile.__updateCheckboxSpyPromise;
    expect(tile._Checkbox).toBeUndefined();

    tile.itemLayout = undefined;
    tile.requestUpdate(true);
    await tile.__updateCheckboxSpyPromise;
    expect(tile._Checkbox).not.toBeUndefined();

    tile.checkbox = {
      checked: false
    };
    await tile.__updateCheckboxSpyPromise;
    expect(tile._Checkbox).toBeUndefined();
  });

  it('should add foregroundImage if set', async () => {
    tile.artwork = {
      foregroundSrc: 'foo'
    };
    await tile.__updateArtworkSpyPromise;
    expect(tile._Artwork.foregroundSrc).toBe('foo');
  });

  it('should add a ProgressBar when progress is greater than 0 and remove it if no longer needed', async () => {
    expect(tile._ProgressBar).toBeUndefined();
    tile.progressBar = {
      progress: 0.9
    };
    await tile.__updateProgressBarSpyPromise;
    expect(tile._ProgressBar).not.toBeUndefined();
    tile.itemLayout = { w: 100, h: 200, circle: true };
    await tile.__updateProgressBarSpyPromise;
    fastForward([tile._ProgressBar]);
    testRenderer.update(); // Force redraw
    expect(tile._ProgressBar).toBeUndefined();
    tile.itemLayout = undefined;
    tile.shouldSmooth = false;
    tile.progressBar = {
      progress: 0.4
    };
    await tile.__updateProgressBarSpyPromise;
    expect(tile._ProgressBar).not.toBeUndefined();
    tile.progressBar = {
      progress: 0
    };
    await tile.__updateProgressBarSpyPromise;
    expect(tile._ProgressBar).toBeUndefined();
    tile.progressBar = {
      progress: 0.5
    };
    await tile.__updateProgressBarSpyPromise;
    expect(tile._ProgressBar).not.toBeUndefined();
    tile.shouldSmooth = true;
    tile.progressBar = {
      progress: 0
    };
    await tile.__updateProgressBarSpyPromise;
    fastForward([tile._ProgressBar]);
    testRenderer.update(); // Force redraw
    expect(tile._ProgressBar).toBeUndefined();
  });

  it('should not patch progressBar if is in circle layout mode', async () => {
    tile.patch({
      progressBar: {
        progress: 0.5
      },
      itemLayout: {
        circle: true
      }
    });
    await tile.__updateProgressBarSpyPromise;
    expect(tile._ProgressBar).toBeUndefined();
  });

  it('should update metadata and remove if no longer needed if metadataLocation is inset', async () => {
    expect(tile.metadata).toBeUndefined();
    tile.metadata = { title: 'test' };
    tile.metadataLocation = 'inset';
    await tile.__updateMetadataSpyPromise;
    expect(tile.metadata).not.toBeUndefined();
    tile.metadata = undefined;
    await tile.__updateMetadataSpyPromise;
    expect(tile._Metadata).toBeUndefined();
    tile.shouldSmooth = false;
    tile.metadata = { title: 'test2' };
    await tile.__updateMetadataSpyPromise;
    expect(tile.metadata).not.toBeUndefined();
  });

  it('should reset the marquee animation when unfocused', async () => {
    const mockResetMarquee = jest.fn();
    jest.mock('../MetadataTile', () => {
      jest.fn().mockImplementationOnce(() => {
        return {
          ...jest.requireActual('../MetadataTile'),
          resetMarquee: mockResetMarquee
        };
      });
    });
    const [tile, testRenderer] = createComponent(
      {
        metadata: {
          title: 'long text'.repeat(30),
          description: 'long text'.repeat(30)
        }
      },
      {
        focused: false,
        spyOnMethods: ['_updateMetadata']
      }
    );

    await tile.__updateMetadataSpyPromise;

    expect(mockResetMarquee).not.toHaveBeenCalled();

    testRenderer.focus();
    await tile.__updateMetadataSpyPromise;

    expect(mockResetMarquee).not.toHaveBeenCalled();

    testRenderer.unfocus();

    expect(mockResetMarquee).not.toHaveBeenCalled();
  });
});
