import Base from '../../Base';
import styles from './GridOverlay.styles.js';
import { withExtensions, withThemeStyles as withStyles } from '../../mixins';
import context from '../../context';
import Column from '../Column';
import Row from '../Row';
import TextBox from '../../elements/TextBox';
import { getWidthByColumnSpan } from '../../utils';

class Spacer extends Base {
  static __componentName() {
    return 'Spacer';
  }

  static _template() {
    return {
      Line: {
        h: Spacer._lineThickness,
        rect: true,
        mountY: 0.5,
        TickLeft: {
          ...Spacer._tick,
          x: Spacer._lineThickness * -1
        },
        TickRight: Spacer._tick
      }
    };
  }

  static get properties() {
    return ['lineColor'];
  }

  static get tags() {
    return ['Line', 'TickLeft', 'TickRight'];
  }

  static get _lineThickness() {
    return 3;
  }

  static get _tickLength() {
    return 25;
  }

  static get _tick() {
    return {
      rect: true,
      mountY: 0.5,
      w: Spacer._lineThickness,
      h: Spacer._tickLength,
      y: Spacer._lineThickness / 2
    };
  }

  _update() {
    this._Line.w = this.w;
    this._TickRight.x = this._Line.w;

    if (this.lineColor) {
      this._Line.color =
        this._TickLeft.color =
        this._TickRight.color =
          this.lineColor;
    }

    this.rotation = this.vertical ? Math.PI / 2 : 0;
  }
}

class GridOverlay extends Base {
  static __componentName() {
    return 'GridOverlay';
  }

  static _template() {
    const textRow = {
      type: Row,
      autoResizeHeight: true,
      Items: {
        Property: {
          type: TextBox,
          textStyle: 'headline1'
        },
        Value: {
          type: TextBox,
          textStyle: 'body1',
          centerInParent: true
        }
      }
    };

    return {
      Columns: {
        alpha: 0.001,
        type: Row
      },
      Margins: {
        alpha: 0.001,
        Horizontal: {
          Left: { type: Spacer },
          Right: { type: Spacer }
        },
        Vertical: {
          Top: { type: Spacer, vertical: true }
        }
      },
      Safe: {
        alpha: 0.001,
        Horizontal: {
          Left: { type: Spacer },
          Right: { type: Spacer }
        },
        Vertical: {
          Top: { type: Spacer, vertical: true },
          Bottom: { type: Spacer, vertical: true }
        }
      },
      Gutters: {
        alpha: 0.001,
        Horizontal: { type: Spacer }
      },
      TextPanel: {
        alpha: 0.001,
        type: Column,
        autoResizeHeight: true,
        Items: {
          ScreenW: textRow,
          ScreenH: textRow,
          ColumnCount: textRow,
          MarginX: textRow,
          MarginY: textRow,
          GutterY: textRow,
          Safe: textRow
        }
      }
    };
  }

  static get properties() {
    return [
      'showColumns',
      'showMargins',
      'showSafe',
      'showGutters',
      'showText'
    ];
  }

  static get tags() {
    return [
      'Columns',
      'Margins',
      { name: 'MarginHorizontal', path: 'Margins.Horizontal' },
      { name: 'MarginLeft', path: 'Margins.Horizontal.Left' },
      { name: 'MarginRight', path: 'Margins.Horizontal.Right' },
      { name: 'MarginVertical', path: 'Margins.Vertical' },
      { name: 'MarginTop', path: 'Margins.Vertical.Top' },
      'Safe',
      { name: 'SafeHorizontal', path: 'Safe.Horizontal' },
      { name: 'SafeLeft', path: 'Safe.Horizontal.Left' },
      { name: 'SafeRight', path: 'Safe.Horizontal.Right' },
      { name: 'SafeVertical', path: 'Safe.Vertical' },
      { name: 'SafeTop', path: 'Safe.Vertical.Top' },
      { name: 'SafeBottom', path: 'Safe.Vertical.Bottom' },
      'Gutters',
      { name: 'GutterHorizontal', path: 'Gutters.Horizontal' },
      'TextPanel',
      { name: 'TextScreenW', path: 'TextPanel.Items.ScreenW' },
      { name: 'TextScreenH', path: 'TextPanel.Items.ScreenH' },
      { name: 'TextColumnCount', path: 'TextPanel.Items.ColumnCount' },
      { name: 'TextMarginX', path: 'TextPanel.Items.MarginX' },
      { name: 'TextMarginY', path: 'TextPanel.Items.MarginY' },
      { name: 'TextGutterY', path: 'TextPanel.Items.GutterY' },
      { name: 'TextSafe', path: 'TextPanel.Items.Safe' }
    ];
  }

  _construct() {
    super._construct();
    this._showColumns =
      this._showMargins =
      this._showSafe =
      this._showGutters =
      this._showText =
        true;
  }

  _update() {
    this._updateGlobalThemeProps();
    this._updateMargins();
    this._updateSafe();
    this._updateColumns();
    this._updateGutters();
    this._updateText();
    this._updateVisibility();
  }

