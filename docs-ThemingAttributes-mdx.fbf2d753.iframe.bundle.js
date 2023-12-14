"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[7402],{

/***/ "../../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NF: () => (/* binding */ withMDXComponents),
/* harmony export */   Zo: () => (/* binding */ MDXProvider),
/* harmony export */   ah: () => (/* binding */ useMDXComponents),
/* harmony export */   pC: () => (/* binding */ MDXContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/react/index.js");
/**
 * @typedef {import('react').ReactNode} ReactNode
 * @typedef {import('mdx/types.js').MDXComponents} Components
 *
 * @typedef Props
 *   Configuration.
 * @property {Components | MergeComponents | null | undefined} [components]
 *   Mapping of names for JSX components to React components.
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context.
 * @property {ReactNode | null | undefined} [children]
 *   Children.
 *
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Components} currentComponents
 *   Current components from the context.
 * @returns {Components}
 *   Merged components.
 */



/**
 * @type {import('react').Context<Components>}
 * @deprecated
 *   This export is marked as a legacy feature.
 *   That means it’s no longer recommended for use as it might be removed
 *   in a future major release.
 *
 *   Please use `useMDXComponents` to get context based components and
 *   `MDXProvider` to set context based components instead.
 */
const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext({})

/**
 * @param {import('react').ComponentType<any>} Component
 * @deprecated
 *   This export is marked as a legacy feature.
 *   That means it’s no longer recommended for use as it might be removed
 *   in a future major release.
 *
 *   Please use `useMDXComponents` to get context based components instead.
 */
function withMDXComponents(Component) {
  return boundMDXComponent

  /**
   * @param {Record<string, unknown> & {components?: Components | null | undefined}} props
   * @returns {JSX.Element}
   */
  function boundMDXComponent(props) {
    const allComponents = useMDXComponents(props.components)
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, {...props, allComponents})
  }
}

/**
 * Get current components from the MDX Context.
 *
 * @param {Components | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that takes the current
 *   components and filters/merges/changes them.
 * @returns {Components}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    // Custom merge via a function prop
    if (typeof components === 'function') {
      return components(contextComponents)
    }

    return {...contextComponents, ...components}
  }, [contextComponents, components])
}

/** @type {Components} */
const emptyObject = {}

/**
 * Provider for MDX context
 *
 * @param {Props} props
 * @returns {JSX.Element}
 */
function MDXProvider({components, children, disableParentContext}) {
  /** @type {Components} */
  let allComponents

  if (disableParentContext) {
    allComponents =
      typeof components === 'function'
        ? components({})
        : components || emptyObject
  } else {
    allComponents = useMDXComponents(components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    children
  )
}


/***/ }),

/***/ "../../@lightningjs/ui-components/src/docs/ThemingAttributes.mdx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ThemingAttributes)
});

