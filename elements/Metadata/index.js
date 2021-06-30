import lng from '@lightningjs/core';
import Base from '../Base';
import Icon from '../Icon';
import InlineContent from '../../layout/InlineContent';
import TextBox from '../TextBox';
import withStyles from '../../mixins/withStyles';

export const styles = theme => ({
  title: {
    ...theme.typography.headline3,
    textColor: theme.palette.text.light.primary,
    maxLines: 2,
    maxLinesSuffix: '...',
    lineHeight: 34
  },
  description: {
    ...theme.typography.body3,
    textColor: theme.palette.text.light.secondary,
    alpha: theme.palette.opacity[4] / 100,
    maxLines: 3,
    maxLinesSuffix: '...'
  },
  info: {
    ...theme.typography.body3,
    textColor: theme.palette.text.light.secondary,
    alpha: theme.palette.opacity[6] / 100,
    maxLines: 1,
    maxLinesSuffix: '...',
    h: 32,
    offset: theme.typography.body3.lineHeight + 4
  },
  data: {
    ...theme.typography.body3,
    textColor: theme.palette.text.light.secondary,
    alpha: theme.palette.opacity[6] / 100
  },
  logo: {
    h: theme.typography.body3.lineHeight
  },
  action: {
    ...theme.typography.body3,
    textColor: theme.palette.text.light.secondary
  }
});

export default class Metadata extends withStyles(Base, styles) {
  static _template() {
    return {
      flex: { direction: 'column', justifyContent: 'flex-start' },
      Title: {
        type: TextBox,
        ...this.styles.title
      },
      Description: {
        type: TextBox,
        ...this.styles.description
      },
      Info: {
        flexItem: false,
        Data: {
          type: InlineContent,
          textProperties: this.styles.data
        },
        Action: {
          type: TextBox,
          ...this.styles.action
        },
        Logo: {
          type: Icon,
          ...this.styles.logo
        }
      }
    };
  }

  _construct() {
    super._construct();
    this._infoHeight = this.styles.info.offset;
    this._logoRenderHeight = this.styles.logo.h;
  }

  _init() {
    this._update();
  }

  static get properties() {
    return ['title', 'description', 'data', 'logo', 'action'];
  }

  static get tags() {
    return [
      'Title',
      'Description',
      'Info',
      {
        name: 'Data',
        path: 'Info.Data'
      },
      {
        name: 'Logo',
        path: 'Info.Logo'
      },
      {
        name: 'Action',
        path: 'Info.Action'
      }
    ];
  }

  _update() {
    this._updateTitle();
    this._updateDescription();
    this._updateInfo();
  }

  _updateTitle() {
    this._Title.patch({
      content: this._title,
      wordWrapWidth: this.w,
      style: this.styles.title
    });
  }

  _updateDescription() {
    this._Description.patch({
      content: this._description,
      wordWrapWidth: this.w,
      style: this.styles.description
    });
  }

  _updateInfo() {
    if (this._action) {
      this._updateAction();
    } else {
      this._updateData();
    }
    this._updateLogo();

    this._Info.y = this.renderHeight - this._infoHeight;
  }

  _updateData() {
    this._Data.patch({
      content: this._data,
      w: 200,
      contentSpacing: 8,
      contentWrap: false,
      justify: 'flex-start',
      ...this.styles.data
    });
  }

  _updateLogo() {
    let ratio = this._calculateIconRatio();
    this._Logo.patch({
      type: Icon,
      h: this._logoRenderHeight,
      w: this._logoRenderHeight * ratio,
      icon: this.logo,
      ...this.styles.logo
    });

    if (this._action || this._data) {
      this._Logo.x = this.renderWidth - this._Logo.w;
    }

    this._Logo.y = this._infoHeight - this._logoRenderHeight;
  }

  _calculateIconRatio() {
    return this.logoWidth / this.logoHeight;
  }

  _updateAction() {
    let action = this._action.toUpperCase();
    this._Action.patch({
      content: action,
      style: this.styles.action
    });
  }
}
