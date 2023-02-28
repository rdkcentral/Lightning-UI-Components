<!--
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
-->

# Lightning-UI-Components

Lightning-UI-Components (LUI) is an open source library of shareable LightningJS components to aid in application development. The library was built and is maintained by the Experience Design Engineering team at Comcast NBCUniversal.

## Tutorials and Demos

The team presented LUI 2.0 during an RDK Webinar. Please view the videos below for more information about the library, the recent changes, a live demo, and a brief tutorial.

## Structure

LUI is a monorepo containing the following packages:
- @lightningjs/ui-components
- @lightningjs/ui-test-utils
- @lightningjs/ui-base-theme

### UI Components

This package contains the shared library of helpful LightningJS components utilizing theme files to easily customize for any LightningJS application.

### UI Test Utils

This package contains helpful Jest unit test utilities for LightningJS applications utilizing the ui-components package.

### UI Base Theme

This package contains the generic theme containing all necessary properties for the Lightning-UI shared components to map to for styling.

## Storybook

[Click here to view the live LUI Storybook.](https://rdkcentral.github.io/Lightning-UI-Components/)

[Storybook](https://storybook.js.org/) is an open-source framework for sharing UI Component libraries. It allows us to develop, test, and review components in an isolated environment. It acts as living documentation, both for the designers and the engineers utilizing the components in their applications.

Each component is listed along the left hand menu. When viewing a component, we're presented with two tabs - Canvas and Docs.

In the **Canvas** we can see how the component stands in isolation as well as adjust various aspects of it via the `controls` panel. These controls allow us to change the parameters of the component and see how it will look in different states, such as either focused or unfocused.

With the **Docs** panel, we can read through the use case for the component, see how it is implemented in code, view some examples, and see a table of its configurable properties and styles.

## Theming

All components in the library have been refactored for **theming** support.

Theming is a way to easily reskin or style components via a set of style properties. It allows for easy adjustments in color, type, animation, and other foundational patterns to improve the overall user experience via one central style file.

Each of the components references specific style properties that map back to a global style sheet, which we call a "theme." This is a similar concept as CSS for web components.

You can find our complete documentation on theming in our [Storybook here](https://rdkcentral.github.io/Lightning-UI-Components/?path=/story/docs-theming-overview--page).

### Capabilities of Theming

1. It allows for reskinning of components and entire applications for product-specific needs. For example, within the Comcast umbrella of products, there are Core brand principles we share, like our signature purple, but there are differences across our products, like an animating Focus Ring on Flex versus a static highlight state on X1.

2. Additionally, this re-skinning allows for more flexibility for syndication partners. Brands that utilize the same core production code can easily swap in their font styles and brand colors.

3. Products can bring their own design systems. In the first two examples, there is an expectation of shared styles. But there’s no reason that Xfinity, Sky, and Peacock products can’t share the same core Tile component and replace their entire theme with their unique design systems.

4. Another feature of theming, which you will see during the demo, is something we call Sub-Theming. This is a way for editorial teams to highlight specific sets of data within an application without ever changing the core look and feel of a product.

5. Additionally, themes can supply information to devices to change the style based on the capabilities of the hardware. For example, a device with less available memory can have certain features turned off, like fancy animations and effects.

6. Theming also allows us to more easily make changes to our products that fit the accessibility needs of every customer. For example, adjusting the type-scale and dynamically adjusting content around it, or providing preset color palette themes for those with color blindness.

7. And lastly, theming can even allow for user initiated personalization, by giving our users the ability to choose their preferred color scheme or font styles.

### Theming Schema

Theme files consist of the following overarching properties:
- alpha (opacity)
- animation (curves)
- color
- font (locations of fonts and mappings to font names)
- layout (full page, grid layouts)
- radius
- spacer (padding)
- stroke
- typography (font styles)
- componentConfig
- extensions

For more information on the properties that make up a **theme** file, check out our [Storybook here](https://rdkcentral.github.io/Lightning-UI-Components/?path=/story/docs-theming-theme-properties--page).

#### Component Config

The `componentConfig` object can take in key value pairs of component names to new objects. These objects contain theme values that can override both the standard component properties and the predetermined style properties of the given component type.

##### Style

The `style` object can be used to override the predetermined style properties of the given component type.

For example:
```js
componentConfig: {
  ProgressBar: {
    style: { radius: 20 }
  }
}
```

##### Tones

The `tone` property expects a string which will determine the default color palette to apply to a component. It should match one of the following:
- neutral (meant for use on dark backgrounds)
- inverse (meant for use on light backgrounds)
- brand (meant to call branded focus to an element)

When specified, these strings will override the default tone used by the component in our library to quickly change the appearance of the component.

For example:
```js
componentConfig: {
  ProgressBar: {
    tone: 'brand'
  }
}
```

##### Modes

The `mode` property expects a string which will determine the default interaction state to apply to a component. By default, components are in the unfocused mode, but depending on the platform, can be switched into modes like:
- unfocused (default)
- focused (the active component being interacted with)
- disabled (when a user should not be able to interact with a component)
- selected (used to denote context on screen, like the currently selected tab when the content below is focused)
- hover (potentially similar to focused, but can be styled differently)
- pressed (can change the style when a Button is clicked down versus hovered on)

For example:
```js
componentConfig: {
  ProgressBar: {
    mode: 'disabled'
  }
}
```

##### Style Config

The `styleConfig` object contains overrides for a component's `tone` and `mode` styles that will be applied when a component is switched into those tone or mode states.

For example:
```js
componentConfig: {
  ProgressBar: {
    styleConfig: {
      mode: {
        disabled: { alpha: 0.25 }
      },
      tone: {
        brand: { progressColor: '#00ff00' }
      }
    }
  }
}
```

#### Extensions

The `extensions` array supplies custom behavior to a component library. This is a way for developers to dynamically adjust component code without having to extend and create their own custom component. For more information on Extensions, check out our [documentation here](https://rdkcentral.github.io/Lightning-UI-Components/?path=/story/docs-theming-extensions--page).
