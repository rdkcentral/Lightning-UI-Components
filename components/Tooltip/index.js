import lng from '@lightningjs/core';
import {
  GRID,
  TYPOGRAPHY,
  CORNER_RADIUS,
  getHexColor,
  PALETTE
} from '../Styles';

import { RoundRect } from '../../utils';

const horizontalPadding = GRID.spacingIncrement * 2;

export default class Tooltip extends lng.Component {
  static _template() {
    return {
      alpha: 0,
      scale: 0.5,
      background: PALETTE.grey[5],
      mountX: 0.5,
      x: w => w / 2,
      Background: {
        zIndex: 2
      },
      //TO DO: update to luminance vs dark drop shadows
      DropShadow: {
        zIndex: 1,
        x: w => w / 2,
        y: h => h / 2 + GRID.spacingIncrement * 2,
        mount: 0.5,
        color: getHexColor(PALETTE.grey[90], 80)
      },
      Text: {
        zIndex: 2,
        x: horizontalPadding,
        text: {
          ...TYPOGRAPHY.body3,
          textColor: PALETTE.text.dark.primary,
          wordWrapWidth: 400,
          textAlign: 'center',
          verticalAlign: 'middle'
        }
      }
    };
  }

  get title() {
    return this._title;
  }

  set title(title) {
    if (this._title !== title) {
      this._title = title;
      this._Text.text = title;
      this._Text.on('txLoaded', () => {
        // set background size based on text size

        let backgroundW = this._Text.finalW + horizontalPadding * 2;
        let backgroundH =
          this._Text.finalH -
          (this._Text.finalH % TYPOGRAPHY.body3.lineHeight) / 2; // calculates even padding

        this.h = backgroundH;
        this.w = backgroundW;
        this._Background.texture = lng.Tools.getRoundRect(
          RoundRect.getWidth(backgroundW),
          RoundRect.getHeight(backgroundH),
          CORNER_RADIUS.small
        );
        this._DropShadow.texture = lng.Tools.getShadowRect(
          backgroundW,
          backgroundH,
          CORNER_RADIUS.small,
          24
        );

        this.y =
          -backgroundH -
          (this.bottomMargin ? this.bottomMargin : GRID.spacingIncrement * 5);
      });
    }
  }

  _focus() {
    clearTimeout(this._hideTimer);
    clearTimeout(this._showTimer);

    this.delayVisible
      ? (this._showTimer = setTimeout(() => {
          this.smooth = { alpha: 1, scale: 1 };
        }, this.delayVisible))
      : (this.smooth = { alpha: 1, scale: 1 });

    this._hideTimer = this.timeVisible
      ? setTimeout(() => {
          this._unfocus();
        }, this.timeVisible + this.delayVisible)
      : null;
  }

  _unfocus() {
    clearTimeout(this._hideTimer);
    clearTimeout(this._showTimer);

    this.smooth = { alpha: 0, scale: 0.5 };
  }

  get _Text() {
    return this.tag('Text');
  }
  get _DropShadow() {
    return this.tag('DropShadow');
  }
  get _Background() {
    return this.tag('Background');
  }
}
