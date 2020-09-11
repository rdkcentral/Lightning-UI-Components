import lng from 'wpe-lightning';

import MarqueeText from '.';
import mdx from './MarqueeText.mdx';
import { getHexColor, COLORS_TEXT, TYPOGRAPHY } from '../Styles';

export default {
  title: 'MarqueeText',
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Basic = () =>
  class Basic extends lng.Component {
    static _template() {
      return {
        MarqueeText: {
          type: MarqueeText,
          w: 350,
          h: 180,
          title: {
            text: 'This is a scrolling Marquee component for long text',
            ...TYPOGRAPHY.headline2,
            textColor: getHexColor(COLORS_TEXT.light),
            maxLines: 1
          },
          autoStart: true,
          delay: 1
        }
      };
    }
  };

export const CenteredText = () =>
  class CenteredText extends lng.Component {
    static _template() {
      return {
        MarqueeText: {
          type: MarqueeText,
          w: 400,
          h: 50,
          title: {
            text: 'No scroll center',
            ...TYPOGRAPHY.headline2,
            textColor: getHexColor(COLORS_TEXT.light),
            maxLines: 1,
            textAlign: 'center'
          },
          autoStart: true,
          delay: 1
        }
      };
    }
  };
