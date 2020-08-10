import Pivot, { PIVOT_THEME } from '.';
import TestUtils from '../lightning-test-utils';
import { getHexColor } from '../Styles';

const icon = TestUtils.pathToDataURI('assets/images/ic_lightning_white_32.png');

const createPivot = TestUtils.makeCreateComponent(Pivot);

describe('Pivot', () => {
  let pivot, testRenderer;
  beforeEach(() => {
    [pivot, testRenderer] = createPivot({
      title: 'Pivot'
    });
    testRenderer.update();
  });
  afterEach(() => {
    pivot = null;
    testRenderer = null;
  });

  it('should render', () => {
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should update its width', () => {
    let w = 200;
    pivot._widthChanged({ w });
    expect(pivot.w).toBe(200);
  });

  describe('style', () => {
    it('should set background to stroke', () => {
      [pivot, testRenderer] = createPivot({
        background: 'stroke'
      });
      expect(pivot._Button.color).toBe(0);
      expect(pivot._Button._stroke).toEqual(
        expect.objectContaining({ color: getHexColor('ECECF2'), weight: 2 })
      );
    });
    it('should set background to fill', () => {
      [pivot, testRenderer] = createPivot({ background: 'fill' });
      expect(pivot._Button.color).toBe(getHexColor('232328', 48));
      expect(pivot._Button._stroke).toBeUndefined();
    });
    it('should set background to float', () => {
      [pivot, testRenderer] = createPivot({
        background: 'float'
      });
      expect(pivot._Button.color).toBe(0);
      expect(pivot._Button._stroke).toBeUndefined();
    });
    it('should default background to float', () => {
      [pivot, testRenderer] = createPivot({
        background: 'orange'
      });
      expect(pivot._Button.color).toBe(0);
      expect(pivot._Button._stroke).toBeUndefined();
    });
  });

  describe('icon', () => {
    it('should patch in an icon', done => {
      [pivot, testRenderer] = createPivot({
        title: 'Action Button',
        icon
      });
      pivot._whenEnabled.then(() => {
        expect(pivot._icon).toBe(icon);
        expect(pivot._Button._icon).toEqual(
          expect.objectContaining({ src: icon, size: 32, spacing: 8 })
        );
        done();
      });
    });
  });

  describe('loading', () => {
    it('should load if no title is set', () => {
      [pivot, testRenderer] = createPivot({});
      expect(pivot._loading.isPlaying()).toBe(true);
    });
    it('should stop loading once title is set', () => {
      [pivot, testRenderer] = createPivot({});
      expect(pivot._loading.isPlaying()).toBe(true);
      pivot.title = 'Action Button';
      testRenderer.update();
      expect(pivot._loading.isPlaying()).toBe(false);
    });
  });

  describe('focus', () => {
    it('should set focus on the Button tag', () => {
      expect(pivot._getFocused()).toBe(pivot._Button);
    });

    it('should provide patch funtion in theme', () => {
      expect(PIVOT_THEME.unfocus.patch).toBeInstanceOf(Function);
      expect(PIVOT_THEME.focus.patch).toBeInstanceOf(Function);
    });

    it('should update color and scale on focus', () => {
      pivot._Button._focus();
      testRenderer.update();
      expect(pivot._Button.color).toBe(getHexColor('ECECF2'));
      expect(pivot._Button.scale).toBe(1.18);
      expect(pivot._Button._Title.color).toBe(getHexColor('070707'));
    });

    it('should update color and scale on unfocus', () => {
      pivot._Button._unfocus();
      testRenderer.update();
      expect(pivot._Button.color).toBe(0);
      expect(pivot._Button.scale).toBe(1);
      expect(pivot._Button._Title.color).toBe(getHexColor('FAFAFA'));
    });

    it('should alpha in drop shadow and scale up on focus', () => {
      pivot._focus();
      testRenderer.update();
      expect(pivot._DropShadow.alpha).toBe(1);
      expect(pivot.alpha).toBe(1);
    });
    it('should alpha out drop shadow on unfocus', () => {
      pivot._unfocus();
      testRenderer.update();
      expect(pivot._DropShadow.alpha).toBe(0);
    });
  });
});
