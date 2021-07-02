import TestUtils from '../../test/lightning-test-utils';
import DataItem from '.';
import { getHexColor } from '../../Styles';

const createDataItem = TestUtils.makeCreateComponent(DataItem);

describe('DataItem', () => {
  let dataitem, testRenderer;

  beforeEach(() => {
    [dataitem, testRenderer] = createDataItem();
  });
  afterEach(() => {
    dataitem = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('sets background to h and w passed', () => {
    [dataitem, testRenderer] = createDataItem({
      h: 100,
      w: 150
    });
    expect(dataitem._Background.h).toEqual(100);
    expect(dataitem._Background.w).toEqual(150);
  });

  it('sets content to h and w passed', () => {
    [dataitem, testRenderer] = createDataItem({
      h: 100,
      w: 150
    });
    expect(dataitem._Content.h).toEqual(100);
    expect(dataitem._Content.w).toEqual(150);
  });

  it('sets a background image if passed', () => {
    expect(dataitem._backgroundImage).toBeUndefined();
    dataitem.backgroundImage = 'puppy.png';
    expect(dataitem._backgroundImage).toEqual('puppy.png');
  });

  it('takes in a margin type of object with X and Y keys', () => {
    [dataitem, testRenderer] = createDataItem({
      margin: {
        x: 10,
        y: 25
      }
    });
    expect(dataitem._marginX).toEqual(10);
    expect(dataitem._marginY).toEqual(25);
  });

  it('takes in a margin type of not an object', () => {
    [dataitem, testRenderer] = createDataItem({
      margin: 10
    });
    expect(dataitem._marginX).toEqual(10);
    expect(dataitem._marginY).toEqual(10);
  });

  it('should patch content', done => {
    [dataitem, testRenderer] = createDataItem({
      content: {
        Rect: {
          rect: true,
          color: 0xffffffff,
          h: 10,
          w: 10
        }
      }
    });
    testRenderer.update();
    dataitem._whenEnabled.then(() => {
      expect(dataitem.tag('Rect')).toBeDefined();
      expect(dataitem.tag('Rect').color).toEqual(getHexColor('ffffff'));
      done();
    });
  });

  it('should update item and focus ring scale on unfocus', done => {
    dataitem._smooth = false;
    testRenderer.unfocus();
    testRenderer.update();
    dataitem._whenEnabled.then(() => {
      expect(dataitem.scale).toEqual(1);
      done();
    });
  });

  it('should update item and focus ring scale on focus', done => {
    [dataitem, testRenderer] = createDataItem({
      h: 100,
      w: 150
    });
    dataitem._smooth = false;
    dataitem._focus();
    testRenderer.update();
    dataitem._whenEnabled.then(() => {
      expect(dataitem.scale).toEqual((dataitem.w + 24) / dataitem.w);
      done();
    });
  });
});
