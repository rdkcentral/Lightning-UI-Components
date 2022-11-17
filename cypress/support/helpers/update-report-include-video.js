const fs = require('fs');
const path = require('path');

const indexFilePath = path.resolve('cypress/reports/index.html');
const indexFileContent = fs.readFileSync(indexFilePath, 'utf8');
const newData = indexFileContent.replace(
  /\[REPORT_DATE\]/g,
  process.env.REPORT_DATE
);
fs.writeFileSync(indexFilePath, newData);
