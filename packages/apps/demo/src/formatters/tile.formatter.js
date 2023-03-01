/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Tile } from '@lightningjs/ui-components';
import { Router } from '@lightningjs/sdk';

export default items => {
  return items.map(item => {
    return {
      type: Tile,
      onEnter() {
        Router.navigate(`video/${item.id}`);
      },
      originalData: item,
      itemLayout: {
        ratioX: 3,
        ratioY: 4,
        upCount: 7
      },
      artwork: {
        src: `https://image.tmdb.org/t/p/w200${item.poster_path}`
      }
    };
  });
};
