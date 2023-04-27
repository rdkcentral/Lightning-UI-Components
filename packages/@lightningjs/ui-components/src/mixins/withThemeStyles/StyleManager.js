import styleWorker from './style.worker';
import { getStyleChain } from './utils.js';

export default class StyleManager {
  constructor() {
    this._initWorker(); // Setup the worker that will do all the deep merging
  }

  _initWorker() {
    // Share one instance of the worker and process in a queue
    if (!window.LUI_THEME_WORKER) {
      const code = `(${styleWorker.toString()})()`;
      const blob = new Blob([code.replace('"use strict";', '')]);
      const blobURL = (window.URL ? URL : window.webkitURL).createObjectURL(
        blob,
        {
          type: 'application/javascript; charset=utf-8'
        }
      );

      // Create the worker and store in the window so it can be used across all component instances
      window.LUI_THEME_WORKER = {
        queue: new Map(),
        instance: new Worker(blobURL)
      };
      // Keep a queue of pending promises to resolve across the application
      window.LUI_THEME_WORKER.instance.onmessage = ({ data }) => {
        if (window.LUI_THEME_WORKER.queue.has(data.id)) {
          const queuePromise = window.LUI_THEME_WORKER.queue.get(data.id);
          window.LUI_THEME_WORKER.queue.delete(data.id);
          if (data.result instanceof Error) {
            if (typeof queuePromise?.reject == 'function')
              queuePromise.reject(data.result);
            return;
          }

          if (typeof queuePromise?.resolve == 'function')
            queuePromise.resolve(data.result);
        }
      };
    }
  }

  /**
   * Each web worker message is assigned a unique id which will be used to resolve the correct promise when
   * onmessage send the result back
   */
  _generateUniqueID() {
    return Math.random().toString(16).slice(2);
  }

  /**
   * Store all pending promises in the queue. Once the work is done in the worker the promise will be resolved
   */
  _updateQueue(id, promise) {
    window.LUI_THEME_WORKER.queue.set(id, promise);
  }

  /**
   * Process the components style source in the web worker. The style source should only be refreshed under the following conditions
   * 1. On setup
   * 2. When the theme is changed
   * 3. When a component style has been changed (Check this case, not sure if this is true)
   */
  processStyleSource(component) {
    const id = this._generateUniqueID();
    return new Promise((resolve, reject) => {
      // You cannot pass functions to WebWorkers so we will stringify it and revive it once it gets there
      const styleChain = JSON.stringify(
        getStyleChain.call(component),
        function (_, value) {
          return typeof value === 'function' ? value.toString() : value;
        }
      );

      this._updateQueue(id, { resolve, reject }); // Will resolve when worker is complete

      window.LUI_THEME_WORKER.instance.postMessage({
        id,
        action: 'styleSource',
        styleChain, // Can't process this in the webworker as passing the whole component fails during serialization
        theme: JSON.parse(JSON.stringify(component.theme)) // Functions like extensions are not needed and cannot be passed to the web worker
      });
    });
  }

  /**
   * Process the final component style values this should be refreshed in the following cases.
   * This call lives behind a cache, anytime the cache is cleared styles will be processed via the web worker
   * The cache is cleared under these circumstances
   * 1. Theme change
   * 2. Mode change
   * 4. Palette change
   * 5. Component style update
   * 6. Width or Height change
   */
  processStyle(componentStyleSource, options) {
    const id = this._generateUniqueID();
    return new Promise((resolve, reject) => {
      this._updateQueue(id, { resolve, reject }); // Will resolve when worker is complete
      window.LUI_THEME_WORKER.instance.postMessage({
        id,
        action: 'style',
        componentStyleSource,
        options
      });
    });
  }
}
