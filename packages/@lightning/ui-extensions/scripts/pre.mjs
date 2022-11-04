import { createRequire } from 'module';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);

const { devDependencies, scripts, ...properties } = require('../package.json');
const newPackageJSON = {
  ...properties,
  main: './dist/lightning-ui-extensions.min.js',
  exports: {
    ...properties.exports,
    '.': {
      import: {
        types: './dist/lightning-ui-extensions.d.ts',
        default: './dist/lightning-ui-extensions.min.js'
      }
    },
  }
};

// Create Backup which will be restored after publishing
fs.rename(
  path.resolve(__dirname, '../package.json'),
  path.resolve(__dirname, '../package-bak.json'),
  () => {
    // Overwrite the current package.json
    fs.writeFileSync(
      path.resolve(__dirname, '../package.json'),
      JSON.stringify(newPackageJSON, null, 2)
    );
  }
);
