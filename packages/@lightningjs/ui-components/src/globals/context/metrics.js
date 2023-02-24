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

import logger from './logger.js';
class Metrics {
  constructor() {
    this._keyMetricsCallback = undefined;
  }

  get keyMetricsCallback() {
    return this._keyMetricsCallback;
  }

  set keyMetricsCallback(value) {
    if (-1 < ['undefined', 'function'].indexOf(typeof value)) {
      this._keyMetricsCallback = value;
      return;
    }
    logger.warn(
      `context keyMetricsCallback expected a function. Received ${typeof value}`
    );
  }
}

const metricsInstance = new Metrics();

export { metricsInstance as default, Metrics };
