import React, { useState, useEffect } from 'react';
import lng from '@lightningjs/core';
import { useGlobals } from '@storybook/api';
import debounce from 'debounce';
import { capitalizeFirstLetter } from '../../utils';
import {
  globalContext,
  globalTheme,
  getThemeValueFromString,
  updateGlobalTheme
} from '../utils';
import { Table, TableRow } from './components';
import {
  OptionsControl,
  ColorControl,
  NumberControl
} from '@storybook/components';

const styleData = require('../../tmp/component-styles.json');

const updateComponentValue = (component, styleProp, value, updateGlobals) => {
  updateGlobalTheme(
    {
      componentStyles: {
        [component]: { [styleProp]: value }
      }
    },
    updateGlobals
  );
};

export default (params, api) => {
  const theme = globalTheme();
  const [{ LUITheme }, updateGlobals] = useGlobals();
  const storyComponent = api.getCurrentStoryData();

  const debouncedUpdateComponentValue = debounce(function (prop, val) {
    updateComponentValue(component, prop, val, updateGlobals);
  }, 500);

  const component = storyComponent?.parameters?.fileName
    .split('/')
    .pop()
    .replace('.stories.js', '');

  const [listenersSet, updateListenersSet] = useState();
  const [themeVersion, updateThemeVersion] = useState(new Date().valueOf());
  const [variant, updateVariantState] = useState();
  const [styleRows, updateStyleRows] = useState([]);

  useEffect(() => {
    const context = globalContext();
    if (context && !listenersSet) {
      context.on('themeUpdate', () => updateThemeVersion(new Date().valueOf()));
      updateListenersSet(true); // Make sure this is only run once
    }
  });

  useEffect(() => {
    // Check if the current component already has a variant set and update the state if so
    if (theme?.componentVariants?.[component]) {
      updateVariantState(theme.componentVariants[component]);
      return;
    }
    // If you have switched stories to another component check to find it's default variant state
    const variantDefault = styleData?.[component]?.variantDefault || 'neutral';
    updateVariantState(variantDefault);
  }, [component, LUITheme]);

  useEffect(() => {
    // If the variant selector has been changed update the theme to reflect the change in the UI
    const context = globalContext();
    if (context) {
      context.updateTheme({ componentVariants: { [component]: variant } });
    }
  }, [variant]);

  useEffect(() => setFields(themeVersion), [themeVersion, variant, component]);

  function setFields(version) {
    if (styleData?.[component]?.[variant]) {
      const selectedStyles = styleData[component][variant];
      const styles = Object.keys(selectedStyles).map(prop => {
        const themeComponentOverrides =
          theme?.componentStyles?.[component]?.[prop];

        return {
          prop,
          type: selectedStyles[prop].type,
          defaultValue:
            themeComponentOverrides ||
            getThemeValueFromString(selectedStyles[prop].stringValue)
        };
      });

      const fields = styles.reduce((acc, curr, idx) => {
        switch (curr.type) {
          case 'color':
            acc.push(
              <TableRow
                label={curr.prop}
                key={idx}
                scope={variant}
                control={
                  <ColorControl
                    key={`Color-${curr.prop}-${variant}-${LUITheme}-${version}`}
                    name={curr.prop}
                    onChange={val =>
                      debouncedUpdateComponentValue.call(this, curr.prop, val)
                    }
                    value={lng.StageUtils.getRgbaString(curr.defaultValue)}
                  />
                }
              />
            );
            break;
          case 'number':
            acc.push(
              <TableRow
                label={curr.prop}
                key={idx}
                scope={variant}
                control={
                  <NumberControl
                    key={`Color-${curr.prop}-${variant}-${LUITheme}-${version}`}
                    name={curr.prop}
                    onChange={val =>
                      debouncedUpdateComponentValue.call(this, curr.prop, val)
                    }
                    value={curr.defaultValue}
                  />
                }
              />
            );
            break;
        }

        return acc;
      }, []);
      updateStyleRows(fields);
    }
  }

  return (
    <div key="component-styles-tab" className="component-styles-panel-wrapper">
      {params.active ? (
        styleData[component] ? (
          <>
            <h1>Current Theme: {capitalizeFirstLetter(LUITheme)}</h1>
            <div>
              <Table
                title="Component Level Theme Styles"
                rows={[
                  <TableRow
                    key="variant-row"
                    label="variant"
                    control={
                      <OptionsControl
                        name="variants"
                        type="inline-radio"
                        value={variant}
                        options={['neutral', 'inverse', 'brand']}
                        onChange={val => {
                          updateVariantState(val);
                        }}
                      />
                    }
                  />,
                  ...styleRows
                ]}
              />
            </div>
          </>
        ) : (
          <h3>This component does not support themed styles</h3>
        )
      ) : (
        <></>
      )}
    </div>
  );
};
