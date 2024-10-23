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

    get threshold() {
      return this._threshold;
    }

    set continuousExecution(val) {
      this._continuousExecution = val;
    }

    _construct() {
      this._pressedTimeStart = null;
      this._hasExecuted = false;
      this._threshold = 2000;
      super._construct();
    }
    /**
     * this will handle only key down events
     * it will grab a reference start time stamp and compare it to any subsequent key down events' timestamp values
     * when we meet the set threshold time in seconds, we will execute a supplied callback method
     * */
    _handleKey(keyEvent) {
      // capture the key event time stamp the first time through to use as a reference.
      if (!this._firstPressed) {
        this._firstPressed = this._pressedTimeStart = keyEvent.timeStamp;
        super._handleKey(keyEvent);
      }
      // check latest keyEvent time stamp against the start time stamp and see if the difference
      // is greater than the threshold
      if (
        // eslint-disable-next-line no-constant-condition
        this._pressedTimeStart &&
        keyEvent.timeStamp - this._pressedTimeStart >= this.threshold
      ) {
        // short circuit here if we only want to execute once before a key up event
        if (!this._continuousExecution && this._hasExecuted) {
          return;
        }
        this.fireAncestors('$longPressHit', keyEvent.key);
        if (this._continuousExecution) {
          this._pressedTimeStart += this.threshold;
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
      if (keyEvent.timeStamp - this._firstPressed >= this.threshold) {
        this.fireAncestors('$longPressEnd', keyEvent.key);
      }
      this._firstPressed = null;
      this._pressedTimeStart = null;
      this._hasExecuted = false;
      super._handleKeyRelease(keyEvent);
    }
  };
}
