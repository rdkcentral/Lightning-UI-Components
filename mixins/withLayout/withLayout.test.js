import TestUtils from '../../test/lightning-test-utils';
import withLayout from '.';
import { SCREEN } from '../../Styles/Layout';
import Tile from '../../elements/Tile';

const createTileWithLayout = props =>
  TestUtils.makeCreateComponent(withLayout(Tile))(props);

describe('withLayout', () => {
  let tileWithLayout, testRenderer;
  const w = 320;
  const h = 180;
  const ratioY = 9;
  const ratioX = 16;
  const upCount = 5;

  beforeEach(() => {
    [tileWithLayout, testRenderer] = createTileWithLayout();
  });
  afterEach(() => {
    tileWithLayout = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('should explicity set height, width', () => {
    tileWithLayout.itemLayout = { h, w };
    testRenderer.update();
    expect(tileWithLayout.h).toBe(h);
    expect(tileWithLayout.w).toBe(w);
    expect(tileWithLayout.itemLayout).toStrictEqual({ h: 180, w: 320 });
  });

  it('should set width from height and screen dimension', () => {
    tileWithLayout.itemLayout = { h, ratioX, ratioY };
    testRenderer.update();
    expect(tileWithLayout.h).toBe(h);
    expect(tileWithLayout.w).toBe((h * 16) / 9);
  });

  it('should set width from height and upCount', () => {
    tileWithLayout.itemLayout = { h, upCount };
    testRenderer.update();
    expect(tileWithLayout.w).toBeDefined();
    expect(tileWithLayout.w).not.toBe(0);
  });

  it('should set height and width from screen dimensions and upCount', () => {
    tileWithLayout.itemLayout = { ratioX, ratioY, upCount };
    testRenderer.update();
    expect(tileWithLayout.w).toBeDefined();
    expect(tileWithLayout.w).not.toBe(0);
  });

  it('should set height from width and default ratio', () => {
    tileWithLayout.itemLayout = { w };
    testRenderer.update();
    expect(tileWithLayout.h).toBeDefined();
    expect(tileWithLayout.h).toBe((w * SCREEN.h) / SCREEN.w);
  });

  it('should set width from height and default ratio', async () => {
    tileWithLayout.itemLayout = { h };
    testRenderer.update();
    expect(tileWithLayout.w).toBeDefined();
    expect(tileWithLayout.w).toBe((h * SCREEN.w) / SCREEN.h);
  });
});
