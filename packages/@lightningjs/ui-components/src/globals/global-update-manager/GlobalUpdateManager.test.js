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

import context from '../context';
import { updateManager } from './GlobalUpdateManager.js';
import { nextTick } from '@lightningjs/ui-components-test-utils';
import { jest } from '@jest/globals';

describe('GlobalUpdateManager', () => {
  describe('addUpdateTheme', () => {
    it('calls _updateThemeComponent on next frame and only the next one', async () => {
      const fakeComponent = {
        _updateThemeComponent: jest.fn()
      };
      updateManager.addUpdateTheme(fakeComponent);
      expect(fakeComponent._updateThemeComponent).not.toHaveBeenCalled();
      await nextTick();
      expect(fakeComponent._updateThemeComponent).toHaveBeenCalledTimes(1);
      await nextTick();
      await nextTick();
      expect(fakeComponent._updateThemeComponent).toHaveBeenCalledTimes(1);
    });

    it('deduplicates multiple calls on the same component', async () => {
      const fakeComponent = {
        _updateThemeComponent: jest.fn()
      };
      updateManager.addUpdateTheme(fakeComponent);
      updateManager.addUpdateTheme(fakeComponent);
      updateManager.addUpdateTheme(fakeComponent);
      updateManager.addUpdateTheme(fakeComponent);
      await nextTick();
      await nextTick();
      await nextTick();
      expect(fakeComponent._updateThemeComponent).toHaveBeenCalledTimes(1);
    });
  });

  describe('deleteUpdateTheme', () => {
    it('when called once immediately after a component is added it prevents _updateThemeComponent from being called', async () => {
      const fakeComponent = {
        _updateThemeComponent: jest.fn()
      };
      updateManager.addUpdateTheme(fakeComponent);
      updateManager.addUpdateTheme(fakeComponent);
      updateManager.addUpdateTheme(fakeComponent);
      updateManager.deleteUpdateTheme(fakeComponent);
      expect(fakeComponent._updateThemeComponent).not.toHaveBeenCalled();
      await nextTick();
      expect(fakeComponent._updateThemeComponent).not.toHaveBeenCalled();
      await nextTick();
      await nextTick();
      expect(fakeComponent._updateThemeComponent).not.toHaveBeenCalled();
    });

    it('can be called even if component never added', () => {
      const fakeComponent = {};
      expect(() => {
        updateManager.deleteUpdateTheme(fakeComponent);
        updateManager.deleteUpdateTheme(fakeComponent);
      }).not.toThrow();
    });
  });

  describe('addRequestUpdate', () => {
    it('calls requestUpdate on next frame and only the next one', async () => {
      const fakeComponent = {
        requestUpdate: jest.fn()
      };
      updateManager.addRequestUpdate(fakeComponent);
      await nextTick();
      await nextTick();
      await nextTick();
      expect(fakeComponent.requestUpdate).toHaveBeenCalledTimes(1);
    });

    it('deduplicates multiple calls on the same component', async () => {
      const fakeComponent = {
        requestUpdate: jest.fn()
      };
      updateManager.addRequestUpdate(fakeComponent);
      updateManager.addRequestUpdate(fakeComponent);
      updateManager.addRequestUpdate(fakeComponent);
      updateManager.addRequestUpdate(fakeComponent);
      expect(fakeComponent.requestUpdate).not.toHaveBeenCalled();
      await nextTick();
      expect(fakeComponent.requestUpdate).toHaveBeenCalledTimes(1);
      await nextTick();
      await nextTick();
      expect(fakeComponent.requestUpdate).toHaveBeenCalledTimes(1);
    });
  });

  describe('deleteRequestUpdate', () => {
    it('when called once immediately after a component is added it prevents requestUpdate from being called', async () => {
      const fakeComponent = {
        requestUpdate: jest.fn()
      };
      updateManager.addRequestUpdate(fakeComponent);
      updateManager.addRequestUpdate(fakeComponent);
      updateManager.addRequestUpdate(fakeComponent);
      updateManager.deleteRequestUpdate(fakeComponent);
      expect(fakeComponent.requestUpdate).not.toHaveBeenCalled();
      await nextTick();
      expect(fakeComponent.requestUpdate).not.toHaveBeenCalled();
      await nextTick();
      await nextTick();
      expect(fakeComponent.requestUpdate).not.toHaveBeenCalled();
    });

    it('can be called even if component never added', () => {
      const fakeComponent = {};
      expect(() => {
        updateManager.deleteUpdateTheme(fakeComponent);
        updateManager.deleteUpdateTheme(fakeComponent);
      }).not.toThrow();
    });
  });

  describe('flush', () => {
    it('runs pending updates immediately', () => {
      const fakeComponent = {
        _updateThemeComponent: jest.fn(),
        requestUpdate: jest.fn()
      };
      const fakeComponent2 = {
        _updateThemeComponent: jest.fn(),
        requestUpdate: jest.fn()
      };
      updateManager.addRequestUpdate(fakeComponent);
      updateManager.addUpdateTheme(fakeComponent);
      updateManager.addRequestUpdate(fakeComponent2);
      updateManager.addUpdateTheme(fakeComponent2);
      updateManager.flush();
      expect(fakeComponent._updateThemeComponent).toHaveBeenCalledTimes(1);
      expect(fakeComponent._updateThemeComponent).toHaveBeenCalledTimes(1);
      expect(fakeComponent2.requestUpdate).toHaveBeenCalledTimes(1);
      expect(fakeComponent2.requestUpdate).toHaveBeenCalledTimes(1);
    });

    it('does nothing if there are no pending updates', () => {
      // Mainly here for branch test coverage
      expect(() => {
        updateManager.flush();
      }).not.toThrow();
    });
  });

  it('always calls _updateThemeComponent before requestUpdate', async () => {
    const callLog = [];
    const fakeComponent = {
      _updateThemeComponent: () => {
        callLog.push('_updateThemeComponent');
      },
      requestUpdate: () => {
        callLog.push('requestUpdate');
      }
    };
    const fakeComponent2 = { ...fakeComponent };

    updateManager.addRequestUpdate(fakeComponent);
    updateManager.addUpdateTheme(fakeComponent);
    updateManager.addUpdateTheme(fakeComponent2);
    expect(callLog).toEqual([]);
    await nextTick();
    expect(callLog).toEqual([
      '_updateThemeComponent',
      '_updateThemeComponent',
      'requestUpdate'
    ]);
  });

  it('logs errors thrown in _updateThemeComponent and requestUpdate', async () => {
    jest.spyOn(context, 'error');
    const fakeComponent = {
      _updateThemeComponent: () => {
        throw 'Update Theme Error';
      },
      requestUpdate: () => {
        throw 'Request Update Error';
      }
    };
    updateManager.addRequestUpdate(fakeComponent);
    updateManager.addUpdateTheme(fakeComponent);
    await nextTick();
    expect(context.error).toHaveBeenNthCalledWith(
      1,
      'Error updating component themes',
      'Update Theme Error'
    );
    expect(context.error).toHaveBeenNthCalledWith(
      2,
      'Error updating component',
      'Request Update Error'
    );
  });
});
