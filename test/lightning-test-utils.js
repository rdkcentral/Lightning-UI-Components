import { readFileSync } from 'fs';
import TestRenderer from './lightning-test-renderer';

export default {
  fastForward,
  makeCreateComponent,
  pathToDataURI,
  nextTick
};

function nextTick(wait = 0) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, wait);
  });
}

function fastForward(elements) {
  const _fastForward = element => {
    if (element._transitions) {
      Object.values(element._transitions).forEach(transition =>
        transition.finish()
      );
    }
  };
  if (typeof elements.forEach === 'function') elements.forEach(_fastForward);
  if (elements && elements._transitions) _fastForward(elements);
}

function pathToDataURI(path) {
  return `data:image/jpg;base64, ${readFileSync(path).toString('base64')}`;
}

function makeCreateComponent(type, defaultConfig = {}, options = {}) {
  return (config = {}) => {
    const testRenderer = TestRenderer.create(
      {
        Component: {
          type,
          ...defaultConfig,
          ...config
        }
      },
      options
    );
    return [testRenderer.getInstance(), testRenderer];
  };
}
