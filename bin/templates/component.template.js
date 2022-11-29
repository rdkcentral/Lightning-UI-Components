module.exports = name => {
  return `
    import Base from '../Base';
    import * as styles from './${name}.styles.js';
    import { withExtensions} from '@lightning/ui-core';

    class ${name} extends Base {
      static get __componentName() {
        return '${name}';
      }

      static get __themeStyle() {
        return styles;
      }

      static _template() {
        return {};
      }

      static get properties() {
        // See documentation on withUpdates mixin
        return [];
      }

      static get tags() {
        /**
         * See documentation on withTags mixin
         */
        return [];
      }

      _update() {
        /**
         * All Logic to update component should go here.
         * Styles can be accessed by this.style.myStyle
         */
      }
    }

    export default withExtensions(${name});
  `;
};
