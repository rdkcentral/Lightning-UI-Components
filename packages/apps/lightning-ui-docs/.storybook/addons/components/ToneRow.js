import React, { useState, useEffect } from 'react';
import { TableRow } from '../components';
import { OptionsControl } from '@storybook/blocks';
import { globalContext, updateGlobalTheme } from '../../utils/themeUtils';

/**
 *
 * @returns row containing tone control
 */
export default function ToneRow({ defaultTone, componentName }) {
  const [tone, setToneState] = useState(defaultTone);

  useEffect(() => {
    const context = globalContext();
    console.log(context);
    if (context) {
      context.updateTheme({
        componentConfig: {
          [componentName]: {
            tone
          }
        }
      });
    }
  }, [tone]);

  return (
    <TableRow
      label="tone"
      control={
        <OptionsControl
          name="tones"
          key="Tones-one"
          type="inline-radio"
          value={tone}
          argType={{ options: ['neutral', 'inverse', 'brand'] }}
          onChange={val => {
            setToneState(val);
            //updateToneValue(componentName, val, updateGlobals);
          }}
        />
      }
    />
  );
}
