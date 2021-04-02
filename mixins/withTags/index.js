function getPropertyDescriptor(path) {
  return {
    get() {
      return this.tag(path);
    },
    configurable: true,
    enumerable: true
  };
}

export default function withTags(Base) {
  return class extends Base {
    static get name() {
      return Base.name;
    }

    _construct() {
      let tags = this.constructor.tags || [];
      tags.forEach(tag => {
        if (typeof tag === 'object') {
          var { name, path } = tag;
        } else {
          var name = tag;
          var path = tag;
        }
        const key = '_' + name;
        const descriptor = getPropertyDescriptor(path);
        Object.defineProperty(Object.getPrototypeOf(this), key, descriptor);
      });

      super._construct && super._construct();
    }
  };
}
