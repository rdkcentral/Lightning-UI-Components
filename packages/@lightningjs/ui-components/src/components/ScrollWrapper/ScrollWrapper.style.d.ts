import type TextBoxStyle from '../TextBox/TextBox.style';

type ScrollWrapperStyle = {
  textStyle: TextBoxStyle;
  scrollBarW: number;
  scrollBarH: number;
  fadeHeight: 100;
  scroll: {
    timingFunction: string;
    duration: number;
  };
  contentMarginTop: number;
  contentMarginLeft: number;
  sliderMarginLeft: number;
};

export { ScrollWrapperStyle as default }