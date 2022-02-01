import lng from '@lightningjs/core';
import TestUtils from '../../test/lightning-test-utils';
import CarouselRow from '.';

const createCarouselRow = TestUtils.makeCreateComponent(CarouselRow);

const baseItem = {
  type: lng.Component,
  w: 80,
  h: 80
};
const items = Array(5)
  .fill()
  .map((item, index) => {
    return {
      ...baseItem,
      title: index
    };
  });

describe('Carousel Row', () => {
  let carouselRow, testRenderer;

  beforeEach(() => {
    [carouselRow, testRenderer] = createCarouselRow({
      h: 80,
      w: 400,
      upCount: 5,
      selectedIndex: 0,
      items
    });
  });
  afterEach(() => {
    carouselRow = null;
    testRenderer = null;
  });

  it('should render', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('should carousel moving left', () => {
    const lastIndex = carouselRow.Items.children.length - 1;
    const prevLastChild = carouselRow.Items.childList.getAt(lastIndex);
    testRenderer.keyPress('Left');
    const newFirstChild = carouselRow.Items.childList.getAt(0);
    expect(newFirstChild.title).toEqual(prevLastChild.title);
  });

  it('should carousel moving right', () => {
    const lastIndex = carouselRow.Items.children.length - 1;
    const prevFirstChild = carouselRow.Items.childList.getAt(0);
    testRenderer.keyPress('Right');
    const newLastChild = carouselRow.Items.childList.getAt(lastIndex);
    expect(newLastChild.title).toEqual(prevFirstChild.title);
  });
});
