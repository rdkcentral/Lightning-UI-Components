/*
 * If not stated otherwise in this file or this component's LICENSE file the
 * following copyright and licenses apply:
 *
 * Copyright 2020 RDK Management
 *
 * Licensed under the Apache License, Version 2.0 (the License);
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
 */

import FocusManager from 'src/components/modules/FocusManager';
import TestRenderer from 'test/lightning-test-renderer';
import lng from 'wpe-lightning';

const Component = {
  Component: {
    type: FocusManager,
    direction: 'column',
    signals: {
      selectedChange: 'selectedChangeMock'
    },
    Page1: { type: lng.Component },
    Page2: { type: lng.Component },
    Page3: { type: lng.Component }
  }
};

const ComponentRow = {
  Component: {
    ...Component.Component,
    direction: 'row'
  }
};

describe('FocusManager', () => {
  it('should render', () => {
    let testRenderer = TestRenderer.create(Component);
    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should set focus on first item', () => {
    let testRenderer = TestRenderer.create(Component);
    let focusManager = testRenderer.getInstance();
    expect(focusManager.selectedIndex).toBe(0);
  });

  describe('direction column', () => {
    it('should set focus on next item on keyDown', () => {
      let testRenderer = TestRenderer.create(Component);
      testRenderer.keyPress('Down');
      let focusManager = testRenderer.getInstance();
      expect(focusManager.selectedIndex).toBe(1);
    });

    it('should track focus correctly', () => {
      let testRenderer = TestRenderer.create(Component);
      testRenderer.keyPress('Down');
      testRenderer.keyPress('Down');
      testRenderer.keyPress('Up');
      let focusManager = testRenderer.getInstance();
      expect(focusManager.selectedIndex).toBe(1);
    });
  });

  describe('direction row', () => {
    it('should set focus on next item on keyRight', () => {
      let testRenderer = TestRenderer.create(ComponentRow);
      testRenderer.keyPress('Right');
      let focusManager = testRenderer.getInstance();
      expect(focusManager.selectedIndex).toBe(1);
    });

    it('should not track keyDown', () => {
      let testRenderer = TestRenderer.create(ComponentRow);
      testRenderer.keyPress('Down');
      let focusManager = testRenderer.getInstance();
      expect(focusManager.selectedIndex).toBe(0);
    });

    it('should track focus correctly', () => {
      let testRenderer = TestRenderer.create(ComponentRow);
      testRenderer.keyPress('Right');
      testRenderer.keyPress('Right');
      testRenderer.keyPress('Left');
      let focusManager = testRenderer.getInstance();
      expect(focusManager.selectedIndex).toBe(1);
    });
  });

  describe('handling bounds', () => {
    it('should keep selected in bounds via keypress', () => {
      let testRenderer = TestRenderer.create(Component);
      let focusManager = testRenderer.getInstance();
      testRenderer.keyPress('Down');
      testRenderer.keyPress('Down');
      testRenderer.keyPress('Down');
      testRenderer.keyPress('Down');
      expect(focusManager.selectedIndex).toBe(2);
    });

    it('should keep selected in bounds for setting selected greater', () => {
      let testRenderer = TestRenderer.create(Component);
      let focusManager = testRenderer.getInstance();
      focusManager.selectedIndex = 10;
      expect(focusManager.selectedIndex).toBe(2);
    });

    it('should keep selected in bounds for setting selected less than', () => {
      let testRenderer = TestRenderer.create(Component);
      let focusManager = testRenderer.getInstance();
      focusManager.selectedIndex = -1;
      expect(focusManager.selectedIndex).toBe(0);
    });
  });

  describe('signals', () => {
    it('should signal selectedChange', () => {
      let testRenderer = TestRenderer.create(Component);
      let app = testRenderer.getApp();
      let focusManager = testRenderer.getInstance();
      app.constructor.prototype.selectedChangeMock = jest.fn();
      testRenderer.keyPress('Down');
      let previous = focusManager.children[focusManager.selectedIndex - 1];
      expect(app.selectedChangeMock).toHaveBeenCalledWith(
        focusManager.selected,
        previous,
        'next'
      );
    });
  });
});
