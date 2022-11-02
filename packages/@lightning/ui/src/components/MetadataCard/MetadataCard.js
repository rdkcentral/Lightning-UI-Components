import { withExtensions, MetadataBase } from '@lightning/ui-core';

class MetadataCard extends MetadataBase {
  static get __componentName() {
    return 'MetadataCard';
  }
}

export default withExtensions(MetadataCard);
