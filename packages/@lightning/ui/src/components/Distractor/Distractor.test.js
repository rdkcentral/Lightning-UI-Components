import TestUtils from '@lightning/ui-core/test';
import Distractor from '.';

const createDistractor = TestUtils.makeCreateComponent(Distractor);

describe('Distractor', () => {
  let distractor, testRenderer;

  beforeEach(() => {
    [distractor, testRenderer] = createDistractor(
      {},
      { spyOnMethods: ['_update'] }
    );
  });

  afterEach(() => {
    distractor = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('should stop and start the animation', () => {
    distractor.stopAnimation();
    expect(distractor.circle1Animation.isPlaying()).toBe(false);
    expect(distractor.circle2Animation.isPlaying()).toBe(false);
    expect(distractor.circle3Animation.isPlaying()).toBe(false);
    distractor.startAnimation();
    expect(distractor.circle1Animation.isPlaying()).toBe(true);
    expect(distractor.circle2Animation.isPlaying()).toBe(true);
    expect(distractor.circle3Animation.isPlaying()).toBe(true);
  });
});
