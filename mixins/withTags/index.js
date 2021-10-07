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
      const tags = this.constructor.tags || [];
      tags.forEach(tag => {
        if (typeof tag === 'object') {
          var { name, path } = tag;
        } else {
          var name = tag; // eslint-disable-line no-redeclare
          var path = tag; // eslint-disable-line no-redeclare
        }
        const key = '_' + name;
        const descriptor = getPropertyDescriptor(path);
        Object.defineProperty(Object.getPrototypeOf(this), key, descriptor);
      });

      super._construct && super._construct();
    }
  };
}
