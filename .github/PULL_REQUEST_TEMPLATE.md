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
- [ ] replace any found instants of Lightning text with LUI Textbox component
- [ ] remove all instances of whenEnabled and test that the component still works correctly without it (if it doesn't, create a ticket and mark it in the code)
- [ ] create a TypeScript definitions file for easier use in SUITE/Loki
- [ ] confirm withLayout works with the component as expected (specifically for Buttons, ListItems, Tiles, Cards, DataItems, etc. per LUI-35)
- [ ] update unit tests as necessary (try to hit the 100% threshold across the board and utilize the coverage/index.html file to see which lines aren't covered)
- [ ] update documentation to match new setters/getters vs styles (Properties table vs Style Properties table, and make sure to match the table headers to what is in the create script--some may have readonly vs required)
- [ ] update Story entry to be as simplified as possible, add descriptions where needed (see the ProgressBar as an example), and ensure all controls have default values (otherwise things like focus end up with that "set Boolean" button). Additionally, the Storybook structure should match the repo structure (all Button variations should be nested under the Button story wrapper in Storybook the way Card is set up)

### Reminder
For branches off of `next` try to always `rebase` instead of merging `next` in. When we rebase `next` against `develop`, if your PR is still open, it will be easier to rebase again without the additional merge commits in your history.
