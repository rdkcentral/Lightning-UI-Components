import TestUtils from '../../test/lightning-test-utils';
import InlineContent from '.';
import { getHexColor } from '../../utils';
import defaultThemeStyles, { base } from './InlineContent.styles';
import baseTheme from '../../themes/base';
import xfinityTheme from '../../themes/xfinity';
import context from '../../context';

jest.mock('./InlineContent.styles', () => {
  const originalDefaultModule = jest.requireActual(
    './InlineContent.styles'
  ).default;
  const originalBase = jest.requireActual('./InlineContent.styles').base;

  return {
    __esModule: true,
    default: jest
      .fn()
      .mockImplementation((...args) => originalDefaultModule(...args)),
    base: jest.fn().mockImplementation((...args) => originalBase(...args))
  };
});

const createInlineContent = TestUtils.makeCreateComponent(InlineContent);

describe('InlineContent', () => {
  let inlineContent, testRenderer;

  beforeEach(() => {
    context.setTheme(baseTheme);
    defaultThemeStyles.mockClear();
    [inlineContent, testRenderer] = createInlineContent(
      {},
      { spyOnMethods: ['_update'] }
    );
  });

  afterEach(() => {
    inlineContent = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('has a base theme', () => {
    expect(typeof base).toBe('function');
    expect(base(baseTheme)).toEqual(
      expect.objectContaining({
        textY: expect.any(Number),
        iconW: expect.any(Number),
        iconH: expect.any(Number),
        contentSpacing: expect.any(Number),
        marginBottom: expect.any(Number),
        textStyle: expect.any(Object),
        maxLines: expect.any(Number),
        justify: expect.any(String)
      })
    );
  });

  it('updates to Xfinity theme text', async () => {
    context.setTheme(xfinityTheme);
    inlineContent.base = context.theme;
    inlineContent.content = 'This should be in Xfinity font.';
    await inlineContent.__updateSpyPromise;
    expect(inlineContent.style.textStyle).toEqual(
      context.theme.typography.body1
    );
  });

  it('should update the content array', () => {
    inlineContent.content = 'hi';
    expect(inlineContent.content).toBe('hi');
    expect(inlineContent._parsedContent[0]).toBe('hi');

    inlineContent.content = ['hello'];
    expect(inlineContent.content).toEqual(['hello']);
    expect(inlineContent._parsedContent[0]).toBe('hello');

    const str =
      'This is a{ICON:setting|http://myriad.merlin.comcast.com/select/logo?entityId=8527084350383982239&width=32&height=&ratio=1x1&trim=false}and {BADGE:HD} badge test.';
    inlineContent.content = str;
    expect(inlineContent.content).toBe(str);
    expect(inlineContent._parsedContent).toEqual([
      'This ',
      'is ',
      'a',
      {
        title: 'setting',
        icon: 'http://myriad.merlin.comcast.com/select/logo?entityId=8527084350383982239&width=32&height=&ratio=1x1&trim=false'
      },
      'and ',
      { badge: 'HD' },
      ' ',
      'badge ',
      'test.'
    ]);
  });

  it('should update the text properties', () => {
    const color = getHexColor('ffffff', 0.25);
    const textStyle = { color, textAlign: 'left' };
    inlineContent.textStyle = textStyle;
    expect(inlineContent.textStyle).toBe(textStyle);
    expect(inlineContent.textStyle.color).toBe(textStyle.color);
  });

  it('should update flexbox justification', () => {
    const justify = 'flex-start';
    inlineContent.justify = justify;
    expect(inlineContent.justify).toBe(justify);
  });

  it('should update icon size, position, and color', () => {
    const iconSize = 50;
    [inlineContent] = createInlineContent({
      content: [
        {
          title: 'setting',
          icon: 'http://myriad.merlin.comcast.com/select/logo?entityId=8527084350383982239&width=32&height=&ratio=1x1&trim=false',
          color: getHexColor('00ff00')
        }
      ],
      iconY: 10,
      iconW: iconSize,
      iconH: iconSize
    });
    expect(inlineContent.iconW).toBe(iconSize);
    expect(inlineContent.iconH).toBe(iconSize);
  });

  it('should update content spacing', () => {
    const padding = 50;
    inlineContent.contentSpacing = padding;
    expect(inlineContent.contentSpacing).toBe(padding);
  });

  it('should update item flex spacing', () => {
    const props = { marginBottom: 50 };
    inlineContent.contentProperties = props;
    expect(inlineContent.contentProperties).toBe(props);
  });

  it('should update badge styling', () => {
    const color = getHexColor('ffffff', 0.25);
    const badgeProperties = { background: { color } };
    const content = [{ badge: 'HD' }, { badge: 'CC' }];
    [inlineContent, testRenderer] = createInlineContent({
      badgeProperties,
      content
    });
    expect(inlineContent.badgeProperties).toBe(badgeProperties);
    expect(inlineContent.childList.getAt(0).background.color).toBe(color);
  });

  it('should vertically center a badge once it has loaded based on textHeight', async done => {
    const content = [
      'This is a badge: ',
      {
        badge: 'HD',
        title: 'HD'
      }
    ];
    [inlineContent, testRenderer] = createInlineContent(
      {
        content,
        contentProperties: { marginBottom: -2 },
        textStyle: { lineHeight: 150 }
      },
      {
        spyOnMethods: ['$loadedBadge']
      }
    );
    expect(inlineContent.childList.last.y).toBe(0);
    testRenderer.forceAllUpdates();
    await inlineContent._$loadedBadge;
    await TestUtils.nextTick();
    expect(inlineContent.childList.last.y).toBeGreaterThan(0);
    done();
  });

  it('should vertically center a badge once it has loaded based on lineHeight', async done => {
    const content = [
      'This is a badge: ',
      {
        badge: 'HD',
        title: 'HD'
      }
    ];
    [inlineContent, testRenderer] = createInlineContent(
      {
        content,
        contentProperties: { marginBottom: 20 },
        textStyle: { lineHeight: 150 }
      },
      {
        spyOnMethods: ['$loadedBadge']
      }
    );
    expect(inlineContent.childList.last.y).toBe(0);
    testRenderer.forceAllUpdates();
    await inlineContent._$loadedBadge;
    await TestUtils.nextTick();
    expect(inlineContent.childList.last.y).toBeGreaterThan(0);
    done();
  });

  it('should render text with custom properties', () => {
    const color = getHexColor('ffffff', 0.25);
    const content = [
      {
        text: 'some test text',
        style: { textColor: color }
      }
    ];
    [inlineContent, testRenderer] = createInlineContent({ content });
    expect(inlineContent.childList.getAt(0).text.textColor).toBe(color);
  });

  it('should render icons', () => {
    const content = [
      {
        icon: 'https://i.dlpng.com/static/png/425748_preview.png',
        title: 'avatar'
      }
    ];
    [inlineContent, testRenderer] = createInlineContent({ content });
    expect(inlineContent.childList.getAt(0).src).toBe(content[0].icon);
  });

  it('should not render content that is not a string, icon, or badge', () => {
    const content = [{ test: 'blah' }, { fake: 'stuff' }];
    [inlineContent, testRenderer] = createInlineContent({ content });
    expect(inlineContent.childList.length).toBe(0);
  });

  it('should notifiy ancestors after content has loaded', async () => {
    [inlineContent, testRenderer] = createInlineContent(
      {},
      { spyOnMethods: ['_notifyAncestors'] }
    );
    await inlineContent.__notifyAncestorsSpyPromise;
    jest.spyOn(inlineContent, 'fireAncestors');
    jest.spyOn(inlineContent, 'signal');
    expect(inlineContent.fireAncestors).not.toHaveBeenCalled();
    inlineContent.content = [{ text: 'some text' }];
    await inlineContent.__notifyAncestorsSpyPromise;
    expect(inlineContent.fireAncestors).toHaveBeenCalled();
  });

  it('should build announce text from the content array', () => {
    const content = [
      'this is',
      { text: 'the', style: { textColor: 0xffffffff } },
      { badge: 'announce' },
      { fake: 'and this will not be read' },
      {
        icon: 'https://i.dlpng.com/static/png/425748_preview.png',
        title: 'content'
      }
    ];
    [inlineContent, testRenderer] = createInlineContent({ content });
    expect(inlineContent.announce).toBe('this is the announce content');
  });

  it('should take Y position overrides for each content type', () => {
    [inlineContent, testRenderer] = createInlineContent({
      iconY: 10,
      textY: 0,
      badgeY: 5
    });
    expect(inlineContent.iconY).toBe(10);
    expect(inlineContent.textY).toBe(0);
    expect(inlineContent.badgeY).toBe(5);
    inlineContent.iconY = inlineContent.textY = inlineContent.badgeY = 0;
    expect(inlineContent.iconY).toBe(0);
    expect(inlineContent.textY).toBe(0);
    expect(inlineContent.badgeY).toBe(0);
  });

  it('should update the flex box wrapping', async () => {
    [inlineContent, testRenderer] = createInlineContent(
      {
        content: 'hi',
        contentWrap: true
      },
      { spyOnMethods: ['_update'] }
    );
    await inlineContent.__updatePromiseSpy;
    testRenderer.update();

    expect(inlineContent.flex.wrap).toBe(true);
  });

  it('should create an empty item with full width to force a line break if a newline object is passed in', async () => {
    const width = 100;
    [inlineContent, testRenderer] = createInlineContent(
      {
        w: width,
        content: ['sentence', { newline: true }, 'with a linebreak'],
        contentWrap: true
      },
      { spyOnMethods: ['_update'] }
    );
    await inlineContent.__updatePromiseSpy;
    testRenderer.update();
    const newline = inlineContent.childList.getAt(1);
    expect(newline.w).toBe(width);
    expect(newline.h).toBe(0);
  });

  it('should use user entered textStyleOptions when specified for a text object', async () => {
    const color = getHexColor('ff0000');
    inlineContent.textStyleOptions = { red: { textColor: color } };
    inlineContent.content = [{ text: 'red text', style: 'red' }];

    [inlineContent, testRenderer] = createInlineContent(
      {
        customStyleMappings: { red: { textColor: color } },
        content: [{ text: 'red text', style: 'red' }]
      },
      { spyOnMethods: ['_update'] }
    );
    await inlineContent.__updatePromiseSpy;

    testRenderer.update();
    expect(inlineContent.childList.getAt(0).text.textColor).toBe(color);
  });

  it('should fire signals to parent components after content has loaded', async () => {
    [inlineContent, testRenderer] = createInlineContent(
      {},
      { spyOnMethods: ['_notifyAncestors'] }
    );

    await inlineContent.__notifyAncestorsPromiseSpy;

    jest.spyOn(inlineContent, 'fireAncestors');
    jest.spyOn(inlineContent, 'signal');
    inlineContent.patch({ content: [{ text: 'text' }] });
    testRenderer.forceAllUpdates();
    testRenderer.update();

    await TestUtils.nextTick(20);
    await inlineContent.__notifyAncestorsPromiseSpy;

    expect(inlineContent.finalW).toBeGreaterThan(0);
    expect(inlineContent.multiLineHeight).toBeGreaterThan(0);
    expect(inlineContent.fireAncestors).toHaveBeenCalledWith(
      '$loadedInlineContent',
      inlineContent
    );
    expect(inlineContent.signal).toHaveBeenCalledWith(
      'loadedInlineContent',
      inlineContent.finalW,
      inlineContent.multiLineHeight
    );
  });
});
