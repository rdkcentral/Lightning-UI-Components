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
|                          |       helpers.js        | helper functions for Storybook config                        |
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
