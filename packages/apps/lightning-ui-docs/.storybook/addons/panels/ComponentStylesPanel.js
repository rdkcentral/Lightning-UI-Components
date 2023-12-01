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

import React, { useState, useEffect } from 'react';
import lng from '@lightningjs/core';
import { useGlobals } from '@storybook/manager-api';
import { AddonPanel, Button } from '@storybook/components';
import { OptionsControl, ColorControl, NumberControl } from '@storybook/blocks';
import { Table, TableRow } from '../components';
import { utils } from '@lightningjs/ui-components/src';
import {
  globalApp,
  globalTheme,
  globalContext,
  updateGlobalTheme
} from '../../utils/themeUtils';

/**
 * REMOVE:
 * Components Style Panel should update theme styles via controls
 * The state of fields should carry over from panel to panel
 * controls should not reset unless refresh of SB or reset controls button (would need to be created)
 */

/**
 * @returns a style row with a number control
 */

function NumberRow({ styleProp, defaultValue, componentName }) {
  const [{ LUITheme }, updateGlobals] = useGlobals();
  const [fieldValue, setValueState] = useState(defaultValue);

  return (
    <TableRow
      label={styleProp}
      control={
        <NumberControl
          name={styleProp}
          key={`Number-${styleProp}`}
          value={fieldValue}
          onChange={val => {
            // TODO: update prop value in control and in theme
            setValueState(val);
            updateComponentValue(componentName, styleProp, val, updateGlobals);
          }}
        />
      }
    />
  );
}

/**
 *
 * @returns style row with color control
 */
function ColorRow({ styleProp, defaultValue, componentName }) {
  const [fieldValue, setValueState] = useState(defaultValue);
  return (
    <TableRow
      label={styleProp}
      control={
        <ColorControl
          name={styleProp}
          key="prop-2"
          value={fieldValue}
          onChange={val => {
            // TODO: update prop value in control and in theme
            setValueState(val);
            //updateComponentValue(componentName, styleProp, val);
          }}
        />
      }
    />
  );
}

/**
 *
 * @returns row containing tone control
 */
const ToneRow = ({ defaultTone }) => {
  const [toneState, setToneState] = useState(defaultTone);

  return (
    <TableRow
      label="tone"
      control={
        <OptionsControl
          name="tones"
          key="Tones-one"
          type="inline-radio"
          value={toneState}
          argType={{ options: ['neutral', 'inverse', 'brand'] }}
          onChange={val => {
            // TODO: update prop value in control and in theme
            setToneState(val);
          }}
        />
      }
    />
  );
};

// REVIEW: Should this be moved to themeUtils?
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

/**
 *
 * @returns rows of component style controls
 */
function createStyleRows(component) {
  //REVIEW: a lot going on in this function right now, can this be broken down more?
  const style = component._style;
  const theme = globalTheme();
  const componentName = component.constructor.__componentName;
  const defaultTone = theme?.componentConfig?.[componentName]?.tone
    ? theme.componentConfig[componentName].tone
    : 'neutral';

  // only props that get passed to ToneRow component
  const toneRowProps = {
    defaultTone: defaultTone,
    componentName: componentName
  };

  const rows = Object.keys(style || {}).reduce((acc, prop) => {
    const styleType = getControlType(style[prop]);
    // need to format value before passing to row component
    const propValue =
      styleType === 'color'
        ? lng.StageUtils.getRgbaString(style[prop])
        : style[prop];
    // only props to get passed to row component
    const rowProps = {
      defaultValue: propValue,
      componentName: component.constructor.__componentName,
      styleProp: prop
    };

    if (styleType === 'color') {
      acc.push(<ColorRow key={`Color-${prop}`} {...rowProps} />);
    } else if (styleType === 'number') {
      acc.push(<NumberRow key={`Number-${prop}`} {...rowProps} />);
    }
    return acc;
  }, []);
  //TODO: add ToneRow to top of table,right now this ends up at the bottom because of filter order
  rows.push(<ToneRow key={`Tone-${componentName}`} {...toneRowProps} />);
  return rows;
}

/**
 *
 * @returns table of component style props
 */
const ComponentStyleTable = component => {
  return (
    <>
      <Table
        title="Component Level Theme Styles"
        rows={createStyleRows(component)}
      />
    </>
  );
};

/**
 * NOTE: New Feature to basically mimic what happens on the controls panel
 * @returns a reset button that when clicked will reset component style panel back to default style props of component base on theme
 */
// REVIEW: depending how we handle state for the theme may need to move this into default
// TODO: add style to button to properly align in table
const ResetButton = () => {
  return (
    <>
      <Button small outline label="buttonLabel" onClick={resetPanel}>
        Reset Styles
      </Button>
    </>
  );
};

// TODO: reset component panel style to default theme i.e. base
const resetPanel = () => {
  //TODO: create logic to reset styles
  return console.log('reset panel');
};

let component;
let storybookInit;

/**
 * @returns the full Component Style Panel add-on
 */
export default params => {
  const APP = globalApp();
  const [{ LUITheme }, updateGlobals] = useGlobals();
  if (APP && !storybookInit) {
    // NOTE: removed the storyChanged piece
    component = APP._getFocused().childList.first;
    console.log(component);
    storybookInit = true;
  }

  return (
    <AddonPanel {...params}>
      <div className="component-styles-panel-wrapper">
        <h1>Current Theme: {LUITheme}</h1>
        <ResetButton />
        <ComponentStyleTable {...component} />
      </div>
    </AddonPanel>
  );
};
