import React from 'react';
import { addons, types } from '@storybook/addons';
import { useStorybookState, useParameter } from '@storybook/api';
import { AddonPanel } from '@storybook/components';
import { getParameters } from 'codesandbox/lib/api/define';

const ADDON_ID = 'addon-codesandbox-embed';
const PANEL_ID = `${ADDON_ID}/panel`;

const buildParameters = ({ body, components, name }) => getParameters({
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
    [`src/${name}.js`]: {
      content: `${components.map(kind => `import ${kind} from "lightning-ui-components/components/${kind}"`).join('\n')}
      
export default ${body}
      `
    },
    'src/index.js': {
      content: `import lng from "wpe-lightning";
import ${name} from "./${name}.js"
      
class App extends lng.Application {
  _getFocused() {
    return this.childList.first || this;
  }
}
      
const stage = {
  w: 900,
  h: 450,
  clearColor: 0xff000000,
  useImageWorker: false
};
      
const app = new App({ stage });
app.children = {
  Component: {
    type: ${name}
  }
};
      
document.getElementById("app").appendChild(app.stage.getCanvas());
`,
    },
    'package.json': {
      content: {
        dependencies: {
          'wpe-lightning': '^1.7.0',
          'lightning-ui-components': 'git+https://https://github.com/BeejLuig/lightning-ui.git'
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
    }
  }
});

// TODO: This is a hack to grab the un-transpiled source of a local function..it relies on 
// open and closed brackets and the source string provded by the storysourceaddon.
// Find a better way to do this...either with another loader or maybe a special comment
const findFunctionSourceByName = source => name => {
  const lines = source.split('\n');
  const startIndex = lines.findIndex(line => line.trim().match(new RegExp(`^(class|const|let|var|function) ${name}`)));
  if (startIndex) {
    const firstLine = lines[startIndex] || '';
    let openBrackets = (firstLine.match(/{/g) || []).length - (firstLine.match(/}/g) || []).length;

    for (let i=startIndex+1; i<lines.length; i++) {
      if (openBrackets === 0) {
        let endIndex = i;
        return lines.slice(startIndex, endIndex).join('\n').trim();
      }
      const line = lines[i].match(/{|}/g)
      if (!line) continue;
      for (let j=0; j<line.length;j++) {
        const char = line[j];
        if (char === '}') openBrackets -= 1;
        if (char === '{') openBrackets += 1;
      }
    }
  }

  return '';
}

const CodeSandboxEmbed = () => {
  const state = useStorybookState();
  const { helpers=[], components=[] } = useParameter('codesandbox', {});
  const story = state.storiesHash[state.storyId];
  
  if (story) {
    const location = story.parameters.storySource.locationsMap[story.id];
    const source = story.parameters.storySource.source;
    let body = source.split('\n')
      .slice(location.startLoc.line, location.endLoc.line)
      .join('\n')
      .trim();
    // TODO: another hack. These names should be passed in via story parameter
    body += '\n';
    body += helpers.map(findFunctionSourceByName(source)).join('\n\n');
    const name = story.name.replace(/ /g, '');
    const kind = story.kind;
    const iframeQuery = `query=${encodeURIComponent('fontsize=12')}`;
    return (
      <iframe
        src={`https://codesandbox.io/api/v1/sandboxes/define?embed=1&parameters=${buildParameters({ body, components: [kind, ...components], name })}&${iframeQuery}}`}
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
  
  return false;
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
