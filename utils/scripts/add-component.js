#!/usr/bin/env node

/* eslint-disable no-console */

const inquirer = require('inquirer');
const chalk = require('chalk');
const pelorous = chalk.hex('#30AABC');
const path = require('path');
const fs = require('fs-extra');
const childProcess = require('child_process');
const handlebars = require('handlebars');

/**
 * Register handlebars template helper utilities
 */
require('handlebars-helpers')({
  handlebars
});
const camelize = str => {
  return str.replace(/-+(.)?/g, function(match, chr) {
    return chr ? chr.toUpperCase() : '';
  });
};
const capitalizeFirstLetter = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const slugify = str => {
  return (str.match(/[A-Za-z][^A-Z]*/g) || str.split(/-| /))
    .map(x =>
      x
        .trim()
        .replace(' ', '-')
        .toLowerCase()
    )
    .join('-');
};

const welcomeSplashScreen = () => {
  console.log(pelorous('#################################'));
  console.log(
    pelorous(
      `#### ${chalk.white('Lightning Components - Create A New Component')} ####`
    )
  );
  console.log(pelorous('#################################'));
};

const retrievePrompts = () => {
  return inquirer.prompt([
    {
      name: 'componentName',
      message: 'Name of Component?',
      default: 'example'
    },
    {
      name: 'componentDescription',
      message: 'Enter a Description:',
      default: ''
    }
  ]);
};
const checkExist = ({
  componentName: rawComponentName,
  componentDescription,
  isThemed
}) => {
  const componentName = slugify(rawComponentName);
  const pathCheck = path.resolve(
    __dirname,
    `../../components/${componentName}/`
  );
  return fs
    .pathExists(pathCheck)
    .then(exists => {
      if (exists) {
        throw new Error();
      }
    })
    .catch(error => {
      console.log(
        chalk.bgRed(
          `Sorry, "${componentName}" component already exists, please use a different name.`
        )
      );
      process.exit(1);
    })
    .then(() => ({
      componentName,
      componentDescription,
      isThemed
    }));
};

const copyDefaultPackage = ({
  componentName,
  componentDescription,
  isThemed
}) => {
  if (!componentName) {
    throw new Error('"componentName" must be defined');
  }
  componentName = componentName.toLowerCase();
  const componentNameUpper = capitalizeFirstLetter(camelize(componentName));
  const defaultPackagePath = path.resolve(__dirname, '..', 'template');
  const newPackagePath = path.resolve(
    __dirname,
    `../../components/${componentName}/`
  );

  return fs.copy(defaultPackagePath, newPackagePath).then(() => ({
    componentName,
    componentNameUpper,
    componentDescription,
    isThemed
  }));
};

const updatePackageJson = ({ componentName, componentDescription }) => {
  const packageJsonPath = path.resolve(
    __dirname,
    `../../components/${componentName}/package.json`
  );
  return fs
    .readFile(packageJsonPath, 'utf-8')
    .then(originalPackageJsonContent => {
      const template = handlebars.compile(originalPackageJsonContent);
      const newPackageJsonContent = template({
        component: componentName,
        componentDescription: componentDescription
      });

      return fs.writeFile(packageJsonPath, newPackageJsonContent);
    });
};

const updateReadme = ({
  componentName,
  componentNameUpper,
  componentDescription
}) => {
  const readmePath = path.resolve(
    __dirname,
    `../../components/${componentName}/src/README.md`
  );

  return fs.readFile(readmePath, 'utf-8').then(originalReadmeContent => {
    const template = handlebars.compile(originalReadmeContent);
    const newReadmeContent = template({
      component: componentName,
      componentClass: componentNameUpper,
      description: componentDescription
    });

    return fs.writeFile(readmePath, newReadmeContent);
  });
};

const indexContent = ({ componentName }) => {
  const entryFile = path.resolve(
    __dirname,
    `../../components/${componentName}/src/index.js`
  );
  return fs.readFile(entryFile, 'utf-8').then(originalContent => {
    const template = handlebars.compile(originalContent);
    const newContent = template({ component: componentName });
    return fs.writeFile(entryFile, newContent);
  });
};

