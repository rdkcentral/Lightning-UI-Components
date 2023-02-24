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

export const base = theme => {
  const textStyle = theme.typography.headline2;
  return {
    h: theme.spacer.md * 9,
    minWidth: theme.spacer.md * 7,
    paddingX: theme.spacer.md,
    textStyle,
    sizes: {
      sm: theme.spacer.md * 7,
      md: theme.spacer.md * 15,
      lg: theme.spacer.md * 23,
      xl: theme.spacer.md * 47,
      xxl: theme.spacer.md * 95
    },
    iconW: textStyle.lineHeight,
    iconH: textStyle.lineHeight
  };
};
