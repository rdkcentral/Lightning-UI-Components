function speakSeries(series) {
  const synth = window.speechSynthesis;
  let cancelled = false;
  let seriesChain = series
    .reduce((series, phrase) => {
      return series.then(() => {
        phrase = typeof phrase === 'string' ? Promise.resolve(phrase) : phrase;

        return phrase.then(toSpeak => {
          if (cancelled) {
            return Promise.reject();
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
