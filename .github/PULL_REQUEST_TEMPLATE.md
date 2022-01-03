<!-- Provide additional context -->

<!-- Link related issue/PR numbers with # (typing LUI-123 will auto-link to the Jira) -->
### Jira Ticket
LUI-

<!-- Add or remove items as needed -->
### Checklist

For Component Refactoring:
- [ ] change Base/index.js component extension to new Base.js
- [ ] change component export to be wrapped in withExtensions
- [ ] strip out component styles from the properties array and reference them via this._componentStyles.propName
- [ ] update documentation to match new setters/getters vs styles
- [ ] create a TypeScript definitions file for easier use in SUITE/Loki
- [ ] confirm withLayout works with the component as expected (specifically for Buttons, ListItems, Tiles, Cards, DataItems, etc. per LUI-35)
- [ ] replace any found instants of Lightning text with LUI Textbox component
- [ ] update Story entry to be as simplified as possible, add descriptions where needed (see the ProgressBar as an example), and ensure all controls have default values (otherwise things like focus end up with that "set Boolean" button)
- [ ] remove all instances of whenEnabled and test that the component still works correctly without it (if it doesn't, create a ticket and mark it in the code)
- [ ] update unit tests as necessary
