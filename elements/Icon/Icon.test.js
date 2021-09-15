/**
 * Copyright 2020 Comcast Cable Communications Management, LLC
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
import { readFileSync } from 'fs';
import TestUtils from '../../test/lightning-test-utils';
import Icon from '.';

const createIcon = TestUtils.makeCreateComponent(Icon, {
  w: 50,
  h: 50
});

describe('Icon', () => {
  it('renders an icon path', () => {
    const [_, testRenderer] = createIcon({
      icon: 'assets/images/ic_lightning_white_32.png'
    });
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('renders an svg path', () => {
    const [_, testRenderer] = createIcon({
      icon: 'assets/images/circle.svg'
    });
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('renders an inline svg', () => {
    const svg =
      '<svg xmlns="http://www.w3.org/2000/svg" height="100" width="100"><circle cx="50" cy="50" r="40"/></svg>';
    const [_, testRenderer] = createIcon({
      icon: svg
    });
    const tree = testRenderer.toJSON(2);

    expect(tree).toMatchSnapshot();
  });

  it('handles invalid icon sources', () => {
    const [_, testRenderer] = createIcon({ icon: 'bad/path' });
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });
});
