/**
 *
 * Lightning/core does not set type: "module". 
 * This only becomes an issue when processing with node as we do to generate our style docs and running jest tests
 * 
 */

 const fs = require('fs');
 const path = require('path');
 
 const lngPackageDir = path.resolve(
   __dirname,
   '../node_modules/@lightningjs/core'
 );
 const lngPackageJSON = require(`${lngPackageDir}/package.json`);
 lngPackageJSON.type = 'module';
 
 fs.writeFileSync(
   path.resolve(lngPackageDir, './package.json'),
   JSON.stringify(lngPackageJSON)
 );