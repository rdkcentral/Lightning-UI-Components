import { base as scrollWrapperBase } from './ScrollWrapper.styles';

export const base = theme => {
  const { scroll } = scrollWrapperBase(theme);
  return {
    progressBarStyles: { animation: scroll },
    circleAnimation: scroll
  };
};
