import lng from '@lightningjs/core';
import Column from '../../layout/Column';
import { getValidColor } from '../../Styles';
import DataItem from '../DataItem';
import withStyles from '../../mixins/withStyles';
import { Arrow } from '../../textures';
import { Base } from '../../elements';
import { baseStyles, styles } from './GameStats.styles';

export class StatLine extends withStyles(Base, baseStyles) {
  static _template() {
    return {
      h: 88,
      Content: {
        y: 28,
        h: 32,
        flex: {
          direction: 'row',
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'space-between'
        },
        Left: this.styles.left,
        LeftArrow: {
          w: 32,
          h: 32,
          Content: {
            y: 6,
            x: 10,
            texture: {
              type: Arrow,
              direction: 'left',
              w: 11,
              h: 19
            }
          }
        },
        Label: this.styles.label,
        RightArrow: {
          w: 32,
          h: 32,
          alpha: 0,
          Content: {
            y: 6,
            x: 11,
            texture: {
              type: Arrow,
              direction: 'right',
              w: 11,
              h: 19
            }
          }
        },
        Right: this.styles.right
      }
    };
  }

  static get properties() {
    return [
      'entities',
      'invertedScoring',
      'items',
      'label',
      'percentage',
      'stats'
    ];
  }

  static get tags() {
    return ['Label', 'Left', 'Right', 'LeftArrow', 'RightArrow'];
  }

  _update() {
    this._updateItems();
    this._updateArrows();
    this._Label.text.text = this._label;
  }

  _updateArrows() {
    if (this._stats[0] > this._stats[1] && !this._invertedScoring) {
      this._LeftArrow.smooth = { alpha: 1 };
      this._RightArrow.smooth = { alpha: 0 };
    } else if (this._stats[0] === this._stats[1]) {
      this._LeftArrow.smooth = { alpha: 0 };
      this._RightArrow.smooth = { alpha: 0 };
    } else {
      this._LeftArrow.smooth = { alpha: 0 };
      this._RightArrow.smooth = { alpha: 1 };
    }
  }

  _setItems(items) {
    if (this._items !== items && Array.isArray(items) && items.length) {
      return items;
    }
  }

  _updateItems() {
    const { value, color } = this.items[0];
    const leftStat = this.getPreciseStat(value);
    this._Left.patch({ text: leftStat });
    this._LeftArrowTexture.color = lng.StageUtils.getRgbString(
      getValidColor(color)
    );
    if (this.items.length === 2) {
      const { value: val, color: clr } = this.items[1];
      const rightStat = this.getPreciseStat(val);
      this._Right.patch({ alpha: 1, text: rightStat });
      this._RightArrow.alpha = 1;
      this._RightArrowTexture.color = lng.StageUtils.getRgbString(
        getValidColor(clr)
      );
    }
    this._stats = this.items.map(g => g.value);
    this._entities = this.items.map(g => g.name);
  }

  getPreciseStat(stat) {
    let preciseStat = this._percentage
      ? (stat / 100).toFixed(3).toString()
      : stat.toString();
    if (preciseStat.match(/(0)(\.)/)) {
      preciseStat = preciseStat.substr(1);
    } else if (preciseStat.match(/(1)(\.)/)) {
      preciseStat = preciseStat.substr(0, 4);
    }
    return preciseStat;
  }

  get announce() {
    if (this._announce) {
      return this._announce;
    }

    const announce = [this.label];
    this._entities && this._entities.length && announce.push(this._entities[0]);
    this._stats && this._stats.length && announce.push(this._stats[0]);
    this._entities && this._entities.length && announce.push(this._entities[1]);
    this._stats && this._stats.length && announce.push(this._stats[1]);
    return announce
      .filter(s => s) // remove empty
      .join('. ');
  }

  set announce(announce) {
    this._announce = announce;
  }

  get _LeftArrowTexture() {
    return this._LeftArrow.tag('Content').texture;
  }

  get _RightArrowTexture() {
    return this._RightArrow.tag('Content').texture;
  }
}

export class SingleStatLine extends withStyles(Base, baseStyles) {
  static _template() {
    return {
      h: 88,
      Content: {
        y: 28,
        h: 32,
        x: this.styles.padding.x,
        w: 410 - this.styles.padding.x * 2,
        flex: {
          direction: 'row',
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'space-between'
        },
        Label: {
          alpha: this.styles.label.alpha,
          text: {
            ...this.styles.label.text,
            textAlign: 'left'
          }
        },
        Stat: this.styles.stat
      }
    };
  }
  static get properties() {
    return ['items', 'label', 'percentage', 'stat'];
  }

  static get tags() {
    return ['Label', 'Stat'];
  }

  _setItems(items) {
    if (this._items !== items) {
      const { value } = items[0];
      this.stat = value;
      return items;
    }
  }

  getPreciseStat(stat) {
    if (!stat) {
      return '0';
    }
    let preciseStat = this._percentage
      ? (stat / 100).toFixed(3).toString()
      : stat.toString();
    if (preciseStat.match(/(0)(\.)/)) {
      preciseStat = preciseStat.substr(1);
    } else if (preciseStat.match(/(1)(\.)/)) {
      preciseStat = preciseStat.substr(0, 4);
    }
    return preciseStat;
  }

  _update() {
    this._Label.patch({ text: this._label });
    this._Stat.patch({ text: this.getPreciseStat(this._stat) });
  }

  get announce() {
    return this._announce || [this._label, this._stat].join(',');
  }

  set announce(announce) {
    this._announce = announce;
  }
}

class Stats extends Base {
  static _template() {
    return {
      DataItem: {
        type: DataItem,
        w: 410,
        margin: 0,
        content: {
          flex: {
            ...this.styles.padding
          },
          Column: {
            type: Column,
            items: []
          }
        }
      }
    };
  }

  static get properties() {
    return ['stats'];
  }

  static get tags() {
    return [
      {
        name: 'Column',
        path: 'DataItem.Content.Column'
      },
      'DataItem'
    ];
  }

  _focus() {
    this.h =
      this._DataItem.h *
        this.styles.getFocusScale(this._DataItem.w, this._DataItem.h) +
      this._DataItem.y;
    this.fireAncestors('$itemChanged');
  }

  _unfocus() {
    this.h = this._DataItem.h + this._DataItem.y;
    this.fireAncestors('$itemChanged');
  }

  _getFocused() {
    return this._DataItem;
  }

  get announce() {
    if (this._announce) {
      return this._announce;
    }
    return this._Column.items.map(statline => statline.announce).join(',');
  }

  set announce(announce) {
    this._announce = announce;
  }

  _setStats(stats) {
    if (this._stats !== stats) {
      const statLines = stats.map(stat => ({
        type:
          Array.isArray(stat.items) && stat.items.length > 1
            ? StatLine
            : SingleStatLine,
        ...stat
      }));
      this.h = statLines.length * 88;
      this._DataItem.h = statLines.length * 88;
      this._Column.items = statLines;
      return stats;
    }
  }
}

export default withStyles(Stats, styles);
