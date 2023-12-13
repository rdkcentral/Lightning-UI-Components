import { updateGlobalTheme } from '../../utils/themeUtils';

/* should only contain functions that are shared between add-on components* */

/**
 * updates the component's componentConfig with the updated style props and updates globals
 * @param {String} componentName - name of the component that is being updated
 * @param {String} styleProp - name of the prop
 * @param {any} value - prop value to be updated
 * @param {_cb} updateGlobals - callback function to update globals
 *
 */
export const updateComponentValue = (
  componentName,
  styleProp,
  value,
  updateGlobals
) => {
  updateGlobalTheme(
    {
      componentConfig: {
        [componentName]: {
          style: { [styleProp]: value }
        }
      }
    },
    updateGlobals
  );
};
