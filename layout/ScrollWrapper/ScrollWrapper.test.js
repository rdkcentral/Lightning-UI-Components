import TestUtils from '../../test/lightning-test-utils';
import ScrollWrapper from '.';

const createScrollWrapper = TestUtils.makeCreateComponent(ScrollWrapper);

describe('ScrollWrapper', () => {
  let scrollWrapper, testRenderer;

  beforeEach(() => {
    [scrollWrapper, testRenderer] = createScrollWrapper({
      h: 100,
      w: 100,
      scrollDuration: 0,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu aliquam libero. Sed ipsum ligula, egestas et sollicitudin eget, pulvinar et neque. Curabitur commodo nisi sit amet ligula ultrices, a sodales ante consequat. Ut ullamcorper odio et erat sagittis volutpat. Cras consequat dolor in nisi sagittis, quis volutpat mi tempor. Praesent condimentum quis purus eget sodales. Praesent tempus suscipit felis, quis gravida massa tempor ut.'
    });
    testRenderer.update();
  });

  afterEach(() => {
    scrollWrapper = null;
    testRenderer = null;
  });

  it('renders a content string', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
    expect(scrollWrapper._ScrollContainer.children[0].text.text).toBe(
      scrollWrapper.content
    );
    expect(scrollWrapper._ScrollContainer.h).toBeGreaterThan(scrollWrapper.h);
  });

  it('renders a content array', () => {
    [scrollWrapper, testRenderer] = createScrollWrapper({
      h: 100,
      w: 100,
      scrollDuration: 0,
      content: [
        {
          text: 'Heading!',
          style: {
            fontFace: 'XfinityBrownBold',
            alignContent: 'center'
          }
        },
        {
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu aliquam libero. Sed ipsum ligula, egestas et sollicitudin eget, pulvinar et neque. Curabitur commodo nisi sit amet ligula ultrices, a sodales ante consequat. Ut ullamcorper odio et erat sagittis volutpat. Cras consequat dolor in nisi sagittis, quis volutpat mi tempor. Praesent condimentum quis purus eget sodales. Praesent tempus suscipit felis, quis gravida massa tempor ut.',
          style: {
            alignContent: 'left',
            fontSize: '30'
          }
        }
      ]
    });
    testRenderer.update();

    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
    expect(scrollWrapper._ScrollContainer.children[0].text.text).toBe(
      scrollWrapper.content[0].text
    );
    expect(scrollWrapper._ScrollContainer.children[1].text.text).toBe(
      scrollWrapper.content[1].text
    );
    expect(scrollWrapper._ScrollContainer.finalH).toBeGreaterThan(
      scrollWrapper.h
    );
  });

  it('gracefully fails if no content is provided', () => {
    [scrollWrapper, testRenderer] = createScrollWrapper({
      h: 100,
      w: 100,
      scrollDuration: 0,
      content: undefined
    });
    testRenderer.update();

    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('hides scroll bar on unfocus', () => {
    testRenderer.unfocus();
    testRenderer.update();
    expect(scrollWrapper._ScrollBarWrapper.alpha).toBe(0);
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

  it('does not scroll beyond boundaries', done => {
    testRenderer.keyPress('Up');
    expect(scrollWrapper._scrollContainerY).toBe(0);
    expect(scrollWrapper._scrollBarY).toBe(0);

    scrollWrapper.autoScrollDelay = 0;
    scrollWrapper.autoScrollSpeed = 0;
    scrollWrapper.scrollStep = scrollWrapper._ScrollContainer.h;
    scrollWrapper.autoScroll = true;

    setTimeout(() => {
      testRenderer.update();
      expect(scrollWrapper._ScrollContainer.y).toBe(
        scrollWrapper.h - scrollWrapper._ScrollContainer.h
      );
      testRenderer.keyPress('Down');
      expect(scrollWrapper._ScrollContainer.y).toBe(
        scrollWrapper.h - scrollWrapper._ScrollContainer.h
      );
      done();
    }, 1);
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
    expect(scrollWrapper._scrollStep).toBe(10);
    scrollWrapper._scrollStep = 5;
    expect(scrollWrapper._scrollStep).toBe(5);
  });

  it('autoScrolls', done => {
    scrollWrapper.autoScrollDelay = 0;
    scrollWrapper.autoScrollSpeed = 0;
    scrollWrapper.scrollStep = 100;
    scrollWrapper.autoScroll = true;
    setTimeout(() => {
      testRenderer.update();
      expect(scrollWrapper._ScrollContainer.y).toBe(-100);
      done();
    }, 1);
  });
});
