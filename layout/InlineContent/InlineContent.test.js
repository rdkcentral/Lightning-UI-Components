import TestUtils from '../../test/lightning-test-utils';
import InlineContent from '.';
import { getHexColor } from '../../Styles';

const createInlineContent = TestUtils.makeCreateComponent(InlineContent);

describe('InlineContent', () => {
  let inlineContent, testRenderer;

  beforeEach(() => {
    [inlineContent, testRenderer] = createInlineContent();
  });
  afterEach(() => {
    inlineContent = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
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
        icon:
          'http://myriad.merlin.comcast.com/select/logo?entityId=8527084350383982239&width=32&height=&ratio=1x1&trim=false'
      },
      'and ',
      { badge: 'HD' },
      ' ',
      'badge ',
      'test.'
    ]);
  });

  it('should update the text properties', () => {
    const color = getHexColor('ffffff', 25);
    const textProperties = { color, textAlign: 'left' };
    inlineContent.textProperties = textProperties;
    expect(inlineContent.textProperties).toBe(textProperties);
    expect(inlineContent.textProperties.color).toBe(textProperties.color);
  });

  it('should update flexbox justification', () => {
    const justify = 'flex-start';
    inlineContent.justify = justify;
    expect(inlineContent.justify).toBe(justify);
  });

  it('should update icon size', () => {
    const iconSize = 50;
    inlineContent.iconW = iconSize;
    inlineContent.iconH = iconSize;
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
    const color = getHexColor('ffffff', 25);
    const badgeProperties = { background: { color } };
    const content = [{ badge: 'HD' }, { badge: 'CC' }];
    [inlineContent, testRenderer] = createInlineContent({
      badgeProperties,
      content
    });
    expect(inlineContent.badgeProperties).toBe(badgeProperties);
    expect(inlineContent.childList.getAt(0).background.color).toBe(color);
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

  it('should build announce text from the content array', () => {
    const content = [
      'this is the',
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

  it('should update the flex box wrapping', () => {
    inlineContent.content = 'hi';
    inlineContent.contentWrap = true;
    testRenderer.update();
    setTimeout(() => {
      expect(inlineContent.flex.wrap).toBe(true);
    }, 0);
  });

  it('should create an empty item with full width to force a line break if a newline object is passed in', () => {
    const width = 100;
    inlineContent.w = width;
    inlineContent.content = ['sentence', { newline: true }, 'with a linebreak'];
    inlineContent.contentWrap = true;
    testRenderer.update();
    setTimeout(() => {
      const newline = inlineContent.childList.getAt(1);
      expect(newline.w).toBe(width);
      expect(newline.h).toBe(0);
    }, 0);
  });
});
