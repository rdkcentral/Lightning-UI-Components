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

export default function withLongPress(Base) {
  return class extends Base {
    static get name() {
      return Base.name;
    }
    set threshold(value) {
      this._threshold = value;
    }

    set continuousExecution(val) {
      this._continuousExecution = val;
    }
    _init() {
      this._pressedTimeStart = null;
      this._hasExecuted = false;
      super._init();
    }
    /**
     * this will handle only key down events
     * it will grab a reference start time stamp and compare it to any subsuquent key down events' timestamp values
     * when we meet the set threshold time in seconds, we will execute a supplied callback method
     * */
    _handleKey(keyEvent) {
      // capture the key event time stamp thr first time through to use as a reference.
      if (!this._pressedTimeStart) {
        this._pressedTimeStart = keyEvent.timeStamp;
        super._handleKey(keyEvent);
      }
      // check latest keyEvent time stamp against the start time stamp and see if the difference
      // is greater than the threshold

      if (
        // eslint-disable-next-line no-constant-condition
        this._pressedTimeStart &&
        keyEvent.timeStamp - this._pressedTimeStart >= (this._threshold || 2000)
      ) {
        // shortcircuit here if we only want to execute once before a key up event
        if (!this._continuousExecution && this._hasExecuted) {
          return;
        }
        this.fireAncestors('$longPressHit', keyEvent.key);
        if (this._continuousExecution) {
          this._pressedTimeStart = keyEvent.timeStamp;
        } else {
          this._hasExecuted = true;
          this._pressedTimeStart = null;
        }
      }
    }
    /**
     * this will handle only key up events
     * */
    _handleKeyRelease(keyEvent) {
      this._pressedTimeStart = null;
      this._hasExecuted = false;
      super._handleKeyRelease(keyEvent);
    }
  };
}
