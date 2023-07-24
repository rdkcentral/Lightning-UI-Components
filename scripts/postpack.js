const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const tar = require('tar');

const { execSync } = require('child_process');

// Helper function to replace @ and / characters with -
const replaceCharacters = str => {
  const replacedStr = str.replace(/[@/]/g, '-');
  return replacedStr.startsWith('-') ? replacedStr.slice(1) : replacedStr;
};

// Get the package name from environment variables
const packageName = process.env.packageName;
console.log('Passed Package Name:', packageName);

// Get the workspace information for the specified package using yarn
const workspacesInfoOutput = execSync('yarn workspaces list --json').toString();
const workspaces = JSON.parse(
  '[' + workspacesInfoOutput.replace(/\n/g, ',').replace(/,\s*$/, '') + ']'
);
const { name: workspaceName, location: workspaceLocation } = workspaces.find(
  ({ name }) => name === packageName
);

const tgzFilePath = path.resolve(workspaceLocation, 'package.tgz')

// Step 1: Unzip the .tgz file and extract its contents to a folder
const extractFolder = path.resolve(workspaceLocation, 'extracted');
fs.mkdirSync(extractFolder, { recursive: true });

const readStream = fs.createReadStream(tgzFilePath);
const extractOptions = { cwd: extractFolder, strip: 1 };

readStream.pipe(zlib.createGunzip()).pipe(tar.extract(extractOptions))
  .on('finish', () => {
    console.log('Unzipping and extracting completed.');

    // Step 2: Modify the desired fields in package.json
    const packageJsonPath = path.join(extractFolder, 'package.json');

    const originalPackageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

    const desiredFields = [
      'name',
      'version',
      'description',
      'dependencies',
      'files',
      'homepage',
      'sideEffects',
      'type',
      'peerDependencies',
      'publishConfig',
      'repository',
      'exports',
      'main',
      'types'
    ];

    const newPackageJson = Object.fromEntries(
      Object.entries(originalPackageJson).filter(([key]) => desiredFields.includes(key))
    );

    // Remove the 'scripts' property from the package.json
    delete newPackageJson.scripts;

    // Step 3: Write the modified content to the new package.json
    const newPackageJsonPath = path.join(extractFolder, 'package.json');
    fs.writeFileSync(newPackageJsonPath, JSON.stringify(newPackageJson, null, 2));

    console.log('package.json updated.');

    // Step 4: Create a new tarball with the modified content
    const modifiedTgzFilePath = path.resolve(workspaceLocation, 'package.tgz');
    const writeStream = fs.createWriteStream(modifiedTgzFilePath);

    const packOptions = { gzip: true, cwd: extractFolder };
    tar.c(packOptions, ['.'])
      .pipe(writeStream)
      .on('finish', () => {
        console.log('Modified content zipped back to a new .tgz file.');

        // Step 5: Remove the extracted folder
        removeDirRecursive(extractFolder);
        console.log('Extracted folder removed.');

        // Step 6: Remove the dist folder (if it exists)
        const distFolderPath = path.resolve(workspaceLocation, 'dist');
        if (fs.existsSync(distFolderPath)) {
          removeDirRecursive(distFolderPath);
          console.log('dist folder removed.');
        }
      });
  });

// Helper function to remove directories recursively
function removeDirRecursive(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.readdirSync(dirPath).forEach((file) => {
      const curPath = path.join(dirPath, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        removeDirRecursive(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(dirPath);
  }
}
