import TestUtils from '../../test/lightning-test-utils';
import ListItemImageGroup from './ListItemImageGroup';
const cast = TestUtils.pathToDataURI('./assets/images/cast.png');
const cast1 = TestUtils.pathToDataURI('./assets/images/cast1.png');
const cast2 = TestUtils.pathToDataURI('./assets/images/cast2.png');

const createListItemImageGroup =
  TestUtils.makeCreateComponent(ListItemImageGroup);

const listItems = [
  {
    title: 'Jessia Findlay',
    subtitle: 'Lenina Crowne',
    src: cast
  },
  {
    title: 'Alden Ehrenreich',
    subtitle: 'John the Savage',
    src: cast1
  },
  {
    title: 'Harry Lloyd',
    subtitle: 'Bernard Marx',
    src: cast2
  }
];

describe('ListItemImageGroup', () => {
  let component, testRenderer;

  beforeEach(() => {
    [component, testRenderer] = createListItemImageGroup({ listItems });
  });
  afterEach(() => {
    component = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('set items', () => {
    expect(component._Column.items.length).toBe(listItems.length);
    component._Column.items.forEach((item, idx) => {
      expect(item._Title.text.text).toBe(listItems[idx].title);
      expect(item._Subtitle.text.text).toBe(listItems[idx].subtitle);
      expect(item._Image.texture.src).toBe(listItems[idx].src);
    });
  });

  it('get announce', () => {
    const itemsAnnounce = listItems
      .map(i => `${i.title} ${i.subtitle}`)
      .join(',');
    expect(component.announce).toBe(itemsAnnounce);
  });
});
