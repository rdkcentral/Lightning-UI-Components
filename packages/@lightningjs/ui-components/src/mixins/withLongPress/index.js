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

    set targetKey(val) {
      this._targetKey = val;
    }
    set executeOnce(val) {
      this._executeOnce = val;
    }

    /**s
     * this will handle only key down events
     * it will grab a reference start time stamp and compare it to any subsuquent key down events' timestamp values
     * when we meet the set threshold time in seconds, we will execute a supplied callback method
     * */
    _handleKey(keyEvent) {
      // capture the key event time stamp thr first time through to use as a reference.
      if (!this.pressedTimeStart) {
        this.pressedTimeStart = keyEvent.timeStamp;
        console.log(keyEvent);
        this.hasExecuted = false;
        super._handleKey(keyEvent);
      }
      // check latest keyEvent time stamp against the start time stamp and see if the difference
      // is greater than the threshold
      const x = this._executeOnce && !this.hasExecuted;
      if (
        // eslint-disable-next-line no-constant-condition
        x &&
        this.pressedTimeStart &&
        keyEvent.timeStamp - this.pressedTimeStart > (this._threshold || 2000)
      ) {
        this.signal('longPressHit', keyEvent.key);
        if (this._executeOnce) {
          this.hasExecuted = true;
        }
        if (!this._executeOnce) {
          this.pressedTimeStart = keyEvent.timeStamp;
        } else {
          this.pressedTimeStart = null;
        }
      }
    }
    /**
     * this will handle only key up events
     * */
    _handleKeyRelease(keyEvent) {
      this.pressedTimeStart = null;
      this.hasExecuted = false;

      super._handleKeyRelease(keyEvent);
    }
  };
}
