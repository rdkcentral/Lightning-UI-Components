import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import fs from 'fs';
import path from 'path';
import glob from 'fast-glob';
const baseTheme = require('@suite-themes/base-lightning-tv');
let scriptComplete = false;
let messageQueue = null;
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const sendMessage = message => {
  if (null === messageQueue) {
    messageQueue = [];
    process.send && process.send(message);
  } else {
    messageQueue.push(message);
  }
};

const messageEngine = setInterval(() => {
  const message = messageQueue.shift();
  if (message) process.send && process.send(message);
  if (!messageQueue.length && scriptComplete) {
    clearInterval(messageEngine);
  }
}, 0);

function getStyleFiles(relativePath) {
  return glob(path.resolve(__dirname, relativePath));
}

async function getExport(file, name) {
  try {
    const modules = await import(file);
    return modules[name];
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

async function createStylepaletteItemInfo(file) {
  const paletteDefault = (await getExport(file, 'paletteDefault')) || 'neutral';
  const baseFunc = await getExport(file, 'base');
  const paletteFunc = await getExport(file, 'palette');
  const modeFunc = await getExport(file, 'mode');
  const baseFuncString =
    typeof baseFunc === 'function' ? baseFunc.toString() : '';
  const paletteFuncString =
    typeof paletteFunc === 'function' ? paletteFunc.toString() : '';
  const modeFuncString =
    typeof modeFunc === 'function' ? modeFunc.toString() : '';
  const base = typeof baseFunc === 'function' ? baseFunc(baseTheme) : {};
  const palette =
    typeof paletteFunc === 'function' ? paletteFunc(baseTheme) : undefined;
  const mode = typeof modeFunc === 'function' ? modeFunc(baseTheme) : undefined;
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
        const paletteectionRegExp = new RegExp(
          `(?<=${paletteItem})(.|\n)+?(?=})`
        );
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
  console.log('   __ _       _     _         _                    _____  ');
  console.log('  / /(_) __ _| |__ | |_ _ __ (_)_ __   __ _ /\\ /\\  \\_   \\ ');
  console.log(
    " / / | |/ _` | '_ \\| __| '_ \\| | '_ \\ / _` / / \\ \\  / /\\/ "
  );
  console.log('/ /__| | (_| | | | | |_| | | | | | | | (_| \\ \\_/ /\\/ /_   ');
  console.log(
    '\\____/_|\\__, |_| |_|\\__|_| |_|_|_| |_|\\__, |\\___/\\____/   '
  );
  console.log('        |___/                         |___/               ');
  console.log(' ');
  console.log('=========================================================');
  console.log(' ');
  sendMessage('Generating style rules for theming documentation');
  const styleFilesUI = await getStyleFiles(
    '../../../@lightning/ui/src/components/**/*.styles.js'
  );
  const styleFilesUICore = await getStyleFiles(
    '../../../@lightning/ui-core/src/components/**/*.styles.js'
  );
  sendMessage('Success! Style files found!');
  const styleFiles = [...styleFilesUI, ...styleFilesUICore];

  const styleRules = await styleFiles.reduce(async (promise, curr) => {
    const acc = await promise;
    const key = curr.split('/').pop().replace('.styles.js', '');
    const file =
      '../../..' +
      curr.replace(
        __dirname.replace('/apps/lightning-ui-docs/scripts', '').trim('/'),
        ''
      );
    const itemInfo = await createStylepaletteItemInfo(file);
    acc[key] = itemInfo;
    sendMessage(`Info generated for ${key} component`);
    return acc;
  }, Promise.resolve({}));

  sendMessage('Style rules parsed');

  if (!fs.existsSync(path.resolve(__dirname, '../tmp/'))) {
    fs.mkdirSync(path.resolve(__dirname, '../tmp/'));
  }

  fs.writeFileSync(
    path.resolve(__dirname, '../tmp/component-styles.json'),
    JSON.stringify(styleRules)
  );

  sendMessage('File generation complete');
  scriptComplete = true;
}

generate();
