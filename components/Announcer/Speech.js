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

function speakSeries(series, root = true) {
  const synth = window.speechSynthesis;
  const remainingPhrases = flattenStrings(series);
  const nestedSeriesResults = [];
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
          await new Promise(resolve => {
            setTimeout(() => resolve(), pause);
          });
        } else if (typeof phrase === 'string' && phrase.length) {
          // Speak it
          await new Promise(resolve => {
            let utterance = new SpeechSynthesisUtterance(phrase);
            utterances.push(utterance);
            utterance.onend = resolve;
            synth.speak(utterance);
          });
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
export default function (toSpeak) {
  toSpeak = Array.isArray(toSpeak) ? toSpeak : [toSpeak];
  currentSeries && currentSeries.cancel();
  currentSeries = speakSeries(toSpeak);
  return currentSeries;
}
