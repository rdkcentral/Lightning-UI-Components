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

import { jest } from '@jest/globals';
import { makeCreateComponent } from '@lightningjs/ui-components-test-utils';
import withMarqueeSync from './withMarqueeSync';
import TextBox from '../../components/TextBox';
import Base from '../../components/Base';

describe('withMarqueeSync', () => {
  let withMarqueeSyncComponent, testRenderer;
  let willMarqueeSpy, updateSignalsSpy, cleanupSpy;
  class Example extends Base {
    static get __componentName() {
      return 'Example';
    }

    static _template() {
      return {
        Example: {
          TextOne: {
            type: TextBox,
            content: 'a string of text'
          },
          TextTwo: {
            type: TextBox,
            content: 'an even longer string of text'
          }
        }
      };
    }

    _init() {
      super._init();
      this._syncArray = [this.TextOne, this.TextTwo];
      this.style = {
        marqueeSync: true
      };
    }

    get syncArray() {
      return this._syncArray;
    }

    set syncArray(v) {
      this._syncArray = v;
    }

    _enableMarquee() {
      this.TextOne.marquee = true;
      this.TextTwo.marquee = true;
    }

    _disableMarquee() {
      this.TextOne.marquee = false;
      this.TextTwo.marquee = false;
    }

    get TextOne() {
      return this.tag('Example.TextOne');
    }

    get TextTwo() {
      return this.tag('Example.TextTwo');
    }
  }

  beforeEach(() => {
    [withMarqueeSyncComponent, testRenderer] = makeCreateComponent(
      withMarqueeSync(Example)
    )();
    willMarqueeSpy = jest.spyOn(withMarqueeSyncComponent, '_willMarquee');
    updateSignalsSpy = jest.spyOn(withMarqueeSyncComponent, '_updateSignals');
    cleanupSpy = jest.spyOn(withMarqueeSyncComponent, '_cleanupSyncValues');
  });

  afterEach(() => {
    withMarqueeSyncComponent = null;
  });

  it('extends the base class', () => {
    expect(withMarqueeSyncComponent.constructor.name).toBe('Example');
  });

  it('should apply signals to child components', () => {
    expect(withMarqueeSyncComponent.TextOne.signals).toStrictEqual({
      willMarquee: '_willMarquee'
    });
    expect(withMarqueeSyncComponent.TextTwo.signals).toStrictEqual({
      willMarquee: '_willMarquee'
    });
  });

  it('should have matching overrideX values across components', () => {
    withMarqueeSyncComponent.style.marqueeSync = true;
    withMarqueeSyncComponent._enableMarquee();
    testRenderer.forceAllUpdates();
    expect(withMarqueeSyncComponent.TextOne._Marquee.overrideLoopX).toBe(
      withMarqueeSyncComponent.TextTwo._Marquee.overrideLoopX
    );
    expect(willMarqueeSpy).toHaveBeenCalled();
    expect(updateSignalsSpy).toHaveBeenCalled();
  });

  it("shouldn't sync marquee values if sync is disabled in the component style", () => {
    withMarqueeSyncComponent.style.marqueeSync = false;
    jest.clearAllMocks();

    withMarqueeSyncComponent._enableMarquee();
    testRenderer.forceAllUpdates();

    expect(withMarqueeSyncComponent._shouldSync).toBe(false);
    expect(willMarqueeSpy).not.toHaveBeenCalled();
    expect(updateSignalsSpy).not.toHaveBeenCalled();
    expect(cleanupSpy).toHaveBeenCalled();
  });

  it("shouldn't sync if syncArray value is invalid", () => {
    withMarqueeSyncComponent.syncArray = null;
    testRenderer.forceAllUpdates();
    expect(withMarqueeSyncComponent._shouldSync).toBe(false);

    withMarqueeSyncComponent.syncArray = [];
    testRenderer.forceAllUpdates();
    expect(withMarqueeSyncComponent._shouldSync).toBe(false);

    withMarqueeSyncComponent.syncArray = [withMarqueeSyncComponent.TextTwo];
    testRenderer.forceAllUpdates();
    expect(withMarqueeSyncComponent._shouldSync).toBe(false);

    withMarqueeSyncComponent.syncArray = {};
    testRenderer.forceAllUpdates();
    expect(withMarqueeSyncComponent._shouldSync).toBe(false);
  });
});
