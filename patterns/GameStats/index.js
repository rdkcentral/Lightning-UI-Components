import lng from '@lightningjs/core';
import Column from '../../layout/Column';
import { getValidColor } from '../../Styles';
import DataItem from '../DataItem';
import withStyles from '../../mixins/withStyles';
import { Arrow } from '../../textures';

export const baseStyles = theme => ({
  left: {
    w: 80,
    text: {
      ...theme.typography.body2,
      textAlign: 'center',
      verticalAlign: 'middle'
    }
  },
  label: {
    w: 170,
    text: {
      ...theme.typography.caption,
      textAlign: 'center',
      verticalAlign: 'middle'
    },
    alpha: 0.6
  },
  right: {
    w: 80,
    text: {
      ...theme.typography.body2,
      textAlign: 'center',
      verticalAlign: 'middle'
    },
    alpha: 0
  },
  stat: {
    w: 80,
    text: {
      ...theme.typography.body2,
      textAlign: 'left',
      verticalAlign: 'middle'
    }
  },
  padding: {
    x: theme.spacing(2)
  }
});

export const styles = theme => ({
  padding: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1)
  },
  getFocusScale: theme.getFocusScale
});

export class StatLine extends withStyles(
  class StatLine extends lng.Component {
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

    _construct() {
      this._whenEnabled = new Promise(resolve => (this._enable = resolve));
    }

    _init() {
      this._update();
    }

    _update() {
      this._updateArrows();
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

    set invertedScoring(invertedScoring) {
      if (this._invertedScoring !== invertedScoring) {
        this._invertedScoring = invertedScoring;
      }
    }

    set percentage(percentage) {
      if (this._percentage !== percentage) {
        this._percentage = percentage;
      }
    }

    set label(label) {
      if (this._label !== label) {
        this._label = label;
        this._Label.patch({ text: label });
      }
    }

    set items(items) {
      if (this._items !== items && Array.isArray(items) && items.length) {
        const { value, color } = items[0];
        this._items = items;
        const leftStat = this.getPreciseStat(value);
        this._Left.patch({ text: leftStat });
        this._LeftArrowTexture.color = lng.StageUtils.getRgbString(
          getValidColor(color)
        );
        if (items.length === 2) {
          const { value: val, color: clr } = items[1];
          const rightStat = this.getPreciseStat(val);
          this._Right.patch({ alpha: 1, text: rightStat });
          this._RightArrow.alpha = 1;
          this._RightArrowTexture.color = lng.StageUtils.getRgbString(
            getValidColor(clr)
          );
        }
        this.stats = items.map(g => g.value);
        this.entities = items.map(g => g.name);
        this._update();
      }
    }

    set entities(entities) {
      if (this._entities !== entities) {
        this._entities = entities;
      }
    }

    set stats(stats) {
      if (this._stats !== stats) {
        this._stats = stats;
      }
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

      const label = this._label ? [this._label] : [];
      const entity1 =
        this._entities && this._entities[0] ? [this._entities[0]] : [];
      const stat1 = this._stats && this._stats[0] ? [this._stats[0]] : [];
      const entity2 =
        this._entities && this._entities[1] ? [this._entities[1]] : [];
      const stat2 = this._stats && this._stats[1] ? [this._stats[1]] : [];
      return [...label, ...entity1, ...stat1, ...entity2, ...stat2].join(',');
    }

    set announce(announce) {
      this._announce = announce;
    }

    get _LeftArrow() {
      return this.tag('LeftArrow');
    }
    get _RightArrow() {
      return this.tag('RightArrow');
    }
    get _LeftArrowTexture() {
      return this._LeftArrow.tag('Content').texture;
    }
    get _RightArrowTexture() {
      return this._RightArrow.tag('Content').texture;
    }
    get _Left() {
      return this.tag('Left');
    }
    get _Right() {
      return this.tag('Right');
    }
    get _Label() {
      return this.tag('Label');
    }
  },
  baseStyles
) {}

export class SingleStatLine extends withStyles(
  class SingleStatLine extends lng.Component {
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

    set percentage(percentage) {
      if (this._percentage !== percentage) {
        this._percentage = percentage;
      }
    }

    set items(items) {
      if (this._items !== items) {
        const { value } = items[0];
        this._items = items;
        this.stat = value;
      }
    }

    set label(label) {
      if (this._label !== label) {
        this._label = label;
        this._Label.patch({ text: label });
      }
    }

    set stat(stat) {
      if (this._stat !== stat) {
        this._stat = stat;
        this._Stat.patch({ text: this.getPreciseStat(stat) });
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

    get announce() {
      return this._announce || [this._label, this._stat].join(',');
    }

    set announce(announce) {
      this._announce = announce;
    }

    get _Stat() {
      return this.tag('Stat');
    }
    get _Label() {
      return this.tag('Label');
    }
  },
  baseStyles
) {}

class Stats extends lng.Component {
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

  set stats(stats) {
    if (this._stats !== stats) {
      this._stats = stats;
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
    }
  }

  get _DataItem() {
    return this.tag('DataItem');
  }

  get _Column() {
    return this.tag('DataItem.Content.Column');
  }
}

export default withStyles(Stats, styles);
