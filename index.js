/**
 *
 * DEPRECATION NOTICE
 *
 * This file will be removed in a future version, removing all components from the default export.
 * Components should instead be imported from the specific folder:
 *
 * import { ActionButton } from '@lightning/ui/elements;
 *
 */

export * from './Styles/index.js';
export {
  default as ActionButton,
  ActionButtonIconLarge,
  ActionButtonIconMedium,
  ActionButtonIconSmall,
  ActionButtonLarge,
  ActionButtonMedium,
  ActionButtonSmall,
  ActionButtonXsmall
} from './elements/ActionButton/index.js';
export { default as Announcer } from './mixins/withAnnouncer/index.js';
export { default as Badge } from './elements/Badge/index.js';
export { default as Button } from './elements/Button/index.js';
export { default as Checkbox } from './elements/Checkbox/index.js';
export { default as Column } from './layout/Column/index.js';
export { default as DataItem } from './patterns/DataItem/index.js';
export { default as FocusManager } from './layout/FocusManager/index.js';
export { default as FocusRing } from './elements/FocusRing/index.js';
export { default as Icon } from './elements/Icon/index.js';
export { default as InlineContent } from './layout/InlineContent/index.js';
export { default as Input } from './patterns/Input/index.js';
export { default as Key } from './elements/Key/index.js';
export { default as Keyboard, KEYBOARD_FORMATS } from './patterns/Keyboard/index.js';
export { default as KeyboardInput } from './patterns/Keyboard/KeyboardInput.js';
export { default as ListItem, ListItemImage, ListItemSlider, ListItemToggle, ListItemRadio, ListItemPicker } from './patterns/ListItem/index.js';
export { default as MarqueeText } from './elements/MarqueeText/index.js';
export { default as MetadataCard } from './elements/MetadataCard/index.js';
export { default as MetadataTile } from './elements/MetadataTile/index.js';
export { default as Pivot } from './elements/Pivot/index.js';
export { default as ProgressBar } from './elements/ProgressBar/index.js';
export { default as Radio } from './elements/Radio/index.js';
export { default as Row } from './layout/Row/index.js';
export { default as ScrollWrapper } from './layout/ScrollWrapper/index.js';
export { default as Slider } from './elements/Slider/index.js';
export { default as TabBar, Tab } from './elements/Tabs/index.js';
export { default as Tile } from './elements/Tile/index.js';
export { default as TileCircle } from './elements/TileCircle/index.js';
export { default as TileIcon } from './elements/TileIcon/index.js';
export { default as Toggle } from './elements/Toggle/index.js';
export { default as Tooltip } from './elements/Tooltip/index.js';
export { default as Notification } from './patterns/Notification/index.js'; // TODO: alphabetize
