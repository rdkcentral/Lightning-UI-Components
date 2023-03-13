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

import React from 'react';

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


// used to create links to Lightning docs given an id
export const DocsLink = ({ children, id }) => {
  const docsmap = {
    lng: {
      _base: 'https://rdkcentral.github.io/Lightning/docs',
      Component: '/components/overview',
      Text: '/textures/text',
      Transition: '/transitions/attributes'
    }
  };
  const [source, path] = id.split('.');
  const href = docsmap[source]._base + docsmap[source][path];
  return (
    <a href={href} target="_blank">
      {children || id}
    </a>
  );
};

export const Item = ({ children }) => children;

/**
 * Creates formatted object for markdown prop tables
 * see Column and Row stories
 * @param {Object} props
 * @param {Object} props.type - TS-style generic/utility type
 */
export const ObjectFormat = ({ object }) => {
  return [
    '{',
    <br />,
    '  ',
    ...utils.flatten(
      Object.entries(object).map(([k, v]) => [
        <span>&nbsp;&nbsp;</span>,
        `${k}: `,
        v,
        ',',
        <br />
      ])
    ),
    '}'
  ].map((x, i) => <Item key={i}>{x}</Item>);
};

/**
 * Formats TS-style generic types
 * See Columns and Row stories
 * @param {Object} props
 * @param {Object} props.children - component children
 * @param {String} props.type - Name of generic type
 */
export const GenericType = ({ children, type }) => {
  return [type, '<', children, '>'].map((x, i) => <Item key={i}>{x}</Item>);
};