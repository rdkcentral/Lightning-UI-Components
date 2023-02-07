import React from 'react';
import lng from '@lightningjs/core';
import { ColorControl, NumberControl } from '@storybook/components';
import { utils } from '@lightning/ui-core';
import { useGlobals } from '@storybook/api';
import { colorUpdate, getPanelsTheme, updateGlobalTheme } from '../../utils/themeUtils';
import { Table, TableRow } from '../components';

function Colors() {
  const [{ LUITheme }, updateGlobals] = useGlobals();
  const theme = getPanelsTheme();
  const colors = theme.color;
  const rows = Object.keys(colors).map(c => {
    // if using the base theme JSON, this might be an array of color and hex values,
    // otherwise, if using the context, this may be the already formatted color
    const color = Array.isArray(colors[c])
      ? utils.getHexColor(colors[c][0], colors[c][1])
      : utils.getValidColor(colors[c]);
    // color picker cannot be passed Hex color with alpha, so need to convert to RGBA
    const rgbaColor = lng.StageUtils.getRgbaString(color);
    return (
      <TableRow
      key={LUITheme ? `${LUITheme}-${c}` : c}
        label={c}
        control={
          <ColorControl
            name={c}
            onChange={val => colorUpdate(c, val, updateGlobals)}
            value={rgbaColor}
          />
        }
      />
    );
  });
  return <>{rows}</>;
}

const radiusUpdate = (name, value, updateGlobals) => {
  updateGlobalTheme({ radius: { [name]: value } }, updateGlobals);
};

function Radius() {
  const [{ LUITheme }, updateGlobals] = useGlobals();
  const theme = getPanelsTheme();
  const radius = theme.radius;
  const rows = Object.keys(radius).map(r => {
    return (
      <TableRow
      key={LUITheme ? `${LUITheme}-${r}` : r}
        label={r}
        control={
          <NumberControl
            name={r}
            onChange={val => radiusUpdate(r, val, updateGlobals)}
            value={parseInt(radius[r])}
            min={0}
          />
        }
      />
    );
  });
  return <>{rows}</>;
}

const ThemePanel = ({ active }) => {
  return (
    <div
      className="theme-panel-wrapper"
      style={active ? {} : { display: 'none' }}
    >
      <div className="theme-panel-controls">
        <h1>Current Theme: {getPanelsTheme().name}</h1>
        <Table title="Global Theme Color Values" rows={<Colors />} />
        <Table title="Global Theme Radius Values" rows={<Radius />} />
      </div>
    </div>
  );
};

export default params => {
  return <ThemePanel key="ThemePanel" active={params.active} />;
};
