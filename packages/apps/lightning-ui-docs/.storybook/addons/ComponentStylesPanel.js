import React, { useState, useEffect } from 'react';
import { useGlobals } from '@storybook/api';
import { OptionsControl, ColorControl } from '@storybook/components';
import { Table, TableRow, NumberRow } from './components';
import { utils } from '@lightning/ui-core';
import debounce from 'debounce';

import {
  globalApp,
  globalContext,
  globalTheme,
  updateGlobalTheme
} from '../utils';

function getControlType(value) {
  try {
    if (utils.getValidColor(value)) {
      return 'color';
    } else if (typeof value === 'number') {
      return 'number';
    }
  } catch (error) {
    console.error(error);
  }
}

const updateComponentValue = (
  componentName,
  styleProp,
  value,
  updateGlobals
) => {
  updateGlobalTheme(
    {
      componentStyle: {
        [componentName]: { [styleProp]: value }
      }
    },
    updateGlobals
  );
};

const debouncedUpdateComponentValue = debounce(function (
  componentName,
  prop,
  val,
  updateGlobals
) {
  updateComponentValue(componentName, prop, val, updateGlobals);
},
500);

let storybookInit;
let version;
let component;
export default params => {
  const APP = globalApp();
  const [{ LUITheme }, updateGlobals] = useGlobals();
  const [palette, updatePaletteState] = useState();
  const [styleRows, updateStyleRows] = useState([]);

  if (APP && !storybookInit) {
    APP.on('storyChanged', () => {
      component = APP._getFocused().childList.first;
      if (component) updatePanel();
    });
    storybookInit = true;
  }

  useEffect(() => {
    // If the palette selector has been changed update the theme to reflect the change in the UI
    const context = globalContext();
    if (context) {
      context.updateTheme({
        componentPalette: { [component.constructor.__componentName]: palette }
      });
    }
  }, [palette]);

  function updatePanel() {
    updatePalette();
    setFields();
  }

  /**
   * Update palette to to match default for component or componentPalette in theme
   */
  function updatePalette() {
    const theme = globalTheme();
    // Check if the current component already has a palette set and update the state if so
    if (theme?.componentPalette?.[component.constructor.__componentName]) {
      updatePaletteState(
        theme.componentPalette[component.constructor.__componentName]
      );
    } else {
      updatePaletteState('neutral');
    }
  }

  /**
   * Create controls for the panel and/or update values
   */
  function setFields() {
    const style = component.style;
    const componentName = component.constructor.__componentName;
    version = new Date().valueOf();
    const fields = Object.keys(style || {}).reduce((acc, prop) => {
      const defaultValue = style[prop];
      switch (getControlType(defaultValue)) {
        case 'color':
          acc.push(
            <TableRow
              label={prop}
              key={`${prop}`}
              scope={palette}
              control={
                <ColorControl
                  key={`Color-${componentName}-${prop}-${version}`}
                  name={prop}
                  onChange={val =>
                    debouncedUpdateComponentValue(
                      component.constructor.__componentName,
                      prop,
                      val,
                      updateGlobals
                    )
                  }
                  value={lng.StageUtils.getRgbaString(defaultValue)}
                />
              }
            />
          );
          break;
        case 'number':
          acc.push(
            <NumberRow
              key={`Number-${componentName}-${prop}-${version}`}
              label={prop}
              defaultValue={defaultValue}
              scope={palette}
              onChange={val => {
                debouncedUpdateComponentValue(
                  component.constructor.__componentName,
                  prop,
                  val,
                  updateGlobals
                );
              }}
            />
          );
          break;
      }
      return acc;
    }, []);
    updateStyleRows(fields);
  }

  return (
    <div key="component-styles-tab" className="component-styles-panel-wrapper">
      {params.active ? (
        styleRows && styleRows.length ? (
          <>
            <h1>Current Theme: {utils.capitalizeFirstLetter(LUITheme)}</h1>
            <div>
              <Table
                title="Component Level Theme Styles"
                rows={[
                  <TableRow
                    label="palette"
                    key={`Row-${version}`}
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
