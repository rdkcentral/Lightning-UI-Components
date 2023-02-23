import fs from 'fs';
import LineReaderSync from 'line-reader-sync';
import { getStorybookLinks } from './get-storybook-links.mjs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const colorJsonFile = require('./roles/colorRole.json');
const typographyJsonFile = require('./roles/typographyRole.json');

const base = require('@suite-themes/base-lightning-tv');
const { radius, typography, color } = base;

const folderPath = 'scripts/themePropertyTables';

createDocumentation(); //This call starts the scripts to create the documentation
/**
 * Creates documentation for the color, typography, and radius that our components (both elements and patterns) use.
 * hypothetically if you replace the parameters with other values like (stroke, 'tmp?themePropertyTables/strokeTable.md, stroke) you would get all the stroke values and which components are using what stroke value.
 */
export function createDocumentation() {
  getStyleFiles('color', `${folderPath}/color.md`, color);
  getStyleFiles('typography', `${folderPath}/typography.md`, typography);
  getStyleFiles('radius', `${folderPath}/radius.md`, radius);
}

/**
 * Combines all the necessary files and theme values
 * @param {string} themeProperty - what theme property we are looking for ie). color, radius, typography
 * @param {string} mdFile - the markdown file the contents will be written to
 * @param {string} themeFiles - files that hold the possible theming values ie). theme.color.fillBrand, or theme.radius.xs
 */
export function getStyleFiles(themeProperty, mdFile, themeFiles) {
  // const uiPath = '../../@lightningjs/ui/src/components';
  const uiCorePath = '../../@lightningjs/ui-components/src/components';
  // const uiFileOutput = fs.readdirSync(uiPath);
  const uiCoreFileOutput = fs.readdirSync(uiCorePath);
  // const uiStyleFiles = getComponentFiles(uiFileOutput, uiPath);
  const uiCoreStyleFiles = getComponentFiles(uiCoreFileOutput, uiCorePath);

  const styleFileArray = [/* ...uiStyleFiles, */ ...uiCoreStyleFiles];

  const themeValueArray = getThemeProperties(themeFiles, themeProperty);
  findThemedComponents(styleFileArray, themeValueArray, themeProperty, mdFile);
}

/**
 * Grabs all the style files for both the patterns and elements
 * @param {string} fileList - list of all the components and their respective files
 * @param {string} componentType - type of component (element or pattern)
 * @returns {array} array with all the components style files
 */
export function getComponentFiles(fileList, path) {
  return fileList.reduce((acc, file) => {
    const folder = `${path}/` + file;
    if (!fs.statSync(folder).isDirectory()) return acc;
    const styleFiles = (fs.readdirSync(folder) || [])
      .filter(fileName => fileName.endsWith('.styles.js'))
      .map(fileName => `${path}/${file}/${fileName}`);
    return [...acc, ...styleFiles];
  }, []);
}

/**
 * Grabs all the values for theme properties. For example radius: small, color: coreBrand, etc.
 * @param {string} themeFiles - files that hold the possible theming values ie). theme.color.fillBrand, or theme.radius.xs
 * @param {string} componentType - type of component (element or pattern)
 * @returns {array} array with all the components style files
 */
export function getThemeProperties(themeFiles, themeProperty) {
  const themeKeys = themeFiles;
  const themeValueArray = [];
  const themeValueModifiedArray = Object.keys(themeKeys);
  const str = `theme.${themeProperty}.`;
  //gets all of the theme values in format in how they are in the style files
  for (const key in themeValueModifiedArray) {
    const temporaryKey = str.concat(themeValueModifiedArray[key]);
    themeValueArray.push(temporaryKey);
  }
  return themeValueArray;
}

/**
 * Finds all the elements and patterns and what style value they are using
 * @param {array} styleFileArray - array that holds all the component's style files
 * @param {array} themeValueArray - array that holds all the possible themeing values for each theme property
 * @param {string} themeProperty - what theme property we are looking for ie). color, radius, typography
 * @param {string} mdFile - the markdown file the contents will be written to
 */
