import React from 'react';
import { Icons, IconButton } from '@storybook/components';
import { downloadFile } from '../../utils';
import { DOWNLOAD_ID } from './constants';

export const ThemeDownload = () => {

  const download = () => {
    console.log('Downloading LUI-Theme.json...');
    const context = document.querySelector('iframe').contentWindow.CONTEXT;
    downloadFile(context.theme, 'LUI-Theme.json', 'json');
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
