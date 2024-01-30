const SUFFIX = '__ORIGINAL__';

// If applyExtensions happens after component has been intialized, need to trigger component update cycle after theme is applied
// This would happen with the themeUpdate event
export function applyExtension(targetClass, extensionClass) {
  const extensionDescriptors = Object.getOwnPropertyDescriptors(
    extensionClass.prototype
  );

  // Important note: b/c we're rolling our own super implementaion, we need to make sure we're looking
  // for overriding methods at all deeper levels of the class, not just highest level.
  const originalAllDescriptors = getAllCustomDescriptors(targetClass.prototype);
  const originalOwnDescriptors = Object.getOwnPropertyDescriptors(
    targetClass.prototype
  );

  Object.getOwnPropertyNames(extensionDescriptors).forEach(propName => {
    if (propName !== 'constructor') {
      // If has value prop, It's a normal method, not accessor
      if (extensionDescriptors[propName].value) {
        const originalMethod = originalAllDescriptors[propName];
        const originalOwnMethod = originalOwnDescriptors[propName];

        // Preserve original method if it was an own method
        const nameWithSuffix = propName + SUFFIX;
        if (!targetClass[nameWithSuffix] && originalOwnMethod) {
          targetClass.prototype[nameWithSuffix] = originalMethod;
        }

        // Wrap the mixin method to inject the `next` method in the chain.
        targetClass.prototype[propName] = function (...args) {
          // TODO: do we need to catch overrriding method with an accessor and vice versa?
          // const next = originalMethod
          //   ? originalMethod.value.bind(this)
          //   : undefined;

          const next = originalMethod ? originalMethod.value : undefined;

          // Call the mixin method with arguments and `next` as the last argument.
          return extensionClass.prototype[propName].apply(this, [
            ...args,
            next
          ]);
        };
      } else {
        // setup accessor
        // I'm not sure this implementation allows for super calls in accessors
        Object.defineProperty(
          targetClass.prototype,
          propName,
          extensionDescriptors[propName]
        );
      }
    }
  });
}

// For extensions cleanup, you still need to call _cleanupExtension on each instance.
// would need like before
// to handle detached instances, could cleanupe extension on detach

// TODO: implement, remove added methods and replace original
export function cleanupExtensions(targetClass) {}

function getAllCustomDescriptors(obj) {
  if (!obj || obj === Object.prototype) {
    return {};
  } else {
    const proto = Object.getPrototypeOf(obj);
    return {
      ...getAllCustomDescriptors(proto),
      ...Object.getOwnPropertyDescriptors(obj)
    };
  }
}