  _updateVisibility() {
    this._Columns.smooth = { alpha: Number(this.showColumns) };
    this._Margins.smooth = { alpha: Number(this.showMargins) };
    this._Safe.smooth = { alpha: Number(this.showSafe) };
    this._Gutters.smooth = { alpha: Number(this.showGutters) };
    this._TextPanel.smooth = { alpha: Number(this.showText) };
  }

  _updateGlobalThemeProps() {
    const { layout, colors } = context.theme;
    const {
      screenW,
      screenH,
      columnCount,
      marginX,
      marginY,
      gutterX,
      gutterY,
      safe
    } = layout;

    this._screenW = screenW;
    this._screenH = screenH;
    this._columnCount = columnCount;
    this._marginX = marginX;
    this._marginY = marginY;
    this._safe = safe;
    this._gutterX = gutterX.xs;
    this._gutterY = gutterY.xs;

    this._columnColor = colors.interactiveNeutralFocusSoft;
    this._marginColor = colors.green;
    this._safeColor = colors.red;
    this._gutterColor = colors.blue;
  }

  _updateMargins() {
    const marginPatch = { lineColor: this._marginColor };

    // Horizontal
    const marginHorizontalPatch = { ...marginPatch, w: this._marginX };
    this._MarginHorizontal.y = this._screenH / 2;
    this._MarginLeft.patch(marginHorizontalPatch);
    this._MarginRight.patch(marginHorizontalPatch);
    this._MarginRight.x = this._screenW - this._marginX;

    // Vertical
    const marginVerticalPatch = { ...marginPatch, w: this._marginY };
    this._MarginVertical.x = this._marginX - marginVerticalPatch.w / 2;
    this._MarginTop.patch(marginVerticalPatch);
    this._MarginTop.patch(marginVerticalPatch);
    this._MarginTop.y = marginVerticalPatch.w / 2;
  }

  _updateSafe() {
    const safePatch = { lineColor: this._safeColor, w: this._safe };

    // Horizontal
    this._SafeHorizontal.y = this._screenH / 4;
    this._SafeLeft.patch(safePatch);
    this._SafeRight.patch(safePatch);
    this._SafeRight.x = this._screenW - this._safe;

    // Vertical
    this._SafeVertical.x = (this._screenW - safePatch.w) / 2;
    this._SafeVertical.y = safePatch.w / 2;
    this._SafeTop.patch(safePatch);
    this._SafeBottom.patch(safePatch);
    this._SafeBottom.y = this._screenH - this._safe;
  }

  _updateColumns() {
    this._Columns.patch({
      w: this._screenW,
      h: this._screenH,
      x: this._marginX,
      itemSpacing: this._gutterX,
      items: this._columnRects
    });
  }

  get _columnRects() {
    return Array.apply(null, { length: this._columnCount }).map(() => ({
      rect: true,
      w: getWidthByColumnSpan(1),
      h: this._screenH,
      color: this._columnColor
    }));
  }

  _updateGutters() {
    const gutterPatch = { lineColor: this._gutterColor, w: this._gutterY };

    // Horizontal
    this._GutterHorizontal.patch({
      ...gutterPatch,
      x: (this._screenW - gutterPatch.w) / 2,
      y: this._screenH / 4
    });
  }

  _updateText() {
    const prop = 'Property';
    const val = 'Value';

    this._TextPanel.x = this._screenW - this._marginX - getWidthByColumnSpan(3);
    this._TextPanel.y = this._safe;

    this._TextScreenW.Items.tag(prop).content = 'Screen Width';
    this._TextScreenW.Items.tag(val).content = `${this._screenW}px`;

    this._TextScreenH.Items.tag(prop).content = 'Screen Height';
    this._TextScreenH.Items.tag(val).content = `${this._screenH}px`;

    this._TextColumnCount.Items.tag(prop).content = 'Columns';
    this._TextColumnCount.Items.tag(val).content = `${
      this._columnCount
    }, ${Math.round(getWidthByColumnSpan(1))}px each`;

    this._TextMarginX.Items.tag(prop).content = 'Margin-X';
    this._TextMarginX.Items.tag(prop).textColor = this._marginColor;
    this._TextMarginX.Items.tag(val).content = `${this._marginX}px`;

    this._TextMarginY.Items.tag(prop).content = 'Margin-Y';
    this._TextMarginY.Items.tag(prop).textColor = this._marginColor;
    this._TextMarginY.Items.tag(val).content = `${this._marginY}px`;

    this._TextGutterY.Items.tag(prop).content = 'Gutter-Y';
    this._TextGutterY.Items.tag(prop).textColor = this._gutterColor;
    this._TextGutterY.Items.tag(val).content = `XSmall, ${this._gutterY}px`;

    this._TextSafe.Items.tag(prop).content = 'Safe';
    this._TextSafe.Items.tag(prop).textColor = this._safeColor;
    this._TextSafe.Items.tag(val).content = `${this._safe}px`;
  }
}

export default withExtensions(withStyles(GridOverlay, styles));
