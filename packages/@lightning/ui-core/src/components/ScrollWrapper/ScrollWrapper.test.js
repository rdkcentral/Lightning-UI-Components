import lng from '@lightningjs/core';
import {
  makeCreateComponent,
  completeAnimation
} from '@lightning/ui-test-utils';
import ScrollWrapper from './index.js';
import { jest } from '@jest/globals';

const createScrollWrapper = makeCreateComponent(ScrollWrapper, {
  h: 100,
  w: 100
});

const lorum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu aliquam libero. Sed ipsum ligula, egestas et sollicitudin eget, pulvinar et neque. Curabitur commodo nisi sit amet ligula ultrices, a sodales ante consequat. Ut ullamcorper odio et erat sagittis volutpat. Cras consequat dolor in nisi sagittis, quis volutpat mi tempor. Praesent condimentum quis purus eget sodales. Praesent tempus suscipit felis, quis gravida massa tempor ut.';

describe('ScrollWrapper', () => {
  let scrollWrapper, testRenderer;

  beforeEach(() => {
    [scrollWrapper, testRenderer] = createScrollWrapper({
      scrollDuration: 0,
      content: lorum
    });
    testRenderer.update();
  });

  it('sets the announce string to the content text or object', () => {
    const content = 'This is a sentence';
    scrollWrapper.content = content;
    testRenderer.forceAllUpdates();
    expect(scrollWrapper.announce).toBe(content);

    const contentArray = [
      { text: 'This is a sentence' },
      { text: 'so is this' }
    ];
    scrollWrapper.content = contentArray;
    testRenderer.forceAllUpdates();
    expect(scrollWrapper.announce).toEqual(contentArray.map(item => item.text));
  });

  it('overrides the announce string', () => {
    const overrideString = 'Custom announce string';
    scrollWrapper.announce = overrideString;
    testRenderer.forceAllUpdates();
    expect(scrollWrapper.announce).toBe(overrideString);
  });

  it('renders a content string', async () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
    expect(scrollWrapper._ScrollContainer.children[0].content).toBe(
      scrollWrapper.content
    );
    expect(scrollWrapper._ScrollContainer.finalH).toBeGreaterThan(
      scrollWrapper.h
    );
  });

  it('renders a content array', async () => {
    [scrollWrapper, testRenderer] = createScrollWrapper(
      {
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
            text: lorum,
            style: {
              alignContent: 'left',
              fontSize: '30'
            }
          },
          {
            rect: true,
            w: 100,
            h: 100
          }
        ]
      },
      {
        spyOnMethods: ['_update']
      }
    );
    testRenderer.update();

    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
    expect(scrollWrapper._ScrollContainer.children[0].content).toBe(
      scrollWrapper.content[0].text
    );
    expect(scrollWrapper._ScrollContainer.children[1].content).toBe(
      scrollWrapper.content[1].text
    );
    expect(scrollWrapper._ScrollContainer.finalH).toBeGreaterThan(
      scrollWrapper.h
    );
  });

  it('gracefully fails if no content is provided', () => {
    [scrollWrapper, testRenderer] = createScrollWrapper({
      scrollDuration: 0,
      content: undefined
    });
    testRenderer.update();

    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
    expect(scrollWrapper._ScrollContainer.children.length).toBe(0);
  });

  it('should not display a scroll bar when unfocused', async () => {
    [scrollWrapper, testRenderer] = createScrollWrapper(
      {
        content: 'content',
        showScrollBar: true
      },
      { focused: false }
    );

    await completeAnimation(scrollWrapper._Slider, 'alpha');
    expect(scrollWrapper._Slider.alpha).toBe(0);

    // trigger _update by updating content property
    // scrollbar should remain hidden until ScrollWrapper is the focused element
    scrollWrapper.content = 'new content';
    await completeAnimation(scrollWrapper._Slider, 'alpha');
    expect(scrollWrapper._Slider.alpha).toBe(0);
  });

  it('should display a scroll bar when focused', async () => {
    [scrollWrapper, testRenderer] = createScrollWrapper({
      content: 'content',
      showScrollBar: true
    });

    await completeAnimation(scrollWrapper._Slider, 'alpha');
    expect(scrollWrapper._Slider.alpha).toBe(1);

    // trigger _update by updating content property
    scrollWrapper.content = 'new content';
    await completeAnimation(scrollWrapper._Slider, 'alpha');
    expect(scrollWrapper._Slider.alpha).toBe(1);
  });

  it('hides and shows the scroll bar related to focus', async () => {
    [scrollWrapper, testRenderer] = createScrollWrapper(
      {
        content: 'content',
        showScrollBar: true
      },
      { focused: false }
    );
    await completeAnimation(scrollWrapper._Slider, 'alpha');
    expect(scrollWrapper._Slider.alpha).toBe(0);

    testRenderer.focus();
    await completeAnimation(scrollWrapper._Slider, 'alpha');
    expect(scrollWrapper._Slider.alpha).toBe(1);

    testRenderer.unfocus();
    await completeAnimation(scrollWrapper._Slider, 'alpha');
    expect(scrollWrapper._Slider.alpha).toBe(0);
  });

  it('should not display a scrollbar if showScrollBar property is false', async () => {
    [scrollWrapper, testRenderer] = createScrollWrapper({
      content: 'content',
      showScrollBar: false
    });
    await completeAnimation(scrollWrapper._Slider, 'alpha');
    expect(scrollWrapper._Slider.alpha).toBe(0);
  });

  it('scrolls up and down', () => {
    expect(scrollWrapper._scrollContainerY).toBe(0);
    expect(scrollWrapper._Slider.value).toBe(0);

    testRenderer.keyPress('Down');

    expect(scrollWrapper._scrollContainerY).toBeLessThan(0);
    expect(scrollWrapper._Slider.value).toBeGreaterThan(0);

    testRenderer.keyPress('Up');

    expect(scrollWrapper._scrollContainerY).toBe(0);
    expect(scrollWrapper._Slider.value).toBe(0);
  });

  it('does not scroll beyond boundaries', async () => {
    scrollWrapper.h = scrollWrapper._ScrollContainer.finalH - 3;
    scrollWrapper.scrollStep = 2;

    expect(scrollWrapper._ScrollContainer.y).toBe(0);

    testRenderer.keyPress('Down');
    testRenderer.update();

    expect(scrollWrapper._ScrollContainer.y).toBe(-2);

    testRenderer.keyPress('Down');
    testRenderer.update();

    const scrollEndY =
      scrollWrapper.renderHeight -
      scrollWrapper._ScrollContainer.finalH -
      scrollWrapper.style.contentMarginTop;
    expect(scrollWrapper._ScrollContainer.y).toBe(scrollEndY);
  });

  it('should fire a singal when scrolling has reached the end of the scroll container', () => {
    scrollWrapper.h = scrollWrapper._ScrollContainer.finalH - 1;
    jest.spyOn(scrollWrapper, 'fireAncestors');
    expect(scrollWrapper.fireAncestors).not.toHaveBeenCalled();

    testRenderer.keyPress('Down');
    testRenderer.update();

    expect(scrollWrapper.fireAncestors).toHaveBeenCalledWith(
      '$scrollChanged',
      'endDown',
      scrollWrapper
    );
  });

  it('should scroll up by the scroll step', () => {
    scrollWrapper.scrollStep = 100;
    testRenderer.keyPress('Down');

    const initialY = scrollWrapper._ScrollContainer.y;
    scrollWrapper.scrollStep = 1;
    testRenderer.keyPress('Up');

    testRenderer.update();

    expect(scrollWrapper._ScrollContainer.y).not.toBe(0);
    expect(scrollWrapper._ScrollContainer.y).toBeGreaterThan(initialY);
  });

  it('resets scroll', () => {
    testRenderer.keyPress('Down');
    testRenderer.keyPress('Down');
    scrollWrapper.resetScroll();
    testRenderer.update();
    expect(scrollWrapper._ScrollContainer.y).toBe(0);
    expect(scrollWrapper._Slider.value).toBe(0);
  });

  it('gets and sets scrollStep', () => {
    expect(scrollWrapper._scrollStep).toBe(10);
    scrollWrapper._scrollStep = 5;
    expect(scrollWrapper._scrollStep).toBe(5);
  });

  it('autoScrolls', async () => {
    [scrollWrapper, testRenderer] = createScrollWrapper({
      scrollStep: 1,
      scrollDuration: 0,
      content: lorum
    });

    scrollWrapper.h = scrollWrapper._ScrollContainer.finalH - 2;
    scrollWrapper.autoScroll = true;

    expect(scrollWrapper._ScrollContainer.y).toBe(0);

    await completeAnimation(scrollWrapper._ScrollContainer, 'y');

    expect(scrollWrapper._ScrollContainer.y).toBe(-1);

    await completeAnimation(scrollWrapper._ScrollContainer, 'y');

    expect(scrollWrapper._ScrollContainer.y).toBe(-2);
  });

  it('should fade out scrollable content by default', () => {
    scrollWrapper.content = 'my string';
    scrollWrapper.requestUpdate(true);
    testRenderer.forceAllUpdates();
    expect(scrollWrapper._FadeContainer.shader).toBeNull();

    scrollWrapper.content = lorum;

    scrollWrapper._update();
    testRenderer.forceAllUpdates();
    expect(scrollWrapper._FadeContainer.shader).not.toBeNull();
    expect(scrollWrapper._FadeContainer.shader).toBeInstanceOf(
      lng.shaders.FadeOut
    );
  });

  it('should not fade out scrollable content when fadeContent property is false', () => {
    scrollWrapper.content = 'my string';
    scrollWrapper.fadeContent = false;
    scrollWrapper._update();
    testRenderer.forceAllUpdates();
    expect(scrollWrapper._FadeContainer.shader).toBeNull();

    scrollWrapper.content = lorum;

    scrollWrapper.requestUpdate(true);
    testRenderer.forceAllUpdates();
    expect(scrollWrapper._FadeContainer.shader).toBeNull();
  });

  it('should default the scroll animation to what is set in the theme styles', () => {
    scrollWrapper.scrollDuration = undefined;
    expect(scrollWrapper._scrollAnimation).toEqual(scrollWrapper.style.scroll);
  });
});
