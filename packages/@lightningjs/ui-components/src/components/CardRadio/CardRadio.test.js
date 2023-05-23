import { makeCreateComponent } from '@lightningjs/ui-components-test-utils';
import CardRadio from '.';

const createComponent = makeCreateComponent(CardRadio);

describe('CardRadio', () => {
  let cardRadio, testRenderer;

  beforeEach(() => {
    [cardRadio, testRenderer] = createComponent();
  });

  afterEach(() => {
    cardRadio = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('should update description position', () => {
    testRenderer.forceAllUpdates();
    expect(cardRadio._Description.y).toEqual(
      2 * cardRadio.style.paddingVertical +
        cardRadio._Title.h +
        cardRadio._Subtitle.h
    );
  });

  it('should update subtitle', () => {
    cardRadio.subtitle = 'subtitle';
    testRenderer.forceAllUpdates();
    expect(cardRadio._Subtitle.content).toEqual('subtitle');
    expect(cardRadio._Subtitle.style.textStyle).toMatchObject(
      cardRadio.style.subtitleTextStyle
    );
  });

  it('should update subtitle position', () => {
    testRenderer.forceAllUpdates();
    expect(cardRadio._Subtitle.x).toEqual(cardRadio.style.paddingVertical);
    expect(cardRadio._Subtitle.y).toEqual(
      cardRadio.style.paddingVertical + cardRadio._Title.h
    );
  });
});
