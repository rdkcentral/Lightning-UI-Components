import MetadataBase from '../MetadataBase';
import { withExtensions } from '../../mixins';

class MetadataCard extends MetadataBase {
  static get __componentName() {
    return 'MetadataCard';
  }
}

export default withExtensions(MetadataCard);
