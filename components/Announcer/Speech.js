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

function speakSeries(series) {
  const synth = window.speechSynthesis;
  let cancelled = false;
  let seriesChain = series
    .reduce((series, phrase) => {
      return series.then(() => {
        if (typeof phrase === 'string') {
          if (phrase.includes('PAUSE-')) {
            let pause = phrase.split('PAUSE-')[1] * 1000;
            if (isNaN(pause)) {
              pause = 0;
            }
            phrase = new Promise(resolve => {
              setTimeout(() => resolve(), pause);
            });
          } else {
            phrase = Promise.resolve(phrase);
          }
        }

        return phrase.then(toSpeak => {
          if (cancelled) {
            return Promise.reject();
          }

          if (!toSpeak) {
            return;
          }

          return new Promise(resolve => {
            let utterance = new SpeechSynthesisUtterance(toSpeak);
            utterance.onend = resolve;
            synth.speak(utterance);
          });
        });
      });
    }, Promise.resolve())
    .catch(() => {});

  return {
    series: seriesChain,
    cancel: () => {
      synth.cancel();
      cancelled = true;
    }
  };
}

let currentSeries;
export default function(toSpeak) {
  toSpeak = Array.isArray(toSpeak) ? toSpeak : [toSpeak];
  currentSeries && currentSeries.cancel();
  currentSeries = speakSeries(toSpeak);
  return currentSeries;
}
