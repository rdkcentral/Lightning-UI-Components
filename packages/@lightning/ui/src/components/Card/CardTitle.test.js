import TestUtils from '@lightning/ui-core/test';
import CardTitle from './CardTitle';

//const circle = TestUtils.pathToDataURI('./src/assets/images/circle.svg');
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

  it('sets the announce string to the card title', () => {
    const title = 'Title';
    const description = 'Description';
    cardTitle.title = title;
    cardTitle.description = description;
    testRenderer.forceAllUpdates();
    expect(cardTitle.announce).toEqual([title, description]);
  });

  it('overrides the announce string', () => {
    const overrideString = 'Custom announce string';
    cardTitle.announce = overrideString;
    testRenderer.forceAllUpdates();
    expect(cardTitle.announce).toBe(overrideString);
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
      cardTitle.style.descriptionTextStyle
    );
    expect(cardTitle._Description.textStyle.textColor).toEqual(
      cardTitle.style.descriptionTextStyle.textColor
    );
  });

  it('move Description', () => {
    testRenderer.forceAllUpdates();
    expect(cardTitle._Description.x).toEqual(cardTitle.style.paddingHorizontal);
    expect(cardTitle._Description.y).toEqual(
      cardTitle.style.paddingVertical + cardTitle._Title.h
    );
  });
});
