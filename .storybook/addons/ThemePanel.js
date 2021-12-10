import React from 'react';
import lng from '@lightningjs/core';
import { THEMEPANEL_ID } from './constants';
import { ColorControl, NumberControl } from '@storybook/components';
import { getValidColor, getHexColor } from '../../Styles/Colors';
import { useGlobals } from '@storybook/api';
import { getPanelsTheme, updateGlobalTheme, createTable, createTableRow } from '../utils';

const colorUpdate = (name, value, updateGlobals) => {
  updateGlobalTheme({ colors: { [name]: getHexColor(getValidColor(value)) } }, updateGlobals);
}

function createColors(updateGlobals, themeName) {
  const theme = getPanelsTheme();

  const colors = theme.colors;
  let rows = [];

  for (const c in colors) {
    // if using the base theme JSON, this might be an array of color and hex values,
    // otherwise, if using the context, this may be the already formatted color
    const color = Array.isArray(colors[c]) ?
      getHexColor(colors[c][0], colors[c][1]) :
      getValidColor(colors[c]);

    // color picker cannot be passed Hex color with alpha, so need to convert to RGBA
    const rgbaColor = lng.StageUtils.getRgbaString(color);

    rows.push(createTableRow(c, (
      <ColorControl
        key={`${themeName}-Color-${c}`}
        name={c}
        onChange={(val) => colorUpdate(c, val, updateGlobals) }
        value={rgbaColor}
      />
    )));
  }

  return rows;
}

const radiusUpdate = (name, value, updateGlobals) => {
  updateGlobalTheme({ radius: { [name]: value } }, updateGlobals);
}

function createRadius(updateGlobals, themeName) {
  const theme = getPanelsTheme();
  const radius = theme.radius;
  let rows = [];

  for (const r in radius) {
    rows.push(createTableRow(r, (
      <NumberControl
        key={`${themeName}-Radius-${r}`}
        name={r}
        onChange={(val) => radiusUpdate(r, val, updateGlobals) }
        value={parseInt(radius[r])}
        min={0}
      />
    )));
  }

  return rows;
}

const ThemePanel = ({ active }) => {
  const [{ LUITheme }, updateGlobals ] = useGlobals();

  return (
    <div className="theme-panel-wrapper" style={active ? {} : { display: 'none' }}>
      <div
        key={THEMEPANEL_ID}
        className="theme-panel-controls"
      >
        <h1>Current Theme: {getPanelsTheme().name}</h1>
        {createTable('Colors', createColors(updateGlobals, LUITheme))}
        {createTable('Radius', createRadius(updateGlobals, LUITheme))}
      </div>
    </div>
  );
};

export default (params) => {
  return <ThemePanel key="ThemePanel" active={params.active}/>;
};
