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

import {
  defaultAbbrevConfig,
  generateAbbrevConfig,
  translateAbbrev
} from './abbreviations';

const customAbbreviations = [
  { pattern: 'TV', replacer: 'Television' },
  { pattern: /PB\+J/, replacer: 'Peanut Butter and Jelly' },
  { pattern: /(Ep)+(\d+)/, replacer: (match, p1, p2) => `Episode ${p2}` }
];

describe('generateAbbrevConfig', () => {
  it('should generate an abbreviation translation config for announcer', () => {
    const config = generateAbbrevConfig(customAbbreviations);

    expect(config).toMatchObject({
      abbreviationsPattern: /\b(TV)|(PB\+J)|((Ep)+(\d+))\b/g,
      stringPatternMap: {
        TV: {
          replacer: customAbbreviations[0].replacer
        }
      },
      regExpPatternMap: {
        1: customAbbreviations[1],
        2: customAbbreviations[2]
      }
    });
  });

  it('should extend the default abbreviation config to generate an abbreviation translation config for announcer', () => {
    const config = generateAbbrevConfig(customAbbreviations, true);

    const abbreviationsPattern =
      /(\bTV-14\b)|(\bCC\b)|(\bHD\b)|(\bENG(?!\+)\b)|(\bENG\+ES\b)|(\bAD\b)|(\bRT\b)|(\b(S)+(\d+)+(E)+(\d+)+\b)|(\bTV\b)|(\bPB\+J\b)|(\b(Ep)+(\d+)\b)/g;
    const stringPatternMap = {
      'TV-14': { replacer: 'Rated TV-14' },
      CC: { replacer: 'Closed Captions available' },
      HD: { replacer: 'High Definition available' },
      AD: { replacer: 'Audio Description available' },
      RT: { replacer: 'Rotten Tomatoes' },
      TV: { replacer: 'Television' }
    };
    const regExpPatternMap = {
      3: { pattern: /ENG(?!\+)/, replacer: 'English Available' },
      4: { pattern: /ENG\+ES/, replacer: 'Available in English and Spanish' },
      7: { pattern: /(S)+(\d+)+(E)+(\d+)+/, replacer: expect.any(Function) },
      13: { pattern: /PB\+J/, replacer: 'Peanut Butter and Jelly' },
      14: { pattern: /(Ep)+(\d+)/, replacer: expect.any(Function) }
    };
    expect(config).toMatchObject({
      abbreviationsPattern,
      stringPatternMap,
      regExpPatternMap
    });
  });
});

describe('translateAbbrev', () => {
  it('should replace abbreviations with a replacer string or function', () => {
    const phrase = 'Show S12E4 (CC) ENG+ES TV-14, HD - RT 100%';
    const translated =
      'Show Season 12 Episode 4 (Closed Captions available) Available in English and Spanish Rated TV-14, High Definition available - Rotten Tomatoes 100%';
    expect(translateAbbrev(phrase, defaultAbbrevConfig)).toEqual(translated);
  });

  it('should not match and replace substrings', () => {
    const phrase = 'ART vaCCum ADvertisements';
    expect(translateAbbrev(phrase, defaultAbbrevConfig)).toEqual(phrase);
  });

  it('should replace abbreviations defined in a custom configuration', () => {
    const phrase = 'PB+J on TV Ep4 (CC)';
    const config = generateAbbrevConfig(customAbbreviations, true);
    const translated =
      'Peanut Butter and Jelly on Television Episode 4 (Closed Captions available)';
    expect(translateAbbrev(phrase, config)).toEqual(translated);
  });
});
