import { jest } from '@jest/globals';
import { makeCreateComponent } from '@lightning/ui-test-utils';
import withMarqueeSync from './withMarqueeSync';
import TextBox from '../../components/TextBox';
import Base from '../../components/Base';

describe('withMarqueeSync', () => {
  let component;
  let testRenderer;
  let willMarqueeSpy;
  let updateSignalsSpy;
  let cleanupSpy;
  class Example extends Base {
    static get __componentName() {
      return 'Example';
    }

    static _template() {
      return {
        Example: {
          TextOne: {
            type: TextBox,
            content: 'a string of text'
          },
          TextTwo: {
            type: TextBox,
            content: 'an even longer string of text'
          }
        }
      };
    }

    _init() {
      super._init();
      this._syncArray = [this.TextOne, this.TextTwo];
      this.style = {
        marqueeSync: true
      };
    }

    get syncArray() {
      return this._syncArray;
    }

    set syncArray(v) {
      this._syncArray = v;
    }

    _enableMarquee() {
      this.TextOne.marquee = true;
      this.TextTwo.marquee = true;
    }

    _disableMarquee() {
      this.TextOne.marquee = false;
      this.TextTwo.marquee = false;
    }

    get TextOne() {
      return this.tag('Example.TextOne');
    }

    get TextTwo() {
      return this.tag('Example.TextTwo');
    }
  }

  beforeEach(() => {
    [component, testRenderer] = makeCreateComponent(withMarqueeSync(Example))();
    willMarqueeSpy = jest.spyOn(component, '_willMarquee');
    updateSignalsSpy = jest.spyOn(component, '_updateSignals');
    cleanupSpy = jest.spyOn(component, '_cleanupSyncValues');
  });

  afterEach(() => {
    component = null;
  });

  it('extends the base class', () => {
    expect(component.constructor.name).toBe('Example');
  });

  it('should apply signals to child components', () => {
    expect(component.TextOne.signals).toStrictEqual({
      willMarquee: '_willMarquee'
    });
    expect(component.TextTwo.signals).toStrictEqual({
      willMarquee: '_willMarquee'
    });
  });

  it('should have matching overrideX values across components', () => {
    component.style.marqueeSync = true;
    component._enableMarquee();
    testRenderer.forceAllUpdates();
    expect(component.TextOne._Marquee.overrideLoopX).toBe(
      component.TextTwo._Marquee.overrideLoopX
    );
    expect(willMarqueeSpy).toHaveBeenCalled();
    expect(updateSignalsSpy).toHaveBeenCalled();
  });

  it("shouldn't sync marquee values if sync is disabled in the component style", () => {
    component.style.marqueeSync = false;
    jest.clearAllMocks();

    component._enableMarquee();
    testRenderer.forceAllUpdates();

    expect(component._shouldSync).toBe(false);
    expect(willMarqueeSpy).not.toHaveBeenCalled();
    expect(updateSignalsSpy).not.toHaveBeenCalled();
    expect(cleanupSpy).toHaveBeenCalled();
  });

  it("shouldn't sync if syncArray value is invalid", () => {
    component.syncArray = null;
    testRenderer.forceAllUpdates();
    expect(component._shouldSync).toBe(false);

    component.syncArray = [];
    testRenderer.forceAllUpdates();
    expect(component._shouldSync).toBe(false);

    component.syncArray = [component.TextTwo];
    testRenderer.forceAllUpdates();
    expect(component._shouldSync).toBe(false);

    component.syncArray = {};
    testRenderer.forceAllUpdates();
    expect(component._shouldSync).toBe(false);
  });
});
