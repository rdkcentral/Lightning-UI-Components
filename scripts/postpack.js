const fs = require('fs');
const path = require('path');

// Function to rename 'package-bck.json' to 'package.json'
const renamePackageBckToJson = (directoryPath) => {
  const packageBckPath = path.join(directoryPath, 'package-bck.json');
  const packageJsonPath = path.join(directoryPath, 'package.json');

  fs.access(packageBckPath, fs.constants.F_OK, (err) => {
    if (err) {
      console.error('Error: package-bck.json does not exist in the specified directory.');
      return;
    }

    fs.rename(packageBckPath, packageJsonPath, (err) => {
      if (err) {
        console.error('Error renaming package-bck.json to package.json:', err.message);
      } else {
        console.log('package-bck.json renamed to package.json successfully!');
      }
    });
  });
};

// Check if packageName environment variable is set
if (!process.env.packageName) {
  console.error('Error: packageName environment variable is not set.');
} else {
  const directoryPath = path.resolve(process.env.packageName);

  // Check if the specified directory exists
  fs.access(directoryPath, fs.constants.F_OK, (err) => {
    if (err) {
      console.error('Error: Specified directory does not exist.');
    } else {
      renamePackageBckToJson(directoryPath);
    }
  });
}
