# Contributing to @lightning/ui

:rocket: First off, thanks for taking the time to contribute! :rocket:

The following is a set of guidelines for contributing to @lightning/ui. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

#### Table Of Contents

[I don't want to read this whole thing, I just have a question!!!](#i-dont-want-to-read-this-whole-thing-i-just-have-a-question)

[How Can I Contribute?](#how-can-i-contribute)
  * [Reporting Bugs](#reporting-bugs)
  * [Suggesting Enhancements](#suggesting-enhancements)
  * [Your First Code Contribution](#your-first-code-contribution)
  * [Pull Requests](#pull-requests)

[Styleguides](#styleguides)
  * [Git Commit Messages](#git-commit-messages)
  * [JavaScript Styleguide](#javascript-styleguide)
  * [Test Styleguide](#test-styleguide)
  * [Documentation Styleguide](#documentation-styleguide)
    * [Usage Documentation](#usage-documentation)
    * [API Documentation](#api-documentation)

[Additional Notes](#additional-notes)
  * [Issue and Pull Request Labels](#issue-and-pull-request-labels)

## I don't want to read this whole thing I just have a question!!!

> **Note:** Before you file an issue with a question, you'll get faster results by using the resources below.

<a id="before-submitting-a-bug-report" />

**Documentation**

* [See the README for setup help](../main/README.md)
* [See Storybook for component docs with live examples](https://github.comcast.com/pages/Lightning/lightning-ui/)

**Discuss on Slack**

* <a href="https://slack.com/app_redirect?team=T024VU91V&channel=C016PQ0G4HY" target="_blank">@lightning/ui support channel</a>
* <a href="https://slack.com/app_redirect?team=T024VU91V&channel=CLGQ2MFU4" target="_blank">General Lightning support channel</a>

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report for @lightning/ui. Following these guidelines helps maintainers and the community understand your report :pencil:, reproduce the behavior :computer: :computer:, and find related reports :mag_right:.

When you are creating a bug report, please [include as many details as possible](#how-do-i-submit-a-good-bug-report). Fill out [the required template](../main/.github/ISSUE_TEMPLATE/bug_report.md), the information it asks for helps us resolve issues faster.

> **Note:** If you find a **Closed** issue that seems like it is the same thing that you're experiencing, open a new issue and include a link to the original issue in the body of your new one.

#### How Do I Submit A (Good) Bug Report?

Bugs are tracked as [GitHub issues](https://guides.github.com/features/issues/). Create an issue and provide the following information by filling in [the template](../main/.github/ISSUE_TEMPLATE/bug_report.md).

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for @lightning-ui, including new components, completely new features and minor improvements to existing functionality. Following these guidelines helps maintainers and the community understand your suggestion :pencil: and find related suggestions :mag_right:.

Before creating enhancement suggestions, please check [this list](#before-submitting-an-enhancement-suggestion) as you might find out that you don't need to create one. When you are creating an enhancement suggestion, please [include as many details as possible](#how-do-i-submit-a-good-enhancement-suggestion). Fill in [the template](../main/.github/ISSUE_TEMPLATE/feature_request.md), including the steps that you imagine you would take if the feature you're requesting existed.

#### Before Submitting An Enhancement Suggestion

* **Check if there's already a component which provides that enhancement.**
* **Perform a [cursory search](https://github.comcast.com/Lightning/lightning-ui/issues)** to see if the enhancement has already been suggested. If it has, add a comment to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](https://guides.github.com/features/issues/). Create an issue and provide the following information:

* **Use a clear and descriptive title** for the issue to identify the suggestion.
* **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
* **Provide specific examples to demonstrate the steps**. Include copy/pasteable snippets which you use in those examples, as [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the current behavior** and **explain which behavior you expected to see instead** and why.
* **Include screenshots and animated GIFs** which help you demonstrate the steps or point out the part of Atom which the suggestion is related to. You can use [this tool](https://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on Linux.
* **Explain why this enhancement would be useful** to most @lightning/ui users.

### Your First Code Contribution

Unsure where to begin contributing to @lightning/ui? You can start by looking through these `beginner` and `help-wanted` issues:

* [Beginner issues][beginner] - issues which should only require a few lines of code, and a test or two.
* [Help wanted issues][help-wanted] - issues which should be a bit more involved than `beginner` issues.

#### Local development

Follow the instructions below to get started with local development:

* Fork and clone the project from here: https://github.comcast.com/Lightning/lightning-ui
* In your local terminal, follow these steps:
  ```sh
  # enter project directory
  cd lightning-ui
  # install packages
  npm install
  # Start local Storybook server
  npm start
  ```

#### New component

**Requirements**

Before a new component will be reviewed, it must meet the following prerequisites:

* Component concept has been approved by @Lightning/lightning-team
* Component [issue](ISSUE_TEMPLATE/new-component.md) is created to track development

A component is considered "done" when the issue checklist is complete and the issue is closed. Development on a component may be broken up in separate PRs or done all at once, use your best judgement when breaking up work.

**Development**

If you are creating a new component, you can bootstrap the required file structure with

```sh
npm run create MyComponent
```

This will create the following files:

```
/
└── components
    └── MyComponent
        ├── index.js
        ├── MyComponent.mdx
        ├── MyComponent.stories.js
        └── MyComponent.test.js
```

### Pull Requests

The process described here has several goals:

- Maintain @lightning/ui's quality
- Fix problems that are important to users
- Engage the community in working toward the best possible @lightning/ui
- Enable a sustainable system for @lightning/ui maintainers to review contributions

Please follow these steps to have your contribution considered by the maintainers:

1. Follow all instructions in [the template](PULL_REQUEST_TEMPLATE.md)
1. Follow the [styleguides](#styleguides)
1. Follow the [new component guide][#new-component] if you are submitting a new component
1. After you submit your pull request, verify that all [status checks](https://help.github.com/articles/about-status-checks/) are passing <details><summary>What if the status checks are failing?</summary>If a status check is failing, and you believe that the failure is unrelated to your change, please leave a comment on the pull request explaining why you believe the failure is unrelated. A maintainer will re-run the status check for you. If we conclude that the failure was a false positive, then we will open an issue to track that problem with our status check suite.</details>

While the prerequisites above must be satisfied prior to having your pull request reviewed, the reviewer(s) may ask you to complete additional design work, tests, or other changes before your pull request can be ultimately accepted.

## Styleguides

### Git Commit Messages

@lightning/ui enforces [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) through [husky](https://github.com/typicode/husky) pre-commit hooks.

This is the message template:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Types**

Example: `feat: <description>`

* `feat:` - new feature or enhancement
* `fix:` - bug fix
* `build:` - updates to build process
* `chore:` - 
* `ci:` - update CI configuration
* `docs:` - update documentation
* `refactor:` - refactor code
* `test:` - test-related changes

**Scope**

Example: `fix(ActionButton): <description>`

Use scope to specify which component your changes are related to.

**Description**

Example: `feat(ActionButton): add key-down handler`

* Start description with lower-case letter ("do something" not "Do something")
* Use the present tense ("add feature" not "added feature")
* Use the imperative mood ("move cursor to..." not "move cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally in the body
* When only changing documentation, include `[ci skip]` in the commit title

**Breaking Changes**

If your feature includes a breaking change (i.e. changes a component API), be sure to add `BREAKING CHANGE` to the body of the commit message

### JavaScript Styleguide

@lightning/ui enforces [the Prettier styleguide](https://prettier.io/) through [husky](https://github.com/typicode/husky) pre-commit hooks.

To run the linter manually:

```sh
npm run lint

# to auto-fix lint errors
npm run lint -- --fix
```

### Test Styleguide

@lightning/ui enforces [Jest](https://jestjs.io/en/) test coverage of changes through [husky](https://github.com/typicode/husky) pre-commit hooks. 90% coverage of statements, functions and lines are required.

To run tests manually:

```sh
npm test

# to run in watch mode
npm run test:watch
```

### Documentation Styleguide

Component documentation is covered through a combination of `.mdx` and `.stories.js` files within each component directory. This guide is intended to help you understand how to add [usage documentation][#usage-documentation], [API documentation][#api-documentation] and [live examples][#live-examples]

**Live Examples**
<a id="live-examples" />

Live examples are driven by [Storybook](https://storybook.js.org/) stories, and live in `components/<Component>/<Component>.stories.js`. If you generated a new component with `npm run create`, a template layout should exist for your component.

If you are contributing to an existing component, follow the patterns established there. Adding a story looks like this:

```js
export const StoryName = () =>
  class StoryName extends lng.Component {
    static _template() {
      return {
        MyComponent: {
          type: MyComponent
        }
      }
    }
  }
```

Run Storybook to see your live examples:

```sh
npm start
```

Storybook will generate an ID for each story that follows the pattern `componentname--storyname`. You can use this ID to embed examples when [documenting usage][#usage-documentation]

**Usage Documentation**
<a id="usage-documentation" />

Usage documentation lives in `components/<Component>/<Component>.mdx`. [MDX](https://mdxjs.com/) allows you to combine [markdown](https://daringfireball.net/projects/markdown/syntax) and [React JSX](https://reactjs.org/docs/introducing-jsx.html) syntax within the same file!

If you generated a new component with `npm run create`, a template layout should exist for your component. If you are contributing to an existing component, follow the patterns established there. Adding usage steps should look like this example:

<pre>
import { Preview, Story } from '@storybook/addon-docs/blocks';

// title, description, etc.

## Usage

Implementation description here

```js
// example implementation
import lng from 'wpe-lightning';
import { MyComponent } from '@lightning/ui';

class Example extends lng.Component {
  static _template() {
    return {
      type: MyComponent
    };
  }
}
```
</pre>

```
// Embed live example from Storybook
<Preview>
  <Story id="mycomponent--basic" />
</Preview>
```

The `<Preview>` component will supply the source code for the `<Story>` inside, so only use code blocks when you want to illustrate something explicit without an example. The `id` value for `<Story>` can be derived from the URL path of the story you are trying to embed.

In summary, documenting usage is as follows:
* description of usage
* [optional] implementation code block and/or
* [optional] Storybook example

Repeat this pattern for as many usage variations as you see fit

**API Documentation**
<a id="api-documentation" />

API documentation lives in `components/<Component>/<Component>.mdx`, below [usage documentation][#usage-documentation]. [MDX](https://mdxjs.com/) allows you to combine [markdown](https://daringfireball.net/projects/markdown/syntax) and [React JSX](https://reactjs.org/docs/introducing-jsx.html) syntax within the same file!

If you generated a new component with `npm run create`, a template layout should exist for your component. If you are contributing to an existing component, follow the patterns established there. Adding API documentation should follow this pattern:

```
## API

### Properties

name|type|readonly|description
-|-|-|-
-|-|-|-

### Methods

#### methodName

description

##### Arguments

name|type|required|default|description
-|-|-|-|-
-|-|-|-|-
```

[beginner]:https://github.comcast.com/Lightning/lightning-ui/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3A%22beginner%22
[help-wanted]:https://github.comcast.com/Lightning/lightning-ui/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22
