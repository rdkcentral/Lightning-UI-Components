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

import lng from '@lightningjs/core';

declare namespace Base {
  export interface TemplateSpec extends lng.Component.TemplateSpec {
    /**
     * string to be read by `withAnnouncer`
     */
    announce?: string;

    /**
     * when true, it places the child component in center of the parent
     */
    centerInParent: boolean;

    /**
     * a promise that is resolved at the end of the component's `_construct` lifecycle method
     * By default this is a resolved promise. Components can use _resetLoadedPromise if they require the functionality
     */
    loaded?: Promise<void>;

    /**
     * when true, plinko will use the previous item to determine the horizontal index of the next focused item
     */
    skipPlinko: boolean;
  }
}

declare class Base<
  TemplateSpec extends Base.TemplateSpec = Base.TemplateSpec,
  TypeConfig extends lng.Component.TypeConfig = lng.Component.TypeConfig
> extends lng.Component<TemplateSpec, TypeConfig> {
  /**
   * string to be read by `withAnnouncer`
   */
  announce?: string;

  /**
   * when true, it places the child component in center of the parent
   */
  centerInParent: boolean;

  /**
   * a promise that is resolved at the end of the component's `_construct` lifecycle method
   * By default this is a resolved promise. Components can use _resetLoadedPromise if they require the functionality
   */
  loaded?: Promise<void>;

  shouldSmooth?: boolean;

  /**
   * when true, plinko will use the previous item to determine the horizontal index of the next focused item
   */
  skipPlinko: boolean;

  /**
   * conditionally transitions in values based on the state of `shouldSmooth`
   */
  // TODO took a stab at these types, could probably make this type-safe
  applySmooth(
    // ref tag ref of target component
    ref: lng.Component<lng.Component.TemplateSpecLoose>,

    // patch object of properties to patch to target
    patch: lng.Element.PatchTemplate,

    // smooth object of properties to smooth to target
    smooth: lng.Element.PatchTemplate
  );

  /**
   * returns the layout.focusScale property of the current theme
   */
  getFocusScale(): number;

  /**
   * returns default scale value, 1
   */
  getUnfocusScale(): number;

  /**
   * returns true if this component is fully within the stage and boundsMargin
   */
  isFullyOnScreen(): boolean;

  /**
   * check if the component is disabled
   */
  get _isDisabledMode(): boolean;

  /**
   * check if the component is in focus
   */
  get _isFocusedMode(): boolean;

  /**
   * check if the component is unfocused
   */
  get _isUnfocusedMode(): boolean;
}

export default Base;
