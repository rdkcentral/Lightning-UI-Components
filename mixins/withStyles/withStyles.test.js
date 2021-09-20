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

import withStyles from '.';

describe('withStyles', () => {
  let Example = class {};
  beforeEach(() => {
    Example = class {};
  });

  it('should extend the base class', () => {
    expect(withStyles(Example).name).toEqual(Example.name);
  });

  describe('setting a styles property on the class', () => {
    it('should be derived from a theme parameter, style parameter, and styles property on the base class', () => {
      const styles = theme => ({ ...theme, base: 'styles' });
      const theme = { theme: 'styles' };
      const baseStyles = { backgroundColor: 'green' };
      Example.styles = baseStyles;
      const Wrapped = withStyles(Example, styles, theme);
      expect(Wrapped.styles).toMatchObject({
        ...styles(theme),
        ...baseStyles
      });
    });

    it('should be derived from a theme parameter and style parameter', () => {
      const styles = theme => ({ ...theme, base: 'styles' });
      const theme = { theme: 'styles' };
      const Wrapped = withStyles(Example, styles, theme);
      expect(Wrapped.styles).toMatchObject({
        ...styles(theme)
      });
    });

    it('should be derived from a theme property on the base class and style parameter', () => {
      const styles = theme => ({ ...theme, base: 'styles' });
      const baseTheme = { theme: 'styles' };
      Example.theme = baseTheme;
      const Wrapped = withStyles(Example, styles);
      expect(Wrapped.styles).toMatchObject({
        ...styles(baseTheme)
      });
    });
  });
});
