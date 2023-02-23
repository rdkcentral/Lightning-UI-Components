import React, { useState, useEffect } from 'react';
import { useGlobals } from '@storybook/api';
import { OptionsControl, ColorControl } from '@storybook/components';
import { Table, TableRow, NumberRow } from '../components';
import { utils } from '@lightningjs/ui-components';
import debounce from 'debounce';

import {
  globalApp,
  globalContext,
  globalTheme,
  updateGlobalTheme
} from '../../utils/themeUtils';

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
      componentConfig: {
        [componentName]: {
          style: { [styleProp]: value }
        }
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
  const [tone, updateToneState] = useState();
  const [styleRows, updateStyleRows] = useState([]);

  if (APP && !storybookInit) {
    APP.on('storyChanged', () => {
      component = APP._getFocused().childList.first;
      if (component) updatePanel();
    });
    storybookInit = true;
  }

  useEffect(() => {
    // If the tone selector has been changed update the theme to reflect the change in the UI
    const context = globalContext();
    if (context) {
      context.updateTheme({
        componentConfig: {
          [component.constructor.__componentName]: {
            tone
          }
        }
      });
    }
  }, [tone]);

  function updatePanel() {
    updateTone();
    setFields();
  }

  /**
   * Update tone to to match default for component or componentTone in theme
   */
  function updateTone() {
    const theme = globalTheme();
    // Check if the current component already has a tone set and update the state if so
    if (theme?.componentConfig?.[component.constructor.__componentName]?.tone) {
      updateToneState(
        theme.componentConfig[component.constructor.__componentName].tone
      );
    } else {
      updateToneState('neutral');
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
              scope={tone}
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
              scope={tone}
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
                    label="tone"
                    key={`Row-${version}`}
                    control={
                      <OptionsControl
                        name="tones"
                        type="inline-radio"
                        value={tone}
                        options={['neutral', 'inverse', 'brand']}
                        onChange={val => {
                          updateToneState(val);
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
