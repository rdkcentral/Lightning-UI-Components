import lng from 'wpe-lightning';
import FocusManager from './FocusManager';

export default {
  title: 'FocusManager',
  component: FocusManager
};

class MyApp extends lng.Application {
  static _template() {
    return {
      Text: { text: { text: 'hello world' } }
    };
  }
}
export const Basic = () => MyApp;
