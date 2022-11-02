import { createTransitions } from '../../Styles/Transitions.js';
import utils from '../../utils/index.js';

const patchTransitions = (element, transitions) => {
  if (!element._transitions) {
    element.transitions = transitions;
    return;
  }

  for (const key in transitions) {
    if (!element._transitions[key]) {
      element.transition(key, transitions[key]);
    }
  }
};

const collectChildren = (children, result = []) => {
  if (children && children.length) {
    result.push(...children);
    return collectChildren(
      utils.flatten(children.map(child => child.children)),
      result
    );
  }
  return result;
};

const withTransitions = (Base, options = {}) => {
  const transitions = createTransitions(options);

  return class extends Base {
    static get name() {
      return Base.name;
    }
    static _template() {
      return {
        transitions,
        ...super._template()
      };
    }

    _init() {
      const flatTree = collectChildren(this.children);
      flatTree.forEach(element => patchTransitions(element, transitions));
      super._init();
    }
  };
};

export default withTransitions;
