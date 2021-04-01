export default function withSelections(Base, options = {}) {
  const defaultOpts = {
    captureKey: 'Enter',
    defaultIndex: 0,
    eventName: 'onSelect',
    keys: {
      currentSelected: 'currentSelected',
      currentSelectedIndex: 'currentSelectedIndex',
      isSelected: 'isSelected',
      items: 'items',
      setSelected: 'setSelected'
    }
  };
  const {
    captureKey,
    defaultIndex,
    eventName,
    keys: {
      currentSelected,
      currentSelectedIndex,
      isSelected,
      items,
      setSelected
    }
  } = {
    ...defaultOpts,
    ...options,
    keys: {
      ...defaultOpts.keys,
      ...options.keys
    }
  };

  return class extends Base {
    static get name() {
      return Base.name;
    }

    _construct() {
      super._construct();
      this[currentSelectedIndex] = defaultIndex;
    }

    _init() {
      super._init();
      this[currentSelected][isSelected] = true;
    }

    [setSelected](selected, val) {
      const prevSelected = (this[items] || [])[this[currentSelectedIndex]];

      if (
        selected &&
        (selected !== prevSelected || selected[isSelected] !== val)
      ) {
        prevSelected && (prevSelected[isSelected] = false);
        selected[isSelected] = val;
        this[currentSelectedIndex] = Array.from(this[items] || []).indexOf(
          selected
        );
        this.fireAncestors('$' + eventName, selected, val);
      }
    }

    _captureKey(event) {
      if (
        (Array.isArray(captureKey) && captureKey.indexOf(event.key) > -1) ||
        event.key === captureKey
      ) {
        const [selected] = this.stage.application.focusPath.slice(-1);
        this[setSelected](selected, true);
      }
      return false;
    }

    ['$' + setSelected](selected, val) {
      this[setSelected](selected, val);
    }

    get [currentSelected]() {
      return this[items][this[currentSelectedIndex]];
    }
  };
}
