import TestUtils from '../../test/lightning-test-utils';
import CardTitle from './CardTitle';

//const circle = TestUtils.pathToDataURI('./assets/images/circle.svg');
const createCardTitleComponent = TestUtils.makeCreateComponent(CardTitle);

describe('CardTitle', () => {
  let cardTitle, testRenderer;
  beforeEach(() => {
    [cardTitle, testRenderer] = createCardTitleComponent();
  });
  afterEach(() => {
    cardTitle = null;
    testRenderer = null;
  });
  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('has the correct static props getter', () => {
    expect(cardTitle.constructor.properties).toMatchObject([
      'title',
      'description'
    ]);
  });

  it('should update Description', () => {
    cardTitle.description = 'Description';
    testRenderer.forceAllUpdates();
    expect(cardTitle._Description.content).toEqual('Description');
    expect(cardTitle._Description.textStyle).toEqual(
      cardTitle._componentStyles.descriptionTextProperties
    );
    expect(cardTitle._Description.textStyle.textColor).toEqual(
      cardTitle._componentStyles.descriptionTextProperties.textColor
    );
  });

  it('move Description', () => {
    testRenderer.forceAllUpdates();
    expect(cardTitle._Description.x).toEqual(
      cardTitle._componentStyles.paddingHorizontal
    );
    expect(cardTitle._Description.y).toEqual(
      cardTitle._componentStyles.paddingVertical + cardTitle._Title.h
    );
  });
});
