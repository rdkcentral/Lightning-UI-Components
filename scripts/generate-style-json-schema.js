/* eslint-disable no-restricted-syntax */

const fs = require('fs');
const path = require('path');
const deepmerge = require('deepmerge');
const { promisify } = require('util');
const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

/**
 * Writes content to a file.
 * @param {string} filePath - The path to the file.
 * @param {string} content - The content to write.
 * @returns {Promise<void>}
 */
async function writeToFile(filePath, content) {
  await writeFileAsync(filePath, content, 'utf8');
}

/**
 * Removes double quotes from a JSON string.
 * @param {string} jsonString - The JSON string.
 * @returns {string} The JSON string without double quotes.
 * @throws {Error} If the input is not a string.
 */
function removeDoubleQuotesFromJSONString(jsonString) {
  if (typeof jsonString !== 'string') {
    throw new Error('Input must be a string');
  }

  const result = jsonString.replace(/"([^"]+)":/g, '$1:');
  return result;
}

/**
 * Converts a JavaScript object to a JSON schema representation.
 * @param {any} obj - The JavaScript object.
 * @returns {object} The JSON schema representation of the object.
 */
function objectToJsonSchema(obj) {
  if (typeof obj === 'string') {
    return { type: 'string' };
  }

  if (typeof obj === 'number') {
    return { type: 'number' };
  }

  if (typeof obj === 'boolean') {
    return { type: 'boolean' };
  }

  if (Array.isArray(obj)) {
    const items = obj.map(item => objectToJsonSchema(item));
    return { type: 'array', items };
  }

  if (typeof obj === 'object') {
    const properties = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        properties[key] = objectToJsonSchema(obj[key]);
      }
    }
    return { type: 'object', properties };
  }

  // Fallback case: If the type is unknown or unsupported, default to "null".
  return { type: 'null' };
}

/**
 * Processes a style file.
 * @param {string} filePath - The path to the style file.
 * @param {any} theme - The theme object.
 * @returns {Promise<void>}
 */
async function processStyleFile(filePath, theme) {
  try {
    const styleExports = await import(path.resolve('./', filePath));
    const data = await readFileAsync(filePath, 'utf8');

    let mergedObject = {};

    for (const key in styleExports) {
      const exportValue = styleExports[key];
      if (['schema', 'defaultStyle'].includes(key)) continue;
      if (typeof exportValue === 'object') {
        mergedObject = deepmerge(mergedObject || {}, exportValue);
      } else if (typeof exportValue === 'function') {
        // If the export is a function, invoke it with the theme
        const result = await exportValue(theme);
        const nested =
          result.unfocused ||
          result.focused ||
          result.disabled ||
          result.neutral ||
          result.inverse ||
          result.brand ||
          result ||
          {};
        mergedObject = deepmerge(mergedObject || {}, nested);
      }
    }

    // Generate JSON schema representation
    const defaultObject = removeDoubleQuotesFromJSONString(
      JSON.stringify(mergedObject, null, 2)
    );
    const jsonSchema = removeDoubleQuotesFromJSONString(
      JSON.stringify(objectToJsonSchema(mergedObject), null, 2)
    );

    let modifiedContent = data;
    const existingStyleRegex =
      /export\s+const\s+defaultStyle\s+=\s+(\{[\s\S]*?\});/;
    const match = existingStyleRegex.exec(modifiedContent);

    if (match) {
      // If the existing declaration is found, replace it with the new object
      modifiedContent = modifiedContent.replace(
        match[0],
        `export const defaultStyle = ${defaultObject};`
      );
    } else {
      // If the declaration doesn't exist, add it to the end of the file
      modifiedContent = `${modifiedContent}\nexport const defaultStyle = ${defaultObject};\n`;
    }

    const existingSchemaRegex = /export\s+const\s+schema\s+=\s+(\{[\s\S]*?\});/;
    const schemaMatch = existingSchemaRegex.exec(modifiedContent);

    if (schemaMatch) {
      // If the existing declaration is found, replace it with the new object
      modifiedContent = modifiedContent.replace(
        schemaMatch[0],
        `export const schema = ${jsonSchema};\n`
      );
    } else {
      // If the declaration doesn't exist, add it to the end of the file
      modifiedContent = `${modifiedContent}\nexport const schema = ${jsonSchema};\n`;
    }

    await writeToFile(path.resolve('./', filePath), modifiedContent);
    console.info(`JSON schema representation generated at "${filePath}".`);
  } catch (error) {
    console.error('Error processing style file:', filePath);
    console.error(error);
  }
}

/**
 * Recursively searches folders for style files.
 * @param {string} folderPath - The path to the folder to search.
 * @param {any} theme - The theme object.
 * @returns {Promise<void>}
 */
async function searchFoldersWithStyleFiles(folderPath, theme) {
  try {
    const files = await fs.promises.readdir(folderPath);
    for (const file of files) {
      const filePath = path.join(folderPath, file);
      const stat = await fs.promises.lstat(filePath);
      if (stat.isDirectory()) {
        const styleFiles = (await fs.promises.readdir(filePath)).filter(
          fileName => fileName.endsWith('.styles.js')
        );

        if (styleFiles.length > 0) {
          console.info(`Processing files in folder "${filePath}"...`);
          for (const styleFile of styleFiles) {
            const styleFilePath = path.join(filePath, styleFile);
            await processStyleFile(styleFilePath, theme);
          }
        }

        await searchFoldersWithStyleFiles(filePath, theme); // Recursive call to search subfolders
      }
    }
  } catch (error) {
    console.error('Error searching folders:', folderPath);
    console.error(error);
  }
}

// Check if a folder path is provided as a command-line argument
if (process.argv.length < 3) {
  console.log('Please provide a top-level folder path as an argument.');
} else {
  const folderPath = process.argv[2];
  console.log(`Searching for folders with style files in "${folderPath}"...`);
  (async () => {
    const { default: context } = await import(
      '@lightningjs/ui-components/src/globals/context/index.js'
    );
    await searchFoldersWithStyleFiles(folderPath, context.theme);
  })();
}
