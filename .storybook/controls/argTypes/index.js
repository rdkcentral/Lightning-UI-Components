export const createModeControl = (options, defaultValue) => {
  return {
    mode: {
      defaultValue: defaultValue || 'unfocused',
      control: 'radio',
      options:
        options && Array.isArray(options)
          ? ['unfocused', ...options]
          : ['unfocused', 'focused', 'disabled'],
      description: 'Sets the visual mode for the component',
      table: {
        defaultValue: { summary: 'default' }
      }
    }
  };
};
