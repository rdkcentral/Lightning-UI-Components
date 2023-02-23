module.exports = name => {
  return `import type { Base, StylePartial } from '@lightningjs/ui-components';

export type ${name}Style = {

};

export default class ${name} extends Base {
  //add public class methods here
  get style(): ${name}Style;
  set style(v: StylePartial<${name}Style>);


  //add all component tags here
}
`}


