import Base from '../Base';
import Icon from '../Icon';
import InlineContent from '../../layout/InlineContent';
import TextBox from '../TextBox';
import withStyles from '../../mixins/withStyles';

export const styles = theme => ({
  title: {
    ...theme.typography.headline1,
    textColor: theme.palette.text.light.primary,
    maxLines: 2,
    maxLinesSuffix: '...',
    lineHeight: 34
  },
  description: {
    ...theme.typography.body2,
    textColor: theme.palette.text.light.tertiary,
    lineHeight: 36,
    maxLines: 3,
    maxLinesSuffix: '...'
  },
  infoOffset: theme.typography.body3.lineHeight + 4,
  data: {
    ...theme.typography.body3,
    textColor: theme.palette.text.light.primary,
    maxLines: 1,
    maxLinesSuffix: '...'
  },
  logo: {
    h: theme.typography.body3.lineHeight
  },
  action: {
    ...theme.typography.callout1,
    textColor: theme.palette.text.light.primary,
    maxLines: 1,
    maxLinesSuffix: '...'
  }
});

export default class Metadata extends withStyles(Base, styles) {
  static _template() {
    return {
      flex: { direction: 'column', justifyContent: 'flex-start' },
      Title: {
        type: TextBox,
        style: this.styles.title
      },
      Description: {
        type: TextBox,
        style: this.styles.description
      },
      Info: {
        flexItem: false,
        Data: {
          type: InlineContent,
          textProperties: this.styles.data
        },
        Action: {
          type: TextBox,
          style: this.styles.action
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
    this._infoHeight = this.styles.infoOffset;
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
      content: this.title,
      wordWrapWidth: this.w
    });
  }

  _updateDescription() {
    this._Description.patch({
      content: this.description,
      wordWrapWidth: this.w
    });
  }

  _updateInfo() {
    this._updateAction();
    this._updateData();
    this._updateLogo();

    this._Info.y = this.renderHeight - this._infoHeight;
  }

  _updateData() {
    if (this.action && this._Data) {
      this._Data.patch({ content: undefined });
    } else if (this.data) {
      this._Data.patch({
        content: this.data,
        w: 200,
        contentSpacing: 8,
        contentWrap: false,
        justify: 'flex-start'
      });
    }
  }

  _updateLogo() {
    const ratio = this._calculateIconRatio();
    this._Logo.patch({
      type: Icon,
      h: this._logoRenderHeight,
      w: this._logoRenderHeight * ratio,
      icon: this.logo
    });

    if (this.action || this.data) {
      this._Logo.x = this.renderWidth - this._Logo.w;
    }

    this._Logo.y = this._infoHeight - this._logoRenderHeight;
  }

  _calculateIconRatio() {
    return this.logoWidth / this.logoHeight;
  }

  _updateAction() {
    if (this.action) {
      this._Action.content = this.action.toUpperCase();
    }
  }
}
