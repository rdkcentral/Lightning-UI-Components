/**
 * Copyright 2020 Comcast Cable Communications Management, LLC
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

const getDefaultTransitionOptions = () => ({
  properties: ['alpha', 'color', 'scale', 'h', 'w', 'x', 'y'],
  transition: {
    duration: 0.2,
    delay: 0,
    timingFunction: 'cubic-bezier(0.20, 1.00, 0.52, 1.00)'
  }
});

export const createTransitions = options => {
  const defaultOptions = getDefaultTransitionOptions();
  const opts = {
    ...defaultOptions,
    ...options,
    transition: {
      ...defaultOptions.transition,
      ...options.transition
    }
  };
  return opts.properties.reduce(
    (obj, key) => ({
      ...obj,
      [key]: { ...opts.transition }
    }),
    {}
  );
};
