module.exports = name => {
    return `import ${name}, { ${name}Style } from './${name}';

export { ${name} as default, ${name}Style };
`}