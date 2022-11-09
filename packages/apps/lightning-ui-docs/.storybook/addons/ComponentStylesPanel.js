import React, { useState, useEffect } from 'react';
import lng from '@lightningjs/core';
import { useGlobals } from '@storybook/api';
import debounce from 'debounce';
import { utils } from '@lightning/ui-core';
import {
  globalContext,
  globalTheme,
  getThemeValueFromString,
  updateGlobalTheme
} from '../utils';
import { Table, TableRow, NumberRow } from './components';
import {
  OptionsControl,
  ColorControl,
  NumberControl
} from '@storybook/components';

const styleData = require('../../tmp/component-styles.json');

const updateComponentValue = (component, styleProp, value, updateGlobals) => {
  updateGlobalTheme(
    {
      componentStyle: {
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
  const [palette, updatePaletteState] = useState();
  const [styleRows, updateStyleRows] = useState([]);

  useEffect(() => {
    const context = globalContext();
    if (context && !listenersSet) {
      context.on('themeUpdate', () => updateThemeVersion(new Date().valueOf()));
      updateListenersSet(true); // Make sure this is only run once
    }
  });

  useEffect(() => {
    // Check if the current component already has a palette set and update the state if so
    if (theme?.componentPalette?.[component]) {
      updatePaletteState(theme.componentPalette[component]);
      return;
    }
    // If you have switched stories to another component check to find it's default palette state
    const paletteDefault = styleData?.[component]?.paletteDefault || 'neutral';
    updatePaletteState(paletteDefault);
  }, [component, LUITheme]);

  useEffect(() => {
    // If the palette selector has been changed update the theme to reflect the change in the UI
    const context = globalContext();
    if (context) {
      context.updateTheme({ componentPalette: { [component]: palette } });
    }
  }, [palette]);

  useEffect(() => setFields(themeVersion), [themeVersion, palette, component]);

  function setFields(version) {
    if (styleData?.[component]) {
      const selectedStyles = styleData[component]?.palette?.[palette] || {};
      const styles = Object.keys(selectedStyles).map(prop => {
        const themeComponentOverrides =
          theme?.componentStyle?.[component]?.[prop];

        return {
          prop,
          type: selectedStyles?.[prop]?.type,
          defaultValue:
            themeComponentOverrides ||
            getThemeValueFromString(selectedStyles?.[prop]?.stringValue)
        };
      });

      const selectedBaseStyles = styleData[component]?.baseValues || {};

      const baseStyles = Object.keys(selectedBaseStyles).map(prop => {
        const themeComponentOverrides =
          theme?.componentStyle?.[component]?.[prop];

        return {
          prop,
          type: selectedBaseStyles?.[prop]?.type,
          defaultValue:
            themeComponentOverrides ||
            getThemeValueFromString(selectedBaseStyles?.[prop]?.stringValue)
        };
      });

      const fields = [
        ...baseStyles.filter(
          baseStyle => !styles.some(style => style.prop === baseStyle.prop)
        ),
        ...styles
      ].reduce((acc, curr, idx) => {
        switch (curr.type) {
          case 'color':
            acc.push(
              <TableRow
                label={curr.prop}
                key={idx}
                scope={palette}
                control={
                  <ColorControl
                    key={`Color-${curr.prop}-${palette}-${LUITheme}-${version}`}
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
              <NumberRow
                key={idx}
                label={curr.prop}
                defaultValue={curr.defaultValue}
                scope={palette}
                onChange={val => {
                  debouncedUpdateComponentValue(curr.prop, val);
                }}
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
        styleData[component] &&
        (styleRows.length || styleData[component].palette) ? (
          <>
            <h1>Current Theme: {utils.capitalizeFirstLetter(LUITheme)}</h1>
            <div>
              <Table
                title="Component Level Theme Styles"
                rows={[
                  <TableRow
                    key="palette-row"
                    label="palette"
                    control={
                      <OptionsControl
                        name="palettes"
                        type="inline-radio"
                        value={palette}
                        options={['neutral', 'inverse', 'brand']}
                        onChange={val => {
                          updatePaletteState(val);
                        }}
                      />
                    }
                  />,
                  ...styleRows
                ].filter(Boolean)}
              />
            </div>
          </>
        ) : (
          <h3>No theme values available on this component.</h3>
        )
      ) : (
        <></>
      )}
    </div>
  );
};
