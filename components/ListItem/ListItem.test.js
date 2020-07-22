import { ListItemBase } from '.';
import { getHexColor } from '../Styles';
import TestRenderer from '../lightning-test-renderer';

const makeCreateComponent = (type, defaultConfig = {}) => {
  return (config = {}) => {
    const testRenderer = TestRenderer.create({
      Component: {
        type,
        ...defaultConfig,
        ...config
      }
    });
    return [testRenderer.getInstance(), testRenderer];
  };
};

const createListItemBase = makeCreateComponent(ListItemBase);

describe('ListItemBase', () => {
  let listItemBase, testRenderer;
  beforeEach(() => {
    [listItemBase, testRenderer] = createListItemBase();
    testRenderer.update();
  });
  afterEach(() => {
    listItemBase = null;
    testRenderer = null;
  });

  it('should render', () => {
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the correct height', () => {
    expect(listItemBase._Container.finalH).toBe(88);
  });

  it('renders small size', () => {
    [listItemBase, testRenderer] = createListItemBase({ size: 'small' });
    testRenderer.update();
    expect(listItemBase._Container.finalW).toBe(410);
  });

  it('renders large size', () => {
    [listItemBase, testRenderer] = createListItemBase({ size: 'large' });
    testRenderer.update();
    expect(listItemBase._Container.finalW).toBe(860);
  });

  it('renders custom size', () => {
    [listItemBase, testRenderer] = createListItemBase({ w: 500 });
    testRenderer.update();
    expect(listItemBase._Container.finalW).toBe(500);
  });

  describe('focus', () => {
    it('has a default unfocus background', () => {
      expect(listItemBase._Container.color).toBe(getHexColor('141417'));
    });
    it('supports background props', () => {
      [listItemBase, testRenderer] = createListItemBase({ background: 'fill' });
      testRenderer.update();
      expect(listItemBase._Container.color).toBe(getHexColor('141417'));

      [listItemBase, testRenderer] = createListItemBase({
        background: 'float'
      });
      testRenderer.update();
      expect(listItemBase._Container.color).toBe(0);
    });
    it('has a focus background', () => {
      listItemBase._focus();
      testRenderer.update();
      expect(listItemBase._Container.color).toBe(getHexColor('ECECF2'));
    });
    it('resets colors on unfocus', () => {
      listItemBase._focus();
      testRenderer.update();

      listItemBase._unfocus();
      testRenderer.update();
      expect(listItemBase._Container.color).toBe(getHexColor('141417'));
    });
  });
});
