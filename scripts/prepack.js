const fs = require('fs');
const path = require('path');
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

// Define file paths for the original, backup, and new package.json
const originalPackageJsonPath = path.join(workspaceLocation, 'package.json');
const backupPackageJsonPath = path.join(workspaceLocation, 'package-bck.json');
const newPackageJsonPath = path.join(workspaceLocation, 'package.json');

// Function to rename the original package.json to package-bck.json
const renameOriginalPackageJson = () => {
  fs.rename(originalPackageJsonPath, backupPackageJsonPath, err => {
    if (err) {
      console.error(
        'Error renaming package.json to package-bck.json:',
        err.message
      );
    } else {
      console.log(
        'Original package.json renamed to package-bck.json successfully!'
      );
      // After creating the backup file, read the original package.json and proceed with other modifications
      const originalPackageJson = readOriginalPackageJson();
      if (originalPackageJson) {
        createNewPackageJson(originalPackageJson);
      }
    }
  });
};

// Function to read the original package.json file
const readOriginalPackageJson = () => {
  try {
    const originalPackageJson = JSON.parse(
      fs.readFileSync(backupPackageJsonPath, 'utf8')
    );
    return originalPackageJson;
  } catch (error) {
    console.error(
      'Error reading the original package.json file:',
      error.message
    );
    return null;
  }
};

// Function to create the new package.json file from select contents of the original
const createNewPackageJson = originalPackageJson => {
  const packageNameWithoutSpecialChars = replaceCharacters(packageName);

  const newPackageJson = {
    name: originalPackageJson.name,
    version: originalPackageJson.version,
    description: originalPackageJson.description,
    dependencies: originalPackageJson.dependencies,
    files: originalPackageJson.files,
    homepage: originalPackageJson.homepage,
    sideEffects: originalPackageJson.sideEffects,
    type: originalPackageJson.type,
    peerDependencies: originalPackageJson.peerDependencies,
    publishConfig: originalPackageJson.publishConfig,
    repository: originalPackageJson.repository,
    exports: {
      '.': {
        import: `./dist/${packageNameWithoutSpecialChars}.min.mjs`,
        require: `./dist/${packageNameWithoutSpecialChars}.min.cjs`,
        types: `./dist/${packageNameWithoutSpecialChars}.d.ts`,
        default: './index.js'
      },
      './src/': './src/'
    },
    main: `./dist/${packageNameWithoutSpecialChars}.min.mjs`,
    types: `./dist/${packageNameWithoutSpecialChars}.d.ts`
  };

  const newPackageJsonContent = JSON.stringify(newPackageJson, null, 2);

  fs.writeFile(newPackageJsonPath, newPackageJsonContent, err => {
    if (err) {
      console.error('Error writing the new package.json file:', err.message);
    } else {
      console.log('New package.json file created successfully!');
    }
  });
};

// Main function to execute the script
const main = () => {
  renameOriginalPackageJson();
};

main();