export function findThemedComponents(
  styleFileArray,
  themeValueArray,
  themeProperty,
  mdFile
) {
  const dict = {};

  for (let i = 0; i < styleFileArray.length; i++) {
    const updateFileName = styleFileArray[i].split('/');
    const name = updateFileName[updateFileName.length - 1].split('.')[0];
    let componentName = updateFileName;
    componentName = componentName.splice(1, 6);
    const linkString = componentName.join('/');
    const docUrl = getStorybookLinks(componentName[5], linkString, name);
    const lrs = new LineReaderSync(styleFileArray[i]);
    while (true) {
      //start searching for the storybook url line
      let line = lrs.readline();
      if (line === null) {
        break;
      } else if (themeValueArray.some(val => line.includes(val))) {
        //we split the line up by above characters to account for cases like theme.radius.md + theme.radius.sm
        line = line.split(/[-=/_+*]/);
        for (let i = 0; i < line.length; i++) {
          let foundIndex = 0;
          const newLine = line[i].split('.');
          foundIndex = cleanLine(newLine, themeValueArray);
          const updatedLine = newLine[foundIndex];
          if (isNaN(updatedLine)) {
            const newFileName = updateFileName[updateFileName.length - 1];
            const finalFileName = getFinalFileName(newFileName, componentName);
            // if there are already components using the theme property, the new component using that theme property needs to be appended differently
            if (dict[updatedLine]) {
              dict[
                updatedLine
              ] = `${dict[updatedLine]}, [${finalFileName}](${docUrl})`;
              dict[updatedLine] = cleanDictionaryValues(dict, updatedLine);
            } else {
              dict[updatedLine] = `[${finalFileName}](${docUrl})`;
            }
          }
        }
      }
    }
  }
  writeMarkdownFiles(themeProperty, mdFile, dict, themeValueArray);
}

/**
 * Finds all the elements and patterns and what style value they are using
 * @param {string} newLine - string that needs to be cleaned and checked for possible theme value
 * @param {array} themeValueArray - array that holds all the possible theming values for each theme property
 * @returns {number} returns index where theme value is found
 */
export function cleanLine(newLine, themeValueArray) {
  let foundIndex;
  for (let j = newLine.length - 1; j >= 0; j--) {
    newLine[j] = newLine[j].trim();
    newLine[j] = newLine[j].includes(',')
      ? newLine[j].substring(0, newLine[j].length - 1)
      : newLine[j];
    newLine[j] = newLine[j].includes('}')
      ? newLine[j].substring(0, newLine[j].length - 1)
      : newLine[j];
    newLine[j] = newLine[j].trim();
    //is able to get the correct themeValue found in the line
    const foundCorrectIndex = themeValueArray.some(val =>
      val.includes(newLine[j])
    );
    if (foundCorrectIndex) {
      foundIndex = j;
      return foundIndex;
    }
  }
}

/**
 * Finds all the elements and patterns and what style value they are using
 * @param {string} newFileName - file name that needs to be parsed
 * @param {string} componentName - name of the component in case file name is index.js
 * @returns {string} returns correct file name
 */
export function getFinalFileName(newFileName, componentName) {
  const separatedFileName = newFileName.split('.');
  let finalFileName = separatedFileName[0];
  //edge cases because of how some style files are named
  if (finalFileName === 'index') {
    finalFileName = componentName[componentName.length - 1];
  }
  return finalFileName;
}

/**
 * Cleans up the values stored in the object that holds the theme values and the components that use them
 * @param {object} dict - object with theme values and components that use them
 * @param {string} updatedLine - line that has the theme value that is being used
 * @returns {string} returns cleaned up line with no duplicate components
 */
export function cleanDictionaryValues(dict, updatedLine) {
  dict[updatedLine] = dict[updatedLine].trim();
  const removeDuplicates = dict[updatedLine].split(', ');
  //removes duplicates so that there aren't multiple instances of the same component for the same theme property
  const duplicates = [...new Set(removeDuplicates)];
  const cleanedUpLine = duplicates.join(', ');
  return cleanedUpLine;
}

