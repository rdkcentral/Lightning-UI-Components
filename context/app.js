/**
 * Class to create a app object. The app object is designed to be used only in context.
 * Holds a reference to the main application object as well as tracks when lightning UI components are added and removed from the tree
 */
export class App {
  constructor() {
    this._eventQueue = new Map();
    this._application = undefined;
    this.stats = {
      components: {
        total: 0
        // Individual component counts will be tracked by component name
      }
    };
  }
  /**
   * Used to store a reference to the main Lighting application object
   * @type {Object}
   */
  get application() {
    return this._application;
  }
  /**
   * @type {Object}
   */
  set application(application) {
    this._application = application;
    this._processEventQueue();
  }
  /**
   * A function to track when a component is added to the lightning tree. Called from the base component.
   * @property {Object} component - A lightning component
   * @return {void}
   */
  addComponent({
    application,
    constructor: { __componentName: componentName }
  }) {
    if (!this.application) {
      // Save reference to the main application object
      this.application = application;
    }
    this.stats.components.total++;
    if (!this.stats.components[componentName]) {
      this.stats.components[componentName] = 0;
    }
    this.stats.components[componentName]++;
  }
  /**
   * A function to track when a component is removed from the lightning tree. Called from the base component.
   * @property {Object} component - A lightning component
   * @return {void}
   */
  removeComponent({ constructor: { __componentName: componentName } }) {
    if (this.stats.components.total > 0) this.stats.components.total--;
    if (this.stats.components[componentName] > 0) {
      this.stats.components[componentName]--;
    }
    if (0 === this.stats.components[componentName]) {
      delete this.stats.components[componentName];
    }
  }

  /**
   * Initially events are not added to the stage, they are added to _eventQueue.
   * Once the application is set up they can be added to the stage.
   *
   * @return {void}
   */
  _processEventQueue() {
    this._eventQueue.forEach((value, key) => {
      this.addEvent.call(this, key);
      this._eventQueue.delete(key);
    });
  }
  /**
   * Function that adds an event to the stage.
   * If the stage is not yet set up it is added to the queue so it can be processed later.
   * @param {Object} payload
   * @param {String} payload.name
   * @param {Function} payload.callback
   * @return {void}
   */
  addEvent(payload) {
    if (this.application) {
      this.application.stage.on(payload.name, payload.callback);
    } else {
      if (!this._eventQueue.has(payload)) {
        this._eventQueue.set(payload);
      }
    }
  }
}

export default new App();
