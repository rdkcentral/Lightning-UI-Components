module.exports = name => {
  return `
    import Base from '../../Base';
    import styles from './${name}.styles.js';
    import { withExtensions, withThemeStyles as withStyles } from '../../mixins';
    
    class ${name} extends Base {
      static get __componentName() {
        return '${name}';
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
    
    export default withExtensions(withStyles(${name}, styles));
  `;
};
