import React from 'react';

export default function Table({ title, rows }) {
  return (
    <div key={title} style={{marginBottom: '40px'}}>
      <h2>{title}</h2>
      <table>
        <thead>
          <tr>
            <th>Property</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}