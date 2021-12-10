import React, { useState, useReducer, useEffect } from 'react';
import { useGlobals } from '@storybook/api';
import {
  globalContext,
  globalTheme,
  getPanelsTheme,
  updateGlobalTheme,
  createTable,
  createTableRow
} from '../utils';
import {
  OptionsControl,
  ColorControl,
  NumberControl
} from '@storybook/components';

const styleData = require('../../tmp/component-styles.json');

const updateComponentValue = (
  componentName,
  styleProp,
  value,
  updateGlobals
) => {
  updateGlobalTheme(
    {
      componentStyles: {
        [componentName]: { [styleProp]: value }
      }
    },
    updateGlobals
  );
};

const getValueFromString = stringValue => {
  if (!stringValue) {
    return;
  }

  let theme = globalTheme();
  const stringValueArray = stringValue.split('.');
  let success = false;
  for (let i = 0; i < stringValueArray.length; i++) {
    if ('undefined' !== typeof theme[stringValueArray[i]]) {
      theme = theme[stringValueArray[i]];
      if (i === stringValueArray.length - 1) {
        success = true;
      }
    }
  }
  if (success) {
    return theme;
  }
};

function createVariantControlRow({ theme, componentName, variant, updateVariantState, updateGlobals }) {
  return createTableRow(
    'variant',
    <OptionsControl
      name='variants'
      type='inline-radio'
      value={variant}
      options={['neutral', 'inverse', 'brand']}
      onChange={val => {
        updateGlobalTheme(
          { componentVariants: { [componentName]: val } },
          updateGlobals
        );
        updateVariantState(val);
      }}
    />,
    theme
  );
}

function createColorControlRow({ theme, componentName, prop, variant, defaultValue, updateGlobals }) {
  return createTableRow(
    prop,
    <ColorControl
      key={`Color-${prop}-${variant || defaultVariant}`}
      name={prop}
      onChange={val =>
        updateComponentValue(
          componentName,
          prop,
          val,
          updateGlobals
        )
      }
      value={'#' + defaultValue.toString(16).substr(2)}
    />,
    theme
  );
}

function createNumberControlRow({ theme, componentName, prop, variant, defaultValue, updateGlobals }) {
  return createTableRow(
    prop,
    <NumberControl
      key={`Number-${prop}-${variant || defaultVariant}`}
      name={prop}
      onChange={val =>
        updateComponentValue(
          componentName,
          prop,
          val,
          updateGlobals
        )
      }
      value={defaultValue}
    />,
    theme
  )
}

function createStyleRows(componentName, variant) {
  if (!styleData) {
    return;
  }

  const theme = globalTheme();
  const [{ LUITheme }, updateGlobals] = useGlobals();
  const componentStyleData = styleData[componentName];
  const componentStyleVariantData = componentStyleData ? styleData[componentName][variant] : {};
  const properties = Object.keys(componentStyleVariantData);
  const themeComponentOverrides = theme && theme.componentStyles && theme.componentStyles[componentName];

  return properties.map(prop => {
    const fieldData = componentStyleVariantData[prop];
    if (fieldData) {
      const overwrittenValue = themeComponentOverrides && themeComponentOverrides[prop];
      console.log(
        `Overwritten value for [${componentName}]`,
        prop,
        theme && theme.componentStyles
      );

      const rowProps = {
        theme: LUITheme,
        componentName,
        prop,
        variant,
        defaultValue: overwrittenValue || getValueFromString(fieldData.stringValue),
        updateGlobals
      };

      switch (fieldData.type) {
        case 'color':
          return createColorControlRow(rowProps);
        case 'number':
          return createNumberControlRow(rowProps);
      }
    }
  });
}

const generateTable = (componentName, variant, updateVariantState) => {
  const [{ LUITheme }, updateGlobals] = useGlobals();

  return createTable(
    'Component styles',
    [
      createVariantControlRow({
        componentName,
        variant,
        updateVariantState,
        updateGlobals,
        theme: LUITheme
      }),
      ...createStyleRows(componentName, variant)
    ]
  );
};

function ComponentStyles(props) {
  const [storyKey, updateStoryKey] = useState();
  const [variant, updateVariantState] = useState('neutral');
  // Make sure that the component re-renders on these events
  useEffect(() => {
    updateStoryKey([props.componentName, props.theme].join('-'));
    const theme = globalTheme();
    const globalVariant = theme && theme.componentVariants && theme.componentVariants[props.componentName];
    const defaultVariant =
      (styleData[props.componentName] && styleData[props.componentName].variantDefault) ||
      'neutral';
    updateVariantState(globalVariant || defaultVariant);
  }, [props.componentName, props.theme]);

  if (props.active && props.componentName) {
    if (!styleData[props.componentName]) {
      return <div>This component does not yet support theming</div>
    }
    return (
      <div>
        <h1>Current Theme: {getPanelsTheme().name}</h1>
        {generateTable(props.componentName, variant, updateVariantState)}
      </div>
    );
  }
  return <div></div>;
}

export default (params, api) => {
  const [{ LUITheme }] = useGlobals();
  const storyComponent = api.getCurrentStoryData();
  const componentName = storyComponent?.parameters?.fileName
    .split('/')
    .pop()
    .replace('.stories.js', '');

  return (
    <div className="component-styles-panel-wrapper">
      {
        <ComponentStyles
          active={params.active && globalContext()}
          componentName={componentName}
          theme={LUITheme}
        />
      }
    </div>
  );
};
