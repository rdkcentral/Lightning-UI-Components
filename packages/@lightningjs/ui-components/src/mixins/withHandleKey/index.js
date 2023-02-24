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

import { context } from '../../globals/index.js';

export default function withHandleKey(Base) {
  return class extends Base {
    static get name() {
      return Base.name;
    }

    _handleKey(keyEvent) {
      return this._processEvent(keyEvent);
    }

    _handleKeyRelease(keyEvent) {
      return this._processEvent(keyEvent, 'Release');
    }

    _processEvent(keyEvent, suffix = '') {
      const keyMap = this.stage.application.__keymap || {};
      let key = keyMap[keyEvent.keyCode];
      if (!key) {
        key = keyEvent.key;
      }
      if (key && typeof this[`on${key}${suffix}`] === 'function') {
        this._invokeKeyPayloadCallback(key + suffix);
        return this[`on${key}${suffix}`].call(this, this, keyEvent);
      }
      return false;
    }

    _invokeKeyPayloadCallback(key) {
      if (
        this.metricsPayload &&
        typeof context.keyMetricsCallback === 'function'
      ) {
        context.keyMetricsCallback(key, this.metricsPayload);
      }
    }
  };
}
