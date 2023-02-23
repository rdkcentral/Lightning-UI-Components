type AbbreviationReplacer =
  | string
  | ((match: string, ...groups: string[]) => string);

export type AbbreviationConfig = {
  abbreviationsPattern: RegExp;
  stringPatternMap: Record<string, { replacer: AbbreviationReplacer }>;
  regExpPatternMap: Record<
    number,
    { pattern: RegExp; replacer: AbbreviationReplacer }
  >;
};

export type Abbreviation = {
  pattern: string | RegExp;
  replacer: AbbreviationReplacer;
};

export function generateAbbrevConfig(
  abbreviations: Abbreviation[],
  extendDefault
): AbbreviationConfig;

export function translateAbbrev(
  phrase: string,
  translationConfig: AbbreviationConfig
): string;

export const defaultAbbrevConfig: AbbreviationConfig;
