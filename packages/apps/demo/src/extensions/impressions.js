export function impressionExtensionGenerator() {
  return function impressionExtension(Base) {
    return class WithImpression extends Base {
      _focus() {
        console.log('Component has focus', this)
        super._focus();
      }
    }
  };
}
