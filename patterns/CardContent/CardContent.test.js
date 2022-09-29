import TestUtils from '../../test/lightning-test-utils';
import CardContent from './CardContent';
import Tile from '../../elements/Tile';

const icon = TestUtils.pathToDataURI('assets/images/ic_lightning_white_32.png');

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
