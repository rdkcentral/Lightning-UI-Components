import { base as scrollWrapperBase } from './ScrollWrapper.styles.js';

export const base = theme => {
  const { scroll } = scrollWrapperBase(theme);
  return {
    progressBar: { animation: scroll },
    circleAnimation: scroll
  };
};
