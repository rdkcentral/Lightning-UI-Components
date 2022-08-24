import context from '../context';

class GlobalUpdateManager {
  constructor() {
    this._updateThemeSet = new Set();
    this._requestUpdateSet = new Set();
    this._timeout = null;
    this._runUpdatesTimeoutHandler = this._runUpdatesTimeoutHandler.bind(this);
  }

  _runUpdatesTimeoutHandler() {
    this._timeout = null;
    this._updateThemeSet.forEach(component => {
      try {
        component._updateThemeComponent();
      } catch (e) {
        context.error('Error updating component themes', e);
      }
    });
    this._updateThemeSet.clear();

    this._requestUpdateSet.forEach(component => {
      try {
        component.requestUpdate();
      } catch (e) {
        context.error('Error updating component', e);
      }
    });
    this._requestUpdateSet.clear();
  }

  /**
   * Force all updates now
   *
   * @returns
   */
  flush() {
    // If there is no timeout then there is definately nothing to update
    if (!this._timeout) return;
    clearTimeout(this._timeout);
    this._runUpdatesTimeoutHandler();
  }

  addUpdateTheme(component) {
    this._updateThemeSet.add(component);
    if (!this._timeout) {
      this._timeout = setTimeout(this._runUpdatesTimeoutHandler, 0);
    }
  }

  deleteUpdateTheme(component) {
    // Don't bother checking and clearing the timeout if one is active
    // Not worth the overhead. More than likely it needs to run again anyway.
    this._updateThemeSet.delete(component);
  }

  addRequestUpdate(component) {
    this._requestUpdateSet.add(component);
    if (!this._timeout) {
      this._timeout = setTimeout(this._runUpdatesTimeoutHandler, 0);
    }
  }

  deleteRequestUpdate(component) {
    // See note in deleteRequestUpdate()
    this._requestUpdateSet.delete(component);
  }
}

export const updateManager = new GlobalUpdateManager();
