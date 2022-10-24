import TestUtils from '../../test/lightning-test-utils';
import Card from './Card';

const createCardComponent = TestUtils.makeCreateComponent(Card);

describe('Card', () => {
  let Card, testRenderer;

  beforeEach(() => {
    [Card, testRenderer] = createCardComponent();
  });

  afterEach(() => {
    Card = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('sets the announce string to the card title', () => {
    const title = 'Title';
    Card.title = title;
    testRenderer.forceAllUpdates();
    expect(Card.announce).toBe(title);
  });

  it('overrides the announce string', () => {
    const overrideString = 'Custom announce string';
    Card.announce = overrideString;
    testRenderer.forceAllUpdates();
    expect(Card.announce).toBe(overrideString);
  });

  it('has the correct static props getter', () => {
    expect(Card.constructor.properties).toMatchObject(['title']);
  });

  it('has the correct static tags getter', () => {
    expect(Card.constructor.tags).toMatchObject(['Background', 'Title']);
  });

  it('should update Title', () => {
    Card.title = 'Title';
    testRenderer.forceAllUpdates();
    expect(Card._Title.content).toEqual('Title');
    expect(Card._Title.textStyle).toEqual(Card.style.titleTextProperties);
    expect(Card._Title.textStyle.textColor).toEqual(
      Card.style.titleTextProperties.textColor
    );
  });

  it('should update Title when disabled', () => {
    Card.title = 'Title';
    Card.disabled = true;
    Card._update();
    testRenderer.forceAllUpdates();
    expect(Card._Title.content).toEqual('Title');
    expect(Card._Title.textStyle.textColor).toEqual(
      Card.style.titleTextProperties.textColor
    );
  });

  it('should calculate textwidth', () => {
    testRenderer.forceAllUpdates();
    expect(Card._calculateTextWidth()).toEqual(
      Card.w - Card.style.paddingHorizontal * 2
    );
  });

  it('move Title', () => {
    testRenderer.forceAllUpdates();
    expect(Card._Title.x).toEqual(Card.style.paddingHorizontal);
    expect(Card._Title.y).toEqual(Card.style.paddingVertical);
  });
});
