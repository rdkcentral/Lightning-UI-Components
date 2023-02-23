import ListItemPicker from './ListItemPicker.js';
import { makeCreateComponent } from '@lightningjs/ui-test-utils';

const createListItemPicker = makeCreateComponent(ListItemPicker);

describe('ListItemPicker', () => {
  let listItemPicker, testRenderer;

  beforeEach(() => {
    [listItemPicker, testRenderer] = createListItemPicker({
      title: 'ListItemPicker',
      description: 'Description'
    });
  });
  afterEach(() => {
    listItemPicker = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('should update Title', () => {
    listItemPicker.title = 'Title';
    testRenderer.forceAllUpdates();
    expect(listItemPicker._Title.content).toEqual('Title');
  });

  it('should update Title', () => {
    listItemPicker.title = '';
    testRenderer.forceAllUpdates();
    expect(listItemPicker._Title.content).toEqual('');
  });

  it('should update Picker', () => {
    testRenderer.forceAllUpdates();
    expect(listItemPicker._Picker).toBeDefined();
  });

  it('should update Picker with list of options', () => {
    listItemPicker.options = ['Description1'];
    testRenderer.forceAllUpdates();
    expect(listItemPicker._Picker.items.length).toEqual(
      listItemPicker.options.length
    );
  });

  it('should lower left arrow alpha when selecting the first available option', () => {
    listItemPicker.options = ['Description1', 'Description2', 'Description3'];
    testRenderer.forceAllUpdates();
    listItemPicker._Picker.selectedIndex = 1; // selecting middle element
    expect(listItemPicker._LeftArrow.alpha).toEqual(
      listItemPicker.style.arrowAlphaValue
    );
    listItemPicker._handleLeft();
    expect(listItemPicker._LeftArrow.alpha).toEqual(
      listItemPicker.style.arrowAlphaValueLimit
    );
  });

  it('should have full alpha for both arrows when selecting a middle option', () => {
    listItemPicker.options = [
      'Description1',
      'Description2',
      'Description3',
      'Description4'
    ];
    testRenderer.forceAllUpdates();
    listItemPicker._Picker.selectedIndex = 1;
    expect(listItemPicker._LeftArrow.alpha).toEqual(
      listItemPicker.style.arrowAlphaValue
    );
    expect(listItemPicker._RightArrow.alpha).toEqual(
      listItemPicker.style.arrowAlphaValue
    );

    listItemPicker._handleRight();
    expect(listItemPicker._LeftArrow.alpha).toEqual(
      listItemPicker.style.arrowAlphaValue
    );
    expect(listItemPicker._RightArrow.alpha).toEqual(
      listItemPicker.style.arrowAlphaValue
    );
  });

  it('should lower right arrow alpha when selecting the last available option', () => {
    listItemPicker.options = ['Description1', 'Description2', 'Description3'];
    testRenderer.forceAllUpdates();
    listItemPicker._Picker.selectedIndex = 1;
    expect(listItemPicker._RightArrow.alpha).toEqual(
      listItemPicker.style.arrowAlphaValue
    );
    listItemPicker._handleRight();
    expect(listItemPicker._RightArrow.alpha).toEqual(
      listItemPicker.style.arrowAlphaValueLimit
    );
  });

  it('should update the value of alpha in focused mode', () => {
    listItemPicker.mode = 'focused';
    testRenderer.forceAllUpdates();
    expect(listItemPicker._LeftArrow.alpha).toEqual(
      listItemPicker.style.arrowAlphaValueLimit
    );
    expect(listItemPicker._RightArrow.alpha).toEqual(
      listItemPicker.style.arrowAlphaValue
    );
  });

  it('should collapse description in unfocused mode when shouldCollapse flag is true', () => {
    listItemPicker.shouldCollapse = true;
    listItemPicker.mode = 'unfocused';
    listItemPicker.description = 'description';
    testRenderer.forceAllUpdates();
    expect(listItemPicker._Picker.visible).toEqual(false);
  });

  it('should collapse description in disabled mode when shouldCollapse flag is true', () => {
    listItemPicker.shouldCollapse = true;
    listItemPicker.mode = 'disabled';
    listItemPicker.description = 'description';
    testRenderer.forceAllUpdates();
    expect(listItemPicker._Picker.visible).toEqual(false);
  });

  it('should not collapse description in focused mode when shouldCollapse flag is true', () => {
    listItemPicker.shouldCollapse = true;
    listItemPicker.mode = 'focused';
    listItemPicker.description = 'description';
    testRenderer.forceAllUpdates();
    expect(listItemPicker._Picker.visible).toEqual(true);
  });

  describe('Check HandleLeft & HandleRight', () => {
    it('should reduce selectedIndex when handleLeft is clicked', () => {
      listItemPicker.options = ['Description1', 'Description2', 'Description3'];
      testRenderer.forceAllUpdates();
      listItemPicker._Picker.selectedIndex = 2;
      listItemPicker._handleLeft();
      expect(listItemPicker.selectedIndex).toEqual(1);
    });

    it('should increase selectedIndex when handleRight is clicked', () => {
      listItemPicker.options = ['Description1', 'Description2', 'Description3'];
      testRenderer.forceAllUpdates();
      listItemPicker._Picker.selectedIndex = 1;
      listItemPicker._handleRight();
      expect(listItemPicker.selectedIndex).toEqual(2);
    });

    describe('announcer', () => {
      it('should use the title and description as the default announce string', () => {
        listItemPicker.options = [
          'Description1',
          'Description2',
          'Description3'
        ];
        testRenderer.forceAllUpdates();
        expect(listItemPicker.announce).toEqual(
          `ListItemPicker${listItemPicker.options[0]}, List Item`
        );
      });

      it('should append List Item to end of announce context', () => {
        listItemPicker.options = [
          'Description1',
          'Description2',
          'Description3'
        ];
        testRenderer.forceAllUpdates();
        listItemPicker._handleRight();
        listItemPicker._handleRight();
        expect(listItemPicker.announce).toEqual(
          `ListItemPicker${listItemPicker.options[2]}, List Item`
        );
      });

      it('should prefer the announce prop over the default announce', () => {
        const overrideString = 'override announcer string';

        listItemPicker._announce = overrideString;
        testRenderer.forceAllUpdates();
        expect(listItemPicker.announce).toEqual(overrideString);
      });
    });
  });
});
