import React from 'react';
import lng from '@lightningjs/core';
import { useGlobals } from '@storybook/manager-api';
import {
  Table,
  ColorRow,
  NumberRow,
  ToneRow,
  ResetButton
} from '../components';
import { getControlType, createTitle } from '../../utils/helpers';
import { globalTheme } from '../../utils/themeUtils';

/**
 * @param {Object} component
 * @param {cb_} updateGlobals - update global value
 * @returns an array containing rows of component style controls
 */
function createStyleRows(component, updateGlobals) {
  const style = component._style;

  const theme = globalTheme();
  const componentName = component.constructor.__componentName;

  // if the tone is already set on the componentConfig use it, otherwise use neutral as default
  const defaultTone = theme?.componentConfig?.[componentName]?.tone
    ? theme.componentConfig[componentName].tone
    : 'neutral';

  //  props passed to ToneRow component
  const toneRowProps = {
    defaultTone: defaultTone,
    componentName: componentName,
    updateGlobals
  };

  const rows = Object.keys(style || {}).reduce((acc, prop) => {
    const styleType = getControlType(style[prop]);

    // format value before passing to row component
    const propValue =
      styleType === 'color'
        ? lng.StageUtils.getRgbaString(style[prop])
        : style[prop];

    // props passed to Number or Color Rows
    const rowProps = {
      defaultValue: propValue,
      componentName: component.constructor.__componentName,
      styleProp: prop,
      updateGlobals
    };

    // logic to add either Color or Number row
    if (styleType === 'color') {
      acc.push(<ColorRow key={`Color-${prop}`} {...rowProps} />);
    } else if (styleType === 'number') {
      acc.push(<NumberRow key={`Number-${prop}`} {...rowProps} />);
    }
    return acc;
  }, []);

  // NOTE: logic needed, otherwise Tone Row will be added to all stories
  if (rows && rows.length) {
    rows.unshift(<ToneRow key={`Tone-${componentName}`} {...toneRowProps} />);
    return rows;
  }
}

/**
 * @param {Object} component
 * @returns a table of component styles if component has theme values
 */
export default function ComponentStylesTable(component) {
  const [{ LUITheme }, updateGlobals] = useGlobals();
  const styledRows = createStyleRows(component, updateGlobals);
  if (styledRows && styledRows.length) {
    return (
      <>
        <h1>Current Theme: {createTitle(LUITheme)}</h1>
        <div>
          <ResetButton />
          <Table title="Component Level Theme Styles" rows={styledRows} />
        </div>
      </>
    );
  }
  return <h3>No theme values available on this component.</h3>;
}
