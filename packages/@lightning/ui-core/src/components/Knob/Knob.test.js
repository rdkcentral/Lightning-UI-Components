import { makeCreateComponent } from '@lightning/ui-test-utils';
import Knob from './index.js';

const createComponent = makeCreateComponent(Knob);

describe('Knob', () => {
  let knob, testRenderer;

  beforeEach(() => {
    [knob, testRenderer] = createComponent();
  });

  afterEach(() => {
    knob = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('has the correct width', () => {
    expect(knob.w).toEqual(knob._componentStyle.w);
  });

  it('has the correct height', () => {
    expect(knob.h).toEqual(knob._componentStyle.h);
  });
});
