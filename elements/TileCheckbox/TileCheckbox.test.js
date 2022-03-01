import TestUtils from '../../test/lightning-test-utils';
import LegacyCheckbox from '../Checkbox/LegacyCheckbox';
import TileCheckbox from '.';

const kabob = TestUtils.pathToDataURI('./assets/images/kabob_320x180.jpg');

const createTileCheckbox = TestUtils.makeCreateComponent(TileCheckbox);

describe('TileCheckbox', () => {
  let tileCheckbox, testRenderer;

  it('should match the snapshot', () => {
    [tileCheckbox, testRenderer] = createTileCheckbox({
      src: kabob,
      w: 320,
      h: 180,
      checked: true,
      placement: 'center'
    });

    expect(testRenderer.toJSON(2)).toMatchSnapshot();
  });

  it('should not display the checkbox when it is unchecked', () => {
    [tileCheckbox, testRenderer] = createTileCheckbox({ checked: false });

    testRenderer.forceAllUpdates();

    expect(tileCheckbox._Checkbox).toBeUndefined();
  });

  it('should default checkbox placement to the right', () => {
    const checked = true;
    const w = 320;
    [tileCheckbox, testRenderer] = createTileCheckbox({ w, checked });

    testRenderer.forceAllUpdates();

    expect(tileCheckbox.placement).toEqual('right');

    expect(tileCheckbox._Checkbox).toMatchObject({
      checked,
      x: w - LegacyCheckbox.styles.w
    });
  });

  it('should allow center aligned placement of the checkbox', () => {
    const w = 320;
    const checked = true;
    const placement = 'center';
    [tileCheckbox, testRenderer] = createTileCheckbox({
      w,
      checked,
      placement
    });

    testRenderer.forceAllUpdates();

    expect(tileCheckbox.placement).toEqual(placement);
    expect(tileCheckbox._Checkbox).toMatchObject({
      checked,
      x: w / 2
    });
  });
});
