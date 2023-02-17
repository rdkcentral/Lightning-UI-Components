import { makeCreateComponent } from '@lightning/ui-test-utils';
import Wave from '.';
const createWave = makeCreateComponent(Wave, {
  color: 'rgba(256, 256, 256, 1)',
  h: 20
});

describe('wave', () => {
  // eslint-disable-next-line no-unused-vars
  let wave, testRenderer;

  beforeEach(() => {
    [wave, testRenderer] = createWave();
  });

  afterEach(() => {
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });
});
