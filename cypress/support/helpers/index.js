export const convertToCamelCase = str => {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
    if (+match === 0) return ''; // or if (/\s+/.test(match)) for white spaces
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
};

export const getStoryName = pageName => {
  const names = {
    Artwork: 'Artwork',
    Button: 'Button',
    ButtonSmall: 'Button-Small',
    Card: 'Card',
    CardAbout: 'Card-About',
    CardAboutLarge: 'Card-About',
    CardContent: 'Card-Content',
    CardContentHorizontal: 'Card-Content-Horizontal',
    CardContentHorizontalLarge: 'Card-Content-Horizontal-Large',
    CardContentVertical: 'Card-Content-Vertical',
    CardContentVerticalSmall: 'Card-Content-Vertical-Small',
    CardPersonality: 'Card-Personality',
    CardSection: 'Card-Section',
    CardTitle: 'Card-Title',
    Checkbox: 'Checkbox',
    CheckboxSmall: 'Checkbox-Small',
    Column: 'Column',
    Control: 'Control',
    ControlSmall: 'Control-Small',
    Distractor: 'Distractor',
    Gradient: 'Gradient',
    FocusRing: 'Focus-Ring',
    Key: 'Key',
    Keyboard: 'Keyboard',
    KeyboardNumbers: 'Keyboard-Numbers',
    Knob: 'Knob',
    Label: 'Label',
    ListItem: 'List-Item',
    Notification: 'Notification',
    ProgressBar: 'Progress-Bar',
    Provider: 'Provider',
    Radio: 'Radio',
    RadioSmall: 'Radio',
    Row: 'Row',
    ScrollWrapper: 'scrollwrapper',
    Shadow: 'Shadow',
    Surface: 'Surface',
    Tab: 'Tab',
    Tile: 'Tile',
    TitleRow: 'Title-Row',
    Toggle: 'Toggle',
    ToggleSmall: 'Toggle',
    Wave: 'Wave',
    WithEditItems: 'With-Edit-Items',
    WithHandleKey: 'With-Handle-Key',
    WithSelections: 'With-Selections'
  };

  if (pageName in names) {
    return names[pageName];
  } else {
    throw new Error(
      `${pageName} page not found! \nPlease check the page name or implement the missing case.`
    );
  }
};
