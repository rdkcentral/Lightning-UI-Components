import React, { useState } from 'react';
import { NumberControl } from '@storybook/components';
import TableRow from './TableRow';

export default function NumberRow({ label, defaultValue, scope, onChange }) {
  const [value, setValue] = useState(defaultValue);

  return (
    <TableRow
      label={label}
      scope={scope}
      control={
        <NumberControl
          name={label}
          value={value}
          min={0} // may need to revisit this if there are ever valid negative values
          onChange={val => {
            setValue(val);
            onChange(val);
          }}
        />
      }
    />
  );
}
