import TestUtils from '../lightning-test-utils';
import ScrollWrapper from '.';

const createScrollWrapper = TestUtils.makeCreateComponent(ScrollWrapper);

describe('ScrollWrapper', () => {
  let scrollWrapper, testRenderer;

  beforeEach(() => {
    [scrollWrapper, testRenderer] = createScrollWrapper({
      h: 100,
      w: 100,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu aliquam libero. Sed ipsum ligula, egestas et sollicitudin eget, pulvinar et neque. Curabitur commodo nisi sit amet ligula ultrices, a sodales ante consequat. Ut ullamcorper odio et erat sagittis volutpat. Cras consequat dolor in nisi sagittis, quis volutpat mi tempor. Praesent condimentum quis purus eget sodales. Praesent tempus suscipit felis, quis gravida massa tempor ut.'
    });
    testRenderer.update();
  });

  afterEach(() => {
    scrollWrapper = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
    expect(scrollWrapper._ScrollContainer.text.text).toBe(
      scrollWrapper.content
    );
    expect(scrollWrapper._ScrollContainer.h).toBeGreaterThan(scrollWrapper.h);
  });

  it('hides scroll bar on unfocus', () => {
    testRenderer.unfocus();
    testRenderer.update();
    expect(scrollWrapper._ScrollBarContainer.alpha).toBe(0);
  });

  it('scrolls up and down', () => {
    expect(scrollWrapper._scrollContainerY).toBe(0);
    expect(scrollWrapper._scrollBarY).toBe(0);

    testRenderer.keyPress('Down');

    expect(scrollWrapper._scrollContainerY).toBeLessThan(0);
    expect(scrollWrapper._scrollBarY).toBeGreaterThan(0);

    testRenderer.keyPress('Up');

    expect(scrollWrapper._scrollContainerY).toBe(0);
    expect(scrollWrapper._scrollBarY).toBe(0);
  });

  it('does not scroll beyond boundaries', () => {
    testRenderer.keyPress('Up');
    expect(scrollWrapper._scrollContainerY).toBe(0);
    expect(scrollWrapper._scrollBarY).toBe(0);

    testRenderer.keyPress('Down');
    testRenderer.keyPress('Down');
    testRenderer.keyPress('Down');
    testRenderer.keyPress('Down');
    testRenderer.keyPress('Down');
    testRenderer.keyPress('Down');
    testRenderer.keyPress('Down');
    testRenderer.keyPress('Down');
    testRenderer.keyPress('Down');
    testRenderer.keyPress('Down');
    testRenderer.keyPress('Down');
    testRenderer.keyPress('Down');
    testRenderer.keyPress('Down');

    expect(
      scrollWrapper._scrollContainerY + scrollWrapper._ScrollContainer.h
    ).toBe(scrollWrapper.h);

    testRenderer.keyPress('Down');
    expect(
      scrollWrapper._scrollContainerY + scrollWrapper._ScrollContainer.h
    ).toBe(scrollWrapper.h);
  });

  it('resets scroll', () => {
    testRenderer.keyPress('Down');
    testRenderer.keyPress('Down');
    scrollWrapper.resetScroll();
    testRenderer.update();
    expect(scrollWrapper._ScrollContainer.y).toBe(0);
    expect(scrollWrapper._ScrollBar.y).toBe(0);
  });

  it('gets and sets scrollStep', () => {
    expect(scrollWrapper.scrollStep).toBe(10);
    scrollWrapper.scrollStep = 5;
    expect(scrollWrapper._scrollStep).toBe(5);
  });
});
