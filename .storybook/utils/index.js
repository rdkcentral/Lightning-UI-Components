import React from 'react';
import { flatten } from '../../utils';

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
 * @param {Object} props
 * @param {Object} props.type - TS-style generic/utility type
 */
export const ObjectFormat = ({ object }) => {
  return [
    '{',
    <br />,
    '  ',
    ...flatten(Object.entries(object)
      .map(([k, v]) => [<span>&nbsp;&nbsp;</span>, `${k}: `, v, ',', <br />])
    ),
    '}'
  ].map((x, i) => <Item key={i}>{x}</Item>);
};

/**
 * Formats TS-style generic types
 * @param {Object} props
 * @param {Object} props.children - component children
 * @param {String} props.type - Name of generic type
 */
export const GenericType = ({ children, type }) => {
  return [type, '<', children, '>'].map((x, i) => <Item key={i}>{x}</Item>);
};

export const Theme = ({ theme={}, isColor=false }) => {
  /** Naively parses a theme object to generate value documentation */
  const getValue = ([key, value], isColor=false) => {
    console.log('key', key, 'value', value, 'isColor', isColor)
    if (key === '__isColor') return false;
    switch (typeof value) {
      case 'function':
        return <li key={key}>{`${key}: function()`}</li>;
      case 'string':
        return <li key={key}>{key}: "{value}"</li>;
      case 'object':
        return (
          <li key={key}>
            <details>
              <summary>{key}: Object</summary>
              <ul style={{ listStyleType: 'none' }}>
              {Object.entries(value).map(entries => getValue(entries, '__isColor' in value))}
              </ul>
            </details>
          </li>
        );
      default:
        // converts value to color string if it is a sibling of `__isColor: true` or
        // if "color" is in the key name
        return (
          <li key={key}>
            {key}: {isColor || key.match(/color/i) ? (
              <>
              <span>
                0x{value.toString(16).toUpperCase()}
              </span>
              <div style={{
                display: 'inline-block',
                width: '20px',
                height: '20px',
                margin: '-4px 4px',
                backgroundColor: `#${value.toString(16).slice(2)}`,
                opacity: parseInt('0x' + value.toString(16).slice(0,2)) / 255
              }}></div>
              </>
            ) : value}
          </li>
        );
    }
  };
  const style = {
    fontFamily: `"Nunito Sans",-apple-system,".SFNSText-Regular","San Francisco",BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Helvetica,Arial,sans-serif`,
    margin:0,
    fontSize: '14px',
    color: 'white',
    lineHeight: '24px',
    listStyleType: 'none'
  }

  const liStyle = {
    marginTop: '.25em'
  }
  return (
    <ul style={style}>
    {Object.entries(theme).map(entries => getValue(entries, isColor))}
    </ul>
  )
}