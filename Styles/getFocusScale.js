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

/**
 * Styles
 *
 * Contains global style information to easily maintain consistency throughout components.
 */

/**
 * Scale size based on width of component using the 12-column layout
 *
 * @param { number } w
 * @returns {number} focus scale size based on 12-column layout
 */
export default function getFocusScale(w) {
  switch (true) {
    case w >= 1760:
      return 1.03; // 1 col
    case w >= 860:
      return 1.06; // 2 col
    case w >= 560:
      return 1.09; // 3 col
    case w >= 410:
      return 1.12; // 4 col
    case w >= 320:
      return 1.15; // 5 col
    case w >= 260:
      return 1.18; // 6 col
    case w >= 185:
      return 1.26; // 8 col
    case w >= 140:
      return 1.34; // 10 col
    case w >= 110:
      return 1.44; // 12 col
    default:
      return 1.18; // default to 6 col
  }
}