const componentContent = ({
  componentName,
  componentNameUpper,
  componentDescription,
  componentFile,
  isThemed
}) => {
  return fs.readFile(componentFile, 'utf-8').then(originalContent => {
    const template = handlebars.compile(originalContent);
    const newContent = template({
      component: componentName,
      componentClass: camelize(componentName),
      componentNameUpper: componentNameUpper,
      isThemed: isThemed
    });
    return fs.writeFile(componentFile, newContent);
  });
};

const addDependencies = async ({ componentName }) => {
  const dependencies = ['@wpe-lightning-ui/utilities', '@wpe-lightning-ui/theme'];

  const execChildProcess = dep => {
    return new Promise((resolve, reject) => {
      childProcess.exec(
        `lerna add ${dep} --no-bootstrap --scope=@wpe-lightning-ui/${componentName}`,
        (err, stdout, stderr) => {
          if (err) {
            reject(stderr);
          }
          console.log(chalk.blue(`Added ${dep}`));
          resolve();
        }
      );
    });
  };
  for (const dep of dependencies) {
    await execChildProcess(dep);
  }
};

const performLernaBootstrap = ({ componentName }) => {
  console.log(chalk.blue('Bootstrapping dependencies for new component...'));

  return new Promise((resolve, reject) => {
    childProcess.exec('npm run bootstrap', (err, stdout, stderr) => {
      if (err) {
        reject(stderr);
      }
      console.log(chalk.blue(`Bootstrap Complete!`));
      resolve({ componentName });
    });
  });
};
const renameFiles = ({ componentName }) => {
  fs.renameSync(
    path.resolve(__dirname, `../../components/${componentName}/src/demo.js`),
    path.resolve(
      __dirname,
      `../../components/${componentName}/src/${componentName}.js`
    ),
    err => {
      if (err) throw err;
    }
  );
  fs.renameSync(
    path.resolve(__dirname, `../../components/${componentName}/src/demo.css`),
    path.resolve(
      __dirname,
      `../../components/${componentName}/src/${componentName}.module.css`
    ),
    err => {
      if (err) throw err;
    }
  );
  fs.renameSync(
    path.resolve(
      __dirname,
      `../../components/${componentName}/src/__tests__/demo.test.js`
    ),
    path.resolve(
      __dirname,
      `../../components/${componentName}/src/__tests__/${componentName}.test.js`
    ),
    err => {
      if (err) throw err;
    }
  );
  return { componentName };
};

welcomeSplashScreen();

retrievePrompts()
  .then(checkExist)
  .then(copyDefaultPackage)
  .then(
    ({ componentName, componentDescription, componentNameUpper, isThemed }) => {
      return Promise.all([
        updatePackageJson({ componentName, componentDescription }),
        updateReadme({
          componentName,
          componentNameUpper,
          componentDescription
        }),
        indexContent({ componentName }),
        componentContent({
          componentName,
          componentNameUpper,
          componentDescription,
          componentFile: path.resolve(
            __dirname,
            `../../components/${componentName}/src/demo.js`
          ),
          isThemed
        }),
        componentContent({
          componentName,
          componentNameUpper,
          componentDescription,
          componentFile: path.resolve(
            __dirname,
            `../../components/${componentName}/src/__tests__/demo.test.js`
          ),
          isThemed
        }),
        addDependencies({ componentName })
      ]).then(() => {
        console.log(
          chalk.green(
            `Successfully created package "@wpe-lightning-ui/${componentName}" at "components/${componentName}"`
          )
        );
        return { componentName };
      });
    }
  )
  .then(renameFiles)
  .then(performLernaBootstrap)
  .then(({ componentName }) => {
    console.log(
      pelorous(`Start local development with: "${chalk.white(`npm start`)}"`)
    );
  });