/**
 * Cleans up the values stored in the object that holds the theme values and the components that use them
 * @param {object} dict -object with theme values as the key and components that use them as the value
 * @param {string} updatedLine - line that has the theme value that is being used
 * @returns {string} returns cleaned up line with no duplicate components
 */
export function writeMarkdownFiles(
  themeProperty,
  mdFile,
  dict,
  themeValueArray
) {
  const roleFile =
    mdFile === `${folderPath}/color.md` ||
    mdFile === `${folderPath}/typography.md`;
  const content = roleFile
    ? `${themeProperty} Value | Components | Role \n`
    : `${themeProperty} Value | Components \n`;
  //ensure folder exists
  fs.mkdir(
    mdFile.substring(0, mdFile.lastIndexOf('/')),
    { recursive: true },
    err => {
      if (err) {
        throw err;
      }
    }
  );
  fs.writeFileSync(mdFile, content, { encoding: 'utf8', flag: 'w' });
  // needed for a markdown file below the header
  const header = roleFile
    ? '--------|--------|--------\n'
    : '--------|-------- \n';
  fs.appendFileSync(mdFile, header);
  for (const key in dict) {
    let modifiedKey = `theme.${themeProperty}.`;
    modifiedKey = modifiedKey.concat(key);
    // additional check to make sure only official theme properties are present in the table
    if (themeValueArray.indexOf(modifiedKey) === -1) {
      delete dict[key];
      continue;
    }
    //alphabetizes the components using a specific theme property
    let valuesAndComponents = alphabetizeContent(dict, key);
    if (roleFile) {
      const role = getPropertyRole(key, mdFile);
      valuesAndComponents = valuesAndComponents.concat(role);
    }
    //everything is appended to the file
    fs.appendFileSync(mdFile, valuesAndComponents);
    fs.appendFileSync(mdFile, '\n');
    const duplicates = themeValueArray.some(val => modifiedKey.includes(val));
    if (duplicates === true) {
      themeValueArray.splice(themeValueArray.indexOf(modifiedKey), 1);
    }
  }
  for (const element of themeValueArray) {
    const temp = element.split('.');
    const temporary = temp[temp.length - 1];
    //all theme properties that are currently not being used are added to the bottom
    const unusedThemeValue = roleFile
      ? `${temporary} | No components are using this value ${getPropertyRole(
          temporary,
          mdFile
        )}`
      : `${temporary} | No components are using this value`;
    fs.appendFileSync(mdFile, unusedThemeValue);
    fs.appendFileSync(mdFile, '\n');
  }
}

/**
 * Alphabetizes the order of the components in each row
 * @param {object} dict - object with theme values as the key and components that use them as the value
 * @param {string} key - value in the object
 * @returns {string} string to be written into the markdown file
 */
export function alphabetizeContent(dict, key) {
  let alphabetizeArray = dict[key].split(',');
  for (let i = 0; i < alphabetizeArray.length; i++) {
    alphabetizeArray[i] = alphabetizeArray[i].trim();
  }
  alphabetizeArray = alphabetizeArray.sort();
  const alphabetizeString = alphabetizeArray.join(',');
  //to make the table cleaner all commas are replaced by a newline
  const noCommaLine = alphabetizeString.replace(/,/g, '<br>');
  const valuesAndComponentsContent = `${key} | ${[noCommaLine]}`;
  return valuesAndComponentsContent;
}

/**
 * Gets additional info about a theme value based off of Mike's figma files
 * @param {key} key - value in the object
 * @returns {string} extra information about the theme property
 */
export function getPropertyRole(key, mdFile) {
  if (mdFile === `${folderPath}/color.md`) {
    return `|${colorJsonFile[key] || 'More info coming'}`;
  } else if (mdFile === `${folderPath}/typography.md`) {
    return `|${typographyJsonFile[key] || 'More info coming'}`;
  }
}
