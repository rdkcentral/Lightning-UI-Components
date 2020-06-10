import lng from 'wpe-lightning';
import { addDecorator } from '@storybook/html';

const stage = { w: 1000, h: 500, clearColor: 0xff000000, debug: false, canvas2d: false, useImageWorker: false };
class StoryApp extends lng.Application {
  _getFocused() {
    return this.childList.first || this;
  }
}

addDecorator(StoryComponent => {
  const app = new StoryApp({ stage });
  app.children = {
    StoryComponent: {
      type: StoryComponent()
    }
  };
  //Expose the APP for debugging
  window.APP = app;
  return app.stage.getCanvas();
});
