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

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function lowercaseFirstLetter(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

export function stringifyCompare(objA, objB) {
  return JSON.stringify(objA) === JSON.stringify(objB);
}

const MARKUP_STRING_PATTERN = /({ICON.*?}|{BADGE:.*?}|{NEWLINE}|{TEXT:.*?})/g;

export function isMarkupString(str = '') {
  if (typeof str !== 'string') {
    return false;
  }
  return MARKUP_STRING_PATTERN.test(str);
}

/**
 * Returns an array of strings and icon, badge, newline, and text objects from a string using the syntax:
 * 'This is an {ICON:<title>|<url>} and {BADGE:<title>} badge test with a {NEWLINE} newline and {TEXT:<text>|<style>}.'
 *
 * i.e. 'This is an {ICON:settings|./assets/icons/settings.png} icon and {BADGE:HD} badge with a{NEWLINE} and {TEXT:red text|red}.'
 *  would create the array:
 *  [
 *    'This is an ',
 *    { icon: './assets/icons/settings.png', title: 'settings' },
 *    ' icon and ',
 *    { badge: 'HD' },
 *    ' badge with a',
 *    { newline: true },
 *    ' and ',
 *    { text: 'red text', style: 'red' },
 *    '.'
 *  ]
 *
 * @param {(string|object)} str
 *
 * @return {array}
 */
export function parseInlineContent(str = '') {
  const content = [];
  if ((str && typeof str === 'string') || str.text) {
    const string = typeof str === 'string' ? str : str.text;
    const iconRegEx = /^{ICON:(.*?)?\|(.*?)?}$/g;
    const badgeRegEx = /^{BADGE:(.*?)}$/g;
    const newlineRegEx = /^{NEWLINE}$/g;
    const textRegEx = /^{TEXT:(.*?)?\|(.*?)?}$/g;

    const splitStr = string.split(MARKUP_STRING_PATTERN);

    if (splitStr && splitStr.length) {
      splitStr.forEach(item => {
        let formattedItem = item;
        const badge = badgeRegEx.exec(item);
        const icon = iconRegEx.exec(item);
        const newline = newlineRegEx.exec(item);
        const text = textRegEx.exec(item);

        if (badge && badge[1]) {
          formattedItem = { badge: badge[1] };
        } else if (icon && icon[1]) {
          formattedItem = { title: icon[1], icon: icon[2] || icon[1] };
        } else if (newline) {
          formattedItem = { newline: true };
        } else if (text && text[1]) {
          formattedItem = { text: text[1], style: text[2] };
        }
        content.push(formattedItem);
      });
    }
  }
  return content;
}

export default {
  capitalizeFirstLetter,
  lowercaseFirstLetter,
  stringifyCompare,
  isMarkupString,
  parseInlineContent
};
