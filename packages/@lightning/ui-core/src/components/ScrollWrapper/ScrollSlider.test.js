import {
  makeCreateComponent,
  completeAnimation
} from '../../../test/lightning-test-utils.js';
import ScrollSlider from './ScrollSlider.js';

const createScrollSlider = makeCreateComponent(ScrollSlider);

/**
 * This tests that Slider allows setting custom animations.
 * If that functionality is removed from Slider, this test will fail via
 * a Jest timeout while awaiting the expected animation on slider._Circle.x.
 */
it('should allow a custom animation Knob and ProgressBar', async () => {
  const [slider, testRenderer] = createScrollSlider();

  await completeAnimation(slider._Circle, 'x');
  expect(slider._Circle.x).toBe(0);

  testRenderer.keyPress('Right');
  await completeAnimation(slider._Circle, 'x');
  expect(slider._Circle.x).toBeGreaterThan(0);
});
