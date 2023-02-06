import { makeCreateComponent } from '@lightning/ui-test-utils';
import ListItem from './ListItem';

const logoPath = '../../assets/images/Xfinity-Provider-Logo-Square.png';

const createComponent = makeCreateComponent(ListItem);

describe('ListItem', () => {
  let component, testRenderer;

  beforeEach(() => {
    [component, testRenderer] = createComponent({
      title: 'ListItem',
      description: 'Description'
    });
  });
  afterEach(() => {
    component = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('should update Title', () => {
    component.title = 'Title';
    testRenderer.forceAllUpdates();
    expect(component._Title.content).toEqual('Title');
  });

  it('should update Title', () => {
    component.title = '';
    testRenderer.forceAllUpdates();
    expect(component._Title.content).toEqual('');
  });

  it('should update Description', () => {
    component.description = 'Description';
    testRenderer.forceAllUpdates();
    expect(component._Description.content).toEqual('Description');
  });
  it('should update Description', () => {
    component.description = undefined;
    testRenderer.forceAllUpdates();
    expect(component._Description).toBeUndefined();
  });

  it('should truncate description text', () => {
    component.description = 'Description';
    testRenderer.forceAllUpdates();
    expect(component._Description.style.textStyle.wordWrapWidth).toEqual(
      component._fixedWordWrapWidth
    );
  });

  it('should update suffix', () => {
    component.suffix = {
      icon: logoPath
    };
    testRenderer.forceAllUpdates();
    expect(component._hasSuffix).toBeTruthy();
  });

  it('should update prefix', () => {
    component.prefix = {
      icon: logoPath
    };
    testRenderer.forceAllUpdates();
    expect(component._hasPrefix).toBeTruthy();
  });

  it('should render a logo as a prefix', () => {
    expect(component._hasPrefixLogo).toBeFalsy();
    expect(component._Prefix).toBeUndefined();

    component.prefixLogo = logoPath;
    testRenderer.forceAllUpdates();

    expect(component._hasPrefixLogo).toBeTruthy();
    expect(component._Prefix.items[0].icon).toBe(logoPath);
  });

  it('should render a logo as a suffix', () => {
    expect(component._hasSuffixLogo).toBeFalsy();
    expect(component._Suffix).toBeUndefined();

    component.suffixLogo = logoPath;
    testRenderer.forceAllUpdates();

    expect(component._hasSuffixLogo).toBeTruthy();
    expect(component._Suffix.items[0].icon).toBe(logoPath);
  });

  it('should create a flexbox when title or description exists', () => {
    [component, testRenderer] = createComponent({});
    expect(component._TextWrapper.flex).toBeTruthy();

    component.title = 'title';
    testRenderer.forceAllUpdates();
    expect(component._TextWrapper.flex.direction).toBe('column');

    component.title = undefined;
    component.description = 'description';
    testRenderer.forceAllUpdates();
    expect(component._TextWrapper.flex.direction).toBe('column');
  });

  it('should collapse description in unfocused mode when shouldCollapse flag is true', () => {
    component.shouldCollapse = true;
    component.mode = 'unfocused';
    component.description = 'description';
    testRenderer.forceAllUpdates();
    expect(component._Description.visible).toEqual(false);
  });

  it('should collapse description in disabled mode when shouldCollapse flag is true', () => {
    component.shouldCollapse = true;
    component.mode = 'disabled';
    component.description = 'description';
    testRenderer.forceAllUpdates();
    expect(component._Description.visible).toEqual(false);
  });

  it('should not collapse description in focused mode when shouldCollapse flag is true', () => {
    component.shouldCollapse = true;
    component.mode = 'focused';
    component.description = 'description';
    testRenderer.forceAllUpdates();
    expect(component._Description.visible).toEqual(true);
  });

  describe('announcer', () => {
    it('should use the title and description as the default announce string', () => {
      expect(component.announce).toEqual('ListItemDescription, List Item');
    });

    it('should append List Item to end of announce context', () => {
      expect(component.announce).toEqual('ListItemDescription, List Item');
    });

    it('should prefer the announce prop over the default announce', () => {
      const overrideString = 'override announcer string';

      component._announce = overrideString;
      testRenderer.forceAllUpdates();
      expect(component.announce).toEqual(overrideString);
    });
  });
});
