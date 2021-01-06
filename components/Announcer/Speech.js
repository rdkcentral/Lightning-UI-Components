function speakSeries(series, root = true) {
  const synth = window.speechSynthesis;
  const nestedSeriesResults = [];
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
          }
        }

        return Promise.resolve(phrase).then(toSpeak => {
          if (cancelled) {
            return Promise.reject();
          }

          if (!toSpeak) {
            return;
          }

          if (Array.isArray(toSpeak)) {
            const seriesResult = speakSeries(toSpeak, false);
            nestedSeriesResults.push(seriesResult);
            return seriesResult.series;
          }

          let utterance = new SpeechSynthesisUtterance(toSpeak);
          synth.speak(utterance);
        });
      });
    }, Promise.resolve())
    .catch(() => {});
  return {
    series: seriesChain,
    cancel: () => {
      if (root) {
        synth.cancel();
      }
      nestedSeriesResults.forEach(nestedSeriesResults => {
        nestedSeriesResults.cancel();
      });
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
