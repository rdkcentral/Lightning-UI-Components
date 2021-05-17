/**
 * Copyright 2020 Comcast Cable Communications Management, LLC
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
import Row from '../Row';

export default class CarouselRow extends Row {
  _construct() {
    super._construct();
    this._scrollOffset = 0;
  }
  selectPrevious() {
    const startingIndex = this.selectedIndex;
    super.selectPrevious();
    this._carouselItems(this.Items.children.length - 1, 0, startingIndex);
  }

  selectNext() {
    const startingIndex = this.selectedIndex;
    super.selectNext();
    this._carouselItems(0, this.Items.children.length - 1, startingIndex);
  }

  _carouselItems(removeIndex, addIndex, startingIndex) {
    let child = this.Items.childList.getAt(removeIndex);
    child.alpha = 0;

    // shift children and update layout
    this.Items.childList.removeAt(removeIndex);
    this.Items.childList.addAt(child, addIndex);
    this._updateLayout();

    const childXTransition = child.transition('x');
    childXTransition.on(
      'start',
      this._shiftChild.call(this, child, childXTransition)
    );
    this.selectedIndex = startingIndex;
  }

  _shiftChild(child, transition) {
    const { duration, delay } = transition._settings;
    const totalTransitionDuration = duration + delay;

    // timing value for when child should alpha back in
    const shiftDelay =
      this.carouselShfitTiming ??
      (totalTransitionDuration - 0.2 > 0 ? totalTransitionDuration - 0.2 : 0);

    child.smooth = {
      alpha: [
        1,
        { duration: this.carouselShfitDuration || 0, delay: shiftDelay }
      ]
    };

    // turn listener off after called for performance
    transition.off('start', this._shiftChild);
  }
}
