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

class Logger {
  constructor() {
    this._logCallback = undefined;
    this._prefix = 'LightningUI';
    this._debug = false;
  }

  get debug() {
    return this._debug;
  }

  set debug(value) {
    this._debug = Boolean(value);
  }

  get logCallback() {
    return this._logCallback;
  }

  set logCallback(value) {
    if ('function' !== typeof value) {
      this.warn(
        `logCallback value must be a function, instead received ${typeof value}`
      );
      return;
    }
    this._logCallback = value;
  }

  log(...args) {
    if (this._logCallback) {
      this._logCallback({ level: 'log', payload: args });
    }
    if (this.debug) {
      // eslint-disable-next-line
      console.log(this._prefix, ...args);
    }
  }

  info(...args) {
    if (this._logCallback) {
      this._logCallback({ level: 'info', payload: args });
    }
    if (this.debug) {
      // eslint-disable-next-line
      console.info(this._prefix, ...args);
    }
  }

  warn(...args) {
    if (this._logCallback) {
      this._logCallback({ level: 'warn', payload: args });
    }
    if (this.debug) {
      console.warn(this._prefix, ...args);
    }
  }

  error(...args) {
    if (this._logCallback) {
      this._logCallback({ level: 'error', payload: args });
    }
    if (this.debug) {
      console.error(this._prefix, ...args);
    }
  }
}

const loggerInstance = new Logger();

export { loggerInstance as default, Logger };
