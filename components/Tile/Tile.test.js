import TestRenderer from '../lightning-test-renderer';
import Tile from '.';
import { readFileSync } from 'fs';

const kabob = readFileSync('./assets/images/kabob_320x180.jpg').toString(
  'base64'
);
const tileFactory = (args = {}) => ({
  Component: {
    type: Tile,
    src: 'data:image/jpg;base64, ' + kabob,
    w: 320,
    h: 180,
    ...args
  }
});

describe('Tile', () => {
  function renderTile(args) {
    let component = tileFactory(args);
    let testRenderer = TestRenderer.create(component);
    return [testRenderer.getInstance(), testRenderer];
  }

  it('should render', () => {
    let [tile, testRenderer] = renderTile();
    let tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('should render with blur', done => {
    let [tile, testRenderer] = renderTile({ blur: 2 });

    tile._Item.on('txLoaded', () => {
      let tree = testRenderer.toJSON(2);
      expect(tree).toMatchSnapshot();
      done();
    });
  });

  it('should render with rounded corners', () => {
    let [tile, testRenderer] = renderTile({ rounded: 16 });
    let tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('should render with shadow', () => {
    let [tile, testRenderer] = renderTile({ shadow: { color: 0xffffffff } });
    let tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('should render with all options', done => {
    let [tile, testRenderer] = renderTile({
      blur: 2,
      rounded: 16,
      shadow: { color: 0xffffffff }
    });

    tile._Item.on('txLoaded', () => {
      let tree = testRenderer.toJSON(2);
      expect(tree).toMatchSnapshot();
      done();
    });
  });
});
