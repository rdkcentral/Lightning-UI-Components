import React from 'react';
import { addons, types } from '@storybook/addons';
import { useStorybookState } from '@storybook/api';
import { AddonPanel } from '@storybook/components';
import { getParameters } from 'codesandbox/lib/api/define';

const ADDON_ID = 'addon-codesandbox-embed';
const PANEL_ID = `${ADDON_ID}/panel`;

const parameters = getParameters({
  files: {
    'index.html': {
      content: `<!DOCTYPE html>
      <html>
        <head>
          <title>Lightning UI Components</title>
          <meta charset="UTF-8" />
        </head>
        <body>
          <div id="app"></div>
          <script src="src/index.js"></script>
        </body>
      </html>
      `
    },
    'src/index.js': {
      content: `import lng from "wpe-lightning";

      class Basic extends lng.Component {
        static _template() {
          return {
            x: 20,
            y: 20,
            text: {
              text: "Hello World"
            }
          };
        }
      }
      
      class App extends lng.Application {
        _getFocused() {
          return this.childList.first || this;
        }
      }
      
      const stage = {
        w: 900,
        h: 450,
        clearColor: 0xff000000
      };
      
      const app = new App({ stage });
      app.children = {
        Component: {
          type: Basic
        }
      };
      
      document.getElementById("app").appendChild(app.stage.getCanvas());
      `,
    },
    'package.json': {
      content: {
        dependencies: {
          'wpe-lightning': '^1.7.0'
        },
        devDependencies: {
          '@babel/core': "7.2.0",
          'parcel-bundler': '^1.6.1'
        },
        scripts: {
          start: 'parcel index.html --open',
          build: 'parcel build index.html'
        }
      }
    },
    'sandbox.config.json': {
      content: {
        infiniteLoopProtection: true,
        view: "browser",
        template: "parcel"
      }
    }
  }
})
const CodeSandboxEmbed = () => {
  const state = useStorybookState();
  console.log('state', state);
  return (
    <iframe
      src={`https://codesandbox.io/api/v1/sandboxes/define?embed=1&parameters=${parameters}&query=${encodeURIComponent('fontsize=12')}`}
      style={{
        width: '100%',
        height: '500px',
        border: 0,
        borderRadius: '4px',
        overflow: 'hidden',
      }}
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  )
}

addons.register(ADDON_ID, api => {
  const render = ({ active, key }) => (
    <AddonPanel active={active} key={key}>
      <CodeSandboxEmbed />
    </AddonPanel>
  );
  const title = 'CodeSandbox';

  addons.add(PANEL_ID, {
    type: types.PANEL,
    title,
    render,
  });
});
