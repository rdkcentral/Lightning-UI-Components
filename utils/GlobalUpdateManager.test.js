import context from '../context';
import { updateManager } from './GlobalUpdateManager';
import TestUtils from '../test/lightning-test-utils';

describe('GlobalUpdateManager', () => {
  describe('addUpdateTheme', () => {
    it('calls _updateThemeComponent on next frame and only the next one', async () => {
      const fakeComponent = {
        _updateThemeComponent: jest.fn()
      };
      updateManager.addUpdateTheme(fakeComponent);
      expect(fakeComponent._updateThemeComponent).not.toHaveBeenCalled();
      await TestUtils.nextTick();
      expect(fakeComponent._updateThemeComponent).toHaveBeenCalledTimes(1);
      await TestUtils.nextTick();
      await TestUtils.nextTick();
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
      await TestUtils.nextTick();
      await TestUtils.nextTick();
      await TestUtils.nextTick();
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
      await TestUtils.nextTick();
      expect(fakeComponent._updateThemeComponent).not.toHaveBeenCalled();
      await TestUtils.nextTick();
      await TestUtils.nextTick();
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
    it('calls _requestUpdate on next frame and only the next one', async () => {
      const fakeComponent = {
        _requestUpdate: jest.fn()
      };
      updateManager.addRequestUpdate(fakeComponent);
      await TestUtils.nextTick();
      await TestUtils.nextTick();
      await TestUtils.nextTick();
      expect(fakeComponent._requestUpdate).toHaveBeenCalledTimes(1);
    });

    it('deduplicates multiple calls on the same component', async () => {
      const fakeComponent = {
        _requestUpdate: jest.fn()
      };
      updateManager.addRequestUpdate(fakeComponent);
      updateManager.addRequestUpdate(fakeComponent);
      updateManager.addRequestUpdate(fakeComponent);
      updateManager.addRequestUpdate(fakeComponent);
      expect(fakeComponent._requestUpdate).not.toHaveBeenCalled();
      await TestUtils.nextTick();
      expect(fakeComponent._requestUpdate).toHaveBeenCalledTimes(1);
      await TestUtils.nextTick();
      await TestUtils.nextTick();
      expect(fakeComponent._requestUpdate).toHaveBeenCalledTimes(1);
    });
  });

  describe('deleteRequestUpdate', () => {
    it('when called once immediately after a component is added it prevents _requestUpdate from being called', async () => {
      const fakeComponent = {
        _requestUpdate: jest.fn()
      };
      updateManager.addRequestUpdate(fakeComponent);
      updateManager.addRequestUpdate(fakeComponent);
      updateManager.addRequestUpdate(fakeComponent);
      updateManager.deleteRequestUpdate(fakeComponent);
      expect(fakeComponent._requestUpdate).not.toHaveBeenCalled();
      await TestUtils.nextTick();
      expect(fakeComponent._requestUpdate).not.toHaveBeenCalled();
      await TestUtils.nextTick();
      await TestUtils.nextTick();
      expect(fakeComponent._requestUpdate).not.toHaveBeenCalled();
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
        _requestUpdate: jest.fn()
      };
      const fakeComponent2 = {
        _updateThemeComponent: jest.fn(),
        _requestUpdate: jest.fn()
      };
      updateManager.addRequestUpdate(fakeComponent);
      updateManager.addUpdateTheme(fakeComponent);
      updateManager.addRequestUpdate(fakeComponent2);
      updateManager.addUpdateTheme(fakeComponent2);
      updateManager.flush();
      expect(fakeComponent._updateThemeComponent).toHaveBeenCalledTimes(1);
      expect(fakeComponent._updateThemeComponent).toHaveBeenCalledTimes(1);
      expect(fakeComponent2._requestUpdate).toHaveBeenCalledTimes(1);
      expect(fakeComponent2._requestUpdate).toHaveBeenCalledTimes(1);
    });

    it('does nothing if there are no pending updates', () => {
      // Mainly here for branch test coverage
      expect(() => {
        updateManager.flush();
      }).not.toThrow();
    });
  });

  it('always calls _updateThemeComponent before _requestUpdate', async () => {
    const callLog = [];
    const fakeComponent = {
      _updateThemeComponent: () => {
        callLog.push('_updateThemeComponent');
      },
      _requestUpdate: () => {
        callLog.push('_requestUpdate');
      }
    };
    const fakeComponent2 = { ...fakeComponent };

    updateManager.addRequestUpdate(fakeComponent);
    updateManager.addUpdateTheme(fakeComponent);
    updateManager.addUpdateTheme(fakeComponent2);
    expect(callLog).toEqual([]);
    await TestUtils.nextTick();
    expect(callLog).toEqual([
      '_updateThemeComponent',
      '_updateThemeComponent',
      '_requestUpdate'
    ]);
  });

  it('logs errors thrown in _updateThemeComponent and _requestUpdate', async () => {
    jest.spyOn(context, 'error');
    const fakeComponent = {
      _updateThemeComponent: () => {
        throw 'Update Theme Error';
      },
      _requestUpdate: () => {
        throw 'Request Update Error';
      }
    };
    updateManager.addRequestUpdate(fakeComponent);
    updateManager.addUpdateTheme(fakeComponent);
    await TestUtils.nextTick();
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
