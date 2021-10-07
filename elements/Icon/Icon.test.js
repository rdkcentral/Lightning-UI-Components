import TestUtils from '../../test/lightning-test-utils';
import Icon from '.';

const createIcon = TestUtils.makeCreateComponent(Icon, {
  w: 50,
  h: 50
});

describe('Icon', () => {
  it('renders an icon path', () => {
    // eslint-disable-next-line no-unused-vars
    const [_, testRenderer] = createIcon({
      icon: 'assets/images/ic_lightning_white_32.png'
    });
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('renders an svg path', () => {
    // eslint-disable-next-line no-unused-vars
    const [_, testRenderer] = createIcon({
      icon: 'assets/images/circle.svg'
    });
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('renders an inline svg', () => {
    const svg =
      '<svg xmlns="http://www.w3.org/2000/svg" height="100" width="100"><circle cx="50" cy="50" r="40"/></svg>';
    // eslint-disable-next-line no-unused-vars
    const [_, testRenderer] = createIcon({
      icon: svg
    });
    const tree = testRenderer.toJSON(2);

    expect(tree).toMatchSnapshot();
  });

  it('handles invalid icon sources', () => {
    // eslint-disable-next-line no-unused-vars
    const [_, testRenderer] = createIcon({ icon: 'bad/path' });
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });
});
