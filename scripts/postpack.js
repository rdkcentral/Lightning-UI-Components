const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get the package name from environment variables
const packageName = process.env.packageName;
console.log('Passed Package Name:', packageName);

// Get the workspace information for the specified package using yarn
const workspacesInfoOutput = execSync('yarn workspaces list --json').toString();
const workspaces = JSON.parse(
  '[' + workspacesInfoOutput.replace(/\n/g, ',').replace(/,\s*$/, '') + ']'
);
const { location: workspaceLocation } = workspaces.find(
  ({ name }) => name === packageName
);

// Define file paths for the original, backup, and new package.json
const originalPackageJsonPath = path.join(workspaceLocation, 'package.json');
const backupPackageJsonPath = path.join(workspaceLocation, 'package-bck.json');

// Function to restore package.json with the contents of package-bck.json
const restorePackageJson = () => {
  fs.copyFile(backupPackageJsonPath, originalPackageJsonPath, err => {
    if (err) {
      console.error(
        'Error restoring package.json from package-bck.json:',
        err.message
      );
    } else {
      console.log('package.json restored from package-bck.json successfully!');
      fs.unlink(backupPackageJsonPath, err => {
        if (err) {
          console.error('Error deleting package-bck.json:', err.message);
        } else {
          console.log('package-bck.json deleted successfully!');
        }
      });
    }
  });
};

// Main function to execute the script
const main = () => {
  if (fs.existsSync(backupPackageJsonPath)) {
    restorePackageJson();
  } else {
    console.log('package-bck.json not found. Nothing to restore.');
  }
};

main();
