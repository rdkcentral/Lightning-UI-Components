import {
  makeCreateComponent,
  fastForward
} from '../../../test/lightning-test-utils.js';
import Tile from './index.js';
import Artwork from '../Artwork/index.js';

const sampleImage = 'sampleImage';

const createComponent = makeCreateComponent(Tile);

describe('Tile', () => {
  let component, testRenderer;

  beforeEach(async () => {
    [component, testRenderer] = createComponent(
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
    await component.__updateSpyPromise;
    testRenderer.unfocus();
  });

  afterEach(() => {
    component = null;
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
    component.patch({ metadata, badge, label, progressBar });
    component.mode = 'focused';
    testRenderer.forceAllUpdates();
    expect(component.announce).toEqual([
      [metadata.title, metadata.description, metadata.logoTitle],
      badge.title,
      label.title,
      `${progressBar.progress * 100}%`
    ]);
  });

  it('overrides the announce string', () => {
    const overrideString = 'Custom announce string';
    component.announce = overrideString;
    testRenderer.forceAllUpdates();
    expect(component.announce).toBe(overrideString);
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
    expect(component.src).toBeUndefined();

    const imageUrl1 = 'test.png';
    component.src = imageUrl1;
    testRenderer.forceAllUpdates();
    expect(component.src).toBe(imageUrl1);
    expect(component.artwork).toBeUndefined();
    expect(component._Artwork.src).toBe(imageUrl1);

    const imageUrl2 = 'test.png';
    component.artwork = { src: imageUrl2 };
    testRenderer.forceAllUpdates();
    expect(component.src).toBe(imageUrl2);
    expect(component.artwork.src).toBe(imageUrl2);
    expect(component._Artwork.src).toBe(imageUrl2);

    component.src = undefined;
    component.artwork = { src: imageUrl2 };
    testRenderer.forceAllUpdates();
    expect(component.src).toBe(imageUrl2);
    expect(component.artwork.src).toBe(imageUrl2);
    expect(component._Artwork.src).toBe(imageUrl2);
  });

  it('returns the proper value for gradient when has metadata and focus', async () => {
    expect(component._gradient).toBe(false);
    // Overwrite _hasMetadata to always be true for test
    Object.defineProperty(component, '_hasMetadata', {
      get() {
        return true;
      }
    });
    testRenderer.focus();
    await component.__updateSpyPromise;
    expect(component._gradient).toBe(false);
    component.progressBar = {
      progress: 0.5
    };
    await component.__updateSpyPromise;
    expect(component._gradient).toBe(true);
    component.progressBar = {
      progress: 0
    };
    component.metadata = { title: 'test' };

    testRenderer.unfocus();
    await component.__updateSpyPromise;
    expect(component._gradient).toBe(false);
    testRenderer.focus();
    await component.__updateSpyPromise;
    expect(component._gradient).toBe(false);
    component.metadataLocation = 'inset';
    component.progressBar = {
      progress: 0.7
    };
    testRenderer.focus();
    await component.__updateSpyPromise;
    expect(component._gradient).toBe(true);
  });

  it('returns the proper value for default width of the foreground', async () => {
    component.w = 300;
    component.h = 180;
    await component.__updateSpyPromise;
    expect(component._foregroundDefaultWidth).toBe(component.innerW * 0.75);
    component.w = 300;
    component.h = 169;
    await component.__updateSpyPromise;
    expect(component._foregroundDefaultWidth).toBe(component.innerW * 0.5);
  });

  it('returns the proper value for gradient when has persistentMetadata set to true', async () => {
    expect(component._gradient).toBe(false);
    component.persistentMetadata = true;
    await component.__updateSpyPromise;
    expect(component._gradient).toBe(false);
    component.progressBar = {
      progress: 0.5
    };
    await component.__updateSpyPromise;
    expect(component._gradient).toBe(true);
    component.progressBar = {
      progress: 0
    };
    await component.__updateSpyPromise;
    expect(component._gradient).toBe(false);
    component.metadata = { title: 'test' };
    await component.__updateSpyPromise;
    expect(component._gradient).toBe(false);
    component.metadataLocation = 'inset';
    await component.__updateSpyPromise;
    expect(component._gradient).toBe(true);
    component.progressBar = {
      progress: 0.5
    };
    await component.__updateSpyPromise;
    expect(component._gradient).toBe(true);
  });

  it('returns the proper value for gradient when has progress greater than 1', async () => {
    expect(component._gradient).toBe(false);
    component.progressBar = {
      progress: 0.5
    };
    await component.__updateSpyPromise;
    expect(component._gradient).toBe(true);
  });

  it('returns the proper value for isCircleLayout', async () => {
    expect(component._isCircleLayout).toBe(false);
    component.itemLayout = {
      ratioX: 16,
      ratioY: 9,
      upCount: 5,
      circle: true
    };
    await component.__updateSpyPromise;
    expect(component._isCircleLayout).toBe(true);
  });

  it('returns the proper scale', async () => {
    expect(component.scale).toBe(1);
    testRenderer.focus();
    await component.__updateSpyPromise;
    expect(component.scale).toBe(1);
  });

  // Methods

  it('updates artwork in default state', async () => {
    component._Artwork._Image.src = sampleImage;
    await component.__updateImageSpyPromise;
    expect(component._Artwork.constructor.name).toBe('Artwork');
    expect(component._Artwork._Image.src).toBe('sampleImage');
    expect(component._Artwork.mode).toBe('unfocused');
    expect(component._Artwork.gradient).toBe(false);
    expect(component._Artwork.w).toBe(component._w);
    expect(component._Artwork.h).toBe(component._h);
    expect(component._Artwork.x).toBe(component._w / 2);
    expect(component._Artwork.y).toBe(component._h / 2);
    expect(component._Artwork.style.radius).toBe(16);
  });

  it('updates artwork scale on focus', async () => {
    testRenderer.focus();
    expect(component._Artwork.style.imageScale).toBe(1.2);
    component.style.artworkStyles = { imageScale: 2 };
    await component.__updateArtworkSpyPromise;
    expect(component._Artwork.style.imageScale).toBe(2);
    // component.style.artworkStyles = { imageScale: undefined };
  });

  it('should add badge if required and remove element when no longer needed', async () => {
    component.badge = {
      title: 'test'
    };
    await component.__updateBadgeSpyPromise;
    expect(component._Badge).not.toBeUndefined();

    component.itemLayout = { circle: true };
    await component.__updateBadgeSpyPromise;
    expect(component._Badge).toBeUndefined();
    component.itemLayout = undefined;
    component.badge = {
      title: 'changed'
    };
    await component.__updateBadgeSpyPromise;
    expect(component._Badge).not.toBeUndefined();

    component.badge = {
      title: 'changed again'
    };
    await component.__updateBadgeSpyPromise;
    expect(component._Badge._transitions.title.targetValue).toBe(
      'changed again'
    );
    component.shouldSmooth = false;
    component.badge = {
      title: 'no smooth'
    };
    await component.__updateBadgeSpyPromise;
    expect(component._Badge.title).toBe('no smooth');
  });

  it('should not add badge if has a circle layout', async () => {
    component.itemLayout = { circle: true };
    component.metadata = { badge: 'test' };
    await component.__updateBadgeSpyPromise;
    expect(component._Badge).toBeUndefined();
  });

  it('should add label if required and remove element when no longer needed', async () => {
    component.label = {
      title: 'test'
    };
    await component.__updateLabelSpyPromise;
    expect(component._Label).not.toBeUndefined();
    component.itemLayout = { circle: true };
    await component.__updateTagSpyPromise;
    expect(component._Tag).toBeUndefined();
    component.itemLayout = undefined;
    component.label = {
      title: 'changed'
    };
    await component.__updateLabelSpyPromise;
    expect(component._Label._transitions.title.targetValue).toBe('changed');
    component.label = {
      title: 'changed again'
    };
    await component.__updateLabelSpyPromise;
    expect(component._Label._transitions.title.targetValue).toBe(
      'changed again'
    );
    component.shouldSmooth = false;
    component.label = {
      title: 'no smooth'
    };
    await component.__updateLabelSpyPromise;
    expect(component._Label.title).toBe('no smooth');
    component.label = {
      title: 'with smooth'
    };
    await component.__updateLabelSpyPromise;
    expect(component._Label.title).toBe('with smooth');
  });

  it('should not add tag if has a circle layout', async () => {
    component.itemLayout = { circle: true };
    component.metadata = { tagTitle: 'test' };
    await component.__updateTagSpyPromise;
    expect(component._Tag).toBeUndefined();
  });

  it('should add a checkbox if required and remove the element when no longer needed', async () => {
    expect(component._Checkbox).toBeUndefined();
    component.checkbox = {
      checked: true
    };
    await component.__updateCheckboxSpyPromise;
    expect(component._Checkbox).not.toBeUndefined();
    component.w = 100;
    await component.__updateCheckboxSpyPromise;
    expect(component._Checkbox._transitions.x.targetValue).toBe(76);
    component.w = 200;
    component.shouldSmooth = false;
    await component.__updateCheckboxSpyPromise;
    expect(component._Checkbox.x).toBe(176);
    component.itemLayout = { circle: true };
    await component.__updateCheckboxSpyPromise;
    expect(component._Checkbox).toBeUndefined();
    component.itemLayout = undefined;
    component.requestUpdate(true);
    await component.__updateCheckboxSpyPromise;
    expect(component._Checkbox).not.toBeUndefined();
    component.checkbox = {
      checked: false
    };
    await component.__updateCheckboxSpyPromise;
    expect(component._Checkbox).toBeUndefined();
  });

  it('should add foregroundImage if set', async () => {
    component.artwork = {
      foregroundSrc: 'foo'
    };
    await component.__updateArtworkSpyPromise;
    expect(component._Artwork.foregroundSrc).toBe('foo');
  });

  it('should add a ProgressBar when progress is greater than 0 and remove it if no longer needed', async () => {
    expect(component._ProgressBar).toBeUndefined();
    component.progressBar = {
      progress: 0.9
    };
    await component.__updateProgressBarSpyPromise;
    expect(component._ProgressBar).not.toBeUndefined();
    component.itemLayout = { w: 100, h: 200, circle: true };
    await component.__updateProgressBarSpyPromise;
    fastForward([component._ProgressBar]);
    testRenderer.update(); // Force redraw
    expect(component._ProgressBar).toBeUndefined();
    component.itemLayout = undefined;
    component.shouldSmooth = false;
    component.progressBar = {
      progress: 0.4
    };
    await component.__updateProgressBarSpyPromise;
    expect(component._ProgressBar).not.toBeUndefined();
    component.progressBar = {
      progress: 0
    };
    await component.__updateProgressBarSpyPromise;
    expect(component._ProgressBar).toBeUndefined();
    component.progressBar = {
      progress: 0.5
    };
    await component.__updateProgressBarSpyPromise;
    expect(component._ProgressBar).not.toBeUndefined();
    component.shouldSmooth = true;
    component.progressBar = {
      progress: 0
    };
    await component.__updateProgressBarSpyPromise;
    fastForward([component._ProgressBar]);
    testRenderer.update(); // Force redraw
    expect(component._ProgressBar).toBeUndefined();
  });

  it('should not patch progressBar if is in circle layout mode', async () => {
    component.patch({
      progressBar: {
        progress: 0.5
      },
      itemLayout: {
        circle: true
      }
    });
    await component.__updateProgressBarSpyPromise;
    expect(component._ProgressBar).toBeUndefined();
  });

  it('should update metadata and remove if no longer needed if metadataLocation is inset', async () => {
    expect(component.metadata).toBeUndefined();
    component.metadata = { title: 'test' };
    component.metadataLocation = 'inset';
    await component.__updateMetadataSpyPromise;
    expect(component.metadata).not.toBeUndefined();
    component.metadata = undefined;
    await component.__updateMetadataSpyPromise;
    expect(component._Metadata).toBeUndefined();
    component.shouldSmooth = false;
    component.metadata = { title: 'test2' };
    await component.__updateMetadataSpyPromise;
    expect(component.metadata).not.toBeUndefined();
  });
});
