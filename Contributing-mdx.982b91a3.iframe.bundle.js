"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[3525],{

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

/***/ "./src/Contributing.mdx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Contributing)
});

// EXTERNAL MODULE: ../../../node_modules/react/index.js
var react = __webpack_require__("../../../node_modules/react/index.js");
// EXTERNAL MODULE: ../../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../../node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ../../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("../../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ../../../node_modules/@storybook/blocks/dist/index.mjs + 11 modules
var dist = __webpack_require__("../../../node_modules/@storybook/blocks/dist/index.mjs");
;// CONCATENATED MODULE: ../../../CONTRIBUTING.md?raw
const CONTRIBUTINGraw_namespaceObject = "﻿<!--\n  Copyright 2023 Comcast Cable Communications Management, LLC\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n  http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n  SPDX-License-Identifier: Apache-2.0\n-->\n\n# Contributing to `@lightningjs/ui-components`\n\nFirst off, thanks for taking the time to contribute!\n\nThe following is a set of guidelines for contributing to `@lightningjs/ui-components`. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.\n\n## Table of Contents\n\n- [Contributing to `@lightningjs/ui-components`](#contributing-to-lightningjsui-components)\n  - [Table of Contents](#table-of-contents)\n  - [I don't want to read this whole thing I just have a question!!!](#i-dont-want-to-read-this-whole-thing-i-just-have-a-question)\n  - [How Can I Contribute?](#how-can-i-contribute)\n    - [Reporting Bugs](#reporting-bugs)\n      - [How Do I Submit A (Good) Bug Report?](#how-do-i-submit-a-good-bug-report)\n    - [Suggesting Enhancements](#suggesting-enhancements)\n      - [Before Submitting An Enhancement Suggestion](#before-submitting-an-enhancement-suggestion)\n      - [How Do I Submit A (Good) Enhancement Suggestion?](#how-do-i-submit-a-good-enhancement-suggestion)\n    - [Your First Code Contribution](#your-first-code-contribution)\n  - [Installation](#installation)\n    - [Installing dependencies](#installing-dependencies)\n    - [Starting the project](#starting-the-project)\n  - [New component](#new-component)\n    - [Requirements](#requirements)\n    - [Development](#development)\n    - [Pull Requests](#pull-requests)\n  - [Style Guides](#style-guides)\n    - [TypeScript](#typescript)\n    - [Git Commit Messages](#git-commit-messages)\n    - [JavaScript Style Guide](#javascript-style-guide)\n    - [Test Style Guide](#test-style-guide)\n  - [`spyOnMethods`](#spyonmethods)\n    - [Documentation Style Guide](#documentation-style-guide)\n\n## I don't want to read this whole thing I just have a question!!!\n\n> **Note:** Before you file an issue with a question, you'll get faster results by using the resources below.\n\n<a id=\"before-submitting-a-bug-report\" />\n\n**Documentation**\n\n- [See the README for setup help](../?path=/story/docs-read-me--page)\n- [See Storybook for component docs with live examples](https://rdkcentral.github.io/Lightning-UI-Components/)\n\n**Discuss on Slack**\n\n<a href=\"https://lightning-community.slack.com/archives/C04R2HNU5V3\" target=\"_blank\">#lightning-ui-components-support</a>\n\n## How Can I Contribute?\n\n### Reporting Bugs\n\nThis section guides you through submitting a bug report for `@lightningjs/ui-components`. Following these guidelines helps maintainers and the community understand your report, reproduce the behavior, and find related reports.\n\nWhen you are creating a bug report please check the version of LUI that you are using. Include as many details as possible, and post either as an issue [here](https://github.com/rdkcentral/Lightning-UI-Components/issues) on GitHub.\n\n> **Note:** If you find a **Closed** issue that seems like it is the same thing that you're experiencing, open a new issue and include a link to the original issue in the body of your new one.\n\n#### How Do I Submit A (Good) Bug Report?\n\nBugs are tracked as [GitHub issues](https://guides.github.com/features/issues/). Create an issue and provide the following information:\n\n- Tell us the specific version of LUI you are using\n- Paste code snippets using the markdown code formatters (walls of unformatted copy and pasted text are very difficult to parse)\n- Provide links to any relevant code, tickets, or GitHub issues\n- Provide screenshots/videos to illustrate the bug you are facing\n- Provide detailed reproduction steps\n\n### Suggesting Enhancements\n\nThis section guides you through submitting an enhancement suggestion for `@lightningjs/ui-components`, including new components, completely new features, and minor improvements to existing functionality. Following these guidelines helps maintainers and the community understand your suggestion and find related suggestions.\n\n#### Before Submitting An Enhancement Suggestion\n\n- **Check if there's already a component which provides that enhancement.**\n- **Perform a [cursory search](https://github.com/rdkcentral/Lightning-UI-Components/issues)** to see if the enhancement has already been suggested. If it has, add a comment to the existing issue instead of opening a new one.\n\n#### How Do I Submit A (Good) Enhancement Suggestion?\n\nEnhancement suggestions are tracked as [GitHub issues](https://guides.github.com/features/issues/). Create an issue and provide the following information:\n\n- **Use a clear and descriptive title** for the issue to identify the suggestion.\n- **Provide a step-by-step description of the suggested enhancement** in as many details as possible.\n- **Provide specific examples to demonstrate the steps**. Include copy/pasteable snippets which you use in those examples, as [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).\n- **Describe the current behavior** and **explain which behavior you expected to see instead** and why.\n- **Include screenshots and animated GIFs** which help you demonstrate the steps or point out the part which the suggestion is related to. You can use [this tool](https://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and [this tool](https://github.com/colinkeenan/silentcast) on Linux.\n- **Explain why this enhancement would be useful** to most `@lightningjs/ui-components` users.\n- **Include any additional information** that might be helpful\n\n### Your First Code Contribution\n\nUnsure where to begin contributing to `@lightningjs/ui-components`? You can start by looking through these `beginner` and `help-wanted` issues:\n\n- [Beginner issues][beginner] \\- issues which should only require a few lines of code, and a test or two.\n- [Help wanted issues][help-wanted] \\- issues which should be a bit more involved than `beginner` issues.\n\nFollow the instructions below to get started with local development:\n\nFork and clone the project from here: https://github.com/rdkcentral/Lightning-UI-Components.\n\nIn your local terminal, follow these steps:\n\n```bash\n# enter project directory\ncd packages/@lightningjs/ui-components\n```\n\n## Installation\n\nThe Lightning UI Monorepo requires yarn 3.2.3^\n\nThe preferred way to manage Yarn is through Corepack, a new binary shipped with all Node.js releases starting from 16.10. It acts as an intermediary between you and Yarn, and lets you use different package manager versions across multiple projects without having to check-in the Yarn binary anymore.\n\nCorepack is included by default with all Node.js installs, but is currently opt-in. To enable it, run the following command:\n\n```sh\ncorepack enable\n```\n\n```sh\ncorepack prepare yarn@3.2.3 --activate\n```\n\n### Installing dependencies\n\n```sh\nyarn install\n```\n\n### Starting the project\n\n```sh\nyarn start\n```\n\nRunning this command will start storybook which is located in packages/apps/lightning-ui-docs. All changes made in packages/@lightningjs/ui & packages/@lightningjs/ui-components will be reflected in the storybook instance at http://localhost:8000\n\n## New component\n\n### Requirements\n\nBefore a new component will be reviewed, it must meet the following prerequisite:\n\n- Component concept has been approved by @Lightning/lightning-team\n\n> **Note:** Development on a component may be broken up in separate PRs or done all at once, use your best judgement when breaking up work.\n\n### Development\n\nIf you are creating a new component, you can bootstrap the required file structure with:\n\n```sh\nyarn createComponent <packageName> <componentName> <parentName>\n```\n\n- `packageName`: name of which package the component will be published to (`@lightningjs/ui-components` or `@lightningjs/ui-components`)\n- `componentName`: name of component to be added\n\nExample: add a new component, `MyComponent`, to the `@lightningjs/ui-components` package\n\n```sh\nyarn createComponent @lightningjs/ui-components MyComponent\n```\n\nThis will create the following files:\n\n```\n/\n└── packages\n    └── @lightning\n      └── ui-components\n        └── src\n          └── components\n            └── MyComponent\n              ├── index.js\n              ├── MyComponent.d.ts\n              ├── MyComponent.mdx\n              ├── MyComponent.stories.js\n              ├── MyComponent.styles.js\n              └── MyComponent.test.js\n```\n\n### Pull Requests\n\nNOTE: Before RDK accepts your code into the project you must sign the RDK Contributor License Agreement (CLA).\n\nThe process described here has several goals:\n\n- Maintain `@lightningjs/ui-components`'s quality\n- Fix problems that are important to users\n- Engage the community in working toward the best possible `@lightningjs/ui-components`\n- Enable a sustainable system for `@lightningjs/ui-components` maintainers to review contributions\n\nPlease follow these steps to have your contribution considered by the maintainers:\n\n1. When creating a pull request, fill out the default template. Include as much detail as possible, the changes made in the pull request and how to best approach testing the changes\n2. Follow the [style guides](#style-guides)\n3. Follow the [new component guide](#new-component) if you are submitting a new component\n4. After you submit your pull request, verify that all [status checks](https://help.github.com/articles/about-status-checks/) are passing <details><summary>What if the status checks are failing?</summary>If a status check is failing, and you believe that the failure is unrelated to your change, please leave a comment on the pull request explaining why you believe the failure is unrelated. A maintainer will re-run the status check for you. If we conclude that the failure was a false positive, then we will open an issue to track that problem with our status check suite.</details>\n\nWhile the prerequisites above must be satisfied prior to having your pull request reviewed, the reviewer(s) may ask you to complete additional design work, tests, or other changes before your pull request can be ultimately accepted.\n\n## Style Guides\n\n### TypeScript\n\nAs of version 2.7.0, Lightning Core comes bundled with type definitions and in-code documentation which allow you to build Lightning apps in [TypeScript](https://www.typescriptlang.org/). The following [documentation](https://lightningjs.io/docs/#/lightning-core-reference/TypeScript/index) assumes that you are already familiar with the basics of writing a Lightning app in JavaScript. Even if you have no Lightning experience, the tips below, the Lightning CLI lng create boilerplate (coming soon), and the types documentation available now in your IDE will be enough to get started.\n\nTypeScript compilation is supported out of the box by Lightning CLI as of version v2.8.0.\n\nPer TypeScript standards all types should be in PascalCase, similar to our class definitions\n\n### Git Commit Messages\n\n**IMPORTANT**: `@lightningjs/ui-components` releases are automatically triggered on merge to the `release` branch (and possibly other release branches like `next`). The new version number is determined by [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) which are enforced through [husky](https://github.com/typicode/husky) pre-commit hooks. Read through this section carefully because it will directly impact semantic versioning.\n\nThis is the message template:\n\n```\n<type>[optional scope]: <description>\n\n[optional body]\n\n[optional footer(s)]\n```\n\n**Breaking Changes**\n\nIf your feature includes a breaking change (i.e. changes a component API), be sure to add `BREAKING CHANGE` to the body of the commit message\n\nExample:\n\n```\nfeat(Button): change focus behavior\n\nBREAKING CHANGE\n```\n\n**Types**\n\nExample: `feat: <description>`\n\n- `feat:` new feature or enhancement\n- `fix:` bug fix\n- `chore:` repo maintenance\n- `docs:` update documentation\n- `test:` test-related changes\n\n**Scope**\n\nExample: `fix(Button): <description>`\n\nUse scope to specify which component your changes are related to.\n\n**Description**\n\nExample: `feat(Button): add key-down handler`\n\n- Start description with lower-case letter (\"do something\" not \"Do something\")\n- Use the present tense (\"add feature\" not \"added feature\")\n- Use the imperative mood (\"move cursor to...\" not \"the cursor was moved to...\")\n- Limit the first line to 72 characters or less\n- Reference issues and pull requests liberally in the body\n- When only changing documentation, include `[ci skip]` in the commit title\n\n### JavaScript Style Guide\n\n`@lightningjs/ui-components` enforces [the Prettier style guide](https://prettier.io/) through [husky](https://github.com/typicode/husky) pre-commit hooks.\n\nTo run the linter manually:\n\n```sh\nyarn lint\n\n# to auto-fix lint errors\nyarn lint:fix\n```\n\n### Test Style Guide\n\n`@lightningjs/ui-components` enforces [Jest](https://jestjs.io/en/) test coverage of changes through [husky](https://github.com/typicode/husky) pre-commit hooks. 90% coverage of statements, functions and lines are required.\n\nTo run tests manually:\n\n```sh\n# will run tests against both lightning/ui, lightning/ui-core, and lightning/ui-extensions\nyarn test\n\n# to run in watch mode\nyarn workspace @lightningjs/ui-components test --watch\n```\n\n## `spyOnMethods`\n\nspyOnMethods is an optional array that may be passed to `makeCreateComponent` via the `defaultOptions` or `options` object. Doing so will extend the component being tested and provide methods that use Jest spies to create mock functions for each method included in the `spyOnMethods` array. Each spy method created is a Promise, which resolves after the spied upon method is invoked, and can be awaited in tests.\n\nThe most common usage of this is to await the completion of the `_update` method in a component being invoked after changes to a component.\n\nExample below:\n\n```js\nit('should stop loading once title is set', async () => {\n  [Button, testRenderer] = createButton({}, { spyOnMethods: ['_update'] });\n  // ensure _update has completed on the initial render of the component\n  await Button.__updateSpyPromise;\n\n  expect(Button._loading.isPlaying()).toBe(true);\n\n  // ensure _update has completed after the title property has been changed\n  Button.title = 'Action Button';\n  await Button.__updateSpyPromise;\n\n  // assertions may now be made on the state of the component after _update has been called\n  expect(Button._loading.isPlaying()).toBe(false);\n});\n```\n\n### Documentation Style Guide\n\nComponent documentation is covered through a combination of `.mdx` and `.stories.js` files within each component directory. This guide is intended to help you understand how to add [usage documentation](#usage-documentation), [API documentation](#api-documentation), and [live examples](#live-examples).\n\n**Live Examples**\n<a id=\"live-examples\" />\n\nLive examples are driven by [Storybook](https://storybook.js.org/) stories, and live in `<Type>/<Component>/<Component>.stories.js`. If you generated a new component with `yarn createComponent`, a template layout should exist for your component.\n\nIf you are contributing to an existing component, follow the patterns established there. Adding a story looks like this:\n\n```js\nexport const StoryName = () =>\n  class StoryName extends lng.Component {\n    static _template() {\n      return {\n        MyComponent: {\n          type: MyComponent\n        }\n      };\n    }\n  };\n```\n\nRun Storybook to see your live examples:\n\n```sh\nyarn start\n```\n\nStorybook will generate an ID for each story that follows the pattern `componentname--storyname`. You can use this ID to embed examples when [documenting usage](#usage-documentation).\n\n**Storybook**\n<a id=\"storybook\" />\n\nThis section is dedicated to some specifics around our implementation of [Storybook](https://storybook.js.org), which is using Storybook v6.0. If you are new to Storybook (or even 6.0), we highly recommend you check out their [updated documentation](https://storybook.js.org/docs/react/writing-stories/introduction).\n\nYou can add interactivity to your documentation with **args**. For the purposes of this project, you will likely only encounter **actions** and **controls**. We're going to walk through a simple example to illustrate the concepts that are necessary to understand for writing stories in the project.\n\nLet's take a simple `Button` component. The `Button` accepts a `title` property and an `onEnter` callback.\n\nOur static story would look something like this:\n\n```js\nimport lng from '@lightningjs/core';\nimport Button from './Button';\n\nexport default {\n  title: 'Button'\n};\n\nexport const Basic = args =>\n  class Basic extends lng.Component {\n    static _template() {\n      return {\n        Button: {\n          type: 'Button',\n          title: args.title,\n          onEnter: args.onEnter\n        }\n      };\n    }\n\n    _getFocused() {\n      return this.tag('Button');\n    }\n  };\n```\n\nWe can re-work this to support `args` so our users can set their own `title` in the **Controls** tab and the `'onEnter'` log in the **Actions** tab.\n\n```js\nexport const Basic = args =>\n  class Basic extends lng.Component {\n    static _template() {\n      return {\n        Button: {\n          type: 'Button',\n          title: args.title,\n          onEnter: args.onEnter\n        }\n      };\n    }\n\n    _getFocused() {\n      return this.tag('Button');\n    }\n  };\nBasic.args = { title: 'Hello' };\nBasic.argTypes = {\n  onEnter: { action: 'onEnter' },\n  title: { control: 'text' }\n};\n```\n\nThere are a few new concepts here: **args**, **argTypes**, **action**, and **control**.\n\nLet's break down **argTypes** first. Defining **argTypes** on the story function is how Storybook knows the controls and actions. `onEnter: { action: 'onEnter' }` tells Storybook to set `args.onEnter` as a function with the label `'onEnter'`. `title: { control: 'text' }` tells Storybook to create a text input **control** for `args.title`.\n\nShifting focus to **args**, we can see that we have a definition for `'title'` but not for `'onEnter'`. Setting the **args** object on a story function tells Storybook what the _default values_ will be for controls defined in **argTypes**.\n\nCheck out the [args docs](https://storybook.js.org/docs/react/writing-stories/args) and [essential addons docs](https://storybook.js.org/docs/react/essentials/introduction) for additional details.\n\nNow, let's say you want to execute some side effect when an arg value changes. To do this, we're going to introduce a new concept that _is not explicitly a part of Storybook_, `parameters.argActions`.\n\nYou can use `argActions` to define functions to execute on changes to an arg. Let's do this for `title`:\n\n```js\nBasic.parameters = {\n  argActions: {\n    title: (title, storyComponent) => {\n      console.log('Setting title...');\n      storyComponent.tag('Button').title = title;\n    }\n  }\n};\n```\n\nIn this example, the console will display `'Setting title...'` every time a user changes the value of the `title` control.\n\nThe callback accepts three arguments:\n\n- `argValue: any` - current value of the given arg key\n- `storyComponent: lng.Component` - instance of returned class in the story\n- `args: Object<any>` - complete args object passed into the Story function (the exported anonymous function all of the stories contain)\n\nThe render logic for story previews lives in `./.storybook/preview.js`\n\n**Usage Documentation**\n<a id=\"usage-documentation\" />\n\nUsage documentation lives in `<Type>/<Component>/<Component>.mdx`. [MDX](https://mdxjs.com/) allows you to combine [markdown](https://daringfireball.net/projects/markdown/syntax) and [React JSX](https://reactjs.org/docs/introducing-jsx.html) syntax within the same file!\n\nIf you generated a new component with `yarn createComponent`, a template layout should exist for your component. If you are contributing to an existing component, follow the patterns established there. Adding usage steps should look like this example:\n\n```js\nimport { Canvas, Story } from '@storybook/addon-docs';\nimport <Component> from '.';\n\n// title, description, etc. (eg # <Component>)\n\n## Usage\n\nImplementation description here\n\n\n// example implementation\nimport lng from '@lightningjs/core';\nimport { MyComponent } from '@lightningjs/ui-components';\n\nclass Example extends lng.Component {\n  static _template() {\n    return {\n      type: MyComponent\n    };\n  }\n}\n\n// Embed live example from Storybook\n<Canvas>\n  <Story id=\"mycomponent--basic\" />\n</Canvas>\n```\n\nThe `<Canvas>` component will supply the source code for the `<Story>` inside, so only use code blocks when you want to illustrate something explicit without an example. The `id` value for `<Story>` can be derived from the URL path of the story you are trying to embed.\n\nIn summary, documenting usage is as follows:\n\n- description of usage\n- [optional] implementation code block and/or\n- [optional] Storybook example\n\nRepeat this pattern for as many usage variations as you see fit.\n\n**API Documentation**\n<a id=\"api-documentation\" />\n\nAPI documentation lives in `<Type>/<Component>/<Component>.mdx`, below [usage documentation](#usage-documentation). [MDX](https://mdxjs.com/) allows you to combine [markdown](https://daringfireball.net/projects/markdown/syntax) and [React JSX](https://reactjs.org/docs/introducing-jsx.html) syntax within the same file!\n\nIf you generated a new component with `yarn createComponent`, a template layout should exist for your component. If you are contributing to an existing component, follow the patterns established there. Adding API documentation should follow this pattern:\n\n```\n## API\n\n### Properties\n\nname|type|required|default|description\n-|-|-|-\n-|-|-|-\n\n### Methods\n\n#### methodName(argument:type): returnValue | void\n\ndescription\n\n##### Arguments\n\nname|type|required|default|description\n-|-|-|-|-\n-|-|-|-|-\n```\n";
;// CONCATENATED MODULE: ./src/Contributing.mdx



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
    code: "code",
    p: "p",
    h2: "h2",
    ul: "ul",
    li: "li",
    a: "a",
    blockquote: "blockquote",
    strong: "strong",
    h3: "h3",
    h4: "h4",
    pre: "pre",
    ol: "ol",
    em: "em"
  }, (0,lib/* useMDXComponents */.ah)(), props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: ["\n", "\n", "\n", (0,jsx_runtime.jsx)(dist/* Meta */.h_, {
      title: "Docs / Contributing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h1, {
      id: "contributing-to-lightningjsui-components",
      children: ["Contributing to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@lightningjs/ui-components"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "First off, thanks for taking the time to contribute!"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The following is a set of guidelines for contributing to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@lightningjs/ui-components"
      }), ". These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "table-of-contents",
      children: "Table of Contents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#i-dont-want-to-read-this-whole-thing-i-just-have-a-question",
          children: "I don't want to read this whole thing I just have a question!!!"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#how-can-i-contribute",
          children: "How Can I Contribute?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#reporting-bugs",
              children: "Reporting Bugs"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#suggesting-enhancements",
              children: "Suggesting Enhancements"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#your-first-code-contribution",
              children: "Your First Code Contribution"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#pull-requests",
              children: "Pull Requests"
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#style-guides",
          children: "Style Guides"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#typescript",
              children: "TypeScript"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#git-commit-messages",
              children: "Git Commit Messages"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#javascript-style-guide",
              children: "JavaScript Style Guide"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#test-style-guide",
              children: "Test Style Guide"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#documentation-style-guide",
              children: "Documentation Style Guide"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "#live-examples",
                  children: "Live Examples"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "#storybook",
                  children: "Storybook"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "#usage-documentation",
                  children: "Usage Documentation"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "#api-documentation",
                  children: "API Documentation"
                })
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "i-dont-want-to-read-this-whole-thing-i-just-have-a-question",
      children: "I don't want to read this whole thing I just have a question!!!"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " Before you file an issue with a question, you'll get faster results by using the resources below."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "before-submitting-a-bug-report"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documentation"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "../?path=/story/docs-read-me--page",
          children: "See the README for setup help"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://rdkcentral.github.io/Lightning-UI-Components/",
          target: "_blank",
          rel: "nofollow noopener noreferrer",
          children: "See Storybook for component docs with live examples"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Discuss on Slack"
      })
    }), "\n", (0,jsx_runtime.jsx)("a", {
      href: "https://lightning-community.slack.com/archives/C04R2HNU5V3",
      target: "_blank",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "#lightning-ui-components-support"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "how-can-i-contribute",
      children: "How Can I Contribute?"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reporting-bugs",
      children: "Reporting Bugs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This section guides you through submitting a bug report for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@lightningjs/ui-components"
      }), ". Following these guidelines helps maintainers and the community understand your report, reproduce the behavior, and find related reports."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When you are creating a bug report please check the version of LUI that you are using. Include as many details as possible, and post either as an issue ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/rdkcentral/Lightning-UI-Components/issues",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "here"
      }), " on GitHub."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " If you find a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Closed"
        }), " issue that seems like it is the same thing that you're experiencing, open a new issue and include a link to the original issue in the body of your new one."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "how-do-i-submit-a-good-bug-report",
      children: "How Do I Submit A (Good) Bug Report?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Bugs are tracked as ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://guides.github.com/features/issues/",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "GitHub issues"
      }), ". Create an issue and provide the following information:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tell us the specific version of LUI you are using"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Paste code snippets using the markdown code formatters (walls of unformatted copy and pasted text are very difficult to parse)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide links to any relevant code, tickets, or GitHub issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide screenshots/videos to illustrate the bug you are facing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide detailed reproduction steps"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "suggesting-enhancements",
      children: "Suggesting Enhancements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This section guides you through submitting an enhancement suggestion for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@lightningjs/ui-components"
      }), ", including new components, completely new features, and minor improvements to existing functionality. Following these guidelines helps maintainers and the community understand your suggestion and find related suggestions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "before-submitting-an-enhancement-suggestion",
      children: "Before Submitting An Enhancement Suggestion"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Check if there's already a component which provides that enhancement."
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Perform a ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://github.com/rdkcentral/Lightning-UI-Components/issues",
            target: "_blank",
            rel: "nofollow noopener noreferrer",
            children: "cursory search"
          })]
        }), " to see if the enhancement has already been suggested. If it has, add a comment to the existing issue instead of opening a new one."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "how-do-i-submit-a-good-enhancement-suggestion",
      children: "How Do I Submit A (Good) Enhancement Suggestion?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Enhancement suggestions are tracked as ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://guides.github.com/features/issues/",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "GitHub issues"
      }), ". Create an issue and provide the following information:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use a clear and descriptive title"
        }), " for the issue to identify the suggestion."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Provide a step-by-step description of the suggested enhancement"
        }), " in as many details as possible."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Provide specific examples to demonstrate the steps"
        }), ". Include copy/pasteable snippets which you use in those examples, as ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://help.github.com/articles/markdown-basics/#multiple-lines",
          target: "_blank",
          rel: "nofollow noopener noreferrer",
          children: "Markdown code blocks"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Describe the current behavior"
        }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "explain which behavior you expected to see instead"
        }), " and why."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Include screenshots and animated GIFs"
        }), " which help you demonstrate the steps or point out the part which the suggestion is related to. You can use ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.cockos.com/licecap/",
          target: "_blank",
          rel: "nofollow noopener noreferrer",
          children: "this tool"
        }), " to record GIFs on macOS and Windows, and ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/colinkeenan/silentcast",
          target: "_blank",
          rel: "nofollow noopener noreferrer",
          children: "this tool"
        }), " on Linux."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explain why this enhancement would be useful"
        }), " to most ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@lightningjs/ui-components"
        }), " users."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Include any additional information"
        }), " that might be helpful"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "your-first-code-contribution",
      children: "Your First Code Contribution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Unsure where to begin contributing to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@lightningjs/ui-components"
      }), "? You can start by looking through these ", (0,jsx_runtime.jsx)(_components.code, {
        children: "beginner"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "help-wanted"
      }), " issues:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[Beginner issues][beginner] - issues which should only require a few lines of code, and a test or two."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["[Help wanted issues][help-wanted] - issues which should be a bit more involved than ", (0,jsx_runtime.jsx)(_components.code, {
          children: "beginner"
        }), " issues."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Follow the instructions below to get started with local development:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Fork and clone the project from here: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/rdkcentral/Lightning-UI-Components",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "https://github.com/rdkcentral/Lightning-UI-Components"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In your local terminal, follow these steps:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# enter project directory\ncd packages/@lightningjs/ui-components\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "installation",
      children: "Installation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Lightning UI Monorepo requires yarn 3.2.3^"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The preferred way to manage Yarn is through Corepack, a new binary shipped with all Node.js releases starting from 16.10. It acts as an intermediary between you and Yarn, and lets you use different package manager versions across multiple projects without having to check-in the Yarn binary anymore."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Corepack is included by default with all Node.js installs, but is currently opt-in. To enable it, run the following command:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sh",
        children: "corepack enable\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sh",
        children: "corepack prepare yarn@3.2.3 --activate\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "installing-dependencies",
      children: "Installing dependencies"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sh",
        children: "yarn install\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "starting-the-project",
      children: "Starting the project"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sh",
        children: "yarn start\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Running this command will start storybook which is located in packages/apps/lightning-ui-docs. All changes made in packages/@lightningjs/ui & packages/@lightningjs/ui-components will be reflected in the storybook instance at ", (0,jsx_runtime.jsx)(_components.a, {
        href: "http://localhost:8000",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "http://localhost:8000"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "new-component",
      children: "New component"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "requirements",
      children: "Requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before a new component will be reviewed, it must meet the following prerequisite:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Component concept has been approved by @Lightning/lightning-team"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " Development on a component may be broken up in separate PRs or done all at once, use your best judgement when breaking up work."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "development",
      children: "Development"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you are creating a new component, you can bootstrap the required file structure with:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sh",
        children: "yarn createComponent <packageName> <componentName>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packageName"
        }), ": name of which package the component will be published to (", (0,jsx_runtime.jsx)(_components.code, {
          children: "@lightningjs/ui-components"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@lightningjs/ui-components"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "componentName"
        }), ": name of component to be added"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Example: add a new component, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MyComponent"
      }), ", to the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@lightningjs/ui-components"
      }), " package"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sh",
        children: "yarn createComponent @lightningjs/ui-components MyComponent\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This will create the following files:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/\n└── packages\n    └── @lightning\n      └── ui-components\n        └── src\n          └── components\n            └── MyComponent\n              ├── index.js\n              ├── MyComponent.d.ts\n              ├── MyComponent.mdx\n              ├── MyComponent.stories.js\n              ├── MyComponent.styles.js\n              └── MyComponent.test.js\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pull-requests",
      children: "Pull Requests"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NOTE: Before RDK accepts your code into the project you must sign the RDK Contributor License Agreement (CLA)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The process described here has several goals:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Maintain ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@lightningjs/ui-components"
        }), "'s quality"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fix problems that are important to users"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Engage the community in working toward the best possible ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@lightningjs/ui-components"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Enable a sustainable system for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@lightningjs/ui-components"
        }), " maintainers to review contributions"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Please follow these steps to have your contribution considered by the maintainers:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When creating a pull request, fill out the default template. Include as much detail as possible, the changes made in the pull request and how to best approach testing the changes"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Follow the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#style-guides",
          children: "style guides"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Follow the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#new-component",
          children: "new component guide"
        }), " if you are submitting a new component"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["After you submit your pull request, verify that all ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://help.github.com/articles/about-status-checks/",
          target: "_blank",
          rel: "nofollow noopener noreferrer",
          children: "status checks"
        }), " are passing ", (0,jsx_runtime.jsxs)("details", {
          children: [(0,jsx_runtime.jsx)("summary", {
            children: "What if the status checks are failing?"
          }), "If a status check is failing, and you believe that the failure is unrelated to your change, please leave a comment on the pull request explaining why you believe the failure is unrelated. A maintainer will re-run the status check for you. If we conclude that the failure was a false positive, then we will open an issue to track that problem with our status check suite."]
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "While the prerequisites above must be satisfied prior to having your pull request reviewed, the reviewer(s) may ask you to complete additional design work, tests, or other changes before your pull request can be ultimately accepted."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "style-guides",
      children: "Style Guides"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript",
      children: "TypeScript"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["As of version 2.7.0, Lightning Core comes bundled with type definitions and in-code documentation which allow you to build Lightning apps in ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.typescriptlang.org/",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "TypeScript"
      }), ". The following ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://lightningjs.io/docs/#/lightning-core-reference/TypeScript/index",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "documentation"
      }), " assumes that you are already familiar with the basics of writing a Lightning app in JavaScript. Even if you have no Lightning experience, the tips below, the Lightning CLI lng create boilerplate (coming soon), and the types documentation available now in your IDE will be enough to get started."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TypeScript compilation is supported out of the box by Lightning CLI as of version v2.8.0."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Per TypeScript standards all types should be in PascalCase, similar to our class definitions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "git-commit-messages",
      children: "Git Commit Messages"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "IMPORTANT"
      }), ": ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@lightningjs/ui-components"
      }), " releases are automatically triggered on merge to the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "release"
      }), " branch (and possibly other release branches like ", (0,jsx_runtime.jsx)(_components.code, {
        children: "next"
      }), "). The new version number is determined by ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.conventionalcommits.org/en/v1.0.0/#summary",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "conventional commits"
      }), " which are enforced through ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/typicode/husky",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "husky"
      }), " pre-commit hooks. Read through this section carefully because it will directly impact semantic versioning."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is the message template:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<type>[optional scope]: <description>\n\n[optional body]\n\n[optional footer(s)]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Breaking Changes"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If your feature includes a breaking change (i.e. changes a component API), be sure to add ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BREAKING CHANGE"
      }), " to the body of the commit message"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Example:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "feat(Button): change focus behavior\n\nBREAKING CHANGE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Types"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Example: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "feat: <description>"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "feat:"
        }), " new feature or enhancement"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "fix:"
        }), " bug fix"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "chore:"
        }), " repo maintenance"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs:"
        }), " update documentation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "test:"
        }), " test-related changes"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scope"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Example: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fix(Button): <description>"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use scope to specify which component your changes are related to."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Description"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Example: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "feat(Button): add key-down handler"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Start description with lower-case letter (\"do something\" not \"Do something\")"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the present tense (\"add feature\" not \"added feature\")"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the imperative mood (\"move cursor to...\" not \"the cursor was moved to...\")"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Limit the first line to 72 characters or less"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reference issues and pull requests liberally in the body"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["When only changing documentation, include ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[ci skip]"
        }), " in the commit title"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "javascript-style-guide",
      children: "JavaScript Style Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@lightningjs/ui-components"
      }), " enforces ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://prettier.io/",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "the Prettier style guide"
      }), " through ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/typicode/husky",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "husky"
      }), " pre-commit hooks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To run the linter manually:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sh",
        children: "yarn lint\n\n# to auto-fix lint errors\nyarn lint:fix\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "test-style-guide",
      children: "Test Style Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@lightningjs/ui-components"
      }), " enforces ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://jestjs.io/en/",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "Jest"
      }), " test coverage of changes through ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/typicode/husky",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "husky"
      }), " pre-commit hooks. 90% coverage of statements, functions and lines are required."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To run tests manually:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sh",
        children: "# will run tests against both lightning/ui, lightning/ui-core, and lightning/ui-extensions\nyarn test\n\n# to run in watch mode\nyarn workspace @lightningjs/ui-components test --watch\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "spyonmethods",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "spyOnMethods"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["spyOnMethods is an optional array that may be passed to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "makeCreateComponent"
      }), " via the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "defaultOptions"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "options"
      }), " object. Doing so will extend the component being tested and provide methods that use Jest spies to create mock functions for each method included in the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "spyOnMethods"
      }), " array. Each spy method created is a Promise, which resolves after the spied upon method is invoked, and can be awaited in tests."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The most common usage of this is to await the completion of the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_update"
      }), " method in a component being invoked after changes to a component."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Example below:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "it('should stop loading once title is set', async () => {\n  [Button, testRenderer] = createButton({}, { spyOnMethods: ['_update'] });\n  // ensure _update has completed on the initial render of the component\n  await Button.__updateSpyPromise;\n\n  expect(Button._loading.isPlaying()).toBe(true);\n\n  // ensure _update has completed after the title property has been changed\n  Button.title = 'Action Button';\n  await Button.__updateSpyPromise;\n\n  // assertions may now be made on the state of the component after _update has been called\n  expect(Button._loading.isPlaying()).toBe(false);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "documentation-style-guide",
      children: "Documentation Style Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Component documentation is covered through a combination of ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".mdx"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".stories.js"
      }), " files within each component directory. This guide is intended to help you understand how to add ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#usage-documentation",
        children: "usage documentation"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#api-documentation",
        children: "API documentation"
      }), ", and ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#live-examples",
        children: "live examples"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Live Examples"
      })
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "live-examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Live examples are driven by ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://storybook.js.org/",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "Storybook"
      }), " stories, and live in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<Type>/<Component>/<Component>.stories.js"
      }), ". If you generated a new component with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "yarn createComponent"
      }), ", a template layout should exist for your component."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you are contributing to an existing component, follow the patterns established there. Adding a story looks like this:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "export const StoryName = () =>\n  class StoryName extends lng.Component {\n    static _template() {\n      return {\n        MyComponent: {\n          type: MyComponent\n        }\n      };\n    }\n  };\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Run Storybook to see your live examples:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sh",
        children: "yarn start\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Storybook will generate an ID for each story that follows the pattern ", (0,jsx_runtime.jsx)(_components.code, {
        children: "componentname--storyname"
      }), ". You can use this ID to embed examples when ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#usage-documentation",
        children: "documenting usage"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Storybook"
      })
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "storybook"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This section is dedicated to some specifics around our implementation of ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://storybook.js.org",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "Storybook"
      }), ", which is using Storybook v6.0. If you are new to Storybook (or even 6.0), we highly recommend you check out their ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://storybook.js.org/docs/react/writing-stories/introduction",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "updated documentation"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can add interactivity to your documentation with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "args"
      }), ". For the purposes of this project, you will likely only encounter ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "actions"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "controls"
      }), ". We're going to walk through a simple example to illustrate the concepts that are necessary to understand for writing stories in the project."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Let's take a simple ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Button"
      }), " component. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Button"
      }), " accepts a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "title"
      }), " property and an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "onEnter"
      }), " callback."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Our static story would look something like this:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "import lng from '@lightningjs/core';\nimport Button from './Button';\n\nexport default {\n  title: 'Button'\n};\n\nexport const Basic = args =>\n  class Basic extends lng.Component {\n    static _template() {\n      return {\n        Button: {\n          type: 'Button',\n          title: args.title,\n          onEnter: args.onEnter\n        }\n      };\n    }\n\n    _getFocused() {\n      return this.tag('Button');\n    }\n  };\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["We can re-work this to support ", (0,jsx_runtime.jsx)(_components.code, {
        children: "args"
      }), " so our users can set their own ", (0,jsx_runtime.jsx)(_components.code, {
        children: "title"
      }), " in the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Controls"
      }), " tab and the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "'onEnter'"
      }), " log in the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions"
      }), " tab."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "export const Basic = args =>\n  class Basic extends lng.Component {\n    static _template() {\n      return {\n        Button: {\n          type: 'Button',\n          title: args.title,\n          onEnter: args.onEnter\n        }\n      };\n    }\n\n    _getFocused() {\n      return this.tag('Button');\n    }\n  };\nBasic.args = { title: 'Hello' };\nBasic.argTypes = {\n  onEnter: { action: 'onEnter' },\n  title: { control: 'text' }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["There are a few new concepts here: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "args"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "argTypes"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "action"
      }), ", and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "control"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Let's break down ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "argTypes"
      }), " first. Defining ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "argTypes"
      }), " on the story function is how Storybook knows the controls and actions. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "onEnter: { action: 'onEnter' }"
      }), " tells Storybook to set ", (0,jsx_runtime.jsx)(_components.code, {
        children: "args.onEnter"
      }), " as a function with the label ", (0,jsx_runtime.jsx)(_components.code, {
        children: "'onEnter'"
      }), ". ", (0,jsx_runtime.jsx)(_components.code, {
        children: "title: { control: 'text' }"
      }), " tells Storybook to create a text input ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "control"
      }), " for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "args.title"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Shifting focus to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "args"
      }), ", we can see that we have a definition for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "'title'"
      }), " but not for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "'onEnter'"
      }), ". Setting the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "args"
      }), " object on a story function tells Storybook what the ", (0,jsx_runtime.jsx)(_components.em, {
        children: "default values"
      }), " will be for controls defined in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "argTypes"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Check out the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://storybook.js.org/docs/react/writing-stories/args",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "args docs"
      }), " and ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://storybook.js.org/docs/react/essentials/introduction",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "essential addons docs"
      }), " for additional details."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Now, let's say you want to execute some side effect when an arg value changes. To do this, we're going to introduce a new concept that ", (0,jsx_runtime.jsx)(_components.em, {
        children: "is not explicitly a part of Storybook"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "parameters.argActions"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "argActions"
      }), " to define functions to execute on changes to an arg. Let's do this for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "title"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "Basic.parameters = {\n  argActions: {\n    title: (title, storyComponent) => {\n      console.log('Setting title...');\n      storyComponent.tag('Button').title = title;\n    }\n  }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In this example, the console will display ", (0,jsx_runtime.jsx)(_components.code, {
        children: "'Setting title...'"
      }), " every time a user changes the value of the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "title"
      }), " control."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The callback accepts three arguments:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "argValue: any"
        }), " - current value of the given arg key"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "storyComponent: lng.Component"
        }), " - instance of returned class in the story"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "args: Object<any>"
        }), " - complete args object passed into the Story function (the exported anonymous function all of the stories contain)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The render logic for story previews lives in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "./.storybook/preview.js"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Usage Documentation"
      })
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "usage-documentation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Usage documentation lives in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<Type>/<Component>/<Component>.mdx"
      }), ". ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://mdxjs.com/",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "MDX"
      }), " allows you to combine ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://daringfireball.net/projects/markdown/syntax",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "markdown"
      }), " and ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://reactjs.org/docs/introducing-jsx.html",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "React JSX"
      }), " syntax within the same file!"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If you generated a new component with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "yarn createComponent"
      }), ", a template layout should exist for your component. If you are contributing to an existing component, follow the patterns established there. Adding usage steps should look like this example:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "import { Canvas, Story } from '@storybook/addon-docs';\nimport <Component> from '.';\n\n// title, description, etc. (eg # <Component>)\n\n## Usage\n\nImplementation description here\n\n\n// example implementation\nimport lng from '@lightningjs/core';\nimport { MyComponent } from '@lightningjs/ui-components';\n\nclass Example extends lng.Component {\n  static _template() {\n    return {\n      type: MyComponent\n    };\n  }\n}\n\n// Embed live example from Storybook\n<Canvas>\n  <Story id=\"mycomponent--basic\" />\n</Canvas>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<Canvas>"
      }), " component will supply the source code for the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<Story>"
      }), " inside, so only use code blocks when you want to illustrate something explicit without an example. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "id"
      }), " value for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<Story>"
      }), " can be derived from the URL path of the story you are trying to embed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In summary, documenting usage is as follows:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "description of usage"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[optional] implementation code block and/or"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[optional] Storybook example"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Repeat this pattern for as many usage variations as you see fit."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "API Documentation"
      })
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "api-documentation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["API documentation lives in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<Type>/<Component>/<Component>.mdx"
      }), ", below ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#usage-documentation",
        children: "usage documentation"
      }), ". ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://mdxjs.com/",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "MDX"
      }), " allows you to combine ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://daringfireball.net/projects/markdown/syntax",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "markdown"
      }), " and ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://reactjs.org/docs/introducing-jsx.html",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "React JSX"
      }), " syntax within the same file!"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If you generated a new component with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "yarn createComponent"
      }), ", a template layout should exist for your component. If you are contributing to an existing component, follow the patterns established there. Adding API documentation should follow this pattern:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "## API\n\n### Properties\n\nname|type|required|default|description\n-|-|-|-\n-|-|-|-\n\n### Methods\n\n#### methodName(argument:type): returnValue | void\n\ndescription\n\n##### Arguments\n\nname|type|required|default|description\n-|-|-|-|-\n-|-|-|-|-\n"
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = Object.assign({}, (0,lib/* useMDXComponents */.ah)(), props.components);
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(_createMdxContent, props)
  })) : _createMdxContent(props);
}
/* harmony default export */ const Contributing = (MDXContent);


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
//# sourceMappingURL=Contributing-mdx.982b91a3.iframe.bundle.js.map