import JSDOMEnvironment from 'jest-environment-jsdom';
export default class extends JSDOMEnvironment {
  async setup() {
    super.setup();
    // Mock up apis that are not supported in jsdom
    this.global.window.FontFace = function () {
      this.load = () => Promise.resolve();
    };
    console.log(this.global)
    this.global.document.fonts = {
      add() {},
      check() {
        return true;
      }
    };
  }
};