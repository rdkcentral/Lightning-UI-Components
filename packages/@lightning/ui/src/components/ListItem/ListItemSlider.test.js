import { makeCreateComponent } from '@lightning/ui-test-utils';
import ListItemSlider from './ListItemSlider';

const createComponent = makeCreateComponent(ListItemSlider);

describe('ListItemSlider', () => {
  let component, testRenderer;

  beforeEach(() => {
    [component, testRenderer] = createComponent({
      title: 'ListItemSlider',
      value: 50
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

  it('should render Value', () => {
    component.value = 50;
    testRenderer.forceAllUpdates();
    expect(component._Value).toBeDefined();
  });

  it('should update Value', () => {
    component.value = 50;
    testRenderer.forceAllUpdates();
    expect(component._Value.content).toEqual('50');
  });

  it('should return default onLeft function', () => {
    component.onLeft = () => ({});
    component.value = 10;
    testRenderer.forceAllUpdates();
    component._handleLeft();
    expect(component._Slider.value).toEqual(10);
  });

  it('should return default onRight function', () => {
    component.onRight = () => ({});
    component.value = 10;
    testRenderer.forceAllUpdates();
    component._handleRight();
    expect(component._Slider.value).toEqual(10);
  });
  it('should reduce value when handleLeft is clicked', () => {
    component.value = 10;
    testRenderer.forceAllUpdates();
    component._handleLeft();
    expect(component._Slider.value).toEqual(9);
  });
  it('should increase value when handleRight is clicked', () => {
    component.value = 10;
    testRenderer.forceAllUpdates();
    component._handleRight();
    expect(component._Slider.value).toEqual(11);
  });

  it('should not exceed slider max value when handleRight is clicked', () => {
    component.value = 10;
    component._Slider.max = 10;
    testRenderer.forceAllUpdates();
    component._handleRight();
    expect(component._Slider.value).toEqual(10);
  });

  it('should not exist Value if value not exist', () => {
    component.value = null;
    testRenderer.forceAllUpdates();
    expect(component._Value).toBeUndefined();
  });

  it('should do nothing when handleLeft is clicked in disabledMode', () => {
    component.value = 1;
    component.mode = 'disabled';
    testRenderer.forceAllUpdates();
    component._handleLeft();
    expect(component._Slider.value).toEqual(1);
  });

  it('should do nothing when handleRight is clicked in disabledMode', () => {
    component.value = 1;
    component.mode = 'disabled';
    testRenderer.forceAllUpdates();
    component._handleRight();
    expect(component.value).toEqual(1);
  });

  describe('announcer', () => {
    it('should return true announce string, when announce property is true', () => {
      component.title = 'Title';
      component.value = 50;
      component._announce = true;
      expect(component.announce).toEqual(true);
    });

    it('should use the title and value as the default announce string', () => {
      component.title = 'Title';
      component.value = 50;
      component._announce = false;
      expect(component.announce).toEqual('Title50, List Item Slider');
    });
  });
});
