import TestUtils from '../../test/lightning-test-utils';
import Label from '.';

const createComponent = TestUtils.makeCreateComponent(Label);

describe('Label', () => {
  let label, testRenderer;

  beforeEach(() => {
    [label, testRenderer] = createComponent();
  });
  afterEach(() => {
    label = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('changes title text and updates total width to match', done => {
    expect(label.w).toBe(0);
    label.title = 'Really really really really really long title';
    label._Text._Text.on('txLoaded', async () => {
      await TestUtils.nextTick();
      testRenderer.forceAllUpdates();
      expect(label.w).not.toEqual(60);
      expect(label._Text.renderWidth + 32).toBeGreaterThan(60);
      expect(label.w).toEqual(label._Text.renderWidth + 32);
      done();
    });
  });
});
