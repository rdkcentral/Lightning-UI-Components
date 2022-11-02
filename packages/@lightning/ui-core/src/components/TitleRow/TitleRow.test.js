import lng from '@lightningjs/core';
import { makeCreateComponent } from '../../../test/lightning-test-utils.js';
import { TitleRow } from '../';

const items = Array.from({ length: 7 }).map(() => ({
  type: lng.Component,
  w: 300,
  h: 200
}));

const createComponent = makeCreateComponent(TitleRow);

describe('TitleRow', () => {
  let component, testRenderer;

  beforeEach(() => {
    [component, testRenderer] = createComponent({
      items
    });
  });

  it('renders', () => {
    [component, testRenderer] = createComponent({
      title: 'Title',
      items
    });
    testRenderer.forceAllUpdates();
    const tree = testRenderer.toJSON(2);

    expect(tree).toMatchSnapshot();
  });

  it('sets the announce string to the row title text', () => {
    const title = 'Row Title';
    component.title = title;
    testRenderer.forceAllUpdates();
    expect(component.announce).toBe(title);
  });

  it('overrides the announce string', () => {
    const overrideString = 'Custom announce string';
    component.announce = overrideString;
    testRenderer.forceAllUpdates();
    expect(component.announce).toBe(overrideString);
  });

  describe('updating the title', () => {
    it('should add and update a title', () => {
      const titleA = 'Title';
      const titleB = 'New Title';

      expect(component._Title.content).toBe('');

      component.title = titleA;

      testRenderer.forceAllUpdates();

      expect(component._Title.content).toBe(titleA);

      component.title = titleB;
      testRenderer.forceAllUpdates();

      expect(component._Title.content).toBe(titleB);
    });
    it('should remove a title', () => {
      const title = 'Title';
      component.title = title;
      testRenderer.forceAllUpdates();
      expect(component._Title.content).toBe(title);
      component.title = undefined;
      testRenderer.forceAllUpdates();
      expect(component._Title).toMatchObject({
        h: 0,
        content: ''
      });
    });
    it('should update the row placement after the title has loaded', async () => {
      [component, testRenderer] = createComponent(
        {
          title: 'Title',
          items
        },
        {
          spyOnMethods: ['_titleLoaded']
        }
      );
      expect(component._Items.y).toBe(component.style.rowMarginTop);

      await component.__titleLoadedSpyPromise;

      expect(component._Items.y).toBe(
        component._Title.finalH + component.style.rowMarginTop
      );
    });
  });
});
