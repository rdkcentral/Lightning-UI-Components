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
  const paddingX = theme.spacer.lg;
  const radius = theme.radius.xl;
  const logoRadius = Math.max(radius - paddingX / 2, 0);

  return {
    h: theme.spacer.md * 8,
    iconStyle: {},
    logoStyle: {
      radius: logoRadius,
      w: theme.spacer.md * 7,
      h: theme.spacer.md * 6
    },
    minWidth: theme.spacer.md * 9,
    paddingX,
    paddingXNoTitle: theme.spacer.md,
    prefixH: theme.spacer.md * 6,
    prefixPadding: theme.spacer.md,
    radius,
    titlePadding: theme.spacer.md
  };
};
