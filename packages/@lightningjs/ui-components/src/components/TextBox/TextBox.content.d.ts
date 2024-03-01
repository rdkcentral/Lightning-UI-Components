import lng from '@lightningjs/core';

type ContentBase = {
  title?: string;
  announce?: string;
  style?: lng.textures.TextTexture.Settings | string;
};

type TextContent =
  | string
  | (ContentBase & ({ text: string } | { icon: string } | { badge: string }));

export { TextContent as default }