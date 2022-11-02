import lng from '@lightningjs/core';
import { updateManager } from '../src/globals/global-update-manager/GlobalUpdateManager.js';
import context from '../src/globals/context/index.js';
import jest from 'jest-mock';
import XfinityTheme from '@suite-themes/xfinity-lightning-tv';

context.setTheme({
  ...XfinityTheme,
  extensions: [] // Disable extensions for tests
});

const stage = {
  w: 1920,
  h: 1080,
  clearColor: 0x00000000,
  canvas2d: false,
  useImageWorker: false
};
const pressEvent = {
  preventDefault: jest.fn()
};

function keyPress(elm, key) {
  const keyEvt = typeof key === 'string' ? { key } : key;

  if (
    !elm.stage.application.focusTopDownEvent(
      [`_capture${keyEvt.key}`, '_captureKey'],
      { ...pressEvent, type: 'keydown', ...keyEvt }
    )
  ) {
    elm.stage.application.focusBottomUpEvent(
      [`_handle${keyEvt.key}`, '_handleKey'],
      {
        ...pressEvent,
        type: 'keydown',
        ...keyEvt
      }
    );
  }
}

function keyRelease(elm, key) {
  const keyEvt = typeof key === 'string' ? { key } : key;

  if (
    !elm.stage.application.focusTopDownEvent(
      [`_capture${keyEvt.key}`, '_captureKey'],
      { ...pressEvent, ...keyEvt }
    )
  ) {
    elm.stage.application.focusBottomUpEvent(
      [`_handle${keyEvt.key}Release`, '_handleKeyRelease'],
      { ...pressEvent, type: 'keyup', ...keyEvt }
    );
  }
}

function forceAllUpdates(app) {
  updateManager.flush();
  app.stage.drawFrame();
}

function create(Component, options = {}) {
  const defaultOpts = { focused: true };
  const opts = {
    ...defaultOpts,
    ...options
  };
  class TestApp extends lng.Application {
    static _template() {
      return {
        w: 1920,
        h: 1080,
        rect: true,
        color: 0x00000000
      };
    }

    _getFocused() {
      return opts.focused && this.childList.first;
    }
  }

  const app = new TestApp({ stage, ...opts });
  app.stage.transitions.defaultTransitionSettings.duration = 0;
  app.children = Component;
  app.updateFocusPath();
  return {
    toJSON: (children = 1) => toJSON(app.childList.first, { children }),
    update: () => {
      app.stage.drawFrame();
    },
    forceAllUpdates: () => {
      forceAllUpdates(app);
    },
    focus: () => {
      app._focusPath = [app.childList.first];
      app.childList.first._focus();
    },
    unfocus: () => {
      app._focusPath = [app];
      app.childList.first._unfocus();
    },
    getContext: () => context,
    getInstance: () => app.childList.first,
    getFocused: () => app.focusPath[app.focusPath.length - 1],
    getApp: () => app,
    keyPress: key => {
      keyPress(app, key);
      app.stage.drawFrame();
    },
    keyRelease: key => keyRelease(app, key),
    destroy: () => app.destroy(),
    focusPath: () => app.focusPath.map(p => p.ref)
  };
}

function toJSON(element, { children } = {}) {
  const { ref } = element;
  const tree = { [ref]: {} };

  if (children && element.hasChildren()) {
    collectChildren(tree[ref], element.__childList, children);
  } else {
    tree[ref] = { ...getProperties(element) };
  }
  return tree;
}

function collectChildren(tree, children, maxDepth = 100) {
  const childList = children;
  for (let i = 0, j = childList.length; i < j && i < maxDepth; i++) {
    const element = childList.getAt(i);
    const ref = `${element.__ref || `Element-${element.id}`}`;
    const properties = getProperties(element);

    tree[ref] = { ...properties };

    if (element.hasChildren()) {
      tree[ref].children = {};
      collectChildren(tree[ref].children, element.__childList);
    }
  }
}

function getProperties(element) {
  const props = {};
  const list = [
    'alpha',
    'active',
    'attached',
    'boundsMargin',
    'color',
    'clipping',
    'enabled',
    'h',
    'isComponent',
    'mount',
    'mountY',
    'mountX',
    'pivot',
    'pivotX',
    'pivotY',
    'ref',
    'renderOfScreen',
    'renderToTexture',
    'scale',
    'scaleX',
    'scaleY',
    'state',
    'tag',
    'visible',
    'w',
    'x',
    'y',
    'zIndex',
    '!!flex',
    '!!flexItem',
    'hasFocus()',
    'hasFinalFocus()'
  ];
  let n = list.length;

  while (n--) {
    let key = list[n];
    const getBoolean = /^!{2}/;
    const isFunction = /\(\)$/;

    if (getBoolean.test(key)) {
      key = key.substring(2, key.length);
      props[key] = !!element[key];
    } else if (isFunction.test(key)) {
      key = key.substring(0, key.length - 2);
      if (typeof element[key] === 'function') {
        props[key] = element[key]();
      }
    } else {
      props[key] = element[key];
    }
  }
  return { ...props, ...element.getNonDefaults() };
}

export default {
  create,
  toJSON
};
