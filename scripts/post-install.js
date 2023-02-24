/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

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