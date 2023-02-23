import withAnnouncer, { generateAbbrevConfig } from '.';
import FocusManager from '../../components/FocusManager/index.js';
import { TestRenderer } from '@lightningjs/ui-test-utils';
import lng from '@lightningjs/core';
import { jest } from '@jest/globals';

const speak = jest.fn();
const speakAppend = jest.fn();
const speakCancel = jest.fn();
speak.mockReturnValue({
  active: true,
  append: speakAppend,
  cancel: speakCancel,
  series: Promise.resolve()
});
const language = 'en-US';
const BaseAnnouncer = withAnnouncer(lng.Component, speak, { language });
class MyApp extends BaseAnnouncer {
  _construct() {
    this.announcerFocusDebounce = 0;
  }

  _init() {
    this.announcerEnabled = true;
    this.debug = false;
    this._resetPromise();
    this.stage.on('announceEnded', this._speakComplete.bind(this));
    this.stage.on('announceTimeoutEnded', this._speakComplete.bind(this));
  }

  _detatch() {
    this.stage.off('announceEnded', this._speakComplete.bind(this));
    this.stage.off('announceTimeoutEnded', this._speakComplete.bind(this));
  }

  _resetPromise() {
    this._announceEnded = new Promise(
      resolve => (this._announceEndedResolver = resolve)
    );
  }

  _speakComplete() {
    this._announceEndedResolver && this._announceEndedResolver();
    this._resetPromise();
  }

  _getFocused() {
    return this.childList.first;
  }
}

class Page extends lng.Component {
  _getFocused() {
    return this.childList.first;
  }

  get announceContext() {
    return 'press LEFT or RIGHT to review items​, press UP or DOWN to review categories​, press CENTER to select';
  }
}

class Row extends lng.Component {
  _getFocused() {
    return this.childList.first;
  }
}

class Item extends lng.Component {}

const Items = {
  Items: {
    type: FocusManager,
    direction: 'row',
    items: [
      {
        type: Item,
        title: 'Ninja Turtles',
        announceContext: '1 of 3'
      },
      {
        type: Item,
        title: 'Transformers',
        announceContext: '2 of 3'
      },
      {
        type: Item,
        title: 'Batman',
        announceContext: '3 of 3'
      }
    ]
  }
};

const FeaturedItems = {
  Items: {
    type: FocusManager,
    items: [
      {
        type: Item,
        title: 'Plague',
        announceContext: '1 of 3'
      },
      {
        type: Item,
        title: 'Outbreak',
        announceContext: '2 of 3'
      },
      {
        type: Item,
        title: 'Corona',
        announceContext: '3 of 3'
      }
    ]
  }
};

const PopularItems = {
  Items: {
    type: FocusManager,
    items: [
      {
        type: Item,
        title: 'Thor',
        announceContext: '1 of 3'
      },
      {
        type: Item,
        title: 'Iron Man',
        announceContext: '2 of 3'
      },
      {
        type: Item,
        title: 'Wolverine',
        announceContext: '3 of 3'
      }
    ]
  }
};

const Component = {
  MyApp: {
    type: MyApp,
    announce: 'Welcome to Flex',
    Component: {
      type: FocusManager,
      direction: 'column',
      signals: {
        selectedChanged: 'selectedChangedMock'
      },
      items: [
        {
          type: Page,
          title: 'HomePage',
          Rows: {
            type: FocusManager,
            direction: 'column',
            items: [
              {
                type: Row,
                ref: 'Row1',
                title: 'Free to Me',
                children: Items
              },
              {
                type: Row,
                ref: 'Row2',
                title: 'Featured',
                children: FeaturedItems
              },
              {
                type: Row,
                ref: 'Row3',
                title: 'Popular Movies',
                children: PopularItems
              }
            ]
          }
        },
        {
          type: Page,
          title: 'Page2'
        },
        {
          type: Page,
          title: 'Page3'
        }
      ]
    }
  }
};

