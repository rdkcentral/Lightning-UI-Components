import TestUtils from '../../test/lightning-test-utils';
import Tile from '.';
import Artwork from '../Artwork';

const sampleImage = 'sampleImage';

const createComponent = TestUtils.makeCreateComponent(Tile);

describe('Tile', () => {
  let component, testRenderer;

  beforeEach(async done => {
    [component, testRenderer] = createComponent(
      { w: 300, h: 169, src: sampleImage },
      {
        spyOnMethods: [
          '_update',
          '_updateArtwork',
          '_updateBadge',
          '_updateCheckbox',
          '_updateContent',
          '_updateMetadata',
          '_updateProgressBar',
          '_updateLabel'
        ]
      }
    );
    await component.__updateSpyPromise;
    done();
  });

  afterEach(() => {
    component = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  // Template
  it('should return the proper structure initially', () => {
    const templateObj = Tile._template();
    expect(templateObj).toEqual(
      expect.objectContaining({
        Artwork: {
          type: Artwork,
          mount: 0.5
        }
      })
    );
  });

  // Static Getters / Setters
  it.skip('should have required properties', () => {
    expect(Tile.properties).toEqual(
      expect.arrayContaining([
        'checked',
        'fallbackSrc',
        'focusSrc',
        'foregroundSrc',
        'foregroundW',
        'foregroundH',
        'metadataLocation',
        'metadataType',
        'mode',
        'persistentMetadata',
        'progress',
        'src'
      ])
    );
  });

  it.skip('should have required tags', () => {
    expect(Tile.tags).toEqual(
      expect.arrayContaining([
        'Artwork',
        'Content',
        { name: 'Badge', path: 'Content.Badge' },
        { name: 'Checkbox', path: 'Content.Checkbox' },
        { name: 'Metadata', path: 'Content.Metadata' },
        { name: 'ProgressBar', path: 'Content.ProgressBar' },
        { name: 'Tag', path: 'Content.Tag' }
      ])
    );
  });

  // Getters / Setters
  it.skip('returns the proper value for gradient when has metadata and focus', async done => {
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
    component.progress = 0.5;
    expect(component._gradient).toBe(true);
    component.progress = 0;
    component.metadata = { title: 'test' };

    testRenderer.unfocus();
    await component.__updateSpyPromise;
    expect(component._gradient).toBe(false);
    testRenderer.focus();
    await component.__updateSpyPromise;
    expect(component._gradient).toBe(false);
    component.metadataLocation = 'inset';
    await component.__updateSpyPromise;
    expect(component._gradient).toBe(true);
    done();
  });

  it.skip('returns the proper value for gradient when has persistentMetadata set to true', async done => {
    expect(component._gradient).toBe(false);
    component.persistentMetadata = true;
    await component.__updateSpyPromise;
    expect(component._gradient).toBe(false);
    component.progress = 0.5;
    await component.__updateSpyPromise;
    expect(component._gradient).toBe(true);
    component.progress = 0;
    await component.__updateSpyPromise;
    expect(component._gradient).toBe(false);
    component.metadata = { title: 'test' };
    await component.__updateSpyPromise;
    expect(component._gradient).toBe(false);
    component.metadataLocation = 'inset';
    await component.__updateSpyPromise;
    expect(component._gradient).toBe(true);
    component.progress = 0.5;
    await component.__updateSpyPromise;
    expect(component._gradient).toBe(true);
    done();
  });

  it.skip('returns the proper value for gradient when has progres greater than 1', async done => {
    expect(component._gradient).toBe(false);
    component.progress = 0.5;
    await component.__updateSpyPromise;
    expect(component._gradient).toBe(true);
    done();
  });

  // Add test back in after Metadata refactor is complete
  // it('returns the proper class for _MetadataType', async done => {
  //   expect(component.metadataType.name).toBe('MetadataTile');
  //   component.metadataType = TestMetadataType;
  //   await component.__updateSpyPromise;
  //   expect(component._MetadataType.name).toBe('TestMetadataType');
  //   done();
  // });

  it('returns the proper value for isCircleLayout', async done => {
    expect(component._isCircleLayout).toBe(false);
    component.itemLayout = {
      ratioX: 16,
      ratioY: 9,
      upCount: 5,
      circle: true
    };
    await component.__updateSpyPromise;
    expect(component._isCircleLayout).toBe(true);
    done();
  });

  it('returns the proper scale', async done => {
    expect(component._scale).toBe(1);
    component.patch({
      style: {
        getFocusScale: () => 2,
        getUnfocusScale: () => 1.5
      }
    });
    await component.__updateSpyPromise;
    testRenderer.focus();
    await component.__updateSpyPromise;
    expect(component._scale).toBe(2);
    testRenderer.unfocus();
    await component.__updateSpyPromise;
    expect(component._scale).toBe(1.5);
    done();
  });

  it.skip('ensures the metadata is always an object', async done => {
    expect(component._metadata).toMatchObject({});
    component.metadata = { title: 'foo' };
    await component.__updateSpyPromise;
    expect(component.metadata).toMatchObject({ title: 'foo' });
    component.metadata = 'foo';
    expect(component.metadata).toMatchObject({ title: 'foo' });
    component.metadata = 1;
    expect(component.metadata).toMatchObject({ title: 'foo' });
    done();
  });

  // Methods
  it.skip('updates artwork in default state', async done => {
    expect(component._Artwork.constructor.name).toBe('Artwork');
    expect(component._Artwork.src).toBe(sampleImage);
    expect(component._Artwork.mode).toBeUndefined();
    expect(component._Artwork.gradient).toBe(false);
    expect(component._Artwork.w).toBe(component._w);
    expect(component._Artwork.h).toBe(component._h);
    expect(component._Artwork.x).toBe(component._w / 2);
    expect(component._Artwork.y).toBe(component._h / 2);
    expect(component._Artwork.style.radius).toBe(16);
    done();
  });

  it('updates artwork scale on focus', async done => {
    testRenderer.focus();
    await component.__updateArtworkSpyPromise;
    expect(component._Artwork.style.imageScale).toBe(1.2);
    component.style.artworkStyles = { imageScale: 2 };
    await component.__updateArtworkSpyPromise;
    expect(component._Artwork.style.imageScale).toBe(2);
    component.style.artworkStyles = { scale: undefined };
    done();
  });

  it('should add badge if required and remove element when no longer needed', async done => {
    component.badge = {
      title: 'test'
    };
    await component.__updateBadgeSpyPromise;
    expect(component._Badge).not.toBeUndefined();
    component.itemLayout = { circle: true };
    await component.__updateBadgeSpyPromise;
    expect(component._Badge).toBeUndefined();
    component.itemLayout = undefined;
    await component.__updateBadgeSpyPromise;
    expect(component._Badge).not.toBeUndefined();
    component.badge = {
      title: 'changed'
    };
    await component.__updateBadgeSpyPromise;
    expect(component._Badge._transitions.title.targetValue).toBe('changed');
    component.badge = {
      title: 'changed again'
    };
    await component.__updateBadgeSpyPromise;
    expect(component._Badge._transitions.title.targetValue).toBe(
      'changed again'
    );
    component._smooth = false;
    component.badge = {
      title: 'no smooth'
    };
    await component.__updateBadgeSpyPromise;
    expect(component._Badge.title).toBe('no smooth');
    done();
  });

  it('should not add badge if has a circle layout', async done => {
    component.itemLayout = { circle: true };
    component.metadata = { badge: 'test' };
    await component.__updateBadgeSpyPromise;
    expect(component._Badge).toBeUndefined();
    done();
  });

  it('should add label if required and remove element when no longer needed', async done => {
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
    component._smooth = false;
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
    done();
  });

  it('should not add tag if has a circle layout', async done => {
    component.itemLayout = { circle: true };
    component.metadata = { tagTitle: 'test' };
    await component.__updateTagSpyPromise;
    expect(component._Tag).toBeUndefined();
    done();
  });

  it('should add a checkbox if required and remove the element when no longer needed', async done => {
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
    component._smooth = false;
    await component.__updateCheckboxSpyPromise;
    expect(component._Checkbox.x).toBe(176);
    component.itemLayout = { circle: true };
    await component.__updateCheckboxSpyPromise;
    expect(component._Checkbox).toBeUndefined();
    component.itemLayout = undefined;
    component._update();
    await component.__updateCheckboxSpyPromise;
    expect(component._Checkbox).not.toBeUndefined();
    component.checkbox = {
      checked: false
    };
    await component.__updateCheckboxSpyPromise;
    expect(component._Checkbox).toBeUndefined();
    done();
  });

  it('should add foregroundImage if set', async done => {
    component.artwork = {
      foregroundSrc: 'foo'
    };
    await component.__updateArtworkSpyPromise;
    expect(component._Artwork.foregroundSrc).toBe('foo');
    done();
  });

  it('should add a ProgressBar when progress is greater than 0 and remove it if no longer needed', async done => {
    expect(component._ProgressBar).toBeUndefined();
    component.progressBar = {
      progress: 0.9
    };
    await component.__updateProgressBarSpyPromise;
    expect(component._ProgressBar).not.toBeUndefined();
    component.itemLayout = { w: 100, h: 200, circle: true };
    await component.__updateProgressBarSpyPromise;
    TestUtils.fastForward([component._ProgressBar]);
    testRenderer.update(); // Force redraw
    expect(component._ProgressBar).toBeUndefined();
    component.itemLayout = undefined;
    await component.__updateProgressBarSpyPromise;
    expect(component._ProgressBar).not.toBeUndefined();
    component._smooth = false;
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
    component._smooth = true;
    component.progressBar = {
      progress: 0
    };
    await component.__updateProgressBarSpyPromise;
    TestUtils.fastForward([component._ProgressBar]);
    testRenderer.update(); // Force redraw
    expect(component._ProgressBar).toBeUndefined();
    done();
  });

  it('should not patch progressBar if is in circle layout mode', async done => {
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
    component.itemLayout = undefined;
    await component.__updateProgressBarSpyPromise;
    expect(component._ProgressBar).not.toBeUndefined();
    done();
  });

  it('should update metadata and remove if no longer needed', async done => {
    expect(component._Metadata).toBeUndefined();
    component.metadata = { title: 'test' };
    await component.__updateMetadataSpyPromise;
    expect(component._Metadata).not.toBeUndefined();
    component.metadata = { title: undefined };
    await component.__updateMetadataSpyPromise;
    expect(component._Metadata).toBeUndefined();
    component._smooth = false;
    component.metadata = { title: 'test2' };
    await component.__updateMetadataSpyPromise;
    expect(component._Metadata).not.toBeUndefined();
    done();
  });
});
