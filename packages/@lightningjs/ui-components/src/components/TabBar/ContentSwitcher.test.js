import lng from '@lightningjs/core';
import { jest } from '@jest/globals';
import {
  makeCreateComponent,
  completeAnimation
} from '@lightningjs/ui-test-utils';
import { Row, Tile } from '../index.js';
import ContentSwitcher from './ContentSwitcher.js';

const createComponent = makeCreateComponent(ContentSwitcher);

const tileComp = {
  type: Tile,
  w: 410,
  h: 230
};
const patchObj = {
  type: Row,
  items: [tileComp, tileComp, tileComp],
  autoResizeHeight: true,
  lazyScroll: true
};

const compFunc = () => patchObj;

const compPromise = () => {
  return new Promise(res => {
    res(patchObj);
  });
};

describe('ContentSwitcher', () => {
  let contentSwitcher, testRenderer;

  beforeEach(async () => {
    [contentSwitcher, testRenderer] = createComponent(
      {},
      { spyOnMethods: ['_updateContent'] }
    );
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('should create a component from patch objects', async () => {
    contentSwitcher.contentItems = [patchObj, patchObj];

    await contentSwitcher.__updateContentSpyPromise;

    expect(contentSwitcher.childList.length).toBe(2);
    expect(contentSwitcher.tag('Content0')).toBeInstanceOf(lng.Component);
    expect(contentSwitcher.tag('Content0').alpha).toBe(0);
    expect(contentSwitcher.tag('Content1')).toBeInstanceOf(lng.Component);
    expect(contentSwitcher.tag('Content1').alpha).toBe(0);
  });

  it('should should create a component from a function', async () => {
    contentSwitcher.contentItems = [compFunc, compFunc];

    await contentSwitcher.__updateContentSpyPromise;

    expect(contentSwitcher.childList.length).toBe(2);
    expect(contentSwitcher.tag('Content0')).toBeInstanceOf(lng.Component);
    expect(contentSwitcher.tag('Content0').alpha).toBe(0);
    expect(contentSwitcher.tag('Content1')).toBeInstanceOf(lng.Component);
    expect(contentSwitcher.tag('Content1').alpha).toBe(0);
  });

  it('should should create a component from a promise', async () => {
    contentSwitcher.contentItems = [compPromise, compPromise];

    await contentSwitcher.__updateContentSpyPromise;

    expect(contentSwitcher.childList.length).toBe(2);
    expect(contentSwitcher.tag('Content0')).toBeInstanceOf(lng.Component);
    expect(contentSwitcher.tag('Content0').alpha).toBe(0);
    expect(contentSwitcher.tag('Content1')).toBeInstanceOf(lng.Component);
    expect(contentSwitcher.tag('Content1').alpha).toBe(0);
  });

  it('should display the selected content when selected', async () => {
    [contentSwitcher, testRenderer] = createComponent(
      {
        contentItems: [patchObj, patchObj]
      },
      { spyOnMethods: ['_updateSelected'] }
    );

    await contentSwitcher.__updateSelectedSpyPromise;
    await completeAnimation(contentSwitcher.tag('Content0'));
    testRenderer.update();

    expect(contentSwitcher.tag('Content0').alpha).toBe(1);
    expect(contentSwitcher.tag('Content1').alpha).toBe(0);

    contentSwitcher.selectedIndex = 1;

    await contentSwitcher.__updateSelectedSpyPromise;
    await completeAnimation(contentSwitcher.tag('Content1'));
    testRenderer.update();

    expect(contentSwitcher.tag('Content0').alpha).toBe(0);
    expect(contentSwitcher.tag('Content1').alpha).toBe(1);
  });

  describe('updating height', () => {
    const noContent = {};
    let smallTile, bigTile;
    beforeEach(() => {
      smallTile = { ...tileComp, h: 50 };
      bigTile = { ...tileComp, h: 100 };
      [contentSwitcher, testRenderer] = createComponent(
        {
          contentItems: [noContent, smallTile, bigTile]
        },
        { spyOnMethods: ['_updateSelected'] }
      );
      jest.spyOn(contentSwitcher, 'signal');
    });

    it('should not update height when selected index has not changed', async () => {
      expect(contentSwitcher.signal).not.toHaveBeenCalled();

      contentSwitcher.selectedIndex = 1;
      await contentSwitcher.__updateSelectedSpyPromise;
      testRenderer.update();

      expect(contentSwitcher.signal).toHaveBeenCalledWith(
        'contentHeightChange',
        smallTile.h
      );
      expect(contentSwitcher.h).toBe(smallTile.h);

      contentSwitcher.signal.mockClear();
      contentSwitcher.selectedIndex = 1;
      await contentSwitcher.__updateSelectedSpyPromise;
      testRenderer.update();

      expect(contentSwitcher.signal).not.toHaveBeenCalled();
      expect(contentSwitcher.h).toBe(smallTile.h);
    });

    it('should update the height when the selected index has changed', async () => {
      expect(contentSwitcher.selectedIndex).toBe(0);
      expect(contentSwitcher.signal).not.toHaveBeenCalled();
      expect(contentSwitcher.h).toBe(0);

      contentSwitcher.selectedIndex = 1;
      await contentSwitcher.__updateSelectedSpyPromise;
      testRenderer.update();

      expect(contentSwitcher.signal).toHaveBeenCalledWith(
        'contentHeightChange',
        smallTile.h
      );
      expect(contentSwitcher.h).toBe(smallTile.h);

      contentSwitcher.signal.mockClear();
      contentSwitcher.selectedIndex = 0;
      await contentSwitcher.__updateSelectedSpyPromise;
      testRenderer.update();

      expect(contentSwitcher.signal).toHaveBeenCalledWith(
        'contentHeightChange',
        0
      );
      expect(contentSwitcher.h).toBe(0);
    });
  });
});
