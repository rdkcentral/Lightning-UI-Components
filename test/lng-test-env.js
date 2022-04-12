const JSDOMEnvironment = require('jest-environment-jsdom');

module.exports = class extends JSDOMEnvironment {
  async setup() {
    super.setup();
    // Mock up apis that are not supported in jsdom
    this.global.window.FontFace = function () {
      this.load = () => Promise.resolve();
    };
    this.global.document.fonts = {
      add() {},
      check() {
        return true;
      }
    };
  }
};
