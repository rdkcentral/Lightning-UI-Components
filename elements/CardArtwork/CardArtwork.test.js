import TestUtils from '../../test/lightning-test-utils';
import CardArtwork from '.';
import { rgba2argb } from '../../utils';

const createComponent = TestUtils.makeCreateComponent(CardArtwork);

describe('CardArtwork', () => {
  // eslint-disable-next-line no-unused-vars
  let component, testRenderer;

  beforeEach(() => {
    [component, testRenderer] = createComponent();
  });
  afterEach(() => {
    component = null; // eslint-disable-line no-unused-vars
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });
  it('should not accept a invalid color', () => {
    const blurColor = component.blurBackgroundColor;
    component.blurBackgroundColor = 'invalidColor';
    testRenderer.forceAllUpdates();
    expect(component.blurBackgroundColor).toBe(blurColor);
  });
  it('should update the background blur color', async () => {
    const blurColor = rgba2argb('rgba(0,0,255,1)');
    [component, testRenderer] = createComponent(
      {
        blurBackgroundColor: blurColor,
        blurBackground: true,
        circleImage: true
      },
      { spyOnMethods: ['_update'] }
    );
    await component.__updatePromiseSpy;

    expect(component.blurBackgroundColor).toBe(blurColor);
    testRenderer.forceAllUpdates();
    expect(component._Blur.content.Background.color).toBe(blurColor);
  });
});
