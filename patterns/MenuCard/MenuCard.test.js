import TestUtils from '../../test/lightning-test-utils';
import MenuCard from '.';

const createComponent = TestUtils.makeCreateComponent(MenuCard, {
  type: MenuCard,
  h: 600,
  w: 400,
  color: 'rgba(255, 255, 255,1)',
  headerText: 'HeaderTitle',
  headerImage: 'static/media/assets/images/Jurassic_World_16x9.jpg',
  bodyText: 'Body',
  footerText: 'Footer'
});

describe('MenuCard', () => {
  let component, testRenderer;

  beforeEach(() => {
    [component, testRenderer] = createComponent();
  });
  afterEach(() => {
    component = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });
});
