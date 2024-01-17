import React, { useState, useEffect } from 'react';
import { TableRow } from '../components';
import { OptionsControl } from '@storybook/blocks';
import { globalContext } from '../../utils/themeUtils';

/**
 * @param {String} defaultTone - tone used to set initial state
 * @param {String} componentName - name of the current component
 * @returns a component style row with a Tone control set to defaultTone
 */
export default function ToneRow({ defaultTone, componentName }) {
  const [tone, setToneState] = useState(defaultTone);

  useEffect(() => {
    const context = globalContext();
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
          type="inline-radio"
          value={tone}
          argType={{ options: ['neutral', 'inverse', 'brand'] }}
          onChange={val => {
            setToneState(val);
          }}
        />
      }
    />
  );
}
