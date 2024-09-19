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

export const base = theme => ({
  textY: 0,
  iconWidth: theme.spacer.xxl + theme.spacer.xs,
  iconHeight: theme.spacer.xxl + theme.spacer.xs,
  contentSpacing: theme.spacer.md,
  marginBottom: 0,
  strikethroughRatio: 0.08,
  strikethroughColor: theme.color.textNeutral,
  textStyle: {
    ...theme.typography.body1
  },
  maxLines: 1,
  justify: 'flex-start'
});
