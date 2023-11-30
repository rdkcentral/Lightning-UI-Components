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

import React, { useState } from 'react';
import { useGlobals } from '@storybook/manager-api';
import { AddonPanel, Button } from '@storybook/components';
import { OptionsControl, ColorControl, NumberControl } from '@storybook/blocks';
import { Table, TableRow } from '../components';
import { utils } from '@lightningjs/ui-components/src';
import debounce from 'debounce';

import {
  globalApp,
  globalContext,
  globalTheme,
  updateGlobalTheme
} from '../../utils/themeUtils';

/**
 * REMOVE:
 * Components Style Panel should update theme styles via controls
 * The state of fields should carry over from panel to panel
 * and the controls should stay set with the changed state
 * controls should not reset unless refresh of SB or reset controls button (would need to be created)
 */

/**
 * @returns a style row with a number control
 */

function NumberRow({ prop, defaultValue }) {
  // TODO: pass the default value to useState()
  // Currently using value is hard coded for testing
  const [fieldValue, updateValueState] = useState(1);

  return (
    <TableRow
      label={prop}
      control={
        <NumberControl
          name={prop}
          key="prop-5"
          value={fieldValue}
          onChange={val => {
            // TODO: update prop value in control and in theme
            updateValueState(val);
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
function ColorRow({ prop, defaultValue }) {
  // TODO: pass the default value to useState()
  // Currently using value is hard coded for testing
  const [fieldValue, updateValueState] = useState('#fff');

  return (
    <TableRow
      label={prop}
      control={
        <ColorControl
          name={prop}
          key="prop-2"
          value={fieldValue}
          onChange={val => {
            // TODO: update prop value in control and in theme
            updateValueState(val);
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
const ToneRow = () => {
  // TODO: pass the default value to useState()
  // Currently using value is hard coded for testing
  const [tone, updateToneState] = useState('neutral');

  return (
    <TableRow
      label="tone"
      key="Row-tones"
      control={
        <OptionsControl
          name="tones"
          key="Tones-one"
          type="inline-radio"
          value={tone}
          argType={{ options: ['neutral', 'inverse', 'brand'] }}
          onChange={val => {
            // TODO: update prop value in control and in theme
            updateToneState(val);
          }}
        />
      }
    />
  );
};

// REVIEW: Should this be moved to inside the component or possibly to themeUtils?
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

/**
 *
 * @returns rows of component style controls
 */
function createStyleRows(component) {
  const style = component._style;
  const componentName = component.constructor.__componentName;
  // TODO: iterate through component style object assigning prop to Color or Number component
  const rows = Object.keys(style || {}).reduce((acc, prop) => {
    const defaultValue = style[prop];

    const styleType = getControlType(style[prop]);
    if (styleType === 'color') {
      acc.push(
        <ColorRow
          key={`Color-${prop}`}
          prop={prop}
          defaultValue={defaultValue}
        />
      );
    } else if (styleType === 'number') {
      acc.push(
        <NumberRow
          key={`Number-${prop}`}
          prop={prop}
          defaultValue={defaultValue}
        />
      );
    }
    return acc;
  }, []);
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
 *
 * @returns a reset button that when clicked will reset component style panel back to default
 */
// NOTE: depending how we handle state for the theme may need to move this into default
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
// reset panel style to default
const resetPanel = () => {
  //TODO: create logic to reset styles
  return console.log('reset panel');
};

/**
 * @returns the full Component Style Panel add-on
 */
let component;
let storybookInit;

export default params => {
  //REVIEW: not being used at the moment
  const [{ LUITheme }, updateGlobals] = useGlobals();
  const APP = globalApp();

  if (APP && !storybookInit) {
    // NOTE: removed the storyChanged piece
    component = APP._getFocused().childList.first;
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
