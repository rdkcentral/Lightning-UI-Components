import React from 'react';
import { Icons, IconButton } from '@storybook/components';
import { convertNumToHexAlphaArray } from '../utils';
import { downloadFile } from '../../utils';
import { DOWNLOAD_ID } from '../constants';

export const ThemeDownload = () => {

  const download = () => {
    console.log('Downloading LUI-Theme.json...');
    const context = document.querySelector('iframe').contentWindow.CONTEXT;
    const formattedTheme = JSON.parse(JSON.stringify(context.theme, (key, value) => {
      if (typeof value === 'number' && /^[0-9]{10}$/g.test(value.toString())) {
        return convertNumToHexAlphaArray(value);
      }
      return value;
    }));
    downloadFile(formattedTheme, `LUI-Theme-${formattedTheme.name}.json`, 'json');
  }

  return (
    <IconButton
      key={DOWNLOAD_ID}
      title="Download LUI Theme JSON"
      onClick={download}
    >
      <Icons icon="download" />
    </IconButton>
  );
};
