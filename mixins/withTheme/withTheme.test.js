/**
 * Copyright 2021 Comcast Cable Communications Management, LLC
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

import withTheme from '.';

describe('withTheme', () => {
  let Example = class {};
  beforeEach(() => {
    Example = class {};
  });

  it('should extend the base class', () => {
    expect(withTheme(Example).name).toEqual(Example.name);
  });

  describe('settings a theme property on the class', () => {
    it('should be derived from a theme property on the base class and theme parameter', () => {
      const theme = theme => ({ ...theme, base: 'styles' });
      const defaultTheme = { theme: 'styles' };

      Example.theme = defaultTheme;
      const Wrapped = withTheme(Example, theme);
      expect(Wrapped.theme).toMatchObject({
        ...theme(theme(defaultTheme)),
        ...defaultTheme
      });
    });

    it('should be derived from a a theme parameter when there is not a theme defined on the base class', () => {
      const theme = { base: 'styles' };

      const Wrapped = withTheme(Example, theme);
      expect(Wrapped.theme).toEqual(theme);
    });
  });
});
