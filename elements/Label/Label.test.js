import TestUtils from '../../test/lightning-test-utils';
import Label from '.';

const createComponent = TestUtils.makeCreateComponent(Label);

describe('Label', () => {
  let label, testRenderer;

  beforeEach(() => {
    [label, testRenderer] = createComponent({
      spyOnMethods: ['_init', '_update']
    });
  });
  afterEach(() => {
    label = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('sets the announce string to the label text', () => {
    const title = 'Live';
    label.title = title;
    testRenderer.forceAllUpdates();
    expect(label.announce).toBe(title);
  });

  it('overrides the announce string', () => {
    const overrideString = 'Custom announce string';
    label.announce = overrideString;
    testRenderer.forceAllUpdates();
    expect(label.announce).toBe(overrideString);
  });

  it('changes title text and updates total width to match', done => {
    expect(label.w).toBe(0);
    label.title = 'Really really really really really long title';

    testRenderer.forceAllUpdates();
    expect(label.w).not.toEqual(60);
    expect(label._Text.renderWidth + 32).toBeGreaterThan(60);
    expect(label.w).toEqual(label._Text.renderWidth + 32);
    done();
  });

  it('should be undefined if there is no title element at all', () => {
    label.patch({ Text: undefined });
    label.title = 'text';
    testRenderer.forceAllUpdates();
    expect(label._Text).toBeUndefined();
  });
});
