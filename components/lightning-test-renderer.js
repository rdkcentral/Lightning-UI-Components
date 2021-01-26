/**
 * Copyright 2020 Comcast Cable Communications Management, LLC
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
import lng from 'wpe-lightning';

const stage = {
  w: 1920,
  h: 1080,
  clearColor: 0x00000000,
  debug: false,
  canvas2d: false,
  useImageWorker: false
};
const pressEvent = {
  preventDefault: jest.fn()
};

function keyPress(elm, key) {
  if (
    !elm.stage.application.focusTopDownEvent(
      [`_capture${key}`, '_captureKey'],
      { ...pressEvent, type: 'keydown', key }
    )
  ) {
    elm.stage.application.focusBottomUpEvent([`_handle${key}`, '_handleKey'], {
      ...pressEvent,
      type: 'keydown',
      key
    });
  }
}

function keyRelease(elm, key) {
  if (
    !elm.stage.application.focusTopDownEvent(
      [`_capture${key}`, '_captureKey'],
      pressEvent
    )
  ) {
    elm.stage.application.focusBottomUpEvent(
      [`_handle${key}Release`, '_handleKeyRelease'],
      { ...pressEvent, type: 'keyup' }
    );
  }
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

  let app = new TestApp({ stage });
  app.stage.transitions.defaultTransitionSettings.duration = 0;
  app.children = Component;
  app.updateFocusPath();
  return {
    toJSON: (children = 1) => toJSON(app.childList.first, { children }),
    update: () => {
      app.stage.drawFrame();
    },
    focus: () => {
      app._focusPath = [app.childList.first];
      app.childList.first._focus();
    },
    unfocus: () => {
      app._focusPath = [app];
      app.childList.first._unfocus();
    },
    getInstance: () => app.childList.first,
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
