import { makeCreateComponent } from '@lightning/ui-test-utils';
import Tile from '../Tile';
import lightningLogo from '../../assets/images/ic_lightning_white_32.png';
import ControlRow from '.';
import { jest } from '@jest/globals';

const createItem = (props = {}) => ({
  type: Tile,
  itemLayout: {
    ratioX: 16,
    ratioY: 9,
    upCount: 4
  },
  ...props
});

const createItems = length => {
  return Array.from({ length }).map(() => createItem());
};

const createControl = (props = {}) => ({
  logo: lightningLogo,
  ...props
});

const createControls = length => {
  return Array.from({ length }).map(() => createControl());
};

const leftControls = createControls(2);
const rightControls = createControls(2);
const items = createItems(2);

const createComponent = makeCreateComponent(ControlRow);

describe('ControlRow', () => {
  let component, testRenderer;

  beforeEach(() => {
    [component, testRenderer] = createComponent({
      contentItems: items
    });
  });

  it('renders', () => {
    [component, testRenderer] = createComponent({
      title: 'Title',
      leftControls,
      contentItems: items,
      rightControls
    });
    testRenderer.forceAllUpdates();
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  describe('updating the content in a row', () => {
    it('should add controls and items to the row', () => {
      [component, testRenderer] = createComponent({ leftControls });
      testRenderer.forceAllUpdates();
      expect(component.items.length).toBe(leftControls.length);
      expect(component._getLeftControlItems().length).toBe(leftControls.length);

      component.contentItems = items;
      testRenderer.forceAllUpdates();
      expect(component.items.length).toBe(leftControls.length + items.length);
      expect(component._getContentItemItems().length).toBe(items.length);

      component.rightControls = rightControls;
      testRenderer.forceAllUpdates();
      expect(component.items.length).toBe(
        leftControls.length + items.length + rightControls.length
      );
      expect(component._getRightControlItems().length).toBe(
        rightControls.length
      );
    });

    it('should add controls and items to the row via the ComponentList setter', () => {
      [component, testRenderer] = createComponent({});

      component.leftControls = leftControls;
      testRenderer.forceAllUpdates();
      expect(component.items.length).toBe(leftControls.length);
      expect(component._getLeftControlItems().length).toBe(leftControls.length);

      component.contentItems = items;
      testRenderer.forceAllUpdates();
      expect(component.items.length).toBe(leftControls.length + items.length);
      expect(component._getContentItemItems().length).toBe(items.length);

      component.rightControls = rightControls;
      testRenderer.forceAllUpdates();
      expect(component.items.length).toBe(
        leftControls.length + items.length + rightControls.length
      );
      expect(component._getRightControlItems().length).toBe(
        rightControls.length
      );
    });

    it('should add extra space between controls and and items', () => {
      component.leftControls = leftControls;
      component.contentItems = items;
      component.rightControls = rightControls;
      testRenderer.forceAllUpdates();
      const spacing = component.style.extraItemSpacing;
      expect(component.items[0].extraItemSpacing).toBeUndefined();
      expect(component.items[1].extraItemSpacing).toBe(spacing);
      expect(component.items[2].extraItemSpacing).toBeUndefined();
      expect(component.items[3].extraItemSpacing).toBe(spacing);
      expect(component.items[4].extraItemSpacing).toBeUndefined();
      expect(component.items[5].extraItemSpacing).toBeUndefined();
    });

    it('should allow overwriting extra item spacing space between controls and and items', () => {
      const spacing = 3;
      component.extraItemSpacing = spacing;
      component.leftControls = leftControls;
      component.contentItems = items;
      component.rightControls = rightControls;
      testRenderer.forceAllUpdates();
      expect(component.items[0].extraItemSpacing).toBeUndefined();
      expect(component.items[1].extraItemSpacing).toBe(spacing);
      expect(component.items[2].extraItemSpacing).toBeUndefined();
      expect(component.items[3].extraItemSpacing).toBe(spacing);
      expect(component.items[4].extraItemSpacing).toBeUndefined();
      expect(component.items[5].extraItemSpacing).toBeUndefined();
    });

    it('should default the selected item to the first item', () => {
      component.leftControls = leftControls;
      component.contentItems = items;
      component.rightControls = rightControls;
      testRenderer.forceAllUpdates();
      expect(component.selectedIndex).toBe(component.leftControls.length);
    });

    it('should allow setting the selected index', () => {
      component.leftControls = leftControls;
      component.contentItems = items;
      component.rightControls = rightControls;
      component.selectedIndex = 0;
      testRenderer.forceAllUpdates();
      expect(component.selectedIndex).toBe(0);
    });
  });

  describe('add - adding to ControlRow', () => {
    beforeEach(() => {
      component.leftControls = leftControls;
      component.contentItems = items;
      component.rightControls = rightControls;

      testRenderer.forceAllUpdates();
      expect(component.selectedIndex).toBe(2);
    });

    describe('left controls', () => {
      it('should persist the selected item when an item is added before the selected item index', () => {
        component.addLeftControls(leftControls);
        expect(component.selectedIndex).toBe(4);
      });
      it('should persist the selected item when an item is added at the selected item index', () => {
        component.selectedIndex = 1;
        component.addLeftControls(leftControls);
        expect(component.selectedIndex).toBe(1);
      });
      it('should persist the selected item when an item is added after the selected item index', () => {
        component.selectedIndex = 0;
        testRenderer.forceAllUpdates();
        component.addLeftControls(leftControls);
        expect(component.selectedIndex).toBe(0);
      });
    });

    describe('right controls', () => {
      it('should persist the selected item when an item is added before the selected item index', () => {
        component.addRightControls(rightControls);
        expect(component.selectedIndex).toBe(2);
      });
    });

    describe('content items', () => {
      it('should persist the selected item when an item is added at selected item index', () => {
        component.addContentItems(items);
        expect(component.selectedIndex).toBe(2);
      });
      it('should persist the selected item when an item is added after the selected item index', () => {
        component.selectedIndex = 1;
        component.addContentItems(items);
        expect(component.selectedIndex).toBe(1);
      });
    });
  });

  describe('addAt - adding at a specified index to ControlRow', () => {
    beforeEach(() => {
      component.leftControls = createControls(3);
      component.contentItems = createItems(3);
      component.rightControls = createControls(3);
      testRenderer.forceAllUpdates();
    });

    const controlId = 'newControl';
    const itemId = 'newItem';
    const newControl = createControl({ testId: controlId });
    const newItem = createItem({ testId: itemId });

    describe('left controls', () => {
      it('should add a control to the end of the left controls', () => {
        component.addLeftControlsAt([newControl], 3);
        expect(component.items[3].testId).toBe(controlId);
        expect(component.leftControls.length).toBe(4);
      });
      it('should add a control at a specific index', () => {
        component.addLeftControlsAt([newControl], 2);
        expect(component.items[2].testId).toBe(controlId);
        expect(component.leftControls.length).toBe(4);
      });
    });

    describe('right controls', () => {
      it('should add a control to the end of the right controls', () => {
        component.addRightControlsAt([newControl], 3);
        expect(component.items[9].testId).toBe(controlId);
        expect(component.rightControls.length).toBe(4);
      });
      it('should add a control at a specific index', () => {
        component.addRightControlsAt([newControl], 2);
        expect(component.items[8].testId).toBe(controlId);
        expect(component.rightControls.length).toBe(4);
      });
    });

    describe('content items', () => {
      let initialRowItemsLength;
      beforeEach(() => {
        initialRowItemsLength = component.items.length;
      });
      it('should add an item to the end of the items', () => {
        component.addContentItemsAt([newItem], 3);
        expect(component.items[6].testId).toBe(itemId);
        expect(component.contentItems.length).toBe(4);
        expect(component.items.length).toBe(initialRowItemsLength + 1);
      });
      it('should add an item at a specific index', () => {
        component.addContentItemsAt([newItem], 2);
        expect(component.items[5].testId).toBe(itemId);
        expect(component.contentItems.length).toBe(4);
        expect(component.items.length).toBe(initialRowItemsLength + 1);
      });
    });
  });

  describe('removeAt - removing an item or control from ControlRow', () => {
    beforeEach(() => {
      component.leftControls = createControls(3);
      component.contentItems = createItems(3);
      component.rightControls = createControls(3);
      testRenderer.forceAllUpdates();
    });

    describe('left controls', () => {
      it('should remove a control', () => {
        component.removeLeftControlAt(2);
        expect(component.leftControls.length).toBe(2);
      });
    });

    describe('right controls', () => {
      it('should remove a control', () => {
        component.removeRightControlAt(2);
        expect(component.rightControls.length).toBe(2);
      });
    });

    describe('content items', () => {
      let initialRowItemsLength;
      let initialContentItemsLength;
      beforeEach(() => {
        initialRowItemsLength = component.items.length;
        initialContentItemsLength = component._getContentItemItems().length;
      });
      it('should remove an item', () => {
        component.removeContentItemAt(2);
        expect(component._getContentItemItems().length).toBe(
          initialContentItemsLength - 1
        );
        expect(component.items.length).toBe(initialRowItemsLength - 1);
      });
    });
  });

  describe('signaling to the consumer to load more items', () => {
    let signalSpy;
    beforeEach(() => {
      jest.clearAllMocks();
      signalSpy = jest.spyOn(component, 'signal');
      component.contentItems = createItems(6);
      component.lazyLoadBuffer = 2;
    });
    it('should signal if an item is selected at or after the load more index', () => {
      component.selectedIndex = 1;
      expect(signalSpy).not.toHaveBeenCalledWith('loadMoreItems');

      component.selectNext();
      expect(signalSpy).not.toHaveBeenCalledWith('loadMoreItems');

      component.selectNext();
      expect(signalSpy).toHaveBeenCalledWith('loadMoreItems');
      signalSpy.mockClear();

      expect(signalSpy).not.toHaveBeenCalledWith('loadMoreItems');
      component.selectNext();
      expect(signalSpy).toHaveBeenCalledWith('loadMoreItems');
    });

    it('should not signal when a control is selected', () => {
      component.selectedIndex = 0;
      expect(signalSpy).not.toHaveBeenCalledWith('loadMoreItems');

      component.selectPrevious();
      expect(signalSpy).not.toHaveBeenCalledWith('loadMoreItems');

      component.selectedIndex = 6;
      component.selectNext();
      expect(signalSpy).not.toHaveBeenCalledWith('loadMoreItems');
    });

    it('should not signal when a lazy scroll buffer has not been set', () => {
      component.lazyLoadBuffer = undefined;
      component.selectedIndex = 3;
      expect(signalSpy).not.toHaveBeenCalledWith('loadMoreItems');

      component.selectNext();
      expect(signalSpy).not.toHaveBeenCalledWith('loadMoreItems');
    });
  });
});
