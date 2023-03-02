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

import NavigationManager from '.';
import { makeCreateComponent } from '@lightningjs/ui-components-test-utils';
import lng from '@lightningjs/core';
import { jest } from '@jest/globals';

const baseItem = { type: lng.Component };

const createNavigationManager = makeCreateComponent(NavigationManager, {
  items: [baseItem, baseItem, baseItem]
});

describe('NavigationManager', () => {
  let navigationManager, testRenderer;

  beforeEach(() => {
    [navigationManager, testRenderer] = createNavigationManager();
  });

  it('should render', () => {
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('initializing the length dimension size of the component', () => {
    it('should set lengthDimension of a child NavigationManager equal to that of the parent NavigationManager', () => {
      const w = 10;
      const createComponent = makeCreateComponent(NavigationManager, {
        w,
        items: [{ type: NavigationManager }]
      });
      const [navigationManager] = createComponent();

      expect(navigationManager.w).toBe(w);
      expect(navigationManager.Items.children[0].w).toBe(w);
    });

    it('should set the length dimension property to that of closest parent with that propety defined', () => {
      const w = 500;
      class CompWithWidth extends lng.Component {
        static _template() {
          return {
            w,
            Nested: {
              type: NavigationManager,
              items: [{ type: NavigationManager }]
            }
          };
        }
      }
      const [navigationManager] = makeCreateComponent(CompWithWidth)();
      const nestedNavigationManager = navigationManager.tag('Nested');
      const navigationManagerItem = nestedNavigationManager.Items.children[0];

      expect(nestedNavigationManager.w).toBe(w);
      expect(navigationManagerItem.w).toBe(w);
    });

    it('should set the lengthDimension from the stage h and renderPrecision when not parent has the property defined', () => {
      class NoComponentsHaveWidth extends lng.Component {
        static _template() {
          return {
            Comp: {
              type: NavigationManager,
              items: [{ type: NavigationManager }]
            }
          };
        }
      }
      const [navigationManager, testRenderer] = makeCreateComponent(
        NoComponentsHaveWidth,
        {},
        { applicationW: null }
      )();

      testRenderer.update();

      expect(navigationManager.tag('Comp').w).toBe(
        navigationManager.stage.h / navigationManager.stage.getRenderPrecision()
      );
    });
  });

  describe('updating the layout', () => {
    describe('setting Items dimensions based off dimensions of each item', () => {
      it('should set the Items cross dimension values equal to the largest cross dimension values on an item', () => {
        [navigationManager] = createNavigationManager({
          items: [
            { ...baseItem, h: 25, innerH: 20 },
            { ...baseItem, h: 100, innerH: 90 },
            { ...baseItem, h: 50, innerH: 45 }
          ]
        });

        expect(navigationManager.Items.h).toBe(100);
        expect(navigationManager.Items.innerH).toBe(90);
      });

      it('should set the Items length dimension value equal to the length dimension value of all items and spacing combined', () => {
        const itemW = 10;
        const extraItemSpacing = 10;
        [navigationManager] = createNavigationManager({
          items: [
            { ...baseItem, w: itemW },
            { ...baseItem, w: itemW, extraItemSpacing },
            { ...baseItem, w: itemW }
          ]
        });

        const totalItemsW = itemW * 3;
        const totalItemSpacing = navigationManager.style.itemSpacing * 2;
        expect(navigationManager.Items.w).toBe(
          totalItemsW + totalItemSpacing + extraItemSpacing
        );
      });
    });

    describe("updating each item's position along the main axis", () => {
      it('it should update the position when extraItemSpacing exists on the item', () => {
        const itemW = 10;
        const extraItemSpacing = 10;
        [navigationManager] = createNavigationManager({
          items: [
            { ...baseItem, w: itemW, extraItemSpacing },
            { ...baseItem, w: itemW }
          ]
        });

        const firstItem = navigationManager.Items.children[0];
        const { itemSpacing } = navigationManager.style;
        expect(firstItem.x).toBe(0);
        expect(navigationManager.Items.children[1].x).toBe(
          firstItem.x + firstItem.w + itemSpacing + extraItemSpacing
        );
      });

      it('it should update the position when extraItemSpacing does not exist on the item', () => {
        const itemW = 10;
        [navigationManager] = createNavigationManager({
          items: [
            { ...baseItem, w: itemW },
            { ...baseItem, w: itemW }
          ]
        });

        const firstItem = navigationManager.Items.children[0];
        const { itemSpacing } = navigationManager.style;
        expect(firstItem.x).toBe(0);
        expect(navigationManager.Items.children[1].x).toBe(
          firstItem.x + firstItem.w + itemSpacing
        );
      });
    });

    describe('centering items on the cross axis', () => {
      it('should center items that have the centerInParent property set on them', () => {
        [navigationManager] = createNavigationManager({
          items: [
            { ...baseItem, h: 400 },
            { ...baseItem, h: 300, centerInParent: true }
          ]
        });

        expect(navigationManager.Items.children[0].y).toBe(0);
        expect(navigationManager.Items.h).toBe(400);
        expect(navigationManager.Items.children[1].y).toBe((400 - 300) / 2);
      });
    });

    describe('autoresizing NavigationManager to match the dimensions of the Items component', () => {
      it('should autoresize the width of NavigationManager', () => {
        const itemW = 10;
        [navigationManager] = createNavigationManager({
          autoResizeWidth: true,
          items: [
            { ...baseItem, w: itemW },
            { ...baseItem, w: itemW }
          ]
        });

        const totalItemsW = itemW * 2;
        const itemsW = totalItemsW + navigationManager.style.itemSpacing;
        expect(navigationManager.Items.w).toBe(itemsW);
        expect(navigationManager.w).toBe(itemsW);
      });

      it('should autoresize the height of NavigationManager', () => {
        const itemH = 10;
        [navigationManager] = createNavigationManager({
          direction: 'column',
          autoResizeHeight: true,
          items: [
            { ...baseItem, h: itemH },
            { ...baseItem, h: itemH }
          ]
        });

        const totalItemsH = itemH * 2;
        const itemsH = totalItemsH + navigationManager.style.itemSpacing;
        expect(navigationManager.Items.h).toBe(itemsH);
        expect(navigationManager.h).toBe(itemsH);
      });
    });

    describe('updating the index at which scrolling should stop (lastScrollIndex)', () => {
      it('should set the index to that of the last item when alwaysScroll is enabled', () => {
        [navigationManager] = createNavigationManager({
          alwaysScroll: true,
          items: [baseItem, baseItem, baseItem]
        });

        expect(navigationManager._lastScrollIndex).toBe(2);
      });

      // TODO: see note for if (this._lastScrollIndex > this.items.length) conditional
      xit('should prevent setting an index greater than that of the last item', () => {});
    });

    describe('emitting an $itemChanged signal to all ancestors', () => {
      it('should emit the signal when the Items cross dimension size has changed', async () => {
        const itemW = 10;
        [navigationManager, testRenderer] = createNavigationManager(
          {
            direction: 'column',
            autoResizeWidth: true,
            items: [
              { ...baseItem, w: itemW },
              { ...baseItem, w: itemW }
            ]
          },
          {
            spyOnMethods: ['_updateLayout']
          }
        );

        jest.spyOn(navigationManager, 'fireAncestors');
        await navigationManager.__updateLayoutSpyPromise;

        expect(navigationManager.fireAncestors).not.toHaveBeenCalled();

        navigationManager.Items.children[0].w = itemW + 10;
        await navigationManager.__updateLayoutSpyPromise;

        expect(navigationManager.fireAncestors).toHaveBeenCalled();
      });

      it('should emit the signal when the Items length dimension size has changed', async () => {
        const itemH = 10;
        [navigationManager, testRenderer] = createNavigationManager(
          {
            direction: 'column',
            autoResizeWidth: true,
            items: [
              { ...baseItem, h: itemH },
              { ...baseItem, h: itemH }
            ]
          },
          {
            spyOnMethods: ['_updateLayout']
          }
        );

        jest.spyOn(navigationManager, 'fireAncestors');
        await navigationManager.__updateLayoutSpyPromise;

        expect(navigationManager.fireAncestors).not.toHaveBeenCalled();

        navigationManager.Items.children[0].h = itemH + 10;
        await navigationManager.__updateLayoutSpyPromise;

        expect(navigationManager.fireAncestors).toHaveBeenCalled();
      });
    });

    it('should invoke an overridable _performRender method when the height or width of the Items element changes', async () => {
      const item = { ...baseItem, w: 50 };
      const performRenderSpy = jest.fn();
      class ExtendedNavManager extends NavigationManager {
        _performRender() {
          performRenderSpy();
        }
      }

      const [navigationManager] = makeCreateComponent(ExtendedNavManager)(
        {},
        { spyOnMethods: ['_updateLayout'] }
      );

      await navigationManager.__updateLayoutSpyPromise;

      expect(navigationManager.Items.w).toBe(0);
      expect(performRenderSpy).not.toHaveBeenCalled();

      navigationManager.items = [item, item, item];

      await navigationManager.__updateLayoutSpyPromise;

      expect(navigationManager.Items.w).toBeGreaterThan(0);
      expect(performRenderSpy).toHaveBeenCalled();
    });
  });

  describe('updatePositionOnAxis', () => {
    it('should update the position of a component along the main axis via applySmooth', () => {
      expect(navigationManager.Items.children[0].x).toBe(0);

      const position = -100;
      navigationManager.updatePositionOnAxis(
        navigationManager.Items.children[0],
        position
      );

      expect(navigationManager.Items.children[0].x).toBe(position);
    });
  });

  describe('scrollTo', () => {
    it('should do nothing if an index to scroll to is not defined', () => {
      expect(navigationManager.selectedIndex).toBe(0);

      navigationManager.scrollTo();

      expect(navigationManager.selectedIndex).toBe(0);
    });

    it('should immediately patch index as the new selected index when duration is not defined', () => {
      expect(navigationManager.selectedIndex).toBe(0);

      navigationManager.scrollTo(1, 0);

      expect(navigationManager.selectedIndex).toBe(1);
    });

    it('should update the selected index to a previous item after a defined duration', () => {
      jest.useFakeTimers();
      const duration = 3000;

      expect(navigationManager.selectedIndex).toBe(0);

      navigationManager.scrollTo(1, duration);

      expect(navigationManager.selectedIndex).toBe(0);

      jest.advanceTimersByTime(duration);

      expect(navigationManager.selectedIndex).toBe(1);
    });

    it('should update the selected index to a next item after a defined duration', () => {
      jest.useFakeTimers();
      const duration = 3000;

      navigationManager.selectedIndex = 1;

      expect(navigationManager.selectedIndex).toBe(1);

      navigationManager.scrollTo(0, duration);

      expect(navigationManager.selectedIndex).toBe(1);

      jest.advanceTimersByTime(duration);

      expect(navigationManager.selectedIndex).toBe(0);
    });
  });
});
