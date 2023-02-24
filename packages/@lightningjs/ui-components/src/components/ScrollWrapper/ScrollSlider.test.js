/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  makeCreateComponent,
  completeAnimation
} from '@lightningjs/ui-test-utils';
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
