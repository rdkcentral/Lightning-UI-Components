/* eslint-disable prettier/prettier */
/**
 * Copyright 2021 Comcast Cable Communications Management, LLC
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

import lng from '@lightningjs/core';

import MarqueeImage from '.';
import mdx from './MarqueeImage.mdx';
import sampleImage from '../../assets/images/kabob_320x180.jpg';

export default {
    title: 'Elements / MarqueeImage',
    parameters: {
        docs: {
            page: mdx
        }
    }
};

export const Basic = () =>
    class Basic extends lng.Component {
        static _template() {
            return {
                MarqueeImage: {
                    type: MarqueeImage,
                    w: 250,
                    title: {
                        h: 170,
                        src: sampleImage,
                        lineHeight: 170
                    },
                    autoStart: true,
                    delay: 2
                }
            };
        }
    };
