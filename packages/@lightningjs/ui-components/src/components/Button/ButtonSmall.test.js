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

import { ButtonSmall } from '.';
import { makeCreateComponent } from '@lightningjs/ui-components-test-utils';

const createButtonSmall = makeCreateComponent(
  ButtonSmall,
  {},
  { focused: false }
);

describe('ButtonSmall', () => {
  let buttonSmall, testRenderer;

  beforeEach(() => {
    [buttonSmall, testRenderer] = createButtonSmall(
      { title: 'ButtonSmall' },
      { spyOnMethods: ['_update'] }
    );
    testRenderer.update();
  });

  afterEach(() => {
    buttonSmall = null;
    testRenderer = null;
  });

  it('should render', () => {
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the correct height', () => {
    expect(buttonSmall.h).toBe(buttonSmall.style.h);
  });

  it('renders the correct width', () => {
    expect(buttonSmall.w).toBe(
      Math.max(
        buttonSmall._contentW + buttonSmall._paddingX,
        buttonSmall.style.minWidth
      )
    );
  });
});
