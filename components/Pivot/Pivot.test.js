import Pivot from '.';
import TestUtils from '../lightning-test-utils';
import { getHexColor } from '../Styles';

const icon = TestUtils.pathToDataURI('assets/images/ic_lightning_white_32.png');

const createPivot = TestUtils.makeCreateComponent(Pivot, {
  title: 'Pivot'
});

describe('Pivot', () => {
  let pivot, testRenderer;
  beforeEach(() => {
    [pivot, testRenderer] = createPivot();
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

  it("should update it's shadow width for long titles", () => {
    [pivot, testRenderer] = createPivot({
      title:
        'This is a really long title title title title title title title title title title title title title title title title title title title title title title title title title title title title title'
    });
    const spy = jest.spyOn(pivot, 'patch');

    // default width
    expect(pivot.w).toBe(185);

    testRenderer.update();

    // update width
    expect(pivot.w).toBe(189);
    // lookup ID provides texture width: shadow{w}{h}{radius}{blur}{...margin}
    const { lookupId } = spy.mock.calls[
      spy.mock.calls.length - 1
    ][0].DropShadow.texture.content;
    expect(lookupId).toEqual('shadow173,32,16,32,8,8,8,8');
  });

  describe('style', () => {
    it('should set background to stroke', () => {
      [pivot, testRenderer] = createPivot({
        backgroundType: 'stroke'
      });

      expect(pivot.color).toBe(0);
      expect(pivot._stroke).toEqual(
        expect.objectContaining({ color: getHexColor('ECECF2'), weight: 2 })
      );
    });

    it('should set background to fill', () => {
      [pivot, testRenderer] = createPivot({
        backgroundType: 'fill'
      });
      expect(pivot.color).toBe(getHexColor('232328'));
    });
    it('should set background to float', () => {
      [pivot, testRenderer] = createPivot({
        backgroundType: 'float'
      });
      expect(pivot.color).toBe(0);
    });
    it('should default background to float', () => {
      [pivot, testRenderer] = createPivot({
        backgroundType: 'orange'
      });
      expect(pivot.color).toBe(0);
    });
  });

  describe('icon', () => {
    it('should patch in an icon', () => {
      [pivot, testRenderer] = createPivot({
        title: 'Action Button',
        icon
      });
      expect(pivot._icon).toEqual(
        expect.objectContaining({ src: icon, size: 32, spacing: 8 })
      );
    });
  });

  describe('loading', () => {
    it('should load if no title is set', () => {
      [pivot, testRenderer] = createPivot({
        title: undefined
      });
      expect(pivot._loading.isPlaying()).toBe(true);
    });
    it('should stop loading once title is set', () => {
      [pivot, testRenderer] = createPivot({
        title: undefined
      });
      testRenderer.update();
      expect(pivot._loading.isPlaying()).toBe(true);
      pivot.title = 'Action Button';
      expect(pivot._loading.isPlaying()).toBe(false);
    });
  });

  describe('focus', () => {
    it('should provide patch function in theme', () => {
      expect(pivot.styles.unfocus.patch).toBeInstanceOf(Function);
      expect(pivot.styles.focus.patch).toBeInstanceOf(Function);
    });

    it('should update color and scale on focus', () => {
      pivot._focus();
      testRenderer.update();
      expect(pivot.color).toBe(getHexColor('ECECF2'));
      expect(pivot.scale).toBe(1.26);
      expect(pivot._Title.color).toBe(getHexColor('000000', 95));
    });

    it('should update color and scale on unfocus', () => {
      pivot._unfocus();
      testRenderer.update();
      expect(pivot.color).toBe(0);
      expect(pivot.scale).toBe(1);
      expect(pivot._Title.color).toBe(getHexColor('FFFFFF', 95));
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
