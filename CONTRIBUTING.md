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

# Contributing to `@lightningjs/ui-components`

First off, thanks for taking the time to contribute!

The following is a set of guidelines for contributing to `@lightningjs/ui-components`. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

## Table of Contents

- [I don't want to read this whole thing I just have a question!!!](#i-dont-want-to-read-this-whole-thing-i-just-have-a-question)
- [How Can I Contribute?](#how-can-i-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Enhancements](#suggesting-enhancements)
  - [Your First Code Contribution](#your-first-code-contribution)
  - [Pull Requests](#pull-requests)
- [Style Guides](#style-guides)
  - [TypeScript](#typescript)
  - [Git Commit Messages](#git-commit-messages)
  - [JavaScript Style Guide](#javascript-style-guide)
  - [Test Style Guide](#test-style-guide)
  - [Documentation Style Guide](#documentation-style-guide)
    - [Live Examples](#live-examples)
    - [Storybook](#storybook)
    - [Usage Documentation](#usage-documentation)
    - [API Documentation](#api-documentation)

## I don't want to read this whole thing I just have a question!!!

> **Note:** Before you file an issue with a question, you'll get faster results by using the resources below.

<a id="before-submitting-a-bug-report" />

**Documentation**

- [See the README for setup help](../?path=/story/docs-read-me--page)
- [See Storybook for component docs with live examples](https://rdkcentral.github.io/Lightning-UI-Components/)

**Discuss on Slack**

<a href="https://lightning-community.slack.com/archives/C04R2HNU5V3" target="_blank">#lightning-ui-componenents-support</a>

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report for `@lightningjs/ui-components`. Following these guidelines helps maintainers and the community understand your report, reproduce the behavior, and find related reports.

When you are creating a bug report please check the version of LUI that you are using. Include as many details as possible, and post either as an issue [here](https://github.com/rdkcentral/Lightning-UI-Components/issues) on GitHub.

> **Note:** If you find a **Closed** issue that seems like it is the same thing that you're experiencing, open a new issue and include a link to the original issue in the body of your new one.

#### How Do I Submit A (Good) Bug Report?

Bugs are tracked as [GitHub issues](https://guides.github.com/features/issues/). Create an issue and provide the following information:

- Tell us the specific version of LUI you are using
- Paste code snippets using the markdown code formatters (walls of unformatted copy and pasted text are very difficult to parse)
- Provide links to any relevant code, tickets, or GitHub issues
- Provide screenshots/videos to illustrate the bug you are facing
- Provide detailed reproduction steps

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for `@lightningjs/ui-components`, including new components, completely new features, and minor improvements to existing functionality. Following these guidelines helps maintainers and the community understand your suggestion and find related suggestions.

#### Before Submitting An Enhancement Suggestion

- **Check if there's already a component which provides that enhancement.**
- **Perform a [cursory search](https://github.com/rdkcentral/Lightning-UI-Components/issues)** to see if the enhancement has already been suggested. If it has, add a comment to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](https://guides.github.com/features/issues/). Create an issue and provide the following information:

- **Use a clear and descriptive title** for the issue to identify the suggestion.
- **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
- **Provide specific examples to demonstrate the steps**. Include copy/pasteable snippets which you use in those examples, as [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
- **Describe the current behavior** and **explain which behavior you expected to see instead** and why.
- **Include screenshots and animated GIFs** which help you demonstrate the steps or point out the part which the suggestion is related to. You can use [this tool](https://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and [this tool](https://github.com/colinkeenan/silentcast) on Linux.
- **Explain why this enhancement would be useful** to most `@lightningjs/ui-components` users.
- **Include any additional information** that might be helpful

### Your First Code Contribution

Unsure where to begin contributing to `@lightningjs/ui-components`? You can start by looking through these `beginner` and `help-wanted` issues:

- [Beginner issues][beginner] \- issues which should only require a few lines of code, and a test or two.
- [Help wanted issues][help-wanted] \- issues which should be a bit more involved than `beginner` issues.

Follow the instructions below to get started with local development:

Fork and clone the project from here: https://github.com/rdkcentral/Lightning-UI-Components.

In your local terminal, follow these steps:

```bash
# enter project directory
cd packages/@lightningjs/ui-components
```

## Installation

The Lightning UI Monorepo requires yarn 3.2.3^

The preferred way to manage Yarn is through Corepack, a new binary shipped with all Node.js releases starting from 16.10. It acts as an intermediary between you and Yarn, and lets you use different package manager versions across multiple projects without having to check-in the Yarn binary anymore.

Corepack is included by default with all Node.js installs, but is currently opt-in. To enable it, run the following command:

```sh
corepack enable
```

```sh
corepack prepare yarn@3.2.3 --activate
```

### Installing dependencies

```sh
yarn install
```

### Starting the project

```sh
yarn start
```

Running this command will start storybook which is located in packages/apps/lightning-ui-docs. All changes made in packages/@lightningjs/ui & packages/@lightningjs/ui-components will be reflected in the storybook instance at http://localhost:8000

## New component

### Requirements

Before a new component will be reviewed, it must meet the following prerequisite:

- Component concept has been approved by @Lightning/lightning-team

> **Note:** Development on a component may be broken up in separate PRs or done all at once, use your best judgement when breaking up work.

### Development

If you are creating a new component, you can bootstrap the required file structure with:

```sh
yarn createComponent <packageName> <componentName>
```

- `packageName`: name of which package the component will be published to (`@lightningjs/ui-components` or `@lightningjs/ui-components`)
- `componentName`: name of component to be added

Example: add a new component, `MyComponent`, to the `@lightningjs/ui-components` package

```sh
yarn createComponent @lightningjs/ui MyComponent
```

This will create the following files:

```
/
└── packages
    └── @lightning
      └── ui-components
        └── src
          └── components
            └── MyComponent
              ├── index.js
              ├── MyComponent.d.ts
              ├── MyComponent.mdx
              ├── MyComponent.stories.js
              ├── MyComponent.styles.js
              └── MyComponent.test.js
```

### Pull Requests


NOTE: Before RDK accepts your code into the project you must sign the RDK Contributor License Agreement (CLA).

The process described here has several goals:

- Maintain `@lightningjs/ui-components`'s quality
- Fix problems that are important to users
- Engage the community in working toward the best possible `@lightningjs/ui-components`
- Enable a sustainable system for `@lightningjs/ui-components` maintainers to review contributions

Please follow these steps to have your contribution considered by the maintainers:

1. When creating a pull request, fill out the default template. Include as much detail as possible, the changes made in the pull request and how to best approach testing the changes
2. Follow the [style guides](#style-guides)
3. Follow the [new component guide](#new-component) if you are submitting a new component
4. After you submit your pull request, verify that all [status checks](https://help.github.com/articles/about-status-checks/) are passing <details><summary>What if the status checks are failing?</summary>If a status check is failing, and you believe that the failure is unrelated to your change, please leave a comment on the pull request explaining why you believe the failure is unrelated. A maintainer will re-run the status check for you. If we conclude that the failure was a false positive, then we will open an issue to track that problem with our status check suite.</details>

While the prerequisites above must be satisfied prior to having your pull request reviewed, the reviewer(s) may ask you to complete additional design work, tests, or other changes before your pull request can be ultimately accepted.

## Style Guides

### TypeScript

As of version 2.7.0, Lightning Core comes bundled with type definitions and in-code documentation which allow you to build Lightning apps in [TypeScript](https://www.typescriptlang.org/). The following [documentation](https://lightningjs.io/docs/#/lightning-core-reference/TypeScript/index) assumes that you are already familiar with the basics of writing a Lightning app in JavaScript. Even if you have no Lightning experience, the tips below, the Lightning CLI lng create boilerplate (coming soon), and the types documentation available now in your IDE will be enough to get started.

TypeScript compilation is supported out of the box by Lightning CLI as of version v2.8.0.

Per TypeScript standards all types should be in PascalCase, similar to our class definitions

### Git Commit Messages

**IMPORTANT**: `@lightningjs/ui-components` releases are automatically triggered on merge to the `release` branch (and possibly other release branches like `next`). The new version number is determined by [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) which are enforced through [husky](https://github.com/typicode/husky) pre-commit hooks. Read through this section carefully because it will directly impact semantic versioning.

This is the message template:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Breaking Changes**

If your feature includes a breaking change (i.e. changes a component API), be sure to add `BREAKING CHANGE` to the body of the commit message

Example:

```
feat(Button): change focus behavior

BREAKING CHANGE
```

**Types**

Example: `feat: <description>`

- `feat:` new feature or enhancement
- `fix:` bug fix
- `chore:` repo maintenance
- `docs:` update documentation
- `test:` test-related changes

**Scope**

Example: `fix(Button): <description>`

Use scope to specify which component your changes are related to.

**Description**

Example: `feat(Button): add key-down handler`

- Start description with lower-case letter ("do something" not "Do something")
- Use the present tense ("add feature" not "added feature")
- Use the imperative mood ("move cursor to..." not "the cursor was moved to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally in the body
- When only changing documentation, include `[ci skip]` in the commit title

### JavaScript Style Guide

`@lightningjs/ui-components` enforces [the Prettier style guide](https://prettier.io/) through [husky](https://github.com/typicode/husky) pre-commit hooks.

To run the linter manually:

```sh
yarn lint

# to auto-fix lint errors
yarn lint:fix
```

### Test Style Guide

`@lightningjs/ui-components` enforces [Jest](https://jestjs.io/en/) test coverage of changes through [husky](https://github.com/typicode/husky) pre-commit hooks. 90% coverage of statements, functions and lines are required.

To run tests manually:

```sh
# will run tests against both lightning/ui, lightning/ui-core, and lightning/ui-extensions
yarn test

# to run in watch mode
yarn workspace @lightningjs/ui-components test --watch
```

## `spyOnMethods`

spyOnMethods is an optional array that may be passed to `makeCreateComponent` via the `defaultOptions` or `options` object. Doing so will extend the component being tested and provide methods that use Jest spies to create mock functions for each method included in the `spyOnMethods` array. Each spy method created is a Promise, which resolves after the spied upon method is invoked, and can be awaited in tests.

The most common usage of this is to await the completion of the `_update` method in a component being invoked after changes to a component.

Example below:

```js
it('should stop loading once title is set', async () => {
  [Button, testRenderer] = createButton({}, { spyOnMethods: ['_update'] });
  // ensure _update has completed on the initial render of the component
  await Button.__updateSpyPromise;

  expect(Button._loading.isPlaying()).toBe(true);

  // ensure _update has completed after the title property has been changed
  Button.title = 'Action Button';
  await Button.__updateSpyPromise;

  // assertions may now be made on the state of the component after _update has been called
  expect(Button._loading.isPlaying()).toBe(false);
});
```

### Documentation Style Guide

Component documentation is covered through a combination of `.mdx` and `.stories.js` files within each component directory. This guide is intended to help you understand how to add [usage documentation](#usage-documentation), [API documentation](#api-documentation), and [live examples](#live-examples).

**Live Examples**
<a id="live-examples" />

Live examples are driven by [Storybook](https://storybook.js.org/) stories, and live in `<Type>/<Component>/<Component>.stories.js`. If you generated a new component with `yarn createComponent`, a template layout should exist for your component.

If you are contributing to an existing component, follow the patterns established there. Adding a story looks like this:

```js
export const StoryName = () =>
  class StoryName extends lng.Component {
    static _template() {
      return {
        MyComponent: {
          type: MyComponent
        }
      };
    }
  };
```

Run Storybook to see your live examples:

```sh
yarn start
```

Storybook will generate an ID for each story that follows the pattern `componentname--storyname`. You can use this ID to embed examples when [documenting usage](#usage-documentation).

**Storybook**
<a id="storybook" />

This section is dedicated to some specifics around our implementation of [Storybook](https://storybook.js.org), which is using Storybook v6.0. If you are new to Storybook (or even 6.0), we highly recommend you check out their [updated documentation](https://storybook.js.org/docs/react/writing-stories/introduction).

You can add interactivity to your documentation with **args**. For the purposes of this project, you will likely only encounter **actions** and **controls**. We're going to walk through a simple example to illustrate the concepts that are necessary to understand for writing stories in the project.

Let's take a simple `Button` component. The `Button` accepts a `title` property and an `onEnter` callback.

Our static story would look something like this:

```js
import lng from '@lightningjs/core';
import Button from './Button';

export default {
  title: 'Button'
};

export const Basic = args =>
  class Basic extends lng.Component {
    static _template() {
      return {
        Button: {
          type: 'Button',
          title: args.title,
          onEnter: args.onEnter
        }
      };
    }

    _getFocused() {
      return this.tag('Button');
    }
  };
```

We can re-work this to support `args` so our users can set their own `title` in the **Controls** tab and the `'onEnter'` log in the **Actions** tab.

```js
export const Basic = args =>
  class Basic extends lng.Component {
    static _template() {
      return {
        Button: {
          type: 'Button',
          title: args.title,
          onEnter: args.onEnter
        }
      };
    }

    _getFocused() {
      return this.tag('Button');
    }
  };
Basic.args = { title: 'Hello' };
Basic.argTypes = {
  onEnter: { action: 'onEnter' },
  title: { control: 'text' }
};
```

There are a few new concepts here: **args**, **argTypes**, **action**, and **control**.

Let's break down **argTypes** first. Defining **argTypes** on the story function is how Storybook knows the controls and actions. `onEnter: { action: 'onEnter' }` tells Storybook to set `args.onEnter` as a function with the label `'onEnter'`. `title: { control: 'text' }` tells Storybook to create a text input **control** for `args.title`.

Shifting focus to **args**, we can see that we have a definition for `'title'` but not for `'onEnter'`. Setting the **args** object on a story function tells Storybook what the _default values_ will be for controls defined in **argTypes**.

Check out the [args docs](https://storybook.js.org/docs/react/writing-stories/args) and [essential addons docs](https://storybook.js.org/docs/react/essentials/introduction) for additional details.

Now, let's say you want to execute some side effect when an arg value changes. To do this, we're going to introduce a new concept that _is not explicitly a part of Storybook_, `parameters.argActions`.

You can use `argActions` to define functions to execute on changes to an arg. Let's do this for `title`:

```js
Basic.parameters = {
  argActions: {
    title: (title, storyComponent) => {
      console.log('Setting title...');
      storyComponent.tag('Button').title = title;
    }
  }
};
```

In this example, the console will display `'Setting title...'` every time a user changes the value of the `title` control.

The callback accepts three arguments:

- `argValue: any` - current value of the given arg key
- `storyComponent: lng.Component` - instance of returned class in the story
- `args: Object<any>` - complete args object passed into the Story function (the exported anonymous function all of the stories contain)

The render logic for story previews lives in `./.storybook/preview.js`

**Usage Documentation**
<a id="usage-documentation" />

Usage documentation lives in `<Type>/<Component>/<Component>.mdx`. [MDX](https://mdxjs.com/) allows you to combine [markdown](https://daringfireball.net/projects/markdown/syntax) and [React JSX](https://reactjs.org/docs/introducing-jsx.html) syntax within the same file!

If you generated a new component with `yarn createComponent`, a template layout should exist for your component. If you are contributing to an existing component, follow the patterns established there. Adding usage steps should look like this example:

```js
import { Canvas, Story } from '@storybook/addon-docs';
import <Component> from '.';

// title, description, etc. (eg # <Component>)

## Usage

Implementation description here


// example implementation
import lng from '@lightningjs/core';
import { MyComponent } from '@lightningjs/ui-components';

class Example extends lng.Component {
  static _template() {
    return {
      type: MyComponent
    };
  }
}

// Embed live example from Storybook
<Canvas>
  <Story id="mycomponent--basic" />
</Canvas>
```

The `<Canvas>` component will supply the source code for the `<Story>` inside, so only use code blocks when you want to illustrate something explicit without an example. The `id` value for `<Story>` can be derived from the URL path of the story you are trying to embed.

In summary, documenting usage is as follows:

- description of usage
- [optional] implementation code block and/or
- [optional] Storybook example

Repeat this pattern for as many usage variations as you see fit.

**API Documentation**
<a id="api-documentation" />

API documentation lives in `<Type>/<Component>/<Component>.mdx`, below [usage documentation](#usage-documentation). [MDX](https://mdxjs.com/) allows you to combine [markdown](https://daringfireball.net/projects/markdown/syntax) and [React JSX](https://reactjs.org/docs/introducing-jsx.html) syntax within the same file!

If you generated a new component with `yarn createComponent`, a template layout should exist for your component. If you are contributing to an existing component, follow the patterns established there. Adding API documentation should follow this pattern:

```
## API

### Properties

name|type|required|default|description
-|-|-|-
-|-|-|-

### Methods

#### methodName(argument:type): returnValue | void

description

##### Arguments

name|type|required|default|description
-|-|-|-|-
-|-|-|-|-
```
