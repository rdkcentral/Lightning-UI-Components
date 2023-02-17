// creates Mode control on stories
export const createModeControl = ({ options, summaryValue } = {}) => {
  return {
    mode: {
      control: 'radio',
      options:
        options && Array.isArray(options)
          ? ['unfocused', ...options]
          : ['unfocused', 'focused', 'disabled'],
      description: 'Sets the visual mode for the component',
      table: {
        defaultValue: { summary: summaryValue }
      },
      type: { name: 'string', required: true }
    }
  };
};

/**
 * @param {object} config Parameters for generating nested args: { argsObj, targetProp, include, overrides }
 */
export function nestedArgs(config) {
  const { argsObj, targetProp, include, overrides } = config;
  return Object.keys(argsObj).reduce((acc, curr) => {
    if (!include.includes(curr)) return acc;
    return {
      ...acc,
      [targetProp + '_' + curr]:
        (overrides.args && overrides.args[curr]) || argsObj[curr]
    };
  }, {});
}

/**
 * @param {object} config Parameters for generating nested arg types: { argsObj, targetProp, include, overrides }
 */
export function nestedArgTypes(config) {
  const { argTypesObj, targetProp, include, overrides } = config;
  return Object.keys(argTypesObj).reduce((acc, curr) => {
    if (!include.includes(curr)) return acc;
    return {
      ...acc,
      [targetProp + '_' + curr]: {
        // Namespaced to avoid conflicts
        name: curr,
        ...argTypesObj[curr],
        ...overrides[curr],
        table: {
          ...(argTypesObj[curr].table || {}),
          ...(overrides[curr] && overrides[curr].table),
          category: targetProp
        }
      }
    };
  }, {});
}

export const prevValues = {};

/**
 * @param {object} config Parameters for generating nested arg actions: { componentName, argsTypeObj, targetProp, include, overrides }
 */
export function nestedArgActions(config) {
  const { componentName, argTypesObj, targetProp, include, overrides } = config;
  return Object.keys(argTypesObj).reduce((acc, curr) => {
    if (!include.includes(curr)) return acc;
    return {
      ...acc,
      [targetProp + '_' + curr]: (value, component) => {
        component.tag(componentName).patch({
          [targetProp]: {
            ...prevValues[targetProp],
            [curr.replace(targetProp + '_', '')]:
              value === 'none'
                ? undefined
                : (overrides && overrides[curr]) || value // There are issues with merging objects here
          }
        });
        // Allow patching to work with nested objects
        if (!prevValues[targetProp]) {
          prevValues[targetProp] = {};
        }
        prevValues[targetProp][curr.replace(targetProp + '_', '')] =
          value === 'none'
            ? undefined
            : (overrides && overrides[curr]) || value;
      }
    };
  }, {});
}

/**
 * @param {object} config Parameters for generating story: { componentName, baseStory, subStory, targetProperty, include, options }
 */
export function generateSubStory(config) {
  config.baseStory.args = {
    ...config.baseStory.args,
    ...nestedArgs({
      argsObj: config.subStory.args || {},
      targetProp: config.targetProperty,
      include: config.include,
      overrides: (config.overrides && config.overrides.args) || {}
    })
  };

  config.baseStory.argTypes = {
    ...config.baseStory.argTypes,
    ...nestedArgTypes({
      argTypesObj: config.subStory.argTypes || {},
      targetProp: config.targetProperty,
      include: config.include,
      overrides: (config.overrides && config.overrides.argTypes) || {}
    })
  };

  if (
    !(
      config.baseStory &&
      config.baseStory.parameters &&
      config.baseStory.parameters.argActions
    )
  ) {
    config.baseStory.parameters = {
      argActions: {}
    };
  }

  config.baseStory.parameters.argActions = {
    ...config.baseStory.parameters.argActions,
    ...nestedArgActions({
      componentName: config.componentName,
      argTypesObj: config.subStory.argTypes || {},
      targetProp: config.targetProperty,
      include: config.include,
      overrides: (config.overrides && config.overrides.argActions) || {}
    })
  };
}
