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

  it('should update paddingTop and Metadata y position', () => {
    const paddingTop = 50;
    [tileWithMetadata, testRenderer] = createTileWithMetadata(Tile, {
      w,
      h,
      paddingTop,
      Metadata: { type: MetadataTile }
    });
    testRenderer.update();
    expect(tileWithMetadata.paddingTop).toBe(paddingTop);
    testRenderer.focus();
    expect(tileWithMetadata.Metadata.y).toBe(
      paddingTop +
        tileWithMetadata._focusedTileHeight -
        (tileWithMetadata._focusedTileHeight -
          tileWithMetadata._unfocusedTileHeight) /
          2
    );
    tileWithMetadata._smooth = false;
    testRenderer.unfocus();
    expect(tileWithMetadata.Metadata.y).toBe(h + paddingTop);
  });

  it('should update paddingSide and Metadata x position', () => {
    const paddingSide = 20;
    [tileWithMetadata, testRenderer] = createTileWithMetadata(Tile, {
      w,
      h,
      paddingSide,
      Metadata: { type: MetadataTile }
    });
    testRenderer.update();
    expect(tileWithMetadata.paddingSide).toBe(paddingSide);
    testRenderer.focus();
    expect(tileWithMetadata.Metadata.x).toBe(
      paddingSide -
        (tileWithMetadata._focusedTileWidth -
          tileWithMetadata._unfocusedTileWidth) /
          2
    );
    tileWithMetadata._smooth = false;
    testRenderer.unfocus();
    expect(tileWithMetadata.Metadata.x).toBe(paddingSide);
  });

  it('should only display metadata on unfocus if persistentMetadata is true', () => {
    tileWithMetadata.Metadata = { type: MetadataTile };
    tileWithMetadata._smooth = false;

    testRenderer.update();
    testRenderer.unfocus();
    expect(tileWithMetadata.persistentMetadata).toBeUndefined();
    expect(tileWithMetadata.Metadata.alpha).toBe(0);

    tileWithMetadata.persistentMetadata = false;
    testRenderer.update();
    testRenderer.unfocus();
    expect(tileWithMetadata.persistentMetadata).toBe(false);
    expect(tileWithMetadata.Metadata.alpha).toBe(0);

    tileWithMetadata.persistentMetadata = true;
    testRenderer.update();
    testRenderer.unfocus();
    expect(tileWithMetadata.persistentMetadata).toBe(true);
    expect(tileWithMetadata.Metadata.alpha).toBe(1);
  });
});
