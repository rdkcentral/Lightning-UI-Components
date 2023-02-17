import lng from '@lightningjs/core';
import { makeCreateComponent } from '@lightning/ui-test-utils';
import TitleRow from './TitleRow';

const items = Array.from({ length: 7 }).map(() => ({
  type: lng.Component,
  w: 300,
  h: 200
}));

const createComponent = makeCreateComponent(TitleRow);

describe('TitleRow', () => {
  let titleRow, testRenderer;

  beforeEach(() => {
    [titleRow, testRenderer] = createComponent({
      items
    });
  });

  it('renders', () => {
    [titleRow, testRenderer] = createComponent({
      title: 'Title',
      items
    });
    testRenderer.forceAllUpdates();
    const tree = testRenderer.toJSON(2);

    expect(tree).toMatchSnapshot();
  });

  it('sets the announce string to the row title text', () => {
    const title = 'Row Title';
    titleRow.title = title;
    testRenderer.forceAllUpdates();
    expect(titleRow.announce).toBe(title);
  });

  it('overrides the announce string', () => {
    const overrideString = 'Custom announce string';
    titleRow.announce = overrideString;
    testRenderer.forceAllUpdates();
    expect(titleRow.announce).toBe(overrideString);
  });

  describe('updating the title', () => {
    it('should add and update a title', () => {
      const titleA = 'Title';
      const titleB = 'New Title';

      expect(titleRow._Title.content).toBe('');

      titleRow.title = titleA;

      testRenderer.forceAllUpdates();

      expect(titleRow._Title.content).toBe(titleA);

      titleRow.title = titleB;
      testRenderer.forceAllUpdates();

      expect(titleRow._Title.content).toBe(titleB);
    });
    it('should remove a title', () => {
      const title = 'Title';
      titleRow.title = title;
      testRenderer.forceAllUpdates();
      expect(titleRow._Title.content).toBe(title);
      titleRow.title = undefined;
      testRenderer.forceAllUpdates();
      expect(titleRow._Title).toMatchObject({
        h: 0,
        content: ''
      });
    });
    it('should update the row placement after the title has loaded', async () => {
      [titleRow, testRenderer] = createComponent(
        {
          title: 'Title',
          items
        },
        {
          spyOnMethods: ['_titleLoaded']
        }
      );
      expect(titleRow._Items.y).toBe(titleRow.style.rowMarginTop);

      await titleRow.__titleLoadedSpyPromise;

      expect(titleRow._Items.y).toBe(
        titleRow._Title.finalH + titleRow.style.rowMarginTop
      );
    });
  });
});