// EXTERNAL MODULE: ../../../node_modules/react/index.js
var react = __webpack_require__("../../../node_modules/react/index.js");
// EXTERNAL MODULE: ../../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../../node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ../../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("../../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ../../../node_modules/@storybook/blocks/dist/index.mjs + 11 modules
var dist = __webpack_require__("../../../node_modules/@storybook/blocks/dist/index.mjs");
;// CONCATENATED MODULE: ./scripts/themePropertyTables/radius.md?raw
const radiusraw_namespaceObject = "radius Value | Components \n--------|-------- \nmd | [Artwork](../?path=/docs/components-artwork--docs)<br>[Card](../?path=/docs/components-card--docs)<br>[Keyboard](../?path=/docs/components-keyboard--docs)<br>[Label](../?path=/docs/components-label--docs)<br>[Shadow](../?path=/docs/components-shadow--docs)<br>[Surface](../?path=/docs/components-surface--docs)<br>[Tile](../?path=/docs/components-tile--docs)\nsm | [Badge](../?path=/docs/components-badge--docs)<br>[Button](../?path=/docs/components-button--docs)<br>[ListItem](../?path=/docs/components-listitem--docs)<br>[Provider](../?path=/docs/components-provider--docs)<br>[Tooltip](../?path=/docs/components-tooltip--docs)\nxs | [CheckboxSmall](../?path=/docs/components-checkbox--docs)<br>[Checkbox](../?path=/docs/components-checkbox--docs)<br>[ProgressBar](../?path=/docs/components-progressbar--docs)\nnone | [Gradient](../?path=/docs/components-gradient--docs)<br>[Label](../?path=/docs/components-label--docs)\nxl | [Tab](../?path=/docs/components-tabbar--docs)\nlg | No components are using this value\n";
;// CONCATENATED MODULE: ./scripts/themePropertyTables/color.md?raw
const colorraw_namespaceObject = "color Value | Components | Role \n--------|--------|--------\noverlay | [Artwork](../?path=/docs/components-artwork--docs)|More info coming\nmaterial | [Artwork](../?path=/docs/components-artwork--docs)<br>[Gradient](../?path=/docs/components-gradient--docs)|Default page background\nfillInverseSecondary | [Badge](../?path=/docs/components-badge--docs)<br>[Checkbox](../?path=/docs/components-checkbox--docs)<br>[Provider](../?path=/docs/components-provider--docs)<br>[Radio](../?path=/docs/components-radio--docs)|More info coming\ntextNeutral | [Badge](../?path=/docs/components-badge--docs)<br>[Button](../?path=/docs/components-button--docs)<br>[CardRadio](../?path=/docs/components-card--docs)<br>[CardTitle](../?path=/docs/components-card--docs)<br>[Card](../?path=/docs/components-card--docs)<br>[GridOverlay](../?path=/docs/components-gridoverlay--docs)<br>[Input](../?path=/docs/components-input--docs)<br>[Label](../?path=/docs/components-label--docs)<br>[ListItem](../?path=/docs/components-listitem--docs)<br>[MetadataBase](../?path=/docs/components-metadatabase--docs)<br>[MetadataCardContent](../?path=/docs/components-metadatacardcontent--docs)<br>[MetadataTile](../?path=/docs/components-metadatatile--docs)<br>[Tab](../?path=/docs/components-tabbar--docs)<br>[TitleRow](../?path=/docs/components-titlerow--docs)<br>[Tooltip](../?path=/docs/components-tooltip--docs)|More info coming\nstrokeNeutralSecondary | [Badge](../?path=/docs/components-badge--docs)<br>[Checkbox](../?path=/docs/components-checkbox--docs)<br>[Radio](../?path=/docs/components-radio--docs)|More info coming\nfillNeutralSecondary | [Badge](../?path=/docs/components-badge--docs)<br>[Checkbox](../?path=/docs/components-checkbox--docs)<br>[Provider](../?path=/docs/components-provider--docs)<br>[Radio](../?path=/docs/components-radio--docs)|More info coming\ntextInverse | [Badge](../?path=/docs/components-badge--docs)<br>[Button](../?path=/docs/components-button--docs)<br>[Input](../?path=/docs/components-input--docs)<br>[Label](../?path=/docs/components-label--docs)<br>[ListItem](../?path=/docs/components-listitem--docs)<br>[MetadataBase](../?path=/docs/components-metadatabase--docs)<br>[MetadataCardContent](../?path=/docs/components-metadatacardcontent--docs)<br>[MetadataTile](../?path=/docs/components-metadatatile--docs)<br>[Tab](../?path=/docs/components-tabbar--docs)<br>[TitleRow](../?path=/docs/components-titlerow--docs)<br>[Tooltip](../?path=/docs/components-tooltip--docs)|More info coming\nstrokeInverseSecondary | [Badge](../?path=/docs/components-badge--docs)<br>[Checkbox](../?path=/docs/components-checkbox--docs)<br>[Radio](../?path=/docs/components-radio--docs)|More info coming\nfillBrand | [Badge](../?path=/docs/components-badge--docs)<br>[Checkbox](../?path=/docs/components-checkbox--docs)<br>[Gradient](../?path=/docs/components-gradient--docs)<br>[Icon](../?path=/docs/components-icon--docs)<br>[Label](../?path=/docs/components-label--docs)<br>[NestedSlider](../?path=/docs/components-listitem--docs)<br>[ProgressBar](../?path=/docs/components-progressbar--docs)<br>[Radio](../?path=/docs/components-radio--docs)<br>[TextBox](../?path=/docs/components-textbox--docs)<br>[Toggle](../?path=/docs/components-toggle--docs)<br>[Tooltip](../?path=/docs/components-tooltip--docs)|More info coming\nfillNeutral | [Button](../?path=/docs/components-button--docs)<br>[Checkbox](../?path=/docs/components-checkbox--docs)<br>[Gradient](../?path=/docs/components-gradient--docs)<br>[Icon](../?path=/docs/components-icon--docs)<br>[Label](../?path=/docs/components-label--docs)<br>[ListItemPicker](../?path=/docs/components-listitem--docs)<br>[NestedSlider](../?path=/docs/components-listitem--docs)<br>[ProgressBar](../?path=/docs/components-progressbar--docs)<br>[Radio](../?path=/docs/components-radio--docs)<br>[Slider](../?path=/docs/components-slider--docs)<br>[Tab](../?path=/docs/components-tabbar--docs)<br>[TextBox](../?path=/docs/components-textbox--docs)<br>[Toggle](../?path=/docs/components-toggle--docs)<br>[Tooltip](../?path=/docs/components-tooltip--docs)|More info coming\nfillInverse | [Button](../?path=/docs/components-button--docs)<br>[Checkbox](../?path=/docs/components-checkbox--docs)<br>[Icon](../?path=/docs/components-icon--docs)<br>[Label](../?path=/docs/components-label--docs)<br>[ListItemPicker](../?path=/docs/components-listitem--docs)<br>[NestedSlider](../?path=/docs/components-listitem--docs)<br>[ProgressBar](../?path=/docs/components-progressbar--docs)<br>[Radio](../?path=/docs/components-radio--docs)<br>[Slider](../?path=/docs/components-slider--docs)<br>[Tab](../?path=/docs/components-tabbar--docs)<br>[TextBox](../?path=/docs/components-textbox--docs)<br>[Toggle](../?path=/docs/components-toggle--docs)<br>[Tooltip](../?path=/docs/components-tooltip--docs)|More info coming\ntextNeutralDisabled | [Button](../?path=/docs/components-button--docs)<br>[CardRadio](../?path=/docs/components-card--docs)<br>[CardTitle](../?path=/docs/components-card--docs)<br>[Card](../?path=/docs/components-card--docs)<br>[Input](../?path=/docs/components-input--docs)<br>[ListItemSlider](../?path=/docs/components-listitem--docs)<br>[ListItem](../?path=/docs/components-listitem--docs)<br>[MetadataBase](../?path=/docs/components-metadatabase--docs)<br>[MetadataCardContent](../?path=/docs/components-metadatacardcontent--docs)<br>[MetadataTile](../?path=/docs/components-metadatatile--docs)<br>[Tab](../?path=/docs/components-tabbar--docs)|More info coming\nfillNeutralDisabled | [Button](../?path=/docs/components-button--docs)<br>[Knob](../?path=/docs/components-knob--docs)<br>[Surface](../?path=/docs/components-surface--docs)<br>[Tab](../?path=/docs/components-tabbar--docs)<br>[Toggle](../?path=/docs/components-toggle--docs)|More info coming\ninteractiveNeutralFocusSoft | [Card](../?path=/docs/components-card--docs)<br>[Tab](../?path=/docs/components-tabbar--docs)<br>[Tile](../?path=/docs/components-tile--docs)|More info coming\ninteractiveInverseFocusSoft | [Card](../?path=/docs/components-card--docs)<br>[Tile](../?path=/docs/components-tile--docs)|More info coming\ninteractiveBrandFocusSoft | [Card](../?path=/docs/components-card--docs)<br>[Tile](../?path=/docs/components-tile--docs)|More info coming\ntextNeutralSecondary | [CardRadio](../?path=/docs/components-card--docs)<br>[CardTitle](../?path=/docs/components-card--docs)<br>[Input](../?path=/docs/components-input--docs)<br>[ListItemSlider](../?path=/docs/components-listitem--docs)<br>[ListItem](../?path=/docs/components-listitem--docs)<br>[MetadataBase](../?path=/docs/components-metadatabase--docs)<br>[MetadataTile](../?path=/docs/components-metadatatile--docs)|More info coming\nfillTransparent | [Gradient](../?path=/docs/components-gradient--docs)<br>[Tab](../?path=/docs/components-tabbar--docs)|More info coming\ninteractiveNeutralFocus | [Knob](../?path=/docs/components-knob--docs)<br>[Slider](../?path=/docs/components-slider--docs)<br>[Surface](../?path=/docs/components-surface--docs)<br>[Tab](../?path=/docs/components-tabbar--docs)|More info coming\ninteractiveInverseFocus | [Knob](../?path=/docs/components-knob--docs)<br>[Slider](../?path=/docs/components-slider--docs)<br>[Surface](../?path=/docs/components-surface--docs)|More info coming\nfillInverseDisabled | [Knob](../?path=/docs/components-knob--docs)<br>[Toggle](../?path=/docs/components-toggle--docs)|More info coming\ninteractiveBrandFocus | [Knob](../?path=/docs/components-knob--docs)|More info coming\ntextInverseSecondary | [ListItemSlider](../?path=/docs/components-listitem--docs)<br>[ListItem](../?path=/docs/components-listitem--docs)<br>[MetadataBase](../?path=/docs/components-metadatabase--docs)<br>[MetadataTile](../?path=/docs/components-metadatatile--docs)|More info coming\nfillInverseTertiary | [NestedSlider](../?path=/docs/components-listitem--docs)<br>[ProgressBar](../?path=/docs/components-progressbar--docs)<br>[Toggle](../?path=/docs/components-toggle--docs)|More info coming\nfillNeutralTertiary | [NestedSlider](../?path=/docs/components-listitem--docs)<br>[ProgressBar](../?path=/docs/components-progressbar--docs)<br>[Toggle](../?path=/docs/components-toggle--docs)|More info coming\nfillBrandTertiary | [NestedSlider](../?path=/docs/components-listitem--docs)<br>[Toggle](../?path=/docs/components-toggle--docs)|More info coming\nshadowNeutralFocus | [Shadow](../?path=/docs/components-shadow--docs)|More info coming\nshadowInverseFocus | [Shadow](../?path=/docs/components-shadow--docs)|More info coming\nshadowBrandFocus | [Shadow](../?path=/docs/components-shadow--docs)|More info coming\ninteractiveNeutral | [Surface](../?path=/docs/components-surface--docs)|More info coming\ninteractiveInverse | [Surface](../?path=/docs/components-surface--docs)|More info coming\nwhite | No components are using this value |More info coming\nblack | No components are using this value |More info coming\ngrey | No components are using this value |More info coming\nred | No components are using this value |More info coming\norange | No components are using this value |More info coming\nyellow | No components are using this value |More info coming\ngreen | No components are using this value |More info coming\nblue | No components are using this value |More info coming\npurple | No components are using this value |More info coming\npalette | No components are using this value |More info coming\nmaterialBrand | No components are using this value |Branded page background\ntextNeutralTertiary | No components are using this value |More info coming\ntextInverseTertiary | No components are using this value |More info coming\ntextInverseDisabled | No components are using this value |More info coming\ntextBrand | No components are using this value |More info coming\ntextBrandSecondary | No components are using this value |More info coming\ntextBrandTertiary | No components are using this value |More info coming\ntextBrandDisabled | No components are using this value |More info coming\ntextPositive | No components are using this value |More info coming\ntextNegative | No components are using this value |More info coming\ntextInfo | No components are using this value |More info coming\ntextCaution | No components are using this value |More info coming\nfillBrandSecondary | No components are using this value |More info coming\nfillBrandDisabled | No components are using this value |More info coming\nfillPositive | No components are using this value |More info coming\nfillNegative | No components are using this value |More info coming\nfillInfo | No components are using this value |More info coming\nfillCaution | No components are using this value |More info coming\nstrokeNeutral | No components are using this value |More info coming\nstrokeNeutralTertiary | No components are using this value |More info coming\nstrokeNeutralDisabled | No components are using this value |More info coming\nstrokeInverse | No components are using this value |More info coming\nstrokeInverseTertiary | No components are using this value |More info coming\nstrokeInverseDisabled | No components are using this value |More info coming\nstrokeBrand | No components are using this value |More info coming\nstrokeBrandSecondary | No components are using this value |More info coming\nstrokeBrandTertiary | No components are using this value |More info coming\nstrokeBrandDisabled | No components are using this value |More info coming\nstrokePositive | No components are using this value |More info coming\nstrokeNegative | No components are using this value |More info coming\nstrokeInfo | No components are using this value |More info coming\nstrokeCaution | No components are using this value |More info coming\ninteractiveBrand | No components are using this value |More info coming\nshadowNeutral | No components are using this value |More info coming\nshadowNeutralFocusSoft | No components are using this value |More info coming\nshadowNeutralText | No components are using this value |More info coming\nshadowInverse | No components are using this value |More info coming\nshadowInverseFocusSoft | No components are using this value |More info coming\nshadowInverseText | No components are using this value |More info coming\nshadowBrand | No components are using this value |More info coming\nshadowBrandFocusSoft | No components are using this value |More info coming\nshadowBrandText | No components are using this value |More info coming\n";
;// CONCATENATED MODULE: ./scripts/themePropertyTables/typography.md?raw
const typographyraw_namespaceObject = "typography Value | Components | Role \n--------|--------|--------\ntag1 | [Badge](../?path=/docs/components-badge--docs)|More info coming\nbutton1 | [Button](../?path=/docs/components-button--docs)|Button 1 should only be used within the standard button component.\nbutton2 | [ButtonSmall](../?path=/docs/components-button--docs)<br>[ControlSmall](../?path=/docs/components-control--docs)|Button 2 should only be used within the small button component.\nheadline1 | [Card](../?path=/docs/components-card--docs)<br>[GridOverlay](../?path=/docs/components-gridoverlay--docs)<br>[TitleRow](../?path=/docs/components-titlerow--docs)|Headline 1 is primarily used for row titles within the experience, both as a card and stand alone title.\nbody2 | [CardRadio](../?path=/docs/components-card--docs)<br>[CardTitle](../?path=/docs/components-card--docs)<br>[ScrollWrapper](../?path=/docs/components-scrollwrapper--docs)|Body 2 can be used for secondary level metadata on cards like descriptions.\nbody3 | [CardRadio](../?path=/docs/components-card--docs)<br>[CardTitle](../?path=/docs/components-card--docs)<br>[ListItem](../?path=/docs/components-listitem--docs)<br>[MetadataBase](../?path=/docs/components-metadatabase--docs)<br>[MetadataCardContent](../?path=/docs/components-metadatacardcontent--docs)<br>[MetadataTile](../?path=/docs/components-metadatatile--docs)<br>[Tooltip](../?path=/docs/components-tooltip--docs)|Body 3 can be used for tertiary level metadata on tiles and cards for text elements like details, ratings, runtime and air date.\nbody1 | [GridOverlay](../?path=/docs/components-gridoverlay--docs)<br>[InlineContent](../?path=/docs/components-inlinecontent--docs)<br>[Marquee](../?path=/docs/components-marquee--docs)<br>[TextBox](../?path=/docs/components-textbox--docs)|Body 1 should be used for primary text areas like the synopsis on entity or within a hero browse pattern.\ncaption1 | [Input](../?path=/docs/components-input--docs)<br>[Label](../?path=/docs/components-label--docs)|Caption 1 should be used for text within a badge and helper text strings. It should not be used for any long bodies of text due to its size.\nheadline3 | [ListItemSlider](../?path=/docs/components-listitem--docs)<br>[ListItem](../?path=/docs/components-listitem--docs)<br>[MetadataTile](../?path=/docs/components-metadatatile--docs)<br>[Provider](../?path=/docs/components-provider--docs)<br>[Tab](../?path=/docs/components-tabbar--docs)|Headline 3 should be used for titles within a tile, due to limited size headline 3 provides enough visible impact and text length affordance. Can also be used for tabs\ndisplay1 | No components are using this value |Display 1 is primarily used for program titles, examples being entity, hero browse and playback patterns.\ndisplay2 | No components are using this value |Display 2 is primarily used for page headers\nheadline2 | No components are using this value |Headline 2 is used for key text within the keyboard\ncallout1 | No components are using this value |Callout 1 can be used for headers within a card where it could be visible near a larger row header. This can be used for secondary headers for less emphasis\nfootnote1 | No components are using this value |More info coming\n";
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/docs/ThemingAttributes.mdx



