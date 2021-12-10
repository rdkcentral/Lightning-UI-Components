import Icon from '../Icon';
import InlineContent from '../../layout/InlineContent';
import TextBox from '../TextBox';
import withStyles from '../../mixins/withStyles';
import Metadata from '../Metadata';

export const styles = theme => ({
  title: {
    maxLines: 1
  },
  subtitleY: 0,
  subtitle: {
    ...theme.typography.body3,
    textColor: theme.palette.text.light.tertiary,
    maxLines: 1,
    maxLinesSuffix: '...'
  },
  descriptionY: 0,
  description: {
    maxLines: 3
  },
  dataY: theme.spacing(1),
  infoOffset: theme.typography.body3.lineHeight + 12,
  logo: {
    w: 48,
    h: 48
  }
});

export default class MetadataHero extends withStyles(Metadata, styles) {
  static _template() {
    return {
      flex: { direction: 'column', justifyContent: 'flex-start' },
      Title: {
        type: TextBox,
        style: this.styles.title
      },
      Subtitle: {
        type: TextBox,
        y: this.styles.subtitleY,
        style: this.styles.subtitle
      },
      Description: {
        type: TextBox,
        y: this.styles.descriptionY,
        style: this.styles.description
      },
      Data: {
        type: InlineContent,
        y: this.styles.dataY,
        textProperties: this.styles.data
      },
      Info: {
        flexItem: false,
        CTA: {
          type: TextBox,
          style: this.styles.cta
        },
        Logo: {
          type: Icon,
          ...this.styles.logo
        }
      }
    };
  }

  static get properties() {
    return [...super.properties, 'subtitle', 'description', 'logoHeight'];
  }

  static get tags() {
    return [...super.tags, 'Subtitle', 'Description', 'Data'];
  }

  _construct() {
    super._construct();
    this._descriptionProperties = this.styles.description;
  }

  _update() {
    super._update();
    this._updateSubtitle();
    this._updateDescription();
  }

  _updateSubtitle() {
    this._Subtitle.patch({
      content: this.subtitle,
      wordWrapWidth: this.w
    });
  }

  _updateData() {
    this._Data.patch({
      content: this.data,
      w: 200,
      justify: 'flex-start'
    });
  }

  _updateDescription() {
    if (!this.data || (this.data && !this.data.length)) {
      this._Description.patch({
        content: this.description,
        wordWrapWidth: this.w,
        maxLines: this._descriptionProperties.maxLines + 1
      });
    } else {
      this._Description.patch({
        content: this.description,
        wordWrapWidth: this.w,
        ...this._descriptionProperties
      });
    }
  }
  get announce() {
    if (this._announce) {
      return this._announce;
    }
    return [
      this.title,
      this.subtitle,
      this.description,
      this._Data.announce,
      this.cta,
      this.logoTitle
    ]
      .filter(s => s)
      .join('. ');
  }

  set announce(announce) {
    super._announce = announce;
  }
}
