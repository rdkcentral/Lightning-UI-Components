// Don't wrap patterns with word boundaries (\b) or set any RegExp flags.
// Each pattern will be wrapped with \b and use the global (g) flag when created as a capture group in combined pattern.
const defaultAbbreviations = [
  { pattern: 'TV-14', replacer: 'Rated TV-14' },
  { pattern: 'CC', replacer: 'Closed Captions available' },
  { pattern: 'HD', replacer: 'High Definition available' },
  { pattern: /ENG(?!\+)/, replacer: 'English Available' },
  { pattern: /ENG\+ES/, replacer: 'Available in English and Spanish' },
  { pattern: 'AD', replacer: 'Audio Description available' },
  { pattern: 'RT', replacer: 'Rotten Tomatoes' },
  {
    pattern: /(S)+(\d+)+(E)+(\d+)+/,
    replacer: (match, p1, p2, p3, p4) => `Season ${p2} Episode ${p4}`
  }
];

export const defaultAbbrevConfig = generateAbbrevConfig(defaultAbbreviations);

function wrapWithBoundary(str) {
  return `\\b${str}\\b`;
}

function getNumberOfCaptureGroups(regExp) {
  return new RegExp(regExp.toString() + '|').exec('').length - 1;
}

/**
 * @typedef {Object} AbbreviationConfig
 * @property {RegExp} abbreviationsPattern - combined RegExp pattern of all abbreviations separated into capture groups
 * @property {Object} stringPatternMap - object to look up replacers values based on string matches (uses matched string to look up)
 * @property {Object} regExpPatternMap - object to look up replacers values based on RegExp matches (uses index of matched capture group to look up)
 */

/**
 * Generates abbreviation config object to be passed to withAnnouncer for abbrevation translation
 * @param {Object[]} abbreviations - array of custom abbreviation objects to generate config off of
 * @param {String|RegExp} abbreviations[].pattern - pattern to match abbreviation
 * @param {String|Function} abbreviations[].replacer - string or RegEx replacer function to replace matched abbreviation with
 * @param {boolean} extendDefault - if true, extend the default abbreviations config with custom abbreviations
 * @returns {AbbreviationConfig} - configuration that may be passed to withAnnouncer as abbreviations in options parameter
 */
export function generateAbbrevConfig(
  abbreviations = defaultAbbreviations,
  extendDefault
) {
  const abbrev = extendDefault
    ? [...defaultAbbreviations, ...abbreviations]
    : abbreviations;
  const stringPatternMap = {}; // map of exact strings to the associated replacer
  const regExpPatternMap = {}; // map of RegExp patterns to the associated replacer
  let abbreviationsPattern = ''; // string of final RegExp pattern with each pattern as a capture group
  let patternGroupOffset = 0; // incremented for each capture group found in RegExp patterns passed in

  // If the pattern is a RegExp pattern: key RegExp pattern with its index in passed in abbreviations array parameter.
  // The capture group for this pattern will be at this position (idx) in the combined RegExp pattern.
  // When a string is matched, the index of the matched capture group can be used to look up the correct replacer.
  //
  // Else (the pattern is a string): it can be keyed by it's pattern.
  // When a string is matched, the string matcher can be used to look up the correct replacer.
  abbrev.forEach(({ pattern, replacer }, idx) => {
    let stringPattern;
    if (pattern instanceof RegExp) {
      const patternMapIdx = idx + patternGroupOffset;
      regExpPatternMap[patternMapIdx] = { pattern, replacer };
      stringPattern = wrapWithBoundary(pattern.source);
      patternGroupOffset += getNumberOfCaptureGroups(pattern);
    } else {
      stringPatternMap[pattern] = { replacer };
      stringPattern = wrapWithBoundary(pattern);
    }

    // create single string for final RegExp - each pattern will be a capture group
    abbreviationsPattern =
      abbreviationsPattern === ''
        ? `(${stringPattern})`
        : `${abbreviationsPattern}|(${stringPattern})`;
  });

  abbreviationsPattern = new RegExp(abbreviationsPattern, 'g');
  return { abbreviationsPattern, stringPatternMap, regExpPatternMap };
}

/**
 * Translates abbreviations in a string into their associated words
 * @param {String} phrase - phrase to be translated
 * @param {AbbreviationConfig} - abbreviationsPattern, stringPatternMap and regExpPatternMap
 * @returns {String} - phrase where abbreviations have been replaced with words
 */
export const translateAbbrev = (phrase, translationConfig) => {
  const { abbreviationsPattern, stringPatternMap, regExpPatternMap } =
    translationConfig;

  const translated = phrase.replace(
    abbreviationsPattern,
    (matched, ...args) => {
      // replace exact string match with replacement string
      if (stringPatternMap[matched]) {
        return stringPatternMap[matched].replacer;
      }

      // else match was found using a more complex RegExp pattern
      // find replacer by index of matching capture group
      const patternIdx = args.findIndex(arg => !!arg);
      const { pattern, replacer } = regExpPatternMap[patternIdx];

      // replace matched string with replacer string
      if (typeof replacer === 'string') {
        return replacer;
      }

      // use replace again for replacer function it can utilize substring matches in its scope
      if (typeof replacer === 'function') {
        return matched.replace(pattern, replacer);
      }
    }
  );
  return translated;
};
