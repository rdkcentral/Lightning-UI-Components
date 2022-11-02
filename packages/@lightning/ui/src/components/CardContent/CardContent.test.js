import TestUtils from '@lightning/ui-core/test';
import CardContent from './CardContent';
import Tile from '@lightning/ui-core/src/components/Tile';

const icon = TestUtils.pathToDataURI(
  './src/assets/images/ic_lightning_white_32.png'
);

const createComponent = TestUtils.makeCreateComponent(CardContent);

describe('CardContent', () => {
  // eslint-disable-next-line no-unused-vars
  let component, testRenderer;

  beforeEach(() => {
    [component, testRenderer] = createComponent();
  });
  afterEach(() => {
    component = null;
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
    const logoAnnounce = 'xFinity';
    const providers = Array(5).fill({
      icon: 'test.png',
      announce: logoAnnounce
    });
    const badge = { title: 'HD' };
    const label = { title: 'Live' };
    const progressBar = { progress: 0.5 };
    component.patch({
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
    expect(component.announce).toEqual([
      [title, description, details, [...Array(3).fill(logoAnnounce), '+2']],
      [undefined, badge.title, label.title, `${progressBar.progress * 100}%`]
    ]);
  });

  it('overrides the announce string', () => {
    const overrideString = 'Custom announce string';
    component.announce = overrideString;
    testRenderer.forceAllUpdates();
    expect(component.announce).toBe(overrideString);
  });

  it('creates Tile', () => {
    [component, testRenderer] = createComponent({ src: icon });
    expect(component._Tile.type).toBe(Tile);
  });

  it('shows Tile and Metadata when shouldCollapse is false', () => {
    component.shouldCollapse = false;

    component.collapseToMetadata = false;
    component.mode = 'unfocused';
    testRenderer.forceAllUpdates();
    expect(component._Tile.alpha).toBe(1);
    expect(component._Metadata.alpha).toBe(1);
    component.mode = 'disabled';
    testRenderer.forceAllUpdates();
    expect(component._Tile.alpha).toBe(1);
    expect(component._Metadata.alpha).toBe(1);
    component.mode = 'focused';
    testRenderer.forceAllUpdates();
    expect(component._Tile.alpha).toBe(1);
    expect(component._Metadata.alpha).toBe(1);

    component.collapseToMetadata = true;
    component.mode = 'unfocused';
    testRenderer.forceAllUpdates();
    expect(component._Tile.alpha).toBe(1);
    expect(component._Metadata.alpha).toBe(1);
    component.mode = 'disabled';
    testRenderer.forceAllUpdates();
    expect(component._Tile.alpha).toBe(1);
    expect(component._Metadata.alpha).toBe(1);
    component.mode = 'focused';
    testRenderer.forceAllUpdates();
    expect(component._Tile.alpha).toBe(1);
    expect(component._Metadata.alpha).toBe(1);
  });

  it('hides Metadata and shows Tile when shouldCollapse is true', () => {
    component.shouldCollapse = true;
    component.collapseToMetadata = false;

    component.mode = 'unfocused';
    testRenderer.forceAllUpdates();
    expect(component._Tile.alpha).toBe(1);
    expect(component._Metadata.alpha).toBe(0);
    component.mode = 'disabled';
    testRenderer.forceAllUpdates();
    expect(component._Tile.alpha).toBe(1);
    expect(component._Metadata.alpha).toBe(0);
    component.mode = 'focused';
    testRenderer.forceAllUpdates();
    expect(component._Tile.alpha).toBe(1);
    expect(component._Metadata.alpha).toBe(1);
  });

  it('hides Tile and shows Metadata when shouldCollapse and collapseToMetadata are true', () => {
    component.shouldCollapse = true;
    component.collapseToMetadata = true;

    component.mode = 'unfocused';
    testRenderer.forceAllUpdates();
    expect(component._Tile.alpha).toBe(0);
    expect(component._Metadata.alpha).toBe(1);
    component.mode = 'disabled';
    testRenderer.forceAllUpdates();
    expect(component._Tile.alpha).toBe(0);
    expect(component._Metadata.alpha).toBe(1);
    component.mode = 'focused';
    testRenderer.forceAllUpdates();
    expect(component._Tile.alpha).toBe(1);
    expect(component._Metadata.alpha).toBe(1);
  });

  it('uses the custom radius values for individual corners', () => {
    component.style = { radius: [1, 2, 3, 4] };

    component.orientation = 'horizontal';
    testRenderer.forceAllUpdates();
    expect(component._Tile.style.radius).toEqual([1, 0, 0, 4]);

    component.orientation = 'vertical';
    testRenderer.forceAllUpdates();
    expect(component._Tile.style.radius).toEqual([1, 2, 0, 0]);
  });

  it('should accept src as getter at the root component level or nested inside artwork object', () => {
    expect(component.src).toBeUndefined();

    const imageUrl1 = 'test.png';
    component.src = imageUrl1;
    testRenderer.forceAllUpdates();
    expect(component.src).toBe(imageUrl1);
    expect(component.tile).toBeUndefined();
    expect(component._Tile.src).toBe(imageUrl1);

    const imageUrl2 = 'test.png';
    component.tile = { src: imageUrl2 };
    testRenderer.forceAllUpdates();
    expect(component.src).toBe(imageUrl2);
    expect(component.tile.src).toBe(imageUrl2);
    expect(component._Tile.src).toBe(imageUrl2);

    component.src = undefined;
    component.tile = { src: imageUrl2 };
    testRenderer.forceAllUpdates();
    expect(component.src).toBe(imageUrl2);
    expect(component.tile.src).toBe(imageUrl2);
    expect(component._Tile.src).toBe(imageUrl2);
  });

  describe('horizontal layout', () => {
    beforeEach(() => {
      [component, testRenderer] = createComponent({
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
      expect(component._Metadata.x).toBe(
        component.style.imageSize.w + component.style.paddingHorizontal
      );
      expect(component._Metadata.y).toBe(component.style.paddingVertical);
    });
  });

  describe('vertical layout', () => {
    beforeEach(() => {
      [component, testRenderer] = createComponent({
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
      expect(component._Metadata.x).toBe(component.style.paddingHorizontal);
      expect(component._Metadata.y).toBe(
        component.style.imageSize.h + component.style.paddingVertical
      );
    });
  });
});
