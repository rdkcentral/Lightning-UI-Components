# Base Component

This component acts as the foundation for all the Lightning components which injects the core functionality with various mixins/utility functions like `withUpdates` and for injecting theme styling it uses `withThemeStyles` mixin.

## Source

https://github.comcast.com/Lightning/lightning-ui/blob/develop/packages/@lightningjs/ui-core/src/components/Base/Base.js

## Usage

Base component is used to provide a solid starting point for component development.

```js
import { Base } from '@lightningjs/ui-core';

class MynewComponent extends Base {}
```

### Properties

| name           | type    | required | default | description                                                         |
| -------------- | ------- | -------- | ------- | ------------------------------------------------------------------- |
| centerInParent | boolean | false    | false   | if set to true it places the child complete in center of the parent |

### Methods

#### static get __componentName(): string

Any component which extends the Base component and uses the `withThemeStyles` mixin requires this static accessor, which returns the name of the component. This name is used by the theme file in order to map component overrides and extensions.

#### applySmooth(ref: lng.Component[], patch: object, smooth: object): void

This method accepts a target component, patch object, and optional smooth object. If the component is visible, it will smooth in the smooth object, or fall back to
the patch object, if not it will apply the patch.

#### isFullyOnScreen(): bool

Returns a boolean for whether or not the entirety of the component is rendered within the bounds of the screen size.

#### getFocusScale(): number

This method returns the number which is set as focusScale in the theme (context.theme.layout.focusScale). This value can referenced when updating the scale property on the component when it is focused.

#### getUnfocusScale(): number<1>

This method returns a value that can be used to apply a scale property on focus to a component from a themed value. This value can referenced when updating the scale property on the component when it is unfocused.
