require = require('esm')(module);
const fs = require('fs');
const path = require('path');
const glob = require('fast-glob');
const context = require(path.resolve(__dirname, '../context/index.js'))
  .default;
const baseTheme = require(path.resolve(__dirname, '../themes/base/index.js'))
  .default;

let scriptComplete = false;
let messageQueue = null;

const sendMessage = message => {
  if (null === messageQueue) {
    messageQueue = [];
    process.send && process.send(message);
  } else {
    messageQueue.push(message);
  }
};

let messageEngine = setInterval(() => {
  const message = messageQueue.shift();
  if (message) process.send && process.send(message);
  if (!messageQueue.length && scriptComplete) {
    clearInterval(messageEngine);
  }
}, 0);

function getStyleFiles() {
  return glob('**/*.styles.js');
}

function getExport(file, name) {
  try {
    const mainFile = require(path.resolve(process.cwd(), file));
    return mainFile[name];
  } catch (err) {
    sendMessage(`Unable to find export at ${path} for name ${name}`);
  }
}

function checkType(stringValue) {
  const isTheme = 'theme' === stringValue.split('.').shift();
  if (isTheme) {
    const stringValueArray = stringValue.split('.');
    let finalValue = baseTheme;
    let success = false;
    for (let i = 0; i < stringValueArray.length; i++) {
      if ('undefined' !== typeof finalValue[stringValueArray[i]]) {
        finalValue = finalValue[stringValueArray[i]];
        if (i === stringValueArray.length - 1) {
          //Final item
          success = true;
        }
      }
    }
    if (success) {
      if (Array.isArray(finalValue) && finalValue.length == 2) {
        // Looks like a color array
        return 'color';
      } else if (!isNaN(parseInt(finalValue))) {
        return 'number';
      }
      return 'none';
    }
    return 'none';
  }
}

function createStylepaletteItemInfo(file) {
  const paletteDefault = getExport(file, 'paletteDefault') || 'neutral';
  const baseFunc = getExport(file, 'base');
  const paletteFunc = getExport(file, 'palette');
  const baseFuncString = typeof baseFunc === 'function' ? baseFunc.toString() : '';
  const paletteFuncString = typeof paletteFunc === 'function' ? paletteFunc.toString(): '';
  const base = typeof baseFunc === 'function' ? baseFunc(context.theme) : {};
  const palette = typeof paletteFunc === 'function' ? paletteFunc(context.theme): undefined;
  
  const payload = {};

  const baseValues = Object.keys(base).reduce((acc, prop) => {
    const value = {};
    const regExpPattern = new RegExp(`${prop}: ([^,}])*(?=[\n|,])`);
    const match = baseFuncString.match(regExpPattern);
    if (match && match[0]) {
      const stringValue = match[0].replace(`${prop}:`, '').trim();
      value[prop] = {
        stringValue,
        defaultValue: base[prop],
        type: checkType(stringValue) || undefined
      };
    }
    return { ...acc, ...value };
  }, {});
  

  if (palette) {
    payload['palette'] = {};
    for (const paletteItem in {
      ...{ neutral: {}, inverse: {}, brand: {} },
      ...palette
    }) {
      const style = palette[paletteItem] || {};
      const styleValues = Object.keys(style).reduce((acc, prop) => {
        const paletteectionRegExp = new RegExp(`(?<=${paletteItem})(.|\n)+?(?=})`);
        // Get paletteItem section of file
        const sectionMatch = paletteectionRegExp.exec(paletteFuncString);
       
        if (sectionMatch && sectionMatch[0]) {
          const matchPropRegExp = new RegExp(`${prop}: ([^,}])*`);
          const propMatch = matchPropRegExp.exec(sectionMatch[0].trim());
          if (propMatch && propMatch[0]) {
            const stringValue = propMatch[0].replace(`${prop}:`, '').trim();
            acc[prop] = {
              stringValue,
              defaultValue: style[prop],
              type: checkType(stringValue) || undefined
            };
          }
        }
        return acc;
      }, {});
  
      payload['palette'][paletteItem] = { ...baseValues, ...styleValues };
    }
  }
  
  return { paletteDefault, ...payload, baseValues };
}

async function generate() {
  sendMessage('Generating style rules for theming documentation');
  const styleFiles = await getStyleFiles();
  sendMessage('Success! Style files found!');
  const styleRules = styleFiles.reduce((acc, curr) => {
    const key = curr.split('/').pop().replace('.styles.js', '');
    acc[key] = createStylepaletteItemInfo(curr);
    sendMessage(`Info generated for ${key} component`);
    return acc;
  }, {});
  sendMessage(`Style rules parsed`);
  if (!fs.existsSync(path.resolve(process.cwd(), './tmp/'))) {
    fs.mkdirSync(path.resolve(process.cwd(), './tmp/'));
  }
  fs.writeFileSync(
    path.resolve(process.cwd(), './tmp/component-styles.json'),
    JSON.stringify(styleRules)
  );
  sendMessage(`File generation complete`);
  scriptComplete = true;
}

generate();
