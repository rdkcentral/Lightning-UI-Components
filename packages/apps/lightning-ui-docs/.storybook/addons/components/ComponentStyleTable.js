import React from 'react';
import lng from '@lightningjs/core';
import { useGlobals } from '@storybook/manager-api';
import { Table, ColorRow, NumberRow, ToneRow } from '../components';
import { getControlType } from '../../utils/helpers';
import { globalTheme } from '../../utils/themeUtils';
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
export default function ComponentStyleTable(component) {
  return (
    <>
      <Table
        title="Component Level Theme Styles"
        rows={createStyleRows(component)}
      />
    </>
  );
}
