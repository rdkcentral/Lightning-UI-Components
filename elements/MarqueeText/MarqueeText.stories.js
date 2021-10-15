import lng from '@lightningjs/core';

import MarqueeText from '.';
import InlineContent from '../../layout/InlineContent';
import mdx from './MarqueeText.mdx';
import { PALETTE, TYPOGRAPHY } from '../../Styles';

export default {
  title: 'Elements / MarqueeText',
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
            textColor: PALETTE.text.light.primary,
            lineHeight: 44,
            maxLines: 1
          },
          autoStart: true,
          delay: 1
        },
        InlineContent: {
          type: InlineContent,
          x: 200,
          alpha: 0.001,
          justify: 'flex-start',
          content: [
            'This is a scrolling ',
            {
              icon: 'http://myriad.merlin.comcast.com/select/logo?entityId=8527084350383982239&width=32&height=&ratio=1x1&trim=false',
              title: 'Rotten Tomatoes rating'
            },
            ' InlineContent component'
          ],
          rtt: true
        },
        MarqueeInlineContent: {
          type: MarqueeText,
          y: 100,
          w: 350,
          h: 180,
          alpha: 0,
          autoStart: true,
          delay: 1
        }
      };
    }

    _init() {
      this.tag('MarqueeInlineContent').contentTexture =
        this.tag('InlineContent').getTexture();
      this.tag('MarqueeInlineContent').alpha = 1;
    }
  };

export const CenteredText = args =>
  class CenteredText extends lng.Component {
    static _template() {
      return {
        MarqueeText: {
          type: MarqueeText,
          w: args.width,
          h: 50,
          title: {
            text: 'No scroll center',
            ...TYPOGRAPHY.headline2,
            textColor: PALETTE.text.light.primary,
            maxLines: 1,
            textAlign: 'center'
          },
          autoStart: true,
          delay: 1,
          shouldSmooth: args.shouldSmooth
        },
        InlineContent: {
          type: InlineContent,
          x: 200,
          alpha: 0.001,
          justify: 'flex-start',
          content: [
            'Centered',
            {
              icon: 'http://myriad.merlin.comcast.com/select/logo?entityId=8527084350383982239&width=32&height=&ratio=1x1&trim=false',
              title: 'Rotten Tomatoes rating'
            },
            ' InlineContent'
          ],
          rtt: true
        },
        MarqueeInlineContent: {
          type: MarqueeText,
          y: 100,
          w: args.width,
          h: 180,
          centerAlign: true,
          alpha: 0,
          autoStart: true,
          delay: 1,
          shouldSmooth: args.shouldSmooth
        }
      };
    }

    _init() {
      this.tag('MarqueeInlineContent').contentTexture =
        this.tag('InlineContent').getTexture();
      this.tag('MarqueeInlineContent').alpha = 1;
    }
  };

CenteredText.args = { shouldSmooth: true, width: 450 };
CenteredText.argTypes = {
  width: { control: 'number', min: 0 },
  shouldSmooth: { control: 'boolean' }
};
CenteredText.parameters = {
  argActions: {}
};
