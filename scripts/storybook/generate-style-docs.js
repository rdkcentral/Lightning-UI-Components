require = require('esm')(module);
const fs = require('fs');
const path = require('path');
const glob = require('fast-glob');
const context = require(path.resolve(__dirname, '../../context/index.js'))
  .default;
const baseTheme = require(path.resolve(__dirname, '../../themes/base/index.js'))
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
}, 100);

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

function createStyleVariantInfo(file) {
  const variantDefault = getExport(file, 'variantDefault');
  const baseFunc = getExport(file, 'base');
  const variantsFunc = getExport(file, 'variants');
  if (
    !variantDefault ||
    'string' !== typeof variantDefault ||
    !baseFunc ||
    'function' !== typeof baseFunc ||
    !variantsFunc ||
    'function' !== typeof variantsFunc
  ) {
    sendMessage(`Style ${file.split('/').pop()} invalid`);
    return;
  }
  const baseFuncString = baseFunc.toString();
  const variantsFuncString = variantsFunc.toString();
  const base = baseFunc(context.theme);
  const variants = variantsFunc(context.theme);
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

  for (const variant in {
    ...{ neutral: {}, inverse: {}, brand: {} },
    ...variants
  }) {
    const style = variants[variant];
    const styleValues = Object.keys(style).reduce((acc, prop) => {
      const variantSectionRegExp = new RegExp(`(?<=${variant})(.|\n)+?(?=})`);
      // Get variant section of file
      const sectionMatch = variantSectionRegExp.exec(variantsFuncString);

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

    payload[variant] = { ...baseValues, ...styleValues };
  }
  return { variantDefault, ...payload };
}

async function generate() {
  sendMessage('Generating style rules for theming documentation');
  const styleFiles = await getStyleFiles();
  sendMessage('Success! Style files found!');
  const styleRules = styleFiles.reduce((acc, curr) => {
    const key = curr.split('/').pop().replace('.styles.js', '');
    acc[key] = createStyleVariantInfo(curr);
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
