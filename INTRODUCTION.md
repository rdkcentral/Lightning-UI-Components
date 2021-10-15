# Introduction

The components in this UI Library are built on [LightningJS](https://github.com/rdkcentral/Lightning). They can be imported and used within an existing LightningJS application. For more information on the LightningJS framework see the [framework docs](https://rdkcentral.github.io/Lightning/docs/introduction/introduction).

## Using Storybook

Storybook is a framework for building UI Component libraries. It allows us to develop, test, and review components in an isolated environment, and share these components with consuming teams. Each component is listed along the left hand menu, broken down into three types:
- elements
- layout
- patterns

Also included here are two more sections called Collections and Mixins. The Mixins section contains helpers for developing within the lightningJS framework, while Collections contains groups of similar components so they can be viewed side by side.

When viewing a component, we're presented with two tabs - Canvas and Docs.

In **The Canvas** we can see how the component stands in isolation as well as adjust various aspects of it via the `controls` panel. These controls allow us to change the parameters of the component and see how it will look in different states, such as either focused or unfocused.

With **The Docs** panel, we can read through the use-case for the component, see how it is implemented in code, view some examples, and see a table of it's configurable properties and styles.


For information on leveraging `lightning-ui` in your application, checkout out the [README.md](../?path=/story/docs-read-me)
