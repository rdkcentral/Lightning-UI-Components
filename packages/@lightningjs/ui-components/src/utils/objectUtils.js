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

/**
 * Merges two objects together and returns the duplicate.
 *
 * @param {Object} target - object to be cloned
 * @param {Object} [object] - secondary object to merge into clone
 */
export function clone(target, object) {
  // Make sure getters and setters are applied correctly
  const _clone = Object.create(Object.getPrototypeOf(target));
  Object.defineProperties(_clone, Object.getOwnPropertyDescriptors(target));
  if (!object || target === object) return _clone;

  for (const key in object) {
    const value = object[key];
    if (target.hasOwnProperty(key)) {
      _clone[key] = getMergeValue(key, target, object);
    } else {
      _clone[key] = value;
    }
  }

  return _clone;
}

function getMergeValue(key, target, object) {
  const targetVal = target[key];
  const objectVal = object[key];
  const targetValType = typeof targetVal;
  const objectValType = typeof objectVal;

  if (
    targetValType !== objectValType ||
    objectValType === 'function' ||
    Array.isArray(objectVal)
  ) {
    return objectVal;
  }

  if (objectVal && objectValType === 'object') {
    return clone(targetVal, objectVal);
  }

  return objectVal;
}

/**
 * Gets the value at `path` of `object`.
 * @param {Object} object
 * @param {string|Array} path
 * @return {*} value if exists else undefined
 */
export const getValFromObjPath = (object, path) => {
  if (typeof path === 'string')
    path = path.split('.').filter(key => key.length);
  return path.reduce((dive, key) => dive && dive[key], object);
};

export function objectPropertyOf(object, path) {
  return path.reduce(
    (obj, key) => (obj && obj[key] !== 'undefined' ? obj[key] : undefined),
    object
  );
}

export default {
  clone,
  getMergeValue,
  getValFromObjPath,
  objectPropertyOf
};
