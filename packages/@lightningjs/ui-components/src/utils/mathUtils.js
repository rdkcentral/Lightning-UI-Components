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

function simplifyFraction([numerator, denominator]) {
  for (let i = numerator; i > 0; i--) {
    if (!(numerator % i) && !(denominator % i)) {
      return [numerator / i, denominator / i];
    }
  }
}

/**
 * Reduce a fraction represented as a string
 * @param {string} - a reprentation of a fraction in this format 16/9
 * @return {string} - a reduced representation of the fraction
 */
export function reduceFraction(string) {
  return simplifyFraction(string.split('/').map(n => +n)).join('/');
}

/**
 * Returns first argument that is a number. Useful for finding ARGB numbers. Does not convert strings to numbers
 * @param {...*} number - maybe a number
 **/
export function getFirstNumber(...numbers) {
  return numbers.find(Number.isFinite);
}

export const degreesToRadians = deg => deg * (Math.PI / 180);

/**
 * Given any number of arguments, returns the greatest number passed to the function.
 * If no valid numbers are passed in (ex. NaN, undefined, null), `undefined` will be returned.
 * @param {...*} arguments Any number of arguments may be passed into the function.
 *
 * @return {number|undefined} The greatest number passed in as an argument or `undefined` if no valid number was passed in.
 */
export function max() {
  if (!arguments) {
    return;
  }

  const args = Array.from(arguments).filter(arg => !isNaN(arg) && arg != null);

  if (!args.length) {
    return;
  }

  return Math.max(...args);
}

export default {
  simplifyFraction,
  reduceFraction,
  getFirstNumber,
  degreesToRadians,
  max
};
