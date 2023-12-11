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
import lng from '@lightningjs/core';
import { useGlobals } from '@storybook/manager-api';
import { AddonPanel } from '@storybook/components';
import {
  Table,
  ColorRow,
  NumberRow,
  ToneRow,
  ResetButton
} from '../components';
import { getControlType } from '../../utils/helpers';
import { globalApp, globalTheme } from '../../utils/themeUtils';

/**
 *
 * @returns rows of component style controls
 */
function createStyleRows(component) {
  //REVIEW: a lot going on in this function right now, can/should this be broken down in more components/functions?
  const [{ LUITheme }, updateGlobals] = useGlobals();
  const style = component._style;
  const theme = globalTheme();
  const componentName = component.constructor.__componentName;
  // // if the tone is already set on the componentConfig use it, otherwise use default
  const defaultTone = theme?.componentConfig?.[componentName]?.tone
    ? theme.componentConfig[componentName].tone
    : 'neutral';

  // only props that get passed to ToneRow component
  const toneRowProps = {
    defaultTone: defaultTone,
    componentName: componentName,
    updateGlobals
  };

  // create an array of control rows using the props from the component styles
  const rows = Object.keys(style || {}).reduce((acc, prop) => {
    const styleType = getControlType(style[prop]);

    // format value before passing to row component
    const propValue =
      styleType === 'color'
        ? lng.StageUtils.getRgbaString(style[prop])
        : style[prop];

    // contains only props for rows
    const rowProps = {
      defaultValue: propValue,
      componentName: component.constructor.__componentName,
      styleProp: prop,
      updateGlobals
    };

    if (styleType === 'color') {
      acc.push(<ColorRow key={`Color-${prop}`} {...rowProps} />);
    } else if (styleType === 'number') {
      acc.push(<NumberRow key={`Number-${prop}`} {...rowProps} />);
    }
    return acc;
  }, []);
  rows.unshift(<ToneRow key={`Tone-${componentName}`} {...toneRowProps} />);
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
    // right now this only sets fields on initial load
    // if you click to another story the the controls stay the same
    component = APP._getFocused().childList.first;
    storybookInit = true;
  }

  return (
    <AddonPanel {...params}>
      <div className="component-styles-panel-wrapper">
        <h1>Current Theme: {LUITheme}</h1>
        <ResetButton />
        <ComponentStyleTable {...component} />

        <h3>No theme values available on this component.</h3>
      </div>
    </AddonPanel>
  );
};
