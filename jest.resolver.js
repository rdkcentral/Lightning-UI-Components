module.exports = (path, options) => {
  // Call the defaultResolver, so we leverage its cache, error handling, etc.
  return options.defaultResolver(path, {
    ...options,
    // Use packageFilter to process parsed `package.json` before the resolution (see https://www.npmjs.com/package/resolve#resolveid-opts-cb)
    packageFilter: pkg => {
      if (pkg.name.startsWith('@lightning')) {
        delete pkg.exports // Jest is not properly falling back to index.js if the bundle does not exist in the exports declaration. Removing the exports property all together and relying on the default resolution of the main property in package.json fixes these resolution errors
      }
      
      return {
        ...pkg,
        // Alter the value of `main` before resolving the package
        main: pkg.module || pkg.main,
      };
    },
  });
};