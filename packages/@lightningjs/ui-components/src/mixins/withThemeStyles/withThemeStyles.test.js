import Lightning from '@lightningjs/core';
import withThemeStyles from '.';
import { makeCreateComponent } from '@lightningjs/ui-components-test-utils';

describe('withThemeStyles', () => {
  beforeEach(() => {});
  it('should apply componentConfig props to the component', () => {
    class Test extends Lightning.Component {
      static get __componentName() {
        return 'Test';
      }

      static get properties() {
        return ['prop1'];
      }

      get prop1() {
        return this._prop1;
      }

      set prop1(value) {
        this._prop1 = value;
      }
    }

    const createComponent = makeCreateComponent(
      class extends withThemeStyles(Test) {
        get theme() {
          return {
            componentConfig: {
              Test: {
                prop1: 'foo'
              }
            }
          };
        }
      }
    );
    const [testComponent] = createComponent();

    expect(testComponent.prop1).toBe('foo');
    expect(testComponent.style).toMatchObject({});
  });
});
