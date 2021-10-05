import lng from '@lightningjs/core';
import TestUtils from '../../test/lightning-test-utils';
import withMetadata from '.';
import Tile from '../../elements/Tile';
import { MetadataCard, MetadataTile } from '../../elements';

const createTileWithMetadata = (base, props) =>
  TestUtils.makeCreateComponent(withMetadata(base))(props);

describe('withMetadata', () => {
  let tileWithMetadata, testRenderer;
  const w = 320;
  const h = 180;

  beforeEach(() => {
    [tileWithMetadata, testRenderer] = createTileWithMetadata();
  });
  afterEach(() => {
    tileWithMetadata = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('should update paddingTop and Metadata y position', async done => {
    const paddingTop = 50;
    [tileWithMetadata, testRenderer] = createTileWithMetadata(Tile, {
      w,
      h,
      paddingTop,
      Metadata: { type: MetadataTile }
    });
    await TestUtils.nextTick();
    expect(tileWithMetadata.paddingTop).toBe(paddingTop);
    testRenderer.focus();
    await TestUtils.nextTick();
    expect(tileWithMetadata.Metadata.y).toBe(
      paddingTop +
        tileWithMetadata._focusedTileHeight -
        (tileWithMetadata._focusedTileHeight -
          tileWithMetadata._unfocusedTileHeight) /
          2
    );
    tileWithMetadata._smooth = false;
    testRenderer.unfocus();
    await TestUtils.nextTick();
    expect(tileWithMetadata.Metadata.y).toBe(h + paddingTop);
    done();
  });

  it('should update paddingSide and Metadata x position', async done => {
    const paddingSide = 20;
    [tileWithMetadata, testRenderer] = createTileWithMetadata(Tile, {
      w,
      h,
      paddingSide,
      Metadata: { type: MetadataTile }
    });
    testRenderer.update();
    await TestUtils.nextTick();
    expect(tileWithMetadata.paddingSide).toBe(paddingSide);
    testRenderer.focus();
    await TestUtils.nextTick();
    expect(tileWithMetadata.Metadata.x).toBe(
      paddingSide -
        (tileWithMetadata._focusedTileWidth -
          tileWithMetadata._unfocusedTileWidth) /
          2
    );
    tileWithMetadata._smooth = false;
    testRenderer.unfocus();
    await TestUtils.nextTick();
    expect(tileWithMetadata.Metadata.x).toBe(paddingSide);
    done();
  });

  it('should only display metadata on unfocus if persistentMetadata is true', async done => {
    tileWithMetadata.Metadata = { type: MetadataTile };
    tileWithMetadata._smooth = false;
    testRenderer.update();
    testRenderer.unfocus();
    await TestUtils.nextTick();
    expect(tileWithMetadata.persistentMetadata).toBeUndefined();
    expect(tileWithMetadata.Metadata.alpha).toBe(0.001);
    tileWithMetadata.persistentMetadata = false;
    testRenderer.update();
    testRenderer.unfocus();
    await TestUtils.nextTick();
    expect(tileWithMetadata.persistentMetadata).toBe(false);
    expect(tileWithMetadata.Metadata.alpha).toBe(0.001);
    tileWithMetadata.persistentMetadata = true;
    testRenderer.update();
    testRenderer.unfocus();
    await TestUtils.nextTick();
    expect(tileWithMetadata.persistentMetadata).toBe(true);
    expect(tileWithMetadata.Metadata.alpha).toBe(1);
    done();
  });
});
