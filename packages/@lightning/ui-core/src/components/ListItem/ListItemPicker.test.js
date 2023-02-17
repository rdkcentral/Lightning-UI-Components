import ListItemPicker from './ListItemPicker.js';
import { makeCreateComponent } from '@lightning/ui-test-utils';

const createListItemPicker = makeCreateComponent(ListItemPicker);

describe('ListItemPicker', () => {
  let component, testRenderer;

  beforeEach(() => {
    [component, testRenderer] = createListItemPicker({
      title: 'ListItemPicker',
      description: 'Description'
    });
  });
  afterEach(() => {
    component = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('should update Title', () => {
    component.title = 'Title';
    testRenderer.forceAllUpdates();
    expect(component._Title.content).toEqual('Title');
  });

  it('should update Title', () => {
    component.title = '';
    testRenderer.forceAllUpdates();
    expect(component._Title.content).toEqual('');
  });

  it('should update Arrows', () => {
    testRenderer.forceAllUpdates();
    expect(component._LeftArrow.texture.direction).toEqual('left');
    expect(component._RightArrow.texture.direction).toEqual('right');
  });

  it('should update Picker', () => {
    testRenderer.forceAllUpdates();
    expect(component._Picker).toBeDefined();
  });

  it('should update Picker with list of options', () => {
    component.options = ['Description1'];
    testRenderer.forceAllUpdates();
    expect(component._Picker.items.length).toEqual(component.options.length);
  });

  it('should lower left arrow alpha when selecting the first available option', () => {
    component.options = ['Description1', 'Description2', 'Description3'];
    testRenderer.forceAllUpdates();
    component._Picker.selectedIndex = 1; // selecting middle element
    expect(component._LeftArrow.alpha).toEqual(component.style.arrowAlphaValue);
    component._handleLeft();
    expect(component._LeftArrow.alpha).toEqual(
      component.style.arrowAlphaValueLimit
    );
  });

  it('should have full alpha for both arrows when selecting a middle option', () => {
    component.options = [
      'Description1',
      'Description2',
      'Description3',
      'Description4'
    ];
    testRenderer.forceAllUpdates();
    component._Picker.selectedIndex = 1;
    expect(component._LeftArrow.alpha).toEqual(component.style.arrowAlphaValue);
    expect(component._RightArrow.alpha).toEqual(
      component.style.arrowAlphaValue
    );

    component._handleRight();
    expect(component._LeftArrow.alpha).toEqual(component.style.arrowAlphaValue);
    expect(component._RightArrow.alpha).toEqual(
      component.style.arrowAlphaValue
    );
  });

  it('should lower right arrow alpha when selecting the last available option', () => {
    component.options = ['Description1', 'Description2', 'Description3'];
    testRenderer.forceAllUpdates();
    component._Picker.selectedIndex = 1;
    expect(component._RightArrow.alpha).toEqual(
      component.style.arrowAlphaValue
    );
    component._handleRight();
    expect(component._RightArrow.alpha).toEqual(
      component.style.arrowAlphaValueLimit
    );
  });

  describe('Check HandleLeft & HandleRight', () => {
    it('should reduce selectedIndex when handleLeft is clicked', () => {
      component.options = ['Description1', 'Description2', 'Description3'];
      testRenderer.forceAllUpdates();
      component._Picker.selectedIndex = 2;
      component._handleLeft();
      expect(component.selectedIndex).toEqual(1);
    });

    it('should increase selectedIndex when handleRight is clicked', () => {
      component.options = ['Description1', 'Description2', 'Description3'];
      testRenderer.forceAllUpdates();
      component._Picker.selectedIndex = 1;
      component._handleRight();
      expect(component.selectedIndex).toEqual(2);
    });

    describe('announcer', () => {
      it('should use the title and description as the default announce string', () => {
        component.options = ['Description1', 'Description2', 'Description3'];
        testRenderer.forceAllUpdates();
        expect(component.announce).toEqual(
          `ListItemPicker${component.options[0]}, List Item`
        );
      });

      it('should append List Item to end of announce context', () => {
        component.options = ['Description1', 'Description2', 'Description3'];
        testRenderer.forceAllUpdates();
        component._handleRight();
        component._handleRight();
        expect(component.announce).toEqual(
          `ListItemPicker${component.options[2]}, List Item`
        );
      });

      it('should prefer the announce prop over the default announce', () => {
        const overrideString = 'override announcer string';

        component._announce = overrideString;
        testRenderer.forceAllUpdates();
        expect(component.announce).toEqual(overrideString);
      });
    });
  });
});
