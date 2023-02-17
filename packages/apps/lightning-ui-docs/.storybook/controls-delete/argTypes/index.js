export const createModeControl = ({ options, summaryValue } = {}) => {
  return {
    mode: {
      control: 'radio',
      options:
        options && Array.isArray(options)
          ? ['unfocused', ...options]
          : ['unfocused', 'focused', 'disabled'],
      description: 'Sets the visual mode for the component',
      table: {
        defaultValue: { summary: summaryValue } // need to figure out how to add default value per story, maybe the args?
      },
      type: { name: 'mode', required: true }
    }
  };
};
