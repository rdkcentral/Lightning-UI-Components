import lng from '@lightningjs/core';
import { jest } from '@jest/globals';
import {
  makeCreateComponent,
  completeAnimation
} from '@lightning/ui-test-utils';
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

describe('TabBar', () => {
  let component, testRenderer;

  beforeEach(async () => {
    [component, testRenderer] = createComponent(
      {},
      { spyOnMethods: ['_updateContent'] }
    );
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('should should create a component from patch objects', async () => {
    component.contentItems = [patchObj, patchObj];

    await component.__updateContentSpyPromise;

    expect(component.childList.length).toBe(2);
    expect(component.tag('Content0')).toBeInstanceOf(lng.Component);
    expect(component.tag('Content0').alpha).toBe(0);
    expect(component.tag('Content1')).toBeInstanceOf(lng.Component);
    expect(component.tag('Content1').alpha).toBe(0);
  });

  it('should should create a component from a function', async () => {
    component.contentItems = [compFunc, compFunc];

    await component.__updateContentSpyPromise;

    expect(component.childList.length).toBe(2);
    expect(component.tag('Content0')).toBeInstanceOf(lng.Component);
    expect(component.tag('Content0').alpha).toBe(0);
    expect(component.tag('Content1')).toBeInstanceOf(lng.Component);
    expect(component.tag('Content1').alpha).toBe(0);
  });

  it('should should create a component from a promise', async () => {
    component.contentItems = [compPromise, compPromise];

    await component.__updateContentSpyPromise;

    expect(component.childList.length).toBe(2);
    expect(component.tag('Content0')).toBeInstanceOf(lng.Component);
    expect(component.tag('Content0').alpha).toBe(0);
    expect(component.tag('Content1')).toBeInstanceOf(lng.Component);
    expect(component.tag('Content1').alpha).toBe(0);
  });

  it('should display the selected content when selected', async () => {
    [component, testRenderer] = createComponent(
      {
        contentItems: [patchObj, patchObj]
      },
      { spyOnMethods: ['_updateSelected'] }
    );

    await component.__updateSelectedSpyPromise;
    await completeAnimation(component.tag('Content0'));
    testRenderer.update();

    expect(component.tag('Content0').alpha).toBe(1);
    expect(component.tag('Content1').alpha).toBe(0);

    component.selectedIndex = 1;

    await component.__updateSelectedSpyPromise;
    await completeAnimation(component.tag('Content1'));
    testRenderer.update();

    expect(component.tag('Content0').alpha).toBe(0);
    expect(component.tag('Content1').alpha).toBe(1);
  });

  describe('updating height', () => {
    const noContent = {};
    let smallTile, bigTile;
    beforeEach(() => {
      smallTile = { ...tileComp, h: 50 };
      bigTile = { ...tileComp, h: 100 };
      [component, testRenderer] = createComponent(
        {
          contentItems: [noContent, smallTile, bigTile]
        },
        { spyOnMethods: ['_updateSelected'] }
      );
      jest.spyOn(component, 'signal');
    });

    it('should not update height when selected index has not changed', async () => {
      expect(component.signal).not.toHaveBeenCalled();

      component.selectedIndex = 1;
      await component.__updateSelectedSpyPromise;
      testRenderer.update();

      expect(component.signal).toHaveBeenCalledWith(
        'contentHeightChange',
        smallTile.h
      );
      expect(component.h).toBe(smallTile.h);

      component.signal.mockClear();
      component.selectedIndex = 1;
      await component.__updateSelectedSpyPromise;
      testRenderer.update();

      expect(component.signal).not.toHaveBeenCalled();
      expect(component.h).toBe(smallTile.h);
    });

    it('should update the height when the selected index has changed', async () => {
      expect(component.selectedIndex).toBe(0);
      expect(component.signal).not.toHaveBeenCalled();
      expect(component.h).toBe(0);

      component.selectedIndex = 1;
      await component.__updateSelectedSpyPromise;
      testRenderer.update();

      expect(component.signal).toHaveBeenCalledWith(
        'contentHeightChange',
        smallTile.h
      );
      expect(component.h).toBe(smallTile.h);

      component.signal.mockClear();
      component.selectedIndex = 0;
      await component.__updateSelectedSpyPromise;
      testRenderer.update();

      expect(component.signal).toHaveBeenCalledWith('contentHeightChange', 0);
      expect(component.h).toBe(0);
    });
  });
});
