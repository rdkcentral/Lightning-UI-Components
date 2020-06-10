import lng from 'wpe-lightning';
import FocusManager from './FocusManager';

export default {
  title: 'FocusManager',
  component: FocusManager,
  decorators: [
    storyFn => {
      const options = { stage: { w: 1920, h: 1080, clearColor: 0xff000000 } };
      const App = storyFn();
      const app = new App(options);

      return app.stage.getCanvas();
    }
  ]
};

class MyApp extends lng.Application {
  static _template() {
    return {
      Text: { text: { text: 'hello world' } }
    };
  }
}
export const Basic = () => MyApp;
