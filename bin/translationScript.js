const fs = require('fs');
const readline = require('readline');
const radius = require('../themes/base/radius.js');
const typography = require('../themes/base/typography.js');
const colors = require('../themes/base/colors.js');
createTable('radius', 'bin/scriptingFiles/radiusTable.md', radius);
createTable('typography', 'bin/scriptingFiles/typographyTable.md', typography);
createTable('colors', 'bin/scriptingFiles/colorsTable.md', colors);

function createTable(themeProperty, mdFile, themeFiles) {
  const themeKeys = themeFiles;
  const dict = {};
  const themeValueArray = [];
  const themeValueModifiedArray = Object.keys(themeKeys.default);
  const str = `theme.${themeProperty}.`;
  for (const key in themeValueModifiedArray) {
    const temporaryKey = str.concat(themeValueModifiedArray[key]);
    themeValueArray.push(temporaryKey);
  }
  const styleFileArray = [];
  const variantsArray = ['neutral:', 'inverse:', 'brand:'];
  let fileOutput = fs.readdirSync('./elements');
  fileOutput = fileOutput.filter(file => {
    return file !== 'index.d.ts' && file !== 'index.js'
  });
  const filteredFileOutput = fileOutput.filter(file => {
    return !file.endsWith('.js');
  });
  filteredFileOutput.forEach(file => {
    fs.readdirSync('./elements/' + file).forEach(file1 => {
      try {
        fs.statSync('./elements/' + file + '/' + file1);
        if ((`./elements/${ file }/${ file1 }`).endsWith('.styles.js')) {
          const styleFileName = `./elements/${ file }/${ file1 }`;
          styleFileArray.push(styleFileName);
        }
      } catch (err) {
        if (err.code === 'ENOTDIR') {
          console.log(
            'file or directory does not exist',
            `./elements/${file}/${file1}`
          );
        }
      }
    });
  });
  Promise.all(
    styleFileArray.map(file => {
      return new Promise(resolve => {
        const file1 = readline.createInterface({
          input: fs.createReadStream(file),
          output: process.stdout,
          terminal: false
        });
        let variantFound = undefined;
        file1.on('line', line => {
          const valueFound = themeValueArray.some(val => line.includes(val));
          const temp = variantsArray.find(val => line.includes(val));
          if (temp) {
            variantFound = temp.substring(0, temp.length - 1);
          }
          if (valueFound) {
            const updateFileName = file.split('/');
            line = line.trim();
            line = line.split(/[-=/_+*]/)
            for (let i = 0; i < line.length; i++) {
              let foundIndex = 0;
              const newLine = line[i].split('.');
              for (let j = newLine.length - 1; j >= 0; j--){
                newLine[j] = newLine[j].includes(',')
                  ? newLine[j].substring(0, newLine[j].length - 1)
                  : newLine[j];
                 newLine[j] = newLine[j].includes('}')
                  ? newLine[j].substring(0, newLine[j].length - 1)
                  : newLine[j];
                newLine[j] = newLine[j].includes(' ')
                  ? newLine[j].substring(0, newLine[j].length - 1)
                  : newLine[j];
                const foundCorrectIndex = themeValueArray.some(val => val.includes(newLine[j]));
                if (foundCorrectIndex) {
                  foundIndex = j;
                  break;
                }
              }
              const updatedLine = newLine[foundIndex];
              if (isNaN(updatedLine)) {
                const newFileName = updateFileName[updateFileName.length - 1];
                const separatedFileName = newFileName.split('.');
                const finalFileName = separatedFileName[0];
                if (dict[updatedLine]) {
                  if (!variantFound) {
                    dict[updatedLine] = `<li> ${dict[updatedLine]} </li>, <li>${finalFileName}</li>`;
                    dict[updatedLine] = dict[updatedLine].trim();
                    const removeDuplicates = dict[updatedLine].split(', ');
                    const duplicates = [...new Set(removeDuplicates)];
                    dict[updatedLine] = duplicates.join('</li>, ');

                  }
                  else {
                      dict[updatedLine] =
                    `<li> ${dict[updatedLine]},</li> ${finalFileName} (${variantFound})`;
                  }
                }
                else {
                  dict[updatedLine] = variantFound ? `<li> ${finalFileName} (${variantFound}) </li>` : dict[updatedLine] = `<li> ${finalFileName} </li>`;
                }
              }
            }
          }
          resolve();
        });
      });
    })
  ).then(() => {
    const content = `${themeProperty} Value | Components \n`;
    fs.writeFileSync(mdFile, content);
    const header = '--------|-------- \n';
    fs.appendFileSync(mdFile, header);
    for (const key in dict) {
      let modifiedKey = `theme.${themeProperty}.`;
      modifiedKey = modifiedKey.concat(key);
      const valuesAndComponents = `${key} | ${dict[key]}`;
      fs.appendFileSync(mdFile, valuesAndComponents);
      fs.appendFileSync(mdFile, '\n');
      const duplicates = themeValueArray.some(val =>
        modifiedKey.includes(val)
      );
      if (duplicates === true) {
        themeValueArray.splice(themeValueArray.indexOf(modifiedKey), 1);
      }
    }
    for (const element of themeValueArray) {
      const temp = element.split('.');
      const temporary = temp[temp.length - 1];
      const unusedThemeValue = `${temporary} | No components are using this value`;
      fs.appendFileSync(mdFile, unusedThemeValue);
      fs.appendFileSync(mdFile, '\n');
    }
  });
}
