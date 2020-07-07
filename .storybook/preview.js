// these two lines need to be in this order
// to wait until the inspector is enabled before attaching it
import lng from 'wpe-lightning';
import 'wpe-lightning/devtools/lightning-inspect';
import { addDecorator, addParameters } from '@storybook/html';

import mdx from '../utils/storybook/docs-template.mdx';

const stage = { w: 900, h: 450, clearColor: 0xff000000, debug: false, canvas2d: false, useImageWorker: false, inspector: false };
class StoryApp extends lng.Application {
  _getFocused() {
    return this.childList.first || this;
  }
}

/**
 * To customize the stage use the following code:
 * import { addParameters } from '@storybook/html';
 * addParameters({ stage: { w: 250 } });
 */
addDecorator((StoryComponent, { parameters }) => {
  const app = new StoryApp({
    stage: {
      ...stage,
      ...(parameters.stage || {})
    }
  });
  app.children = {
    StoryComponent: {
      type: StoryComponent()
    }
  };

  //Clear any lightning inspector info
  if(document.querySelectorAll('[type=StoryApp]').length > 1) {
    let div = document.querySelector('[type=StoryApp]');
    div.parentNode.parentNode.removeChild(div.parentNode);
  }

  //Expose the APP for debugging
  window.APP = app;
  return app.stage.getCanvas();
});

addParameters({
  docs: {
    page: mdx
  }
});