let announcer, testRenderer;
describe('AppAnnouncer', () => {
  beforeEach(done => {
    jest.clearAllMocks();
    // translateAbbrev.mockImplementation(phrase => phrase);
    testRenderer = TestRenderer.create(Component);
    announcer = testRenderer.getInstance();
    setTimeout(() => done(), 1);
  });

  describe('on App load', () => {
    it('should announce the full focus path', () => {
      expect(speak).toHaveBeenCalledWith(
        [
          'Welcome to Flex',
          'HomePage',
          'Free to Me',
          'Ninja Turtles',
          '1 of 3',
          'press LEFT or RIGHT to review items​, press UP or DOWN to review categories​, press CENTER to select'
        ],
        language
      );
    });

    it('should delay announcing if loading', () => {
      Component.MyApp.loading = true;
      speak.mockClear();
      testRenderer = TestRenderer.create(Component);
      expect(speak).not.toHaveBeenCalled();
      Component.MyApp.loading = false;
    });
  });

  describe('on key press', () => {
    it('Right - should announce the new item', async () => {
      testRenderer.keyPress('Right');
      await testRenderer.getInstance()._announceEnded;

      expect(speak).toHaveBeenCalledWith(['Transformers', '2 of 3'], language);
    });

    it('Down - should announce new item and nav options', async () => {
      testRenderer.keyPress('Down');
      await testRenderer.getInstance()._announceEnded;
      expect(speak).toHaveBeenCalledWith(
        ['Featured', 'Plague', '1 of 3'],
        language
      );
    });

    it('Down twice - should announce new item and nav options', async () => {
      testRenderer.keyPress('Down');
      speak.mockClear();
      testRenderer.keyPress('Down');
      await testRenderer.getInstance()._announceEnded;
      expect(speak).toHaveBeenCalledWith(
        ['Popular Movies', 'Thor', '1 of 3'],
        language
      );
    });
  });

  describe('announcerTimeout', () => {
    it('should announce the full navigation', async () => {
      testRenderer.keyPress('Right');
      await testRenderer.getInstance()._announceEnded;
      speak.mockClear();
      announcer.announcerTimeout = 1;
      announcer._build();
      testRenderer.keyPress('Right');
      await testRenderer.getInstance()._announceEnded;
      expect(speak).toHaveBeenCalledWith(
        [
          'Welcome to Flex',
          'HomePage',
          'Free to Me',
          'Batman',
          '3 of 3',
          'press LEFT or RIGHT to review items​, press UP or DOWN to review categories​, press CENTER to select'
        ],
        language
      );
    });
  });

  describe('announcerEnabled', () => {
    it('should not call speak when false', () => {
      speak.mockClear();
      announcer.announcerEnabled = false;
      testRenderer.keyPress('Right');
      expect(speak).not.toHaveBeenCalled();
    });
  });

  describe('debug', () => {
    it('should call console.table', async () => {
      announcer.debug = true;
      jest.spyOn(global.console, 'table');
      testRenderer.keyPress('Right');
      await testRenderer.getInstance()._announceEnded;
      expect(global.console.table).toHaveBeenCalledWith([
        ['Item', 'Title', 'Transformers'],
        ['Item', 'Context', '2 of 3']
      ]);
    });
  });

  describe('$announce', () => {
    it('should call speak', () => {
      announcer.$announce('hello');
      expect(speak).toHaveBeenCalledWith('hello', language);
    });

    it('should call append', () => {
      announcer.$announce('hello');
      announcer.$announce('there', { append: true });
      expect(speak).toHaveBeenNthCalledWith(2, 'hello', language);
      expect(speakAppend).toHaveBeenNthCalledWith(1, 'there');
    });

    it('should force a pending focus change to be processed first', () => {
      speak.mockClear();
      announcer.$announcerRefresh(); // Forces focus change
      expect(speak).not.toHaveBeenCalled();
      announcer.$announce('there');
      expect(speak).toHaveBeenNthCalledWith(
        1,
        [
          'Welcome to Flex',
          'HomePage',
          'Free to Me',
          'Ninja Turtles',
          '1 of 3',
          'press LEFT or RIGHT to review items​, press UP or DOWN to review categories​, press CENTER to select'
        ],
        language
      );
      expect(speak).toHaveBeenNthCalledWith(2, 'there', language);
    });

    it('should force a pending focus change to be processed first (append=true)', () => {
      speak.mockClear();
      announcer.$announcerRefresh(); // Forces focus change
      expect(speak).not.toHaveBeenCalled();
      announcer.$announce('there', { append: true });
      expect(speak).toHaveBeenCalledWith(
        [
          'Welcome to Flex',
          'HomePage',
          'Free to Me',
          'Ninja Turtles',
          '1 of 3',
          'press LEFT or RIGHT to review items​, press UP or DOWN to review categories​, press CENTER to select'
        ],
        language
      );
      expect(speakAppend).toHaveBeenCalledWith('there');
      expect(speak.mock.invocationCallOrder[0]).toBeLessThan(
        speakAppend.mock.invocationCallOrder[0]
      );
    });

    it('should stop focus change, announce notification, and refresh (notification=true)', async () => {
      speak.mockClear();
      speak.mockReturnValue({
        active: true,
        append: speakAppend,
        cancel: speakCancel,
        series: Promise.resolve()
      });
      announcer.$announce('Some Notification', { notification: true });
      await testRenderer.getInstance()._announceEnded;
      expect(speak).toHaveBeenNthCalledWith(1, 'Some Notification', language);
      expect(speak).toHaveBeenCalledTimes(1);
      await testRenderer.getInstance()._announceEnded;
      expect(speak).toHaveBeenNthCalledWith(
        2,
        [
          'Welcome to Flex',
          'HomePage',
          'Free to Me',
          'Ninja Turtles',
          '1 of 3',
          'press LEFT or RIGHT to review items​, press UP or DOWN to review categories​, press CENTER to select'
        ],
        language
      );
    });
  });

  describe('$announcerRefresh', () => {
    it('should perform a full announce', async () => {
      speak.mockClear();
      announcer.$announcerRefresh();
      await testRenderer.getInstance()._announceEnded;
      expect(speak).toHaveBeenCalledWith(
        [
          'Welcome to Flex',
          'HomePage',
          'Free to Me',
          'Ninja Turtles',
          '1 of 3',
          'press LEFT or RIGHT to review items​, press UP or DOWN to review categories​, press CENTER to select'
        ],
        language
      );
    });

    it('with depth should perform a partial announce', async () => {
      speak.mockClear();
      announcer.$announcerRefresh(4);
      await testRenderer.getInstance()._announceEnded;
      expect(speak).toHaveBeenCalledWith(
        ['Free to Me', 'Ninja Turtles', '1 of 3'],
        language
      );
    });
  });

  describe('$announcerCancel', () => {
    it('should stop currently speaking', () => {
      announcer.$announce('Say something');
      announcer.$announcerCancel();
      expect(speakCancel).toHaveBeenCalled();
    });
  });

  describe('focusDiffHook', () => {
    it('should be array of focused content', () => {
      testRenderer.keyPress('Right');
      const toAnnounce = announcer.focusDiffHook.reduce((acc, elm) => {
        if (elm.title) {
          acc.push(elm.title);
        }
        return acc;
      }, []);

      expect(toAnnounce).toEqual(['Ninja Turtles', 'Free to Me', 'HomePage']);
    });
  });

  describe('announceEnded', () => {
    it('should be emmitted when announcing has completed', () => {
      announcer.stage = {
        emit: event => {
          expect(event).toEqual('announceEnded');
        }
      };
      announcer.$announce('Text to announce');
    });
  });

  describe('translating abbreviations', () => {
    const createComp = options => {
      const BaseAnnouncer = withAnnouncer(lng.Component, speak, {
        ...options,
        language
      });
      const Component = {
        Comp: {
          type: BaseAnnouncer,
          announcerEnabled: true
        }
      };
      testRenderer = TestRenderer.create(Component);
      return testRenderer.getInstance();
    };

    beforeEach(() => {
      jest.clearAllMocks();
    });

    it('should pass phrases to an abbreviation translation function when abbreviations have been provided', () => {
      const abbreviationsConfig = generateAbbrevConfig([
        {
          pattern: 'CT',
          replacer: 'Connecticut'
        }
      ]);
      announcer = createComp({ abbreviationsConfig });
      expect(speak).not.toHaveBeenCalled();

      announcer.$announce('CT');
      expect(speak).toHaveBeenCalledWith('Connecticut', language);
    });

    it('should not pass phrases to an abbreviation translation function when abbreviations have not been provided', () => {
      announcer = createComp();

      expect(speak).not.toHaveBeenCalled();

      announcer.$announce('CT');
      expect(speak).toHaveBeenCalledWith('CT', language);
    });
  });
});
