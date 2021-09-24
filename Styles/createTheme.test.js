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

import createTheme, { DEFAULT_THEME } from './createTheme';

describe('createTheme', () => {
  it('should create a theme object with a theme function and passed in default theme', () => {
    const theme = dTheme => ({
      ...dTheme,
      mockProp: 'a'
    });
    const defaultTheme = { mockDefaultProp: 'b' };

    expect(createTheme(theme, defaultTheme)).toMatchObject({
      mockProp: 'a',
      mockDefaultProp: 'b'
    });
  });
  it('should create a theme object with a fallback default theme', () => {
    const theme = dTheme => ({
      ...dTheme,
      mockProp: 'a'
    });

    expect(createTheme(theme)).toMatchObject({
      ...DEFAULT_THEME,
      mockProp: 'a'
    });
  });
  it('should merge a theme object with a default theme', () => {
    const theme = { mockProp: 'a' };
    const defaultTheme = { mockDefaultProp: 'b' };

    expect(createTheme(theme, defaultTheme)).toMatchObject({
      ...theme,
      ...defaultTheme
    });
  });
});
