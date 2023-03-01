/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { makeCreateComponent } from '@lightningjs/ui-components-test-utils';
import ListItem from './ListItem';

const logoPath = '../../assets/images/Xfinity-Provider-Logo-Square.png';

const createComponent = makeCreateComponent(ListItem);

describe('ListItem', () => {
  let listItem, testRenderer;

  beforeEach(() => {
    [listItem, testRenderer] = createComponent({
      title: 'ListItem',
      description: 'Description'
    });
  });
  afterEach(() => {
    listItem = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('should update Title', () => {
    listItem.title = 'Title';
    testRenderer.forceAllUpdates();
    expect(listItem._Title.content).toEqual('Title');
  });

  it('should update Title', () => {
    listItem.title = '';
    testRenderer.forceAllUpdates();
    expect(listItem._Title.content).toEqual('');
  });

  it('should update Description', () => {
    listItem.description = 'Description';
    testRenderer.forceAllUpdates();
    expect(listItem._Description.content).toEqual('Description');
  });
  it('should update Description', () => {
    listItem.description = undefined;
    testRenderer.forceAllUpdates();
    expect(listItem._Description).toBeUndefined();
  });

  it('should truncate description text', () => {
    listItem.description = 'Description';
    testRenderer.forceAllUpdates();
    expect(listItem._Description.style.textStyle.wordWrapWidth).toEqual(
      listItem._fixedWordWrapWidth
    );
  });

  it('should update suffix', () => {
    listItem.suffix = {
      icon: logoPath
    };
    testRenderer.forceAllUpdates();
    expect(listItem._hasSuffix).toBeTruthy();
  });

  it('should update prefix', () => {
    listItem.prefix = {
      icon: logoPath
    };
    testRenderer.forceAllUpdates();
    expect(listItem._hasPrefix).toBeTruthy();
  });

  it('should render a logo as a prefix', () => {
    expect(listItem._hasPrefixLogo).toBeFalsy();
    expect(listItem._Prefix).toBeUndefined();

    listItem.prefixLogo = logoPath;
    testRenderer.forceAllUpdates();

    expect(listItem._hasPrefixLogo).toBeTruthy();
    expect(listItem._Prefix.items[0].icon).toBe(logoPath);
  });

  it('should render a logo as a suffix', () => {
    expect(listItem._hasSuffixLogo).toBeFalsy();
    expect(listItem._Suffix).toBeUndefined();

    listItem.suffixLogo = logoPath;
    testRenderer.forceAllUpdates();

    expect(listItem._hasSuffixLogo).toBeTruthy();
    expect(listItem._Suffix.items[0].icon).toBe(logoPath);
  });

  it('should create a flexbox when title or description exists', () => {
    [listItem, testRenderer] = createComponent({});
    expect(listItem._TextWrapper.flex).toBeTruthy();

    listItem.title = 'title';
    testRenderer.forceAllUpdates();
    expect(listItem._TextWrapper.flex.direction).toBe('column');

    listItem.title = undefined;
    listItem.description = 'description';
    testRenderer.forceAllUpdates();
    expect(listItem._TextWrapper.flex.direction).toBe('column');
  });

  it('should collapse description in unfocused mode when shouldCollapse flag is true', () => {
    listItem.shouldCollapse = true;
    listItem.mode = 'unfocused';
    listItem.description = 'description';
    testRenderer.forceAllUpdates();
    expect(listItem._Description.visible).toEqual(false);
  });

  it('should collapse description in disabled mode when shouldCollapse flag is true', () => {
    listItem.shouldCollapse = true;
    listItem.mode = 'disabled';
    listItem.description = 'description';
    testRenderer.forceAllUpdates();
    expect(listItem._Description.visible).toEqual(false);
  });

  it('should not collapse description in focused mode when shouldCollapse flag is true', () => {
    listItem.shouldCollapse = true;
    listItem.mode = 'focused';
    listItem.description = 'description';
    testRenderer.forceAllUpdates();
    expect(listItem._Description.visible).toEqual(true);
  });

  describe('announcer', () => {
    it('should use the title and description as the default announce string', () => {
      expect(listItem.announce).toEqual('ListItemDescription, List Item');
    });

    it('should append List Item to end of announce context', () => {
      expect(listItem.announce).toEqual('ListItemDescription, List Item');
    });

    it('should prefer the announce prop over the default announce', () => {
      const overrideString = 'override announcer string';

      listItem._announce = overrideString;
      testRenderer.forceAllUpdates();
      expect(listItem.announce).toEqual(overrideString);
    });
  });
});
