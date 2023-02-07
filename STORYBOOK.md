# LUI Storybook Code Organization

`apps/lightning-ui-docs/.storybook`

| Folder                   |          File           | Purpose                                                      |
| ------------------------ | :---------------------: | :----------------------------------------------------------- |
| addons                   |                         |                                                              |
|                          |      constants.js       | constants for addons                                         |
|                          |       register.js       | registers all addons                                         |
| addons/components        |                         |                                                              |
|                          |        index.js         |                                                              |
|                          |      NumberRow.js       |                                                              |
|                          |        Table.js         |                                                              |
|                          |       TableRow.js       |                                                              |
| addons/decorators        |                         |                                                              |
|                          |    withLightning.js     | decorator for Lightning to work in Storybook                 |
| addons/panels            |                         |                                                              |
|                          | ComponentStylesPanel.js | Component Style Panel Addon                                  |
|                          |   GridOverlayPanel.js   | Grid Overlay Panel Addon                                     |
|                          |      ThemePanel.js      |                                                              |
| addons/toolbars          |                         |                                                              |
|                          |       Announce.js       | turn on Announce feature                                     |
|                          |      StageColor.js      | stage color toggle                                           |
|                          |    ThemeDownload.js     | download a theme                                             |
|                          |     ThemePicker.js      | select a theme                                               |
| controls-delete/argTypes |                         |                                                              |
|                          |        index.js         |                                                              |
| utils                    |                         |                                                              |
|                          |      constants.js       | constants used for Storybook general configuration           |
|                          |      docsUtils.js       | utility functions for documentation                          |
|                          |       helpers.js        | helper functions for Storybook config                        |
|                          |        index.js         |                                                              |
|                          |    registerEvent.js     | event listeners for Storybook config                         |
|                          |      themeUtils.js      | utility functions for Lightning Theming to work in Storybook |
| /                        |                         |                                                              |
|                          |        brand.png        | logo for Storybook theme                                     |
|                          |         main.js         | controls server behavior                                     |
|                          |    manager-head.html    |                                                              |
|                          |        manger.js        | sets Storybook UI options and themes                         |
|                          |    preview-head.html    |                                                              |
|                          |       preview.js        | controls rendering of stories                                |
|                          |                         |                                                              |
|                          |        theme.js         | theme for Storybook UI                                       |
|                          |    webpackconfig.js     |                                                              |
