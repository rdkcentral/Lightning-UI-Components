import context from '../../context';

function getExtension(componentName) {
  if (!componentName) return undefined;
  const theme = context.theme;
  // TODO: Need to test tree shaking
  return theme && theme.extensions && theme.extensions[componentName];
}

export function withMixinExtensions(Base, mixinName) {
  const mixinExtension = getExtension(mixinName);
  return mixinExtension ? mixinExtension(Base) : Base;
}

export default function withExtensions(Base) {
  try {
    let newBase = Base;
    const globalExtension = /*#__PURE__*/ getExtension('global');
    if (globalExtension) {
      newBase = class extends globalExtension(newBase) {
        static get name() {
          return Base.name;
        }
      };
    }

    const extension = /*#__PURE__*/ getExtension(Base.__componentName);
    if (extension) {
      newBase = class extends extension(newBase) {
        static get name() {
          return Base.name;
        }
      };
    }

    return newBase;
  } catch (error) {
    // eslint-disable-next-line
    console.log(error);
    // If Base.__componentName is not defined an error will be thrown and Base should be returned
    return Base;
  }
}
