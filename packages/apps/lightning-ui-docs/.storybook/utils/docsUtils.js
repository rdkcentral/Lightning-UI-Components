import React from 'react';

// used to create links to Lightning docs given an id
export const DocsLink = ({ children, id }) => {
  const docsmap = {
    lng: {
      _base: 'https://rdkcentral.github.io/Lightning/docs',
      Component: '/components/overview',
      Text: '/textures/text',
      Transition: '/transitions/attributes'
    }
  };
  const [source, path] = id.split('.');
  const href = docsmap[source]._base + docsmap[source][path];
  return (
    <a href={href} target="_blank">
      {children || id}
    </a>
  );
};

export const Item = ({ children }) => children;

/**
 * Creates formatted object for markdown prop tables
 * see Column and Row stories
 * @param {Object} props
 * @param {Object} props.type - TS-style generic/utility type
 */
export const ObjectFormat = ({ object }) => {
  return [
    '{',
    <br />,
    '  ',
    ...utils.flatten(
      Object.entries(object).map(([k, v]) => [
        <span>&nbsp;&nbsp;</span>,
        `${k}: `,
        v,
        ',',
        <br />
      ])
    ),
    '}'
  ].map((x, i) => <Item key={i}>{x}</Item>);
};

/**
 * Formats TS-style generic types
 * See Columns and Row stories
 * @param {Object} props
 * @param {Object} props.children - component children
 * @param {String} props.type - Name of generic type
 */
export const GenericType = ({ children, type }) => {
  return [type, '<', children, '>'].map((x, i) => <Item key={i}>{x}</Item>);
};