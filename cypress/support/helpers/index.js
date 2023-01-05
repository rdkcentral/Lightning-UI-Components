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
    Card: 'Card',
    CardAbout: 'Card-About',
    CardAboutLarge: 'Card-About',
    CardContentHorizontalLarge: 'Card-Content-Horizontal-Large',
    Control: 'Control',
    Distractor: 'Distractor',
    Label: 'Label',
    Radio: 'Radio',
    Row: 'Row',
    Tile: 'Tile',
    Toggle: 'Toggle',
    ControlSmall: 'Control-Small',
    ButtonSmall: 'Button-Small',
    CardPersonality: 'Card-Personality',
    CardSection: 'Card-Section',
    ListItem: 'List-Item',
    ProgressBar: 'Progress-Bar',
    RadioSmall: 'Radio',
    ToggleSmall: 'Toggle',
    CardTitle: 'Card-Title',
    Checkbox: 'Checkbox',
    Wave: 'Wave',
    ScrollWrapper: 'scrollwrapper',
    Tab: 'Tab',
    Wave: 'Wave',
    CardContent: 'Card-Content'
  };

  if (pageName in names) {
    return names[pageName];
  } else {
    throw new Error(
      `${pageName} page not found! \nPlease check the page name or implement the missing case.`
    );
  }
};
