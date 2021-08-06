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
    maxLines: 2
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
    return [...super.properties, 'subtitle', 'logoHeight'];
  }

  static get tags() {
    return [...super.tags, 'Subtitle', 'Data'];
  }

  _update() {
    super._update();
    this._updateSubtitle();
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
}
