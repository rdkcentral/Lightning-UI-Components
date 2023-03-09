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

import { makeCreateComponent } from '@lightningjs/ui-components-test-utils';
import Surface from '.';

const createSurface = makeCreateComponent(Surface);

describe('Surface', () => {
  let surface, testRenderer;

  beforeEach(() => {
    [surface, testRenderer] = createSurface();
  });

  afterEach(() => {
    surface = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('has the correct static tags getter', () => {
    expect(surface.constructor.tags).toMatchObject(['Background']);
  });

  it('should update stateColor and layout ', () => {
    surface.disabled = false;
    surface._focus();
    testRenderer.forceAllUpdates();
    expect(surface._stateColor).toEqual(
      surface._componentStyle.backgroundColorFocused
    );
  });

  it('should update stateColor ', () => {
    surface.disabled = false;
    surface._unfocus();
    testRenderer.unfocus();
    expect(surface._stateColor).toEqual(
      surface._componentStyle.backgroundColorUnfocused
    );
  });

  it('should update stateColor ', () => {
    surface.disabled = true;
    testRenderer.forceAllUpdates();
    expect(surface._stateColor).toEqual(
      surface._componentStyle.backgroundColorDisabled
    );
  });
});
