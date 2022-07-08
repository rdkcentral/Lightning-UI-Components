import TestUtils from '../../test/lightning-test-utils';
import NewCard from './NewCard';

const createNewCardComponent = TestUtils.makeCreateComponent(NewCard);

describe('NewCard', () => {
  let NewCard, testRenderer;

  beforeEach(() => {
    [NewCard, testRenderer] = createNewCardComponent();
  });
  afterEach(() => {
    NewCard = null;
    testRenderer = null;
  });
  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('has the correct static props getter', () => {
    expect(NewCard.constructor.properties).toMatchObject(['title']);
  });

  it('has the correct static tags getter', () => {
    expect(NewCard.constructor.tags).toMatchObject(['Background', 'Title']);
  });

  it('should update Title', () => {
    NewCard.title = 'Title';
    testRenderer.forceAllUpdates();
    expect(NewCard._Title.content).toEqual('Title');
    expect(NewCard._Title.textStyle).toEqual(
      NewCard._componentStyles.titleTextProperties
    );
    expect(NewCard._Title.textStyle.textColor).toEqual(
      NewCard._componentStyles.titleTextProperties.textColor
    );
  });

  it('should update Title when disabled', () => {
    NewCard.title = 'Title';
    NewCard.disabled = true;
    NewCard._update();
    testRenderer.forceAllUpdates();
    expect(NewCard._Title.content).toEqual('Title');
    expect(NewCard._Title.textStyle.textColor).toEqual(
      NewCard._componentStyles.textColorDisabled
    );
  });

  it('should calculate textwidth', () => {
    testRenderer.forceAllUpdates();
    expect(NewCard._calculateTextWidth()).toEqual(
      NewCard.w - NewCard._componentStyles.paddingHorizontal * 2
    );
  });

  it('move Title', () => {
    testRenderer.forceAllUpdates();
    expect(NewCard._Title.x).toEqual(
      NewCard._componentStyles.paddingHorizontal
    );
    expect(NewCard._Title.y).toEqual(NewCard._componentStyles.paddingVertical);
  });
});
