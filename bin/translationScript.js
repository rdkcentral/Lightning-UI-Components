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
    const temporarykey = str.concat(themeValueModifiedArray[key]);
    themeValueArray.push(temporarykey);
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
          if (temp != undefined) {
            variantFound = temp.substring(0, temp.length - 1);
          }
          if (valueFound == true) {
            const updateFileName = file.split('/');
            line = line.trim();
            line = line.split('.');
            const modifiedLine = line[line.length - 1];
            let updatedLine = modifiedLine.includes(',')
              ? modifiedLine.substring(0, modifiedLine.length - 1)
              : modifiedLine;
            updatedLine = updatedLine.includes('}')
              ? updatedLine.substring(0, updatedLine.length - 1)
              : updatedLine;
             updatedLine = updatedLine.includes(' ')
              ? updatedLine.substring(0, updatedLine.length - 1)
               : updatedLine;
            const newFileName = updateFileName[updateFileName.length - 1];
            const seperatedFileName = newFileName.split('.');
            const finalFileName = seperatedFileName[0];
            if (dict[updatedLine] != undefined && variantFound == undefined) {
              const temp = dict[updatedLine];
              dict[updatedLine] = `${temp}, ${finalFileName}`;
            }
            if (dict[updatedLine] != undefined && variantFound != undefined) {
              const temp = dict[updatedLine];
              dict[updatedLine] =
                `${temp}, ${finalFileName} (${variantFound} variant)`;
            }
            if (dict[updatedLine] == undefined && variantFound == undefined) {
              dict[updatedLine] = finalFileName;
            }
            if (dict[updatedLine] == undefined && variantFound != undefined) {
              dict[updatedLine] = `${finalFileName} (${variantFound} variant)`;
            }
          }
          resolve();
        });
      });
    })
  ).then(() => {
    const content = `${themeProperty} Value | Components \n`;
    fs.writeFileSync(mdFile, content);
    const content1 = '--------|-------- \n';
    fs.appendFileSync(mdFile, content1);
    const content2 = '';
    for (const key in dict) {
      let modifiedKey = `theme.${themeProperty}.`;
      modifiedKey = modifiedKey.concat(key);
      const content2 = `${key} | ${dict[key]}`;
      fs.appendFileSync(mdFile, content2);
      fs.appendFileSync(mdFile, '\n');
      const valueFound1 = themeValueArray.some(val =>
        modifiedKey.includes(val)
      );
      if (valueFound1 == true) {
        themeValueArray.splice(themeValueArray.indexOf(modifiedKey), 1);
      }
    }
    for (const element of themeValueArray) {
      const temp = element.split('.');
      const temporary = temp[temp.length - 1];
      const content3 = `${temporary} | No components are using this value`;
      fs.appendFileSync(mdFile, content3);
      fs.appendFileSync(mdFile, '\n');
    }
  });
}
