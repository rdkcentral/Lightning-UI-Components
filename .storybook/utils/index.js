/**
 * Copyright 2020 Comcast Cable Communications Management, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

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
    ...Object.entries(object)
      .map(([k, v]) => [<span>&nbsp;&nbsp;</span>, `${k}: `, v, ',', <br />])
      .flat(),
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