/*@jsxRuntime automatic @jsxImportSource react*/
/*prettier-ignore*/
/*
Copyright 2023 Comcast Cable Communications Management, LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

SPDX-License-Identifier: Apache-2.0
\*/






function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    h2: "h2",
    p: "p",
    h3: "h3",
    pre: "pre",
    code: "code",
    h4: "h4"
  }, (0,lib/* useMDXComponents */.ah)(), props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: ["\n", "\n", "\n", (0,jsx_runtime.jsx)(dist/* Meta */.h_, {
      title: "Docs / Theming/ Theme Properties"
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "theming-properties-in-our-components",
      children: "Theming Properties in Our Components"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "radius",
      children: "Radius"
    }), "\n", (0,jsx_runtime.jsx)(dist/* Markdown */.UG, {
      children: radiusraw_namespaceObject
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typography",
      children: "Typography"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Theme typography is set up to use semantically-named tokens. They are JavaScript objects, with keys for different font attributes and positioning."
    }), "\n", (0,jsx_runtime.jsx)(dist/* Markdown */.UG, {
      children: typographyraw_namespaceObject
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "font-fallback",
      children: "Font Fallback"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When loading fonts from a theme you can specify an array containing paths to the font you would like to target. These values can be a url of a font from a CDN (Content Delivery Network), a locally hosted font, or a system font.\nWhen an array of font urls is provided, each url will be tested in order until one successfully loads. If none are able to be loaded, the Lightning default font will be used (Times New Roman)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Below is an example of setting custom font families in a custom theme file."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "export default {\n  name: 'MyCustomFont',\n  font: [\n    {\n      family: 'MyCustomFont',\n      src: ['https://myfontwebsite.com/myfont.woff2', './fonts/myfont.woff2']\n    }\n  ]\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In this example, we provided an array of urls for the MyCustomFont font family.\nNow any components that use MyCustomFont will try to request and display the first font url link.\nIf that url doesn’t work then with the font fallback feature, it’s going to look into the second value in the array and request that url. If that also doesn’t work then it will move on again into the next font url provided in the array. It will continuously try to request and return a working url until it reaches the end of the array.\nIf no working url is returned then Times New Roman is displayed as the font."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "use-case-smart-tvs",
      children: "Use Case: Smart TVs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A product may wish to use custom brand fonts for their TV's UI. It is common to reference a CDN for assets like fonts in case the product updates its branding. However, while smart TVs are designed to be used with an internet connection, it is not a requirement for use. Just because a user doesn't connect their TV to the internet does not mean they should not still get the branded product experience in offline mode. This is where font fallbacks can be leveraged. The first font to try could be from the CDN in case any changes were made. Then if the user is offline, we can fall back to the font stored locally on the hardware."
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "animations",
      children: "Animations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Theme animations are stringified functions used to generate curves to be used within components who need animations. These are also tokenized to assist with ensuring consistent behavior between components."
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "colors",
      children: "Colors"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Theme colors are set up using semantically-named tokens, which are then used within each component's styles file. Changing the value of one of these tokens propagates that change to all instances where the token is used.\nThese tokens are set up to take an array of two values: the first is the six character hex code for the color; the second is the alpha value, ranging from 0 to 100. For example:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "fillNeutral = ['#ffffff', 95];\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(dist/* Markdown */.UG, {
      children: colorraw_namespaceObject
    }), "\n", (0,jsx_runtime.jsx)("br", {})]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = Object.assign({}, (0,lib/* useMDXComponents */.ah)(), props.components);
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(_createMdxContent, props)
  })) : _createMdxContent(props);
}
/* harmony default export */ const ThemingAttributes = (MDXContent);


/***/ }),

/***/ "../../../node_modules/react/cjs/react-jsx-runtime.production.min.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__("../../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ "../../../node_modules/react/jsx-runtime.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__("../../../node_modules/react/cjs/react-jsx-runtime.production.min.js");
} else {}


/***/ })

}]);
//# sourceMappingURL=docs-ThemingAttributes-mdx.fbf2d753.iframe.bundle.js.map