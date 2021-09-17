/**
 * Copyright 2020 Comcast Cable Communications Management, LLC
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
function flattenStrings(series = []) {
  let flattenedSeries = [];

  for (var i = 0; i < series.length; i++) {
    if (typeof series[i] === 'string' && !series[i].includes('PAUSE-')) {
      flattenedSeries.push(series[i]);
    } else {
      break;
    }
  }

  return [flattenedSeries.join(', ')].concat(series.slice(i));
}

function delay(pause) {
  return new Promise(resolve => {
    setTimeout(resolve, pause);
  });
}

/**
 * Speak a string
 *
 * @param {string} phrase Phrase to speak
 * @param {SpeechSynthesisUtterance[]} utterances An array which the new SpeechSynthesisUtterance instance representing this utterance will be appended
 * @return {Promise<void>} Promise resolved when the utterance has finished speaking, and rejected if there's an error
 */
function speak(phrase, utterances) {
  const synth = window.speechSynthesis;
  return new Promise((resolve, reject) => {
    let utterance = new SpeechSynthesisUtterance(phrase);
    utterance.onend = () => {
      resolve();
    };
    utterance.onerror = e => {
      reject(e);
    };
    utterances.push(utterance);
    synth.speak(utterance);
  });
}

function speakSeries(series, root = true) {
  const synth = window.speechSynthesis;
  const remainingPhrases = flattenStrings(
    Array.isArray(series) ? series : [series]
  );
  const nestedSeriesResults = [];
  /*
    We hold this array of SpeechSynthesisUtterances in order to prevent them from being
    garbage collected prematurely on STB hardware which can cause the 'onend' events of
    utterances to not fire consistently.
  */
  const utterances = [];
  let active = true;

  const seriesChain = (async () => {
    try {
      while (active && remainingPhrases.length) {
        const phrase = await Promise.resolve(remainingPhrases.shift());
        if (!active) {
          // Exit
          // Need to check this after the await in case it was cancelled in between
          break;
        } else if (typeof phrase === 'string' && phrase.includes('PAUSE-')) {
          // Pause it
          let pause = phrase.split('PAUSE-')[1] * 1000;
          if (isNaN(pause)) {
            pause = 0;
          }
          await delay(pause);
        } else if (typeof phrase === 'string' && phrase.length) {
          // Speak it
          const totalRetries = 3;
          let retriesLeft = totalRetries;
          while (active && retriesLeft > 0) {
            try {
              await speak(phrase, utterances);
              retriesLeft = 0;
            } catch (e) {
              if (e instanceof SpeechSynthesisErrorEvent) {
                if (e.error === 'network') {
                  retriesLeft--;
                  console.warn(
                    `Speech synthesis network error. Retries left: ${retriesLeft}`
                  );
                  await delay(500 * (totalRetries - retriesLeft));
                } else if (
                  e.error === 'canceled' ||
                  e.error === 'interrupted'
                ) {
                  // Cancel or interrupt error (ignore)
                  retriesLeft = 0;
                } else {
                  throw new Error(`SpeechSynthesisErrorEvent: ${e.error}`);
                }
              } else {
                throw e;
              }
            }
          }
        } else if (typeof phrase === 'function') {
          const seriesResult = speakSeries(phrase(), false);
          nestedSeriesResults.push(seriesResult);
          await seriesResult.series;
        } else if (Array.isArray(phrase)) {
          // Speak it (recursively)
          const seriesResult = speakSeries(phrase, false);
          nestedSeriesResults.push(seriesResult);
          await seriesResult.series;
        }
      }
    } finally {
      active = false;
    }
  })();
  return {
    series: seriesChain,
    get active() {
      return active;
    },
    append: toSpeak => {
      remainingPhrases.push(toSpeak);
    },
    cancel: () => {
      if (!active) {
        return;
      }
      if (root) {
        synth.cancel();
      }
      nestedSeriesResults.forEach(nestedSeriesResults => {
        nestedSeriesResults.cancel();
      });
      active = false;
    }
  };
}

let currentSeries;
export default function(toSpeak) {
  currentSeries && currentSeries.cancel();
  currentSeries = speakSeries(toSpeak);
  return currentSeries;
}
